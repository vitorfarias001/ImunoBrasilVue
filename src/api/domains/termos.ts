import api from '@services/api'
const prefix = '/termos'
export default {
  async listarTermos(IdUsuario: Number) {
    try {
      const response = await api.get(`${prefix}/Termos`)

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
  async aceitar() {
    try {
      const response = await api.get(`${prefix}/aceitarTermos`)

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
