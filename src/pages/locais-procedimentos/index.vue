<template>
  <v-container>
    <v-row no-gutters>
      <div class="header-page">
        <v-col>
          <header>
            <div class="text-h4 text-primary">Locais de Procedimentos</div>
          </header>
        </v-col>
        <v-col cols="2">
          <v-btn
            variant="flat"
            color="secondary"
            @click="openModal"
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
        <simple-item-table
          @salvar=""
          @deletar=""
          :UseEdit="true"
          :loading="LoadingLocalProcedimentos"
          :pagination="localProcedimentosPages"
          :columns="columns"
          :rows="localProcedimentos"
        ></simple-item-table>
      </v-col>
    </v-row>

    <v-dialog
      :persistent="true"
      class="dialog-page"
      v-model="dialog"
      width="500"
    >
      <v-card>
        <v-card-title class="text-h5 grey lighten-2">
          Adicionar Especialidade

          <v-btn variant="text" color="primary" @click="closeModal">
            Fechar
          </v-btn>
        </v-card-title>

        <v-card-text>
          <v-text-field label="ESPECIALIDADE" variant="outlined"></v-text-field>
        </v-card-text>

        <v-card-actions>
          <v-btn color="primary"> Adicionar </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import SimpleItemTable, {
  ITableColumn,
} from "../../components/custom/SimpleItemTable.vue";
import ApiServices from "../../api";
import {
  IPagedResponse,
  IPagedResponseBase,
  ISearchDataParams,
} from "../../api/types/base";
import { ILocalDto, ILocalFiltroRequest } from "../../api/types/local";

export default defineComponent({
  components: { SimpleItemTable },
  setup() {
    const LoadingLocalProcedimentos = ref(false);
    const localProcedimentos = ref([] as ILocalDto[]);
    const localProcedimentosPages = ref({} as IPagedResponseBase);
    // const CidFilters = ICidFiltrosRequest

    return {
      LoadingLocalProcedimentos,
      localProcedimentos,
      localProcedimentosPages,
    };
  },
  data() {
    return {
      page: 1,
      dialog: false,
      columns: [
        {
          key: "codigo",
          display: "LOCALPROCEDIMENTOS",
        },
      ] as ITableColumn[],
    };
  },
  mounted() {
    this.buscarLocal();
  },
  methods: {
    async buscarLocal() {
      this.LoadingLocalProcedimentos = true;
      var localResponse = await ApiServices.LocalApi.BuscaLocalProcedimentos({
        paginacao: { page: 1, pageSize: 50 },
        filtros: {} as ILocalFiltroRequest,
      } as ISearchDataParams<ILocalFiltroRequest>);

        if(localResponse.sucesso){
          this.localProcedimentos = localResponse.corpo.results;
          this.localProcedimentosPages = {
            currentPage: localResponse.corpo.currentPage,
            pageCount: localResponse.corpo.pageCount,
            pageSize: localResponse.corpo.pageSize,
            total: localResponse.corpo.total,
          };
        }
        else
        {
          this.$moshaToast(localResponse.mensagem, { type: 'danger' });
        }

      
      this.LoadingLocalProcedimentos = false;
    },
    openModal() {
      this.dialog = true;
    },
    closeModal() {
      this.dialog = false;
    },
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
