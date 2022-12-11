import {
  ITratamentoSearchData,
  ITratamentoSearchArrayData,
  ITratamentoCloneData,
  ITratamentoSaveData,
  ITratamentoData,
  ITratamentoDto
} from '@features/Tratamento'
import { IAtendimentoSaveData } from '@features/Atendimento'
import api from '@services/api'
import { IApiResponse, IPagedResponse, ISearchDataParams } from '@/shared/types/api'
const prefix = '/tratamento'

export default {
  async pesquisar(params: ISearchDataParams<ITratamentoSearchData>):Promise<IApiResponse<IPagedResponse<ITratamentoDto>>> {
    try {
      const response = await api.post(`${prefix}/busca`, params)

      if (response.status != 200) {
        return {
          success: false,
          message: response.data.error ?? response.data.message
        } as IApiResponse<IPagedResponse<ITratamentoDto>>
      }
      return {
        success: true,
        data: response.data as IPagedResponse<ITratamentoDto>,
        message: response.statusText
      } as IApiResponse<IPagedResponse<ITratamentoDto>>
    } catch (error) {
      console.log(error)
      return { success: false, message: error } as IApiResponse<IPagedResponse<ITratamentoDto>>
    }
  },  
  async listarPorId(id: string | number) {
    try {
      const response = await api.get(`${prefix}/${id}`)
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
  async listarMotivos() {
    try {
      const response = await api.get(`${prefix}/motivos`)
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
  async listarUnidades() {
    try {
      const response = await api.get(`${prefix}/unidades`)
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
  async salvar(data: ITratamentoSaveData) {
    try {
      const response = await api.post(`${prefix}/SalvarNovo`, data)
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
  async realizarNovoList(id: string | number) {
    try {
      const response = await api.get(
        `${prefix}/${id}/atendimentos/realizarnovo`
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
  async realizarNovoSave(id: string | number, data: IAtendimentoSaveData) {
    try {
      const response = await api.post(
        `${prefix}/${id}/atendimentos/realizarnovo`,
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
  async clonar(data: ITratamentoCloneData) {
    try {
      const response = await api.post(`${prefix}/clonar`, data)
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
  async atualizar(data: ITratamentoSaveData, id: string | number) {
    try {
      const response = await api.put(`${prefix}/atualizar/${id}`, data)
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
  async excluir(id: Number) {
    try {
      const response = await api.delete(`${prefix}/deletar/${id}`)
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
  }
}
