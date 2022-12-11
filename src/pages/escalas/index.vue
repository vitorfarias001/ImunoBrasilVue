<template>
    <v-container fluid>
      <v-row>
        <v-col cols="3">
          <v-autocomplete
          v-model="FiltroEscala.Unidade"
          v-model:search="LocalText"
          :items="Unidades"
          :loading="LoadingUnidades"
          hide-no-data
          hide-selected
          density="compact"
          item-title="nome"
          v-bind:item-value="'id'"
          label="Unidade"
          variant="outlined"
          placeholder="Digite o nome do local"
          return-object
        ></v-autocomplete>
        </v-col>
        <v-col cols="3">
          <v-autocomplete
          v-model="FiltroEscala.especialidade"
          v-model:search="EspecialidadeText"
          :items="Especialidades"
          :loading="LoadingEspecialidades"
          hide-no-data
          hide-selected
          density="compact"
          item-title="nome"
          v-bind:item-value="'id'"
          label="Especialidade"
          variant="outlined"
          placeholder="Digite o nome da especialidade"
          return-object
        ></v-autocomplete>
        </v-col>
        <v-col cols="3">
          <v-autocomplete
          v-model="FiltroEscala.medico"
          v-model:search="MedicoText"
          :items="Medicos"
          :loading="LoadingMedicos"
          hide-no-data
          hide-selected
          density="compact"
          item-title="nome"
          v-bind:item-value="'id'"
          label="Médico"
          variant="outlined"
          placeholder="Digite o nome do médico"
          return-object
        ></v-autocomplete>
        </v-col>
        <v-col cols="3">
          <el-date-picker
          v-model="FiltroEscala.rangeData"
          style="width: 100%; height: 40px !important; background-color: transparent; border:1px solid #b4b4b4 !important"
          type="daterange"
          lang="ptbr"
          format="DD/MM/YYYY"
          start-placeholder="Data início"
          end-placeholder="Data Fim"
          :default-value="[new Date(), new Date()]"
        />
        </v-col>
      </v-row>
        <v-row no-gutters>
            <div class="header-page">
              <v-col>
                <header>
                  <div class="text-h4 text-primary">Escalas</div>
                </header>
              </v-col>
              <v-col cols="2">
                <v-btn
                  v-if="CurrentProfile == 2 || CurrentProfile == 3"
                  variant="flat"
                  color="secondary"
                  class="btn-primary"
                >
                  Adicionar
                </v-btn>
              </v-col>
              <v-col cols="2">
                <div
                  class="d-flex justify-space-around align-center flex-column flex-sm-row fill-height"
                >
                  <v-text-field
                    density="compact"
                    variant="solo"
                    label="Pesquisar"
                    append-inner-icon="mdi-magnify"
                    single-line
                    hide-details
                  ></v-text-field>
                </div>
              </v-col>
            </div>
          </v-row>
          <v-row>
            <v-col cols="12">
              <custom-table
                :height="600"
                :actions="TableActions"
                :loading="LoadingEscalas"
                :columns="TableColumns"
                :pagination="TablePagination"
                :rows="Escalas"
              ></custom-table>
            </v-col>
          </v-row>
          <v-dialog :persistent="true" class="dialog-page" v-model="ShowChangeModal" width="500">
            <v-card>
              <v-card-title class="text-h5 grey lighten-2">
                Solicitação de Troca de Escala
      
                <v-btn variant="text" color="primary" @click="ShowChangeModal = false"> Fechar </v-btn>
              </v-card-title>
      
              <v-card-text>
                <div style="flex-direction: column;" class="d-flex">
                  <span>Entrada</span>
                  <el-date-picker
                    v-model="FormTrocaEscala.Inicio"
                    style="width: 100%; height: 40px !important; background-color: transparent; border:1px solid #b4b4b4 !important"
                    type="datetime"
                    lang="ptbr"
                    format="DD/MM/YYYY HH:mm"
                    start-placeholder="Data início"
                    end-placeholder="Data Fim"
                    :default-value="new Date()"
                  />
                  <span class="mt-4">Saída</span>
                  <el-date-picker
                    v-model="FormTrocaEscala.Inicio"
                    style="width: 100%; height: 40px !important; background-color: transparent; border:1px solid #b4b4b4 !important"
                    type="datetime"
                    lang="ptbr"
                    format="DD/MM/YYYY HH:mm"
                    start-placeholder="Data início"
                    end-placeholder="Data Fim"
                    :default-value="new Date()"
                  />
                  <span class="mt-4">Local</span>
                    <v-autocomplete
                    v-model="FiltroEscala.Unidade"
                    v-model:search="LocalText"
                    :items="Unidades"
                    :loading="LoadingUnidades"
                    hide-no-data
                    hide-selected
                    density="compact"
                    item-title="nome"
                    v-bind:item-value="'id'"
                    variant="outlined"
                    placeholder="Digite o nome do local"
                    return-object
                  ></v-autocomplete>

                  <span>Médicos (Escolha até 3 opções)</span>
                  <v-autocomplete
                      v-model="FiltroEscala.medico"
                      v-model:search="MedicoText"
                      multiple
                      :items="Medicos"
                      :loading="LoadingMedicos"
                      hide-no-data
                      hide-selected
                      density="compact"
                      item-title="nome"
                      v-bind:item-value="'id'"
                      variant="outlined"
                      return-object
                    ></v-autocomplete>
                </div>
              </v-card-text>
      
              <v-card-actions>
                <v-btn @click="" color="primary" > Adicionar </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
    </v-container>
</template>
<script lang="ts">
import ApiServices from '../../api'
import { defineComponent } from 'vue'
import { IEscalaDto, IEscalaFiltrosRequest } from '../../api/types/escalas'
import { ILocalDto, ILocalFiltroRequest } from '../../api/types/local'
import CustomTable, { ITableAction, ITableColumn, IPagination } from '../../components/custom/CustomTable.vue'
import { ISearchDataParams } from '../../api/types/base'
import { IEspecialidadeDto, IEspecialidadeFiltroRequest } from '../../api/types/especialidade'
import { IMedicoFiltrosRequest } from '../../api/types/medico'
import { IUsuarioDto } from '../../api/types/usuario'
import { FormatDate, FormatDateTime } from '../../utils/formats'
import { mapGetters } from 'vuex'
export default defineComponent({
    components: { CustomTable },
    setup() {
        
    },
    data() {
      return {
        FormTrocaEscala: {
          Inicio: Date,
        },
        FiltroEscala: {
          Unidade: {id: 0, nome: ''},
          especialidade: {id: 0, nome: ''},
          medico: {id: 0, nome: ''},
          rangeData: [new Date(), new Date()] as Date[]
        },
        TableActions: [] as ITableAction[],
        LoadingEscalas: false,
        TableColumns: [
          {
            key: 'dataHorarioInicio',
            display: 'Inicio',
            format: this.formatDateTime
          },
          {
          key: 'dataHorarioSaida',
          display: 'Saída',
          format: this.formatDateTime
          },
          {
            key: 'local.nome',
            display: 'Local'
          },
          {
            key: 'medico.nome',
            display: 'Médico'
          }] as ITableColumn[],
        TablePagination: {

        } as IPagination,
        Escalas: [
        ] as IEscalaDto[],
        LoadingUnidades: false,
        LocalText: "",
        Unidades: [
        ] as ILocalDto[],
        LoadingEspecialidades: false,
        EspecialidadeText: "",
        Especialidades: [
        ] as IEspecialidadeDto[],
        LoadingMedicos: false,
        MedicoText: "",
        Medicos: [
        ] as IUsuarioDto[],
        ShowChangeModal: false
      }
    },  
    computed:{
      ...mapGetters([ 'LoggedUser', 'CurrentProfile' ])
     },
    mounted(){
      this.setTableActions();
      this.LoadingEscalas = true;
      this.BuscarLocais("")
      this.BuscarEspecialidades("")
      this.BuscarMedicos("")
      this.setInitialDate();      
    },
    methods:{
      setTableActions(){        
        if(this.CurrentProfile == 2 || this.CurrentProfile == 1){
          this.TableActions.push({
            display: "Solicitar Troca",
            icon: "arrow-right-arrow-left",
            action: () => { this.ShowChangeSchedule()}
          });
        }
      },
      ShowChangeSchedule(){
        this.ShowChangeModal = true;
      },
      formatDateTime(row:any, column:any, cellValue:any, index:number){
        return FormatDateTime(new Date(cellValue), false);
      },
      async BuscarEscalas(){
        var SearchParameters = {
          filtros: {
            DataInicio: this.FiltroEscala.rangeData[0],
            DataFim: this.FiltroEscala.rangeData[1],
            IdUnidade: this.FiltroEscala.Unidade.id,
            IdEspecialidade: this.FiltroEscala.especialidade?.id,
            IdMedico: this.FiltroEscala.medico?.id            
          },
          campoOrdenacao: 'Nome',
          paginacao: {
            page: 1,
            pageSize: 20
          }
        } as ISearchDataParams<IEscalaFiltrosRequest>
          this.LoadingEscalas = true;
          var Escalas = await ApiServices.EscalaApi.BuscaEscalas(SearchParameters);
          if(Escalas.sucesso){
            this.Escalas = Escalas.corpo.results
            this.TablePagination = {
              page:  Escalas.corpo.currentPage,
              pageSize:  Escalas.corpo.pageSize,
              totalPages:  Escalas.corpo.pageCount,
              totalRows:  Escalas.corpo.total
            } as IPagination
          }
          this.LoadingEscalas = false;
      },
      setInitialDate(){
        var hoje = new Date()
        var d7 = new Date()
        d7.setDate(new Date().getDate() + 7);
        this.FiltroEscala.rangeData = [hoje, d7]
      },
      async BuscarLocais(texto:string){
        var SearchParameters = {
          filtros: {
            nomes: [texto]
          } as ILocalFiltroRequest,
          paginacao: {
            page: 1,
            pageSize: 20
          }
        } as ISearchDataParams<ILocalFiltroRequest>
          this.LoadingUnidades = true;
          var locais = await ApiServices.LocalApi.BuscaLocalProcedimentos(SearchParameters);
          if(locais.sucesso){
            this.Unidades = locais.corpo.results
            if(this.FiltroEscala.Unidade.id == 0){
              this.FiltroEscala.Unidade = locais.corpo.results[0]
              this.BuscarEscalas();
            }
          }
          this.LoadingUnidades = false;
      },
       async BuscarEspecialidades(texto:string){
        var SearchParameters = {
          filtros: {
            input: texto
          } as IEspecialidadeFiltroRequest,
          paginacao: {
            page: 1,
            pageSize: 20
          }
        } as ISearchDataParams<IEspecialidadeFiltroRequest>
          this.LoadingEspecialidades = true;
          var especialidades = await ApiServices.EspecialidadeApi.BuscaEspecialidade(SearchParameters);
          if(especialidades.sucesso){
            this.Especialidades = especialidades.corpo.results
          }
          this.LoadingEspecialidades = false;
      },
       async BuscarMedicos(texto:string){
        var SearchParameters = {
          filtros: {
            input: texto
          },
          campoOrdenacao: 'Nome',
          paginacao: {
            page: 1,
            pageSize: 20
          }
        } as ISearchDataParams<IMedicoFiltrosRequest>
          this.LoadingMedicos = true;
          var medicos = await ApiServices.MedicoApi.BuscarMedicos(SearchParameters);
          if(medicos.sucesso){
            this.Medicos = medicos.corpo.results
          }
          this.LoadingMedicos = false;
      }      
    },
    watch:{
      LocalText(val){
        if(val.length >= 3){
          this.BuscarLocais(val)
        }
      },
      EspecialidadeText(val){
        if(val.length >= 3){
          this.BuscarEspecialidades(val)
        }
      },
      MedicoText(val){
        if(val.length >= 3){
          this.BuscarMedicos(val)
        }
      }
    }
})
</script>
<style lang="scss">
@media (min-width: 1280px) {
  .v-container {
    max-width: 100% !important;
  }
}
.header-page {
  width: 100%;
  display: flex;
  align-items: center;
  .title-page {
    color: #005356;
    font-size: 3rem;
  }
  .btn-primary {
    background-color: #80c340 !important;
    color: #ffffff !important;
    min-width: 64px;
    border-radius: 4px;
    width: 180px;
    font-weight: 500;
    letter-spacing: 0.02857em;
    text-transform: uppercase;
    line-height: 3.5;
    min-height: 45px;
    float: right;
    &:hover {
      background: #80c34090 !important;
    }
  }

  .v-field {
    border-radius: 3rem;
    box-shadow: none;
    font-size: 1rem;
    min-height: 45px;
    line-height: 1.75;
  }
}


.dialog-page {
  .v-card {
    padding: 1.4rem;
  }
  .v-card-title {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .v-card-text {
    padding: 16px 10px 10px !important;
  }
  .v-card-actions {
    display: flex;
    justify-content: flex-end;
    .v-btn {
      background-color: #80c340 !important;
      color: #ffffff !important;
      min-width: 64px;
      border-radius: 4px;
      width: 180px;
      font-weight: 500;
      letter-spacing: 0.02857em;
      text-transform: uppercase;
      line-height: 3.5;
      min-height: 45px;
      float: right;
    }
  }
}

.el-picker__popper {
  z-index: 100000 !important;
}

.v-pagination__list {
  justify-content: flex-end !important;
}
</style>
