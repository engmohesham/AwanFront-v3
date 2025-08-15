<template>
  <div class="min-h-screen bg-gray-50 dark:bg-gray-900 py-8">
    <div class="container mx-auto px-4">
      <!-- Page Header -->
      <div class="mb-8">
        <h1 class="text-3xl font-bold text-gray-900 dark:text-white mb-2">
          سلة التسوق
        </h1>
        <p class="text-gray-600 dark:text-gray-400">
          {{ cartStore.itemCount }} كورس في السلة
        </p>
      </div>

      <div v-if="cartStore.items.length === 0" class="text-center py-16">
        <div class="text-6xl mb-4">🛒</div>
        <h2 class="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
          السلة فارغة
        </h2>
        <p class="text-gray-600 dark:text-gray-400 mb-8">
          لم تقم بإضافة أي كورسات إلى السلة بعد
        </p>
        <NuxtLink to="/courses" class="btn-primary text-lg px-8 py-3">
          استكشف الكورسات
        </NuxtLink>
      </div>

      <div v-else class="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <!-- Cart Items -->
        <div class="lg:col-span-2">
          <div class="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
            <h2 class="text-xl font-semibold text-gray-900 dark:text-white mb-6">
              الكورسات المختارة
            </h2>
            
            <div class="space-y-4">
              <div 
                v-for="item in cartStore.items" 
                :key="item.id"
                class="cart-item border border-gray-200 dark:border-gray-700 rounded-lg p-4"
              >
                <div class="flex items-center space-x-4 space-x-reverse">
                  <!-- Course Image -->
                  <div class="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <div class="text-2xl text-white">{{ getCategoryIcon(item.category) }}</div>
                  </div>

                  <!-- Course Info -->
                  <div class="flex-1 min-w-0">
                    <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                      {{ item.title }}
                    </h3>
                    <p class="text-sm text-gray-600 dark:text-gray-400 mb-2">
                      {{ item.instructor }}
                    </p>
                    <div class="flex items-center text-sm text-gray-500 dark:text-gray-400">
                      <span class="mr-4">{{ item.category }}</span>
                      <span>{{ formatNumber(item.students) }} طالب</span>
                    </div>
                  </div>

                  <!-- Quantity Controls -->
                  <div class="flex items-center space-x-2 space-x-reverse">
                    <button 
                      @click="updateQuantity(item.id, item.quantity - 1)"
                      class="w-8 h-8 rounded-full border border-gray-300 dark:border-gray-600 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                    >
                      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 12H4"></path>
                      </svg>
                    </button>
                    
                    <span class="w-12 text-center text-gray-900 dark:text-white font-medium">
                      {{ item.quantity }}
                    </span>
                    
                    <button 
                      @click="updateQuantity(item.id, item.quantity + 1)"
                      class="w-8 h-8 rounded-full border border-gray-300 dark:border-gray-600 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                    >
                      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                      </svg>
                    </button>
                  </div>

                  <!-- Price -->
                  <div class="text-right">
                    <div class="text-xl font-bold text-blue-600">
                      {{ (item.price * item.quantity).toLocaleString() }} ريال
                    </div>
                    <div class="text-sm text-gray-500 dark:text-gray-400">
                      {{ item.price.toLocaleString() }} ريال للكورس
                    </div>
                  </div>

                  <!-- Remove Button -->
                  <button 
                    @click="removeFromCart(item.id)"
                    class="text-red-500 hover:text-red-700 transition-colors p-2"
                    title="إزالة من السلة"
                  >
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            <!-- Clear Cart Button -->
            <div class="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
              <button 
                @click="clearCart"
                class="text-red-600 hover:text-red-700 font-medium transition-colors"
              >
                إفراغ السلة
              </button>
            </div>
          </div>
        </div>

        <!-- Order Summary -->
        <div class="lg:col-span-1">
          <div class="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 sticky top-24">
            <h2 class="text-xl font-semibold text-gray-900 dark:text-white mb-6">
              ملخص الطلب
            </h2>

            <!-- Summary Items -->
            <div class="space-y-4 mb-6">
              <div class="flex justify-between text-gray-600 dark:text-gray-400">
                <span>عدد الكورسات:</span>
                <span>{{ cartStore.itemCount }}</span>
              </div>
              <div class="flex justify-between text-gray-600 dark:text-gray-400">
                <span>المجموع الفرعي:</span>
                <span>{{ cartStore.cartTotal.toLocaleString() }} ريال</span>
              </div>
              <div class="flex justify-between text-gray-600 dark:text-gray-400">
                <span>الضريبة (15%):</span>
                <span>{{ tax.toLocaleString() }} ريال</span>
              </div>
              <div class="border-t border-gray-200 dark:border-gray-700 pt-4">
                <div class="flex justify-between text-lg font-semibold text-gray-900 dark:text-white">
                  <span>المجموع الكلي:</span>
                  <span>{{ totalWithTax.toLocaleString() }} ريال</span>
                </div>
              </div>
            </div>

            <!-- Checkout Button -->
            <button 
              @click="proceedToCheckout"
              class="w-full btn-primary text-lg py-3 mb-4"
              :disabled="cartStore.items.length === 0"
            >
              إتمام الشراء
            </button>

            <!-- Continue Shopping -->
            <NuxtLink 
              to="/courses"
              class="block w-full text-center btn-secondary text-lg py-3"
            >
              متابعة التسوق
            </NuxtLink>

            <!-- Security Info -->
            <div class="mt-6 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
              <div class="flex items-center text-sm text-gray-600 dark:text-gray-400">
                <svg class="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd" />
                </svg>
                <span>معلوماتك محمية ومشفرة</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted } from 'vue'
import { useCartStore } from '~/stores/cart'
import { gsap } from 'gsap'

const cartStore = useCartStore()

const tax = computed(() => cartStore.cartTotal * 0.15)
const totalWithTax = computed(() => cartStore.cartTotal + tax.value)

const getCategoryIcon = (category) => {
  const icons = {
    'تطوير الويب': '💻',
    'التصميم': '🎨',
    'اللغات': '🌍',
    'الأعمال': '💼',
    'الموسيقى': '🎵',
    'الصحة': '🏥',
    'الرياضة': '⚽',
    'الطبخ': '👨‍🍳'
  }
  return icons[category] || '📚'
}

const formatNumber = (num) => {
  if (num >= 1000) {
    return (num / 1000).toFixed(1) + 'K'
  }
  return num
}

const updateQuantity = (courseId, quantity) => {
  cartStore.updateQuantity(courseId, quantity)
}

const removeFromCart = (courseId) => {
  cartStore.removeFromCart(courseId)
}

const clearCart = () => {
  if (confirm('هل أنت متأكد من إفراغ السلة؟')) {
    cartStore.clearCart()
  }
}

const proceedToCheckout = () => {
  // يمكن إضافة منطق إتمام الشراء هنا
  alert('سيتم إضافة صفحة إتمام الشراء قريباً')
}

onMounted(() => {
  // GSAP animations
  gsap.from('.cart-item', {
    opacity: 0,
    y: 20,
    duration: 0.6,
    stagger: 0.1,
    ease: 'power2.out'
  })

  gsap.from('.lg\\:col-span-1', {
    opacity: 0,
    x: 30,
    duration: 0.8,
    delay: 0.3,
    ease: 'power2.out'
  })
})
</script>

<style scoped>
.cart-item {
  @apply transition-all duration-200 hover:shadow-md;
}
</style>
