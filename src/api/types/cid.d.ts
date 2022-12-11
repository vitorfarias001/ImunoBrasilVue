import { IFiltrosRequest } from "./base"

export interface ICidDto extends IBaseDto {
    id: number
    codigo: string
}

export interface ICidFiltroRequest extends IFiltrosRequest{
    codigos: Array<string>
}