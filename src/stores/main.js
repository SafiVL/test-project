import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart', {
  state: () => ({
    items: [
      { name: "Продукт 1", price: 333.33 },
      { name: "Продукт 2", price: 444.44 },
      { name: "Продукт 3", price: 555.55 },
      { name: "Продукт 4", price: 222.22 },
      { name: "Продукт 5", price: 111.11 }
    ],
    cart: []
  }),
  getters: {
    totalPrice() {
      return this.cart.reduce((total, item) => total + item.price * item.quantity, 0)
    }
  },
  actions: {
    addToCart(item, quantity) {
      const existingItem = this.cart.find(cartItem => cartItem.id === item.id)

      if (existingItem) {
        existingItem.quantity += quantity
      } else {
        this.cart.push({
          ...item,
          quantity
        })
      }
    },
    removeProduct(item) {
      this.cart.splice(this.cart.indexOf(item), 1)
    },
    clearCart() {
      this.cart = []
    }
  }
})
