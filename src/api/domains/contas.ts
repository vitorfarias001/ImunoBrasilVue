import { AxiosPromise } from "axios";
import request from "../../utils/request";
import { APIResponse } from "../types/base";
import { ILoginResponse, ITrocaPerfilRequest, IUserLoginData } from "../types/usuario";
import { ApiToResponse } from "./base";


const Login = async function (data: IUserLoginData):Promise<APIResponse<ILoginResponse>>{
  const response = await request({
      url: '/Contas/Login',
      method: 'post',
      data
    })
    return ApiToResponse(response)
}

const TrocaPerfil = async function (data: ITrocaPerfilRequest):Promise<APIResponse<ILoginResponse>>{
  
  const response = await request({
    url: '/Contas/TrocaPerfil',
    method: 'post',
    data
  })    
  
  return ApiToResponse(response)
}

export default {
    Login,
    TrocaPerfil
}