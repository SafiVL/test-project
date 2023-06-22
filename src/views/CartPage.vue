<template>
  <div class="card">
    <div class="data-table">
      <table>
        <thead>
        <tr>
          <th>Наименование</th>
          <th>Цена</th>
          <th>Количество</th>
          <th>Стоимость</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="product in mainStore.cart" :key="product.name">
          <td>{{ product.name }}</td>
          <td>{{ product.price }}</td>
          <td>{{ product.quantity }}</td>
          <td>
            {{ product.price * product.quantity }}
            <span style="cursor: pointer" @click="removeProduct(product)">✖</span>
          </td>
        </tr>
        <tr>
          <td colspan="4" class="total"> Итого: {{  mainStore.totalPrice }}</td>
        </tr>
        </tbody>
      </table>
      <div class="actions-btn">
        <button class="buttonIcon" @click="generateJSON()">Берём!</button>
        <router-link to="/">
          <button>Пожалуй откажусь</button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { useCartStore } from '/src/stores/main.js'
import router from "@/router";
export default {
  setup() {
    const mainStore = useCartStore()
    const removeProduct = (product) => {
      mainStore.removeProduct(product)
    }
    const generateJSON = () => {
      const jsonData = JSON.stringify(mainStore.cart)
      console.log(jsonData)
      mainStore.clearCart()
      router.push('/catalog')
    }

    return {
      removeProduct,
      mainStore,
      generateJSON
    }
  }
}
</script>
