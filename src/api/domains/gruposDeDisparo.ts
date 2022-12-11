// import {
//   IGrupoSearchArrayData,
//   IGrupoSearchData,
//   IGrupoData
// } from '@features/Grupo'
import {
  IGrupoSearchArrayData,
  IGrupoSearchData,
  IGrupoData
} from '@GlobalTypes/gruposDeDisparo'

import api from '@services/api'
const prefix = '/grupodisparo'
export default {
  async pesquisar(params?: IGrupoSearchData) {
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
  async pesquisarArray(params?: IGrupoSearchArrayData) {
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

  async salvar(data: IGrupoData) {
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
  async atualizar(data: IGrupoData, id: string | number) {
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
    return {
      success: true,
      data: { id },
      message:
        'Emulação de exclusão feita com sucesso *(aguardando implementação de endpoint)*'
    }
  }
  // async excluir(id: string | number) {
  //   try {
  //     const response = await api.delete(`${prefix}/deletar/${id}`)
  //     if (!response.data.success) {
  //       return { success: false,  message: response.data.error ?? response.data.message}
  //     }
  //     return {
  //       success: true,
  //       data: response.data.data,
  //       message: response.data.message
  //     }
  //   } catch (error) {
  //     console.log(error)
  //     return { success: false, message: error }
  //   }
  // }
}
