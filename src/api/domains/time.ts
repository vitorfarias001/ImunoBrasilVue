import {
  ITimesSearchData,
  ITimesSearchArrayData,
  ITimesSaveData
} from '@/features/Time'
import { ILocalData } from '@features/LocalProcedimento'
import api from '@services/api'
const prefix = '/time'
export default {
  async pesquisar(params?: ITimesSearchData) {
    try {
      const response = await api.post(`${prefix}/pesquisar`, params ?? {})

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
  async pesquisarArray(params?: ITimesSearchArrayData) {
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
  async salvar(data: ITimesSaveData) {
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
  }
}
