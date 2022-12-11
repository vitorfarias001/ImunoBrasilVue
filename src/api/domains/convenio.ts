import { IOperadoraDto, ICriarOperadoraRequest } from './../features/Convenio/types.d';
import { IOperadoraFiltrosRequest } from '@/features/Convenio/types'
import { ISearchDataParams, IApiResponse, IPagedResponse } from '@/shared/types/api'
import {
  IConvenioSearchData,
  IConvenioSearchArrayData,
  IConvenioData,
  IPlanosData
} from '@features/Convenio'

import api from '@services/api'
const prefix = '/operadora'
export default {
  async pesquisar(params?: ISearchDataParams<IOperadoraFiltrosRequest>):Promise<IApiResponse<IPagedResponse<IOperadoraDto>>> {
    try {
      const response = await api.post(`${prefix}/busca`, params)

      if (response.status != 200) {
        return {
          success: false,
          message: response.statusText
        } as IApiResponse<IPagedResponse<IOperadoraDto>>
      }
      return {
        success: true,
        data: response.data,
        message: response.statusText
      } as IApiResponse<IPagedResponse<IOperadoraDto>>
    } catch (error) {
      console.log(error)
      return { success: false, message: error } as IApiResponse<IPagedResponse<IOperadoraDto>>
    }
  },
  async pesquisarArray(params?: IConvenioSearchArrayData) {
    try {
      const response = await api.post(`${prefix}/pesquisararray`, params)
      if (!response.data.success) {
        return {
          success: false,
          message: response.data.error ?? response.data.message
        }
      }
      return {
        success: true,
        data: response.data.data,
        message: response.data.message
      }
    } catch (error) {
      console.log(error)
      return { success: false, message: error }
    }
  },
  async listarPorId(id: string | number) {
    try {
      const response = await api.post(`${prefix}/pesquisar`, {
        id
      })
      if (!response.data.success) {
        return {
          success: false,
          message: response.data.error ?? response.data.message
        }
      }
      return {
        success: true,
        data: response.data.data.records[0],
        message: response.data.message
      }
    } catch (error) {
      console.log(error)
      return { success: false, message: error }
    }
  },
  async salvar(data: ICriarOperadoraRequest) : Promise<IApiResponse<IOperadoraDto>>  {
    try {
      const response = await api.put(`${prefix}`, data)
      if (response.status != 201) {
        return {
          success: false,
          message: response.statusText
        } as IApiResponse<IOperadoraDto>
      }
      return {
        success: true,
        data: response.data,
        message: response.statusText
      } as IApiResponse<IOperadoraDto>
    } catch (error) {
      console.log(error)
      return { success: false, message: error } as IApiResponse<IOperadoraDto>
    }
  },

  async listarPlanos(idOperadora: string | number) {
    try {
      const response = await api.get(`${prefix}/listar/${idOperadora}/planos`)
      if (!response.data.success) {
        return {
          success: false,
          message: response.data.error ?? response.data.message
        }
      }
      return {
        success: true,
        data: response.data.data,
        message: response.data.message
      }
    } catch (error) {
      console.log(error)
      return { success: false, message: error }
    }
  },
  async addPlano(id: string | number, data: IPlanosData) {
    try {
      const response = await api.post(
        `/operadora/planos/${id}/salvarnovo`,
        data
      )
      if (!response.data.success) {
        return {
          success: false,
          message: response.data.error ?? response.data.message
        }
      }
      return {
        success: true,
        data: response.data.data,
        message: response.data.message
      }
    } catch (error) {
      console.log(error)
      return { success: false, message: error }
    }
  },

  async excluir(id: string | number) {
    try {
      const response = await api.delete(`${prefix}/excluir/${id}`)
      if (!response.data.success) {
        return {
          success: false,
          message: response.data.error ?? response.data.message
        }
      }
      return {
        success: true,
        data: response.data.data,
        message: response.data.message
      }
    } catch (error) {
      console.log(error)
      return { success: false, message: error }
    }
  },
  async excluirPlano(id: String | Number) {
    try {
      const response = await api.delete(`${prefix}/planos/excluir/${id}`)
      if (!response.data.success) {
        console.log(response.data)
        return {
          success: false,
          message: response.data.error ?? response.data.message
        }
      }
      return {
        success: true,
        data: response.data.data,
        message: response.data.message
      }
    } catch (error) {
      console.log(error)
      return { success: false, message: error }
    }
  }
}
