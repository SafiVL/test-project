<template>
  <div class="container">
    <div class="narrow-column">
      <router-link to="/catalog">
        <button class="button">Каталог</button>
      </router-link>
      <router-link to="/cart">
        <button class="button">Корзина ({{ totalQuantity }}) </button>
      </router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
import { useCartStore } from '/src/stores/main.js'
import { computed } from 'vue'

export default {
  setup() {
    const mainStore = useCartStore()
    const totalQuantity = computed(() => {
      return mainStore.cart.reduce((total, product) => total + product.quantity, 0)
    })

    return {
      mainStore,
      totalQuantity
    }
  }
}
</script>

<style>
@import "~/src/css/main.css";
</style>
