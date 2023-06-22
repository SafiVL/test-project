<template>
  <div class="data-table">
    <table>
      <thead>
      <tr>
        <th>Наименование</th>
        <th>Цена</th>
        <th>Действия</th>
      </tr>
      </thead>
      <tbody>
        <catalog-item :item="item" v-for="item in mainStore.items" :key="item.name"></catalog-item>
      </tbody>
    </table>
  </div>
</template>

<script>
import { useCartStore } from '/src/stores/main.js'
import CatalogItem from "@/components/CatalogItem";

export default {
  components: { CatalogItem },
  setup() {
    const mainStore = useCartStore()

    return {
      mainStore
    }
  }
}
</script>

<style >
.container {
  display: flex;
}
table {
  align-content: center;
  border-collapse: collapse;
}
th, td {
  border: 1px solid #ccc;
  padding: 8px;
}
th {
  background-color: #f0f0f0;
}
</style>
