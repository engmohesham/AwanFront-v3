<template>
  <div class="course-card bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-all duration-300 hover:shadow-xl">
    <!-- Course Image -->
    <div class="relative h-48 bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
      <div class="text-6xl text-white opacity-80">{{ getCategoryIcon(course.category) }}</div>
      <div class="absolute top-3 right-3">
        <span class="bg-yellow-400 text-yellow-900 text-xs font-bold px-2 py-1 rounded-full">
          مميز
        </span>
      </div>
    </div>

    <!-- Course Content -->
    <div class="p-6">
      <!-- Category -->
      <div class="text-sm text-blue-600 dark:text-blue-400 mb-2">
        {{ course.category }}
      </div>

      <!-- Title -->
      <h3 class="text-xl font-bold text-gray-800 dark:text-white mb-3 line-clamp-2">
        {{ course.title }}
      </h3>

      <!-- Instructor -->
      <div class="flex items-center mb-4">
        <div class="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center mr-3">
          <span class="text-gray-600 text-sm">{{ course.instructor.charAt(0) }}</span>
        </div>
        <span class="text-gray-600 dark:text-gray-400">{{ course.instructor }}</span>
      </div>

      <!-- Stats -->
      <div class="flex items-center justify-between mb-4">
        <div class="flex items-center">
          <div class="flex text-yellow-400 mr-1">
            <svg v-for="i in 5" :key="i" class="w-4 h-4" :class="i <= Math.floor(course.rating) ? 'text-yellow-400' : 'text-gray-300'" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
            </svg>
          </div>
          <span class="text-sm text-gray-600 dark:text-gray-400 mr-1">{{ course.rating }}</span>
        </div>
        <div class="text-sm text-gray-600 dark:text-gray-400">
          {{ formatNumber(course.students) }} طالب
        </div>
      </div>

      <!-- Price and Action -->
      <div class="flex items-center justify-between">
        <div class="text-2xl font-bold text-blue-600">
          {{ course.price }} ريال
        </div>
        <button 
          @click="addToCart"
          class="btn-primary text-sm px-4 py-2"
        >
          أضف للسلة
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useCartStore } from '~/stores/cart'

const props = defineProps({
  course: {
    type: Object,
    required: true
  }
})

const cartStore = useCartStore()

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

const addToCart = () => {
  cartStore.addToCart(props.course)
  // يمكن إضافة toast notification هنا
}
</script>

<style scoped>
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.course-card {
  @apply border border-gray-200 dark:border-gray-700;
}
</style>
