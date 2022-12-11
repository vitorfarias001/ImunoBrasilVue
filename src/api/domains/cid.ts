import { AxiosPromise } from "axios";
import request from "../../utils/request";
import { APIResponse, IPagedResponse, ISearchDataParams } from "../types/base";
import { ICidDto, ICidFiltroRequest } from "../types/cid";
import { ILoginResponse, IUserLoginData } from "../types/usuario";
import { ApiToResponse } from "./base";

const BuscaCid = async function (data: ISearchDataParams<ICidFiltroRequest>):Promise<APIResponse<IPagedResponse<ICidDto>>>{
  const response = await request({
      url: '/cid/busca',
      method: 'post',
      data
    })

    return ApiToResponse(response);
}

export default {
  BuscaCid
}