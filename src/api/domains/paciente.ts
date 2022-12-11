import { IPacienteDto, IPacienteFiltrosRequest } from '@/features/Paciente/types'
import { IApiResponse, IPagedResponse, ISearchDataParams } from '@/shared/types/api'
import {
  IPacienteSearchData,
  IPacienteSearchArrayData,
  IPacienteData
} from '@features/Paciente'

import api from '@services/api'
const prefix = '/paciente'
export default {
  async pesquisar(params?: ISearchDataParams<IPacienteFiltrosRequest>):Promise<IApiResponse<IPagedResponse<IPacienteDto>>> {
    try {
      const response = await api.post(`${prefix}/busca`, params)

      if (response.status != 200) {
        return {
          success: false,
          message: response.statusText
        } as IApiResponse<IPagedResponse<IPacienteDto>>
      }
      return {
        success: true,
        data: response.data,
        message: response.statusText
      } as IApiResponse<IPagedResponse<IPacienteDto>>
    } catch (error) {
      console.log(error)
      return { success: false, message: error } as IApiResponse<IPagedResponse<IPacienteDto>>
    }
  },
  async pesquisarArray(params?: IPacienteSearchArrayData) {
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
      const response = await api.get(`${prefix}/listar/${id}`)
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
  async salvar(data: IPacienteData) {
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
  async atualizar(data: IPacienteData, id: string | number) {
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
  async excluir(id: string | number) {
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
  },
  async listarTratamentos(id: string | number) {
    try {
      const response = await api.get(`${prefix}/listar/${id}/tratamentos`)
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
  async listarAtendimentos(id: string | number) {
    try {
      const response = await api.get(`${prefix}/listar/${id}/atendimentos`)
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
