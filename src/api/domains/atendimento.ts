import {
  IAtendimentoSearchData,
  IAtendimentoSearchArrayData,
  IAtendimentoUpdateData,
  IAtendimentoData
} from '@features/Atendimento'

import api from '../../utils/request'
const prefix = '/atendimento'
export default {
  async pesquisar(params?: IAtendimentoSearchData) {
    try {
      const response = await api.post(`${prefix}/pesquisar`, params)

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
  async pesquisarArray(params?: IAtendimentoSearchArrayData) {
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
  async salvar(data: IAtendimentoData) {
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
  async atualizar(data: IAtendimentoUpdateData, id: string | number) {
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
  }
}
