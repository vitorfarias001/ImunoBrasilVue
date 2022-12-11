export interface ISearchDataParams<T> {
    paginacao:ISearchPagination
    campoOrdenacao?: string,
    crescente?: boolean,
    filtros: T
  }

export interface IPagedResponseBase {
    total: number,
    pageCount: number,
    pageSize: number,
    currentPage: number
}


  export interface IPagedResponse<T> extends IPagedResponseBase {
    results: Array<T>
  }
    
  export interface IKeyValueObject {
    id: number,
    nome: string
  }
  
  export interface IBaseDto {
    excluido: boolean,
    dataCadastro: Date,
    dataAtualizacao?: Date,
    dataExclusao?: Date
  }

  export interface ISearchPagination {
    page:Number,
    pageSize:Number
  }

  export interface IFiltrosRequest {
    input?: string
  }

  export interface IIdNameDto{
    id: number,
    nome: string
  }

  export interface APIResponse<T>{
    mensagem: string,
    corpo: T,
    status: number,
    sucesso: boolean
  }