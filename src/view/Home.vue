<template>
  <v-card-text>
    The navigation drawer will appear from the bottom on smaller size screens.
  </v-card-text>
  <ag-grid v-model="rowData"></ag-grid>
</template>

<script setup>
  import AgGrid from "../test/ag-grid.vue"
  import {reactive} from "vue";

  const rowData = reactive([
    { make: "Tesla", model: "Model Y", price: 64950, electric: true },
    { make: "Ford", model: "F-Series", price: 33850, electric: false },
    { make: "Toyota", model: "Corolla", price: 29600, electric: false },
  ]);

</script>

<style scoped>

</style>
