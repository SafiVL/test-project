<template>
  <tr class="">
    <td>{{ item.name }}</td>
    <td>{{ item.price }}</td>
    <td>
      <input type="number" v-model="quantity">
      <button class="buttonIcon" @click="quantity += 1">+</button>
      <button class="buttonIcon" @click="decrease">-</button>
      <button class="buttonIcon" @click="addToCart">
        <svg-cart></svg-cart>
      </button>
    </td>
  </tr>
</template>

<script>
import { useCartStore } from '/src/stores/main.js'
import {ref, toRefs} from 'vue'
import SvgCart from "@/components/icons/SvgCart";

export default {
  components: {SvgCart},
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  setup(props) {
    const { item } = toRefs(props)
    const mainStore = useCartStore()
    const quantity = ref(0)

    const decrease = () => {
      if (item.value.quantity > 0) {
        item.value.quantity--
      }
    }
    const addToCart = () => {
      if (quantity.value > 0) {
        mainStore.addToCart(item.value, quantity.value)
      }
    }
    return {
      decrease,
      addToCart,
      mainStore,
      quantity
    }
  }
}
</script>
