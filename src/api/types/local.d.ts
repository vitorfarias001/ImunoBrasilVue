import { IFiltrosRequest } from "./base"

export interface ILocalDto extends IBaseDto {
    id: number
    nome: string
}

export interface ILocalFiltroRequest extends IFiltrosRequest{
    nomes: Array<string>
}