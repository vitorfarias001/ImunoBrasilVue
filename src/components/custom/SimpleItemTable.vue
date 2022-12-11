<template>
    <el-table v-loading="loading" class="custom-table" 
        :data="rows" style="width: 100%">
        <el-table-column v-for="(column, index) in columns" :key="index" :label="(column as ITableColumn).display">
            <template #default="item">
                <span  v-if="!item.row.isEditing">{{item.row[(column as ITableColumn).key]}}</span>
                <v-text-field density="compact"  v-if="item.row.isEditing" v-model="item.row[(column as ITableColumn).key]" variant="outlined"></v-text-field>
            </template>
        </el-table-column>
        <el-table-column v-if="UseEdit" width="150" fixed="right" label="">
          <template #default="item">
            <el-tooltip
            content="Editar"
            placement="top"
            effect="light"
            >
                <font-awesome-icon v-if="!item.row.isEditing" @click="(item.row.isEditing = true)" class="simpletable-edit-btn" style="cursor: pointer; font-size: 22px; width: 22px; height: 22px; color: #a3a6b4 !important;"  :icon="['fas',  'pen-to-square']" />
            </el-tooltip>
            <el-tooltip
            content="Salvar"
            placement="top"
            effect="light"
            >
            <font-awesome-icon @click="deletar(item.row as any)" v-if="item.row.isEditing" class="simpletable-edit-btn text-secondary  mb-4" style="cursor: pointer; font-size: 22px; width: 22px; height: 22px;"  :icon="['fas',  'save']" />
            </el-tooltip>
            <el-tooltip
            content="Deletar"
            placement="top"
            effect="light"
            >
              <font-awesome-icon @click="salvar(item.row as any)" v-if="item.row.isEditing" class="simpletable-edit-btn ml-4 mb-4" style="cursor: pointer; font-size: 22px; width: 22px; height: 22px;color: red !important;"  :icon="['fas',  'trash']" />
            </el-tooltip>
          </template>
        </el-table-column>
      </el-table>
      <v-row class="px-3 mt-2">
        <v-col cols="6">
            <span class="text-primary">Exibindo {{(pagination as IPagedResponseBase).pageSize <= (pagination as IPagedResponseBase).total ? (pagination as IPagedResponseBase).pageSize : (pagination as IPagedResponseBase).total}} de {{(pagination as IPagedResponseBase).total}}</span>
        </v-col>
        <v-col class="d-flex" cols="6">
            <el-pagination class="ml-auto" v-model="pagination.page" :page-size="(pagination as IPagination).pageSize" 
      :pager-count="(pagination as IPagination).totalPages" layout="prev, pager, next" :total="(pagination as IPagination).totalRows" />
        </v-col>
      </v-row>
      
  </template>
  
<script lang="ts">
import { defineComponent } from 'vue'
import { IPagedResponseBase } from '../../api/types/base'

export interface ITableColumn {
    key: string,
    display: string
}

export interface IPagination {
    page: number,
    pageSize: number,
    totalPages: number,
    totalRows: number
}


export default defineComponent({
    props:{
        UseEdit: {
            type: Boolean,
            required: false,
            default: false
        },
        loading: {
            type: Boolean,
            required: false,
            default: false
        },
        columns: {
            type: Array,
            required: true,
            default: [] as ITableColumn[]
        },
        rows: {
            type: Array,
            required: true
        },
        pagination: {
            type: Object,
            required: true,
            default: {} as IPagedResponseBase
        }
    },
    setup() {
        return {
        }
    },
    methods:{
        deletar(item: any):void{
            this.$emit('deletar', item.id);
            item.isEditing = false
        },
        salvar(item: any):void{
            this.$emit('salvar', item);
            item.isEditing = false
        }
    }
})
</script>


<style lang="scss">

th.el-table__cell{
    height: auto;
        padding: 20px !important;
        background-color: #a3a6b430 !important;
}

td.el-table__cell{
    padding: 20px !important;
}

svg.simpletable-edit-btn{

}


svg.simpletable-edit-btn:hover
svg.simpletable-edit-btn:focus {
    color: red;
    transform: translateX(10px) scale(1.2);  
}

</style>