<template>
  <div class="fixed top-20 z-50 transition-all duration-500 ease-in-out" :class="isOpen ? 'translate-x-0 right-2' : 'translate-x-full right-0'">
    <!-- Toggle Button -->
    <button
      @click="toggleSwitcher"
      class="absolute -left-10 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-gray-800/95 dark:bg-white/15 backdrop-blur-lg rounded-l-xl border border-gray-600/40 dark:border-white/30 shadow-2xl hover:shadow-3xl transition-all duration-300 flex items-center justify-center text-gray-200 dark:text-white hover:scale-110 hover:bg-gray-700/95 dark:hover:bg-white/25"
      :title="isOpen ? 'إغلاق التحكم' : 'فتح التحكم'"
    >
      <!-- Settings Icon (Gear) -->
      <svg class="w-4 h-4 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path>
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
      </svg>
    </button>
    
    <!-- Switcher Content -->
    <div class="flex flex-col items-center space-y-3 p-3 bg-gray-800/95 dark:bg-white/15 backdrop-blur-lg rounded-xl border border-gray-600/40 dark:border-white/30 shadow-2xl hover:shadow-3xl transition-all duration-300 transform" :class="isOpen ? 'scale-100 opacity-100' : 'scale-95 opacity-0'">
      <!-- Dark/Light Mode Toggle -->
      <button
        @click="toggleColorMode"
        class="w-10 h-10 rounded-full bg-gray-700/90 dark:bg-white/20 hover:bg-gray-600/90 dark:hover:bg-white/30 transition-all duration-300 flex items-center justify-center text-gray-200 dark:text-white hover:scale-110 shadow-lg hover:shadow-xl"
        :title="colorMode === 'dark' ? 'الوضع المضيء' : 'الوضع المظلم'"
      >
        <svg v-if="colorMode === 'dark'" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path>
        </svg>
        <svg v-else class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path>
        </svg>
      </button>

      <!-- RTL/LTR Toggle -->
      <button
        @click="toggleDirection"
        class="w-10 h-10 rounded-full bg-gray-700/90 dark:bg-white/20 hover:bg-gray-600/90 dark:hover:bg-white/30 transition-all duration-300 flex items-center justify-center text-gray-200 dark:text-white hover:scale-110 shadow-lg hover:shadow-xl"
        :title="direction === 'rtl' ? 'اتجاه LTR' : 'اتجاه RTL'"
      >
        <span class="text-xs font-bold">{{ direction === 'rtl' ? 'LTR' : 'RTL' }}</span>
      </button>
      
      <!-- Label -->
      <div class="text-center transition-all duration-300" :class="isOpen ? 'opacity-100' : 'opacity-0'">
        <span class="text-xs text-gray-400 dark:text-gray-300 font-medium">التحكم</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue'

const colorMode = ref('light')
const direction = ref('rtl')
const isOpen = ref(true)

// Toggle switcher visibility
const toggleSwitcher = () => {
  isOpen.value = !isOpen.value
  localStorage.setItem('switcher-open', isOpen.value.toString())
}

// Toggle color mode
const toggleColorMode = () => {
  colorMode.value = colorMode.value === 'dark' ? 'light' : 'dark'
  document.documentElement.classList.toggle('dark')
  localStorage.setItem('color-mode', colorMode.value)
}

// Toggle direction
const toggleDirection = () => {
  direction.value = direction.value === 'rtl' ? 'ltr' : 'rtl'
  document.documentElement.setAttribute('dir', direction.value)
  localStorage.setItem('direction', direction.value)
}

// Initialize on mount
onMounted(() => {
  // Load saved preferences
  const savedColorMode = localStorage.getItem('color-mode') || 'light'
  const savedDirection = localStorage.getItem('direction') || 'rtl'
  const savedSwitcherOpen = localStorage.getItem('switcher-open')
  
  colorMode.value = savedColorMode
  direction.value = savedDirection
  isOpen.value = savedSwitcherOpen ? savedSwitcherOpen === 'true' : true
  
  // Apply to DOM
  if (colorMode.value === 'dark') {
    document.documentElement.classList.add('dark')
  }
  document.documentElement.setAttribute('dir', direction.value)
})

// Watch for changes and apply to body
watch([colorMode, direction], ([newColorMode, newDirection]) => {
  // Apply color mode
  if (newColorMode === 'dark') {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }
  
  // Apply direction
  document.documentElement.setAttribute('dir', newDirection)
})
</script>

<style scoped>
/* Smooth animations for switcher */
.transition-all {
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}

/* Hover effects for toggle button */
button:hover {
  box-shadow: 0 20px 40px -12px rgba(0, 0, 0, 0.3);
}

/* Enhanced shadows */
.shadow-2xl {
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
}

.shadow-3xl {
  box-shadow: 0 35px 70px -12px rgba(0, 0, 0, 0.3);
}

/* Backdrop blur enhancement */
.backdrop-blur-lg {
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
}

/* Custom scrollbar for webkit browsers */
::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: rgba(255, 255, 255, 0.1);
}

::-webkit-scrollbar-thumb {
  background: rgba(255, 255, 255, 0.3);
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: rgba(255, 255, 255, 0.5);
}
</style>
