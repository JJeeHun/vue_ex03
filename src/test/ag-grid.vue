<!--class="ag-theme-quartz"-->
<!--class="ag-theme-quartz-dark"-->
<!--      :autoGroupColumnDef="autoGroupColumnDef" -->
<template>
  <!-- The AG Grid component -->
  <ag-grid-vue
      :rowData="value"
      :columnDefs="colDefs"
      style="height: 500px"
      class="ag-theme-balham"
      rowSelection="multiple"
      :isRowSelectable="(params) => params.data.make === 'Tesla'"
  >
  </ag-grid-vue>

</template>


<script setup lang="ts">
import {defineModel, defineProps, ref} from 'vue';
  import { AgGridVue } from "ag-grid-vue3"; // AG Grid Component

  const value = defineModel();

  // Column Definitions: Defines the columns to be displayed.
  const colDefs = ref([
    {
      headerName: "Make & Model",
      valueGetter: p => p.data.make + ' ' + p.data.model,
      checkboxSelection: true,
      showDisabledCheckboxes: true,
      headerCheckboxSelection: true,
    },
    {field: "make", filter: true, floatingFilter: true},
    {field: "model", editable: true},
    {field: "price", valueFormatter: p => '£' + Math.floor(p.value).toLocaleString()},
    {
      field: "electric", cellRenderer: params => {
        const varTest = 'test!!';
        return `<button class="btn-hello" onclick="alert('${params.value}')" ">Hello</button>`
      }
    }
  ]);
</script>

<style>
  .btn-hello {
    width: 100%;
    text-align: center;
    background-color: #f4baba;
  }
  .btn-hello:hover {
    background-color: red;
  }
</style>
