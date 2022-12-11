<template>
    <el-table v-loading="loading" class="custom-table" 
        :data="rows" :style="'width: 100%; '+height == null ? '' : 'height: '+height+'px'">
        <el-table-column 
        v-for="(column, index) in columns" :key="index" 
        :prop="(column as ITableColumn).key"
        :label="(column as ITableColumn).display"
        :formatter="(column as ITableColumn).format == null ? (row:any, column:any, cellValue:any, index:number) => {return cellValue} : (column as ITableColumn).format">
            <!-- <template #default="item">
                <span>{{item.row[(column as ITableColumn).key]}}</span>
            </template> -->
        </el-table-column>
        <el-table-column v-for="(action, index) in  actions" width="80" fixed="right" label="">
          <template #default="item">
            <el-tooltip
            :content="(action as ITableAction).display"
            placement="top"
            effect="light"
            >
                <font-awesome-icon @click="(action as ITableAction).action" class="simpletable-edit-btn" style="cursor: pointer; font-size: 22px; width: 22px; height: 22px; color: #a3a6b4 !important;"  :icon="['fas',  (action as ITableAction).icon]" />
            </el-tooltip>
          </template>
        </el-table-column>
      </el-table>
      <v-row class="px-3 mt-2">
        <v-col cols="6">
            <span class="text-primary">Exibindo {{(pagination as IPagination).pageSize <= (pagination as IPagination).totalRows ? (pagination as IPagination).pageSize : (pagination as IPagination).totalRows}} de {{(pagination as IPagination).totalRows}}</span>
        </v-col>
        <v-col class="d-flex" cols="6">
            <el-pagination class="ml-auto" v-model="pagination.page" :page-size="(pagination as IPagination).pageSize" 
                :pager-count="(pagination as IPagination).totalPages" layout="prev, pager, next" :total="(pagination as IPagination).totalRows" />
        </v-col>
      </v-row>
      
  </template>
  
<script lang="ts">
import { fa } from 'element-plus/es/locale';
import { defineComponent } from 'vue'
import { IPagedResponseBase } from '../../api/types/base'

export interface ITableColumn {
    key: string,
    display: string
    format?: (row:any, column:any, cellValue:any, index:number) => string
}

export interface ITableAction {
    icon: string,
    display: string,
    action: () => any
}

export interface IPagination {
    page: number,
    pageSize: number,
    totalPages: number,
    totalRows: number
}


export default defineComponent({
    props:{
        height: {
            type: Number,
            required: false
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
        actions: {
            type: Array,
            required: true,
            default: [] as ITableAction[]
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