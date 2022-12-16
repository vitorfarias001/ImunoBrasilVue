<template>
  <v-container>
    <v-row no-gutters>
      <div class="header-page">
        <v-col>
          <header>
            <div class="text-h4 text-primary">Tipos de Tratamentos</div>
          </header>
        </v-col>
        <v-col cols="2">
          <v-btn
            @click="$router.push('/tipos-tratamento/new')"
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

    <v-row no-gutters>
      <v-col>
        <!-- <simple-item-table
        :UseEdit="true" :loading="LoadingTiposTratamento" :pagination="tipoTratamentoPages" 
        :columns="columns" :rows="cids" ></simple-item-table> -->
        <simple-item-table
          :use-edit="true"
          :rows="rows"
          :columns="columns"
          :loading="loading"
        ></simple-item-table>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import ApiServices from "../../api";

import { ICidDto, ICidFiltroRequest } from "../../api/types/cid";
import SimpleItemTable, {
  ITableColumn,
} from "../../components/custom/SimpleItemTable.vue";
import {
  IPagedResponse,
  IPagedResponseBase,
  ISearchDataParams,
} from "../../api/types/base";
import { ITipoTratamentoDto } from "../../api/types/tipoTratamento";

export default defineComponent({
  components: { SimpleItemTable },
  // setup() {
  //   const LoadingTiposTratamento = ref(false);
  //   const cids = ref([] as ICidDto[])
  //   const tipoTratamentoPages = ref({} as IPagedResponseBase)
  //   return{
  //     LoadingTiposTratamento,
  //     cids,
  //     tipoTratamentoPages
  //   }
  // },
  mounted() {
    this.fetchTiposTratamento();
  },
  data() {
    return {
      page: 1,
      columns: [
        {
          key: "tipo",
          display: "Tipo",
        },
        {
          key: "precisaAutorizacao",
          display: "Precisa de Autorização?",
        },
        {
          key: "time",
          display: "Time",
        },
        {
          key: "especialidade",
          display: "Especialidade",
        },
      ],
      loading: false,
      rows: [],
    };
  },
  methods: {
    async fetchTiposTratamento() {
      this.loading = true;
      const requestOptions = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `bearer ${localStorage.getItem("IMB:Token")}`,
        },
        body: JSON.stringify({}),
      };

      const baseUrl = import.meta.env.VITE_API_URL;

      fetch(`${baseUrl}/TipoTratamento/Busca`, requestOptions)
        .then(async (response) => {
          const data = await response.json();
          this.rows = data.results;
        })
        .finally(() => {
          this.loading = false;
        });
    },
    // async buscarCids(){
    //   this.LoadingTiposTratamento = true;
    //   var cidResponse = await ApiServices.CidApi.BuscaCid({paginacao: { page: 1, pageSize: 50 }, filtros: {} as ICidFiltroRequest } as ISearchDataParams<ICidFiltroRequest>)

    //     if(cidResponse.sucesso){
    //     this.cids = cidResponse.corpo.results
    //     this.tipoTratamentoPages = {currentPage: cidResponse.corpo.currentPage, pageCount: cidResponse.corpo.pageCount, pageSize: cidResponse.corpo.pageSize, total: cidResponse.corpo.total }
    //     }
    //     else
    //     {
    //       this.$moshaToast(cidResponse.mensagem, { type: 'danger' });
    //     }
    //     this.LoadingTiposTratamento = false;
    // },
    async updateCid(item: ICidDto) {
      // var updateResponse = await ApiServices.CidApi.Update(item.id, item);
    },
    async removeCid(id: number) {},
  },
});
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

.v-pagination__list {
  justify-content: flex-end !important;
}
</style>
