import {
  IUsuarioSearchData,
  IUsuarioSearchArrayData,
  IUsuarioData,
  IUsuarioSaveData
} from '@features/Usuario'
import { IAtendimentoSearchData } from '@features/Atendimento'
import api from '@services/api'
import { ICriarUsuarioRequest } from '@/features/Usuario/types'
const prefix = '/usuario'
export default {
  async CriarUsuario(form: ICriarUsuarioRequest){
    try {
      const response = await api.put(`usuario`, form)

      if (response.status != 201) {
        return {
          success: false,
          message: response.data.error ?? response.data.message
        }
      }
      return {
        success: true,
        data: response.data,
        message: response.data.message
      }
    } catch (error) {
      console.log(error)
      return { success: false, message: error }
    }
  },
  async GetTermos(IdUsuario: Number) {
    try {
      const response = await api.get(`${prefix}/${IdUsuario}/Termos`)

      if (response.status != 200) {
        return {
          success: false,
          message: response.data.message//response.data.error ?? response.data.message
        }
      }
      return {
        success: true,
        data: response.data,
        message: ""
      }
    } catch (error) {
      console.log(error)
      return { success: false, message: error }
    }
  },
  async AceitarTermos(IdUsuario:Number, IdTermo: Number) {
    try {
      const response = await api.post(`${prefix}/${IdUsuario}/Termos/${IdTermo}/Aceitar`)

      if (response.status != 200) {
        return {
          success: false,
          message: response.data.message//response.data.error ?? response.data.message
        }
      }
      return {
        success: true,
        data: response.data,
        message: ""
      }
    } catch (error) {
      console.log(error)
      return { success: false, message: error }
    }
  },
  
  
  
  
  
  async pesquisar(params?: IUsuarioSearchData) {
    try {
      const response = await api.post(`medico/pesquisar`, params)

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
  async listarAtendimentos() {
    try {
      const response = await api.get(`usuario/meusatendimentos`)

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
  async listarAtendimentosPesquisar(params?: IAtendimentoSearchData) {
    try {
      const response = await api.post(
        `usuario/meusatendimentospesquisa`,
        params ?? {}
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
  async listarPorId(id: string | number) {
    try {
      const response = await api.post(`medico/pesquisar`, { id: String(id) })

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
  async pesquisarArray(params?: IUsuarioSearchArrayData) {
    try {
      const response = await api.post(`medico/pesquisararray`, params)
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
  async listarAutenticado() {
    try {
      const response = await api.get(`${prefix}/listarAutenticado`)
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
  async salvar(data: IUsuarioSaveData) {
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
  async atualizar(data: IUsuarioSaveData, id: string | number) {
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
