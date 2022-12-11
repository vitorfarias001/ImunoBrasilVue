import { IIdNameDto } from './base'

export interface IEscalaFiltrosRequest{
    IdMedico?:number
    IdUnidade:number
    IdEspecialidade?:number
    DataInicio:Date
    DataFim:Date
    Input?:string
}

export interface IEscalaDto extends IBaseDto{
    serieEscalaId: number
    emSerie: boolean
    frequenciaSerie: number
    dataFinalRepeticao: string
    dataHorarioInicio: string
    dataHorarioSaida: string
    motivo: string
    local: IIdNameDto
    medico: IIdNameDto
    escalaRecebidaSubstituicao: boolean
    idEscalaOriginalSubstituicao: number
    escalaEnviadaSubstituicao: boolean
    idEscalaSubstituta: number
    escalaAlteradaDaSerie: boolean
    serieOriginal: number
}