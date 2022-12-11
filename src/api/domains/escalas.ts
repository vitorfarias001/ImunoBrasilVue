import { AxiosPromise } from "axios";
import request from "../../utils/request";
import { APIResponse, IPagedResponse, ISearchDataParams } from "../types/base";
import { IEscalaFiltrosRequest, IEscalaDto } from "../types/escalas";
import { ILoginResponse, IUserLoginData } from "../types/usuario";
import { ApiToResponse } from "./base";


const BuscaEscalas = async function (data: ISearchDataParams<IEscalaFiltrosRequest>):Promise<APIResponse<IPagedResponse<IEscalaDto>>>{
  const response = await request({
      url: '/escala/busca',
      method: 'post',
      data
    })
    return ApiToResponse(response)
}

export default {
  BuscaEscalas
}