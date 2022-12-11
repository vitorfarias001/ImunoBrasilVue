import request from "../../utils/request";
import { APIResponse, IPagedResponse, ISearchDataParams } from "../types/base";
import { IMedicoFiltrosRequest } from "../types/medico";
import { IUsuarioDto } from "../types/usuario";
import { ApiToResponse } from "./base";


const BuscarMedicos = async function (data: ISearchDataParams<IMedicoFiltrosRequest>):Promise<APIResponse<IPagedResponse<IUsuarioDto>>>{
  const response = await request({
      url: '/medico/busca',
      method: 'post',
      data
    })
    return ApiToResponse(response)
}

export default {
  BuscarMedicos
}