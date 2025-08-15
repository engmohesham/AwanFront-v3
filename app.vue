<template>
  <div id="app" class="min-h-screen">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { useAuthStore } from '~/stores/auth'

const authStore = useAuthStore()

// Initialize color mode and direction on app mount
onMounted(() => {
  // Load saved preferences
  const savedColorMode = localStorage.getItem('color-mode') || 'light'
  const savedDirection = localStorage.getItem('direction') || 'rtl'
  
  // Apply color mode
  if (savedColorMode === 'dark') {
    document.documentElement.classList.add('dark')
  }
  
  // Apply direction
  document.documentElement.setAttribute('dir', savedDirection)
  
  // Set font family
  document.documentElement.style.fontFamily = 'Cairo, sans-serif'
})
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Cairo:wght@200;300;400;500;600;700;800;900&display=swap');

/* Global styles */
* {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
  direction: rtl;
}

body {
  font-family: 'Cairo', sans-serif;
  margin: 0;
  padding: 0;
  overflow-x: hidden;
}

#app {
  font-family: 'Cairo', sans-serif;
}

/* Dark mode transitions */
* {
  transition: background-color 0.3s ease, color 0.3s ease, border-color 0.3s ease;
}

/* RTL/LTR support */
[dir="rtl"] {
  direction: rtl;
}

[dir="ltr"] {
  direction: ltr;
}

/* Custom scrollbar */
::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: rgba(0, 0, 0, 0.1);
}

.dark ::-webkit-scrollbar-track {
  background: rgba(255, 255, 255, 0.1);
}

::-webkit-scrollbar-thumb {
  background: rgba(0, 0, 0, 0.3);
  border-radius: 4px;
}

.dark ::-webkit-scrollbar-thumb {
  background: rgba(255, 255, 255, 0.3);
}

::-webkit-scrollbar-thumb:hover {
  background: rgba(0, 0, 0, 0.5);
}

.dark ::-webkit-scrollbar-thumb:hover {
  background: rgba(255, 255, 255, 0.5);
}
</style>
