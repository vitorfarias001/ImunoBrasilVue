import { AxiosPromise } from "axios";
import request from "../../utils/request";
import { APIResponse, IPagedResponse, ISearchDataParams } from "../types/base";
import { IEspecialidadeDto, IEspecialidadeFiltroRequest } from "../types/especialidade";
import { ILoginResponse, IUserLoginData } from "../types/usuario";
import { ApiToResponse } from "./base";

const BuscaEspecialidade = async function (data: ISearchDataParams<IEspecialidadeFiltroRequest>):Promise<APIResponse<IPagedResponse<IEspecialidadeDto>>>{
  const response = await request({
      url: '/especialidade/busca',
      method: 'post',
      data
    })
    return ApiToResponse(response)
}

export default {
  BuscaEspecialidade
}