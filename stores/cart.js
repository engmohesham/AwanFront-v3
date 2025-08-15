import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart', {
  state: () => ({
    items: [],
    total: 0
  }),

  getters: {
    itemCount: (state) => state.items.length,
    
    cartTotal: (state) => {
      return state.items.reduce((total, item) => {
        return total + (item.price * item.quantity)
      }, 0)
    }
  },

  actions: {
    addToCart(course) {
      const existingItem = this.items.find(item => item.id === course.id)
      
      if (existingItem) {
        existingItem.quantity += 1
      } else {
        this.items.push({
          ...course,
          quantity: 1
        })
      }
      
      this.updateTotal()
    },

    removeFromCart(courseId) {
      const index = this.items.findIndex(item => item.id === courseId)
      if (index > -1) {
        this.items.splice(index, 1)
        this.updateTotal()
      }
    },

    updateQuantity(courseId, quantity) {
      const item = this.items.find(item => item.id === courseId)
      if (item) {
        if (quantity <= 0) {
          this.removeFromCart(courseId)
        } else {
          item.quantity = quantity
          this.updateTotal()
        }
      }
    },

    clearCart() {
      this.items = []
      this.total = 0
    },

    updateTotal() {
      this.total = this.cartTotal
    }
  },

  persist: true
})
