export interface ICriarUsuarioRequest {
    Nome: string,
    Email:string,
    Matricula:string,
    CPF:string,
    Telefone:string,
    ContaBloqueada:Boolean?,
    IdsEspecialidade: Array<Number>
    IdsGruposDeDisparo: Array<Number>,
    Perfis: Array<Number>,
    IdsLocais: Array<Number>
  }



  export interface IUsuarioDto{
    id?: number
    nome: string
    aceitouPolitica: boolean
    email: string
    matricula: string
    cpf: string
    telefone: string
    telefone2: string
    contaBloqueado: boolean
    excluido: boolean
    perfis: number[]
    especialidades: IGeneralDataProps[]
    regionais: IGeneralDataProps[]
    gruposDeDisparo: IGeneralDataProps[]
    refreshToken?: string
  }

  export interface ILoginResponse {
    token?: string,
    data?:IUsuarioDto,
    perfilAutenticado: number
  }

  export interface IUserLoginData {
    usuario: string
    senha: string
  }

  export interface ITrocaPerfilRequest{
    novoPerfil: number
  }