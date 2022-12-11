import { AxiosPromise } from "axios";
import request from "../../utils/request";
import { APIResponse, IPagedResponse, ISearchDataParams } from "../types/base";
import { ILocalDto, ILocalFiltroRequest } from "../types/local";
import { ApiToResponse } from "./base";


const BuscaLocalProcedimentos = async function (data: ISearchDataParams<ILocalFiltroRequest>):Promise<APIResponse<IPagedResponse<ILocalDto>>>{
  const response = await request({
      url: '/local/busca',
      method: 'post',
      data
    })
    return ApiToResponse(response)
}

export default {
  BuscaLocalProcedimentos
}