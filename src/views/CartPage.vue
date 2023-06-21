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
            {{ `${product.price * product.quantity}` }}
            <span style="cursor: pointer" @click="removeProduct(product)">✖</span>
          </td>
        </tr>
        <tr>
          <td colspan="4"> Итого: {{ `${ mainStore.totalPrice }`}}</td>
        </tr>
        </tbody>
      </table>
      <div class="actions-btn">
        <button class="buttonIcon" @click="generateJSON()">Берём!</button>
        <router-link to="/catalog">
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
<style>
table {
  border-collapse: collapse;
  border-spacing: 6px;
  text-align: center;
}
table tbody tr:last-child td {
  border-top: 1px solid #ddd;
  text-align: right;
}
.card {
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  padding: 10px 20px 40px 20px;
}
.actions-btn {
  justify-content: end;
  margin-top: 30px;
  display: flex;
}
</style>
