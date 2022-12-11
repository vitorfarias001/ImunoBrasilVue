import { IFiltrosRequest } from "./base"

export interface IEspecialidadeDto extends IBaseDto {
    id: number
    codigo: string
}

export interface IEspecialidadeFiltroRequest extends IFiltrosRequest{
}