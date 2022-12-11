import { Axios, AxiosResponse } from "axios";
import { APIResponse } from "../types/base";

export function ApiToResponse<T>(response: AxiosResponse<any, any>): APIResponse<T>{
    if(response.status >= 200 && response.status <= 206){
        return {
          corpo: response.data,
          status: response.status,
          mensagem: response.statusText,
          sucesso: true
        } as APIResponse<T>
      }
      else
      {
        return {
          status: response.status,
          mensagem: response.data,
          sucesso: false
        } as APIResponse<T>
      }
}