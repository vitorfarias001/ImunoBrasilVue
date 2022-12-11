<template>
    <v-table class="imunotable">
        <thead>
          <tr>
            <th v-for="(column, index) in columns" :key="index" class="text-left imunotable-head" colspan="3">{{(column as ITableColumn).display}}</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(row, index) in rows" :key="index">
            <!-- <td class="td-width-large">{{ item?.name }}</td> -->
            <td v-for="(column, index) in columns" :key="index">
                {{ (row as any)[(column as ITableColumn).key]}}
            </td>
            <td>
              <v-btn variant="flat" color="default">
                <v-icon size="large" color="blue-darken-2">
                  mdi-television-speaker
                </v-icon>
              </v-btn>
            </td>
            <td>
              <v-btn variant="flat">
                <v-icon size="large" color="blue-darken-2">
                  mdi-table-question
                </v-icon>
              </v-btn>
            </td>
          </tr>
        </tbody>
      </v-table>
</template>
<script lang="ts">
import { defineComponent } from 'vue'

export interface ITableColumn {
    key: string,
    display: string
}


export default defineComponent({
    props: {
        rows:{
            type: Array,
            required: true,
            default: []
        },
        columns:{
            type: Array,
            required: true,
            default: [] as ITableColumn[]
        }
    },
    setup() {
        
    },
})
</script>
<style lang="scss">
.imunotable {
  thead tr th {
    height: auto;
    padding: 40px;
    background-color: #a3a6b430;
  }
  tbody tr {
    padding: 1rem 2rem;
    background-color: #ffffff;
    border-bottom: 1rem solid rgba(244, 244, 244, 0.6882352941);
  }
  thead th,
  tbody tr {
    color: #a3a6b4;
  }
  .td-width-large {
    width: 97%;
  }
}
</style>