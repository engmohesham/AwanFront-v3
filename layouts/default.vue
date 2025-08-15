<template>
  <div class="min-h-screen bg-gray-50 dark:bg-gray-900">
    <!-- Header/Navbar -->
    <header class="fixed top-0 left-0 right-0 z-50 transition-all duration-300" :class="getHeaderClasses()">
      <nav class="container mx-auto px-4 py-4">
        <div class="flex items-center justify-between">
          <!-- Logo -->
          <NuxtLink to="/" class="flex items-center space-x-2 space-x-reverse">
            <div class="w-10 h-10 bg-gradient-to-r from-violet-600 to-fuchsia-600 rounded-lg flex items-center justify-center">
              <span class="text-white font-bold text-xl">أ</span>
            </div>
            <span class="text-2xl font-bold text-gray-900 dark:text-white">أوان كورسات</span>
          </NuxtLink>

          <!-- Navigation -->
          <div class="hidden md:flex items-center space-x-8 space-x-reverse">
            <NuxtLink 
              to="/" 
              :class="[
                'nav-link transition-colors duration-200',
                $route.path === '/' ? 'text-violet-600 dark:text-violet-400 font-semibold' : 'text-gray-900 dark:text-white hover:text-violet-600 dark:hover:text-violet-400'
              ]"
            >
              الرئيسية
            </NuxtLink>
            <NuxtLink 
              to="/courses" 
              :class="[
                'nav-link transition-colors duration-200',
                $route.path === '/courses' ? 'text-violet-600 dark:text-violet-400 font-semibold' : 'text-gray-900 dark:text-white hover:text-violet-600 dark:hover:text-violet-400'
              ]"
            >
              الكورسات
            </NuxtLink>
            <NuxtLink 
              to="/instructors" 
              :class="[
                'nav-link transition-colors duration-200',
                $route.path === '/instructors' ? 'text-violet-600 dark:text-violet-400 font-semibold' : 'text-gray-900 dark:text-white hover:text-violet-600 dark:hover:text-violet-400'
              ]"
            >
              المدربين
            </NuxtLink>
            <NuxtLink 
              to="/about" 
              :class="[
                'nav-link transition-colors duration-200',
                $route.path === '/about' ? 'text-violet-600 dark:text-violet-400 font-semibold' : 'text-gray-900 dark:text-white hover:text-violet-600 dark:hover:text-violet-400'
              ]"
            >
              من نحن
            </NuxtLink>
            <NuxtLink 
              to="/contact" 
              :class="[
                'nav-link transition-colors duration-200',
                $route.path === '/contact' ? 'text-violet-600 dark:text-violet-400 font-semibold' : 'text-gray-900 dark:text-white hover:text-violet-600 dark:hover:text-violet-400'
              ]"
            >
              اتصل بنا
            </NuxtLink>
          </div>

          <!-- Right Side -->
          <div class="flex items-center space-x-6 space-x-reverse">
            <!-- Cart -->
            <NuxtLink to="/cart" class="relative p-2 text-gray-900 dark:text-white hover:text-violet-600 dark:hover:text-violet-400 transition-colors">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m6-5v6a2 2 0 01-2 2H9a2 2 0 01-2-2v-6m6 0V9a2 2 0 00-2-2H9a2 2 0 00-2 2v4.01"></path>
              </svg>
              <span v-if="cartStore.itemCount > 0" class="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {{ cartStore.itemCount }}
              </span>
            </NuxtLink>

            <!-- User Icon (Mobile) -->
            <div class="md:hidden">
              <button @click="toggleMobileMenu" class="p-2 text-gray-900 dark:text-white hover:text-violet-600 dark:hover:text-violet-400 transition-colors">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                </svg>
              </button>
            </div>

            <!-- User Menu -->
            <div v-if="authStore.isAuthenticated" class="relative">
              <button @click="toggleUserMenu" class="flex items-center space-x-2 space-x-reverse text-gray-900 dark:text-white hover:text-violet-600 dark:hover:text-violet-400 transition-colors">
                <img v-if="authStore.user?.avatar" :src="authStore.user.avatar" :alt="authStore.user.name" class="w-8 h-8 rounded-full">
                <div v-else class="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
                  <span class="text-gray-600 text-sm">{{ authStore.user?.name?.charAt(0) || 'م' }}</span>
                </div>
                <span class="hidden sm:block">{{ authStore.user?.name || 'المستخدم' }}</span>
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </button>
              
              <!-- Dropdown Menu -->
              <div v-if="showUserMenu" class="absolute left-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 py-2">
                <NuxtLink to="/profile" class="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700">
                  الملف الشخصي
                </NuxtLink>
                <NuxtLink v-if="authStore.isInstructor" to="/dashboard" class="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700">
                  لوحة التحكم
                </NuxtLink>
                <button @click="logout" class="block w-full text-right px-4 py-2 text-red-600 hover:bg-gray-100 dark:hover:bg-gray-700">
                  تسجيل الخروج
                </button>
              </div>
            </div>

            <!-- Auth Buttons -->
            <div v-else class="hidden md:flex items-center space-x-4 space-x-reverse">
              <NuxtLink to="/login" class="btn-secondary-transparent">تسجيل الدخول</NuxtLink>
              <NuxtLink to="/register" class="btn-primary-transparent">إنشاء حساب</NuxtLink>
            </div>

            <!-- Mobile Menu Button -->
            <button @click="toggleMobileMenu" class="md:hidden p-2 text-gray-900 dark:text-white hover:text-violet-600 dark:hover:text-violet-400 transition-colors">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
        </div>

        <!-- Mobile Menu -->
        <div v-if="showMobileMenu" class="md:hidden mt-4 py-4 border-t border-gray-200 dark:border-gray-700">
          <div class="flex flex-col space-y-3">
            <NuxtLink 
              to="/" 
              :class="[
                'mobile-nav-link transition-colors duration-200',
                $route.path === '/' ? 'text-violet-600 dark:text-violet-400 font-semibold' : 'text-gray-900 dark:text-white hover:text-violet-600 dark:hover:text-violet-400'
              ]"
            >
              الرئيسية
            </NuxtLink>
            <NuxtLink 
              to="/courses" 
              :class="[
                'mobile-nav-link transition-colors duration-200',
                $route.path === '/courses' ? 'text-violet-600 dark:text-violet-400 font-semibold' : 'text-gray-900 dark:text-white hover:text-violet-600 dark:hover:text-violet-400'
              ]"
            >
              الكورسات
            </NuxtLink>
            <NuxtLink 
              to="/instructors" 
              :class="[
                'mobile-nav-link transition-colors duration-200',
                $route.path === '/instructors' ? 'text-violet-600 dark:text-violet-400 font-semibold' : 'text-gray-900 dark:text-white hover:text-violet-600 dark:hover:text-violet-400'
              ]"
            >
              المدربين
            </NuxtLink>
            <NuxtLink 
              to="/about" 
              :class="[
                'mobile-nav-link transition-colors duration-200',
                $route.path === '/about' ? 'text-violet-600 dark:text-violet-400 font-semibold' : 'text-gray-900 dark:text-white hover:text-violet-600 dark:hover:text-violet-400'
              ]"
            >
              من نحن
            </NuxtLink>
            <NuxtLink 
              to="/contact" 
              :class="[
                'mobile-nav-link transition-colors duration-200',
                $route.path === '/contact' ? 'text-violet-600 dark:text-violet-400 font-semibold' : 'text-gray-900 dark:text-white hover:text-violet-600 dark:hover:text-violet-400'
              ]"
            >
              اتصل بنا
            </NuxtLink>
            
            <!-- Mobile Auth Buttons -->
            <div v-if="!authStore.isAuthenticated" class="pt-4 border-t border-gray-200 dark:border-gray-600">
              <div class="flex flex-col space-y-3">
                <NuxtLink 
                  to="/login" 
                  class="w-full text-center py-3 px-6 bg-gray-800/90 dark:bg-white/20 text-white font-semibold rounded-xl transition-all duration-300 hover:bg-gray-700/90 dark:hover:bg-white/30 border border-gray-700/30 dark:border-white/30"
                >
                  تسجيل الدخول
                </NuxtLink>
                <NuxtLink 
                  to="/register" 
                  class="w-full text-center py-3 px-6 bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white font-semibold rounded-xl transition-all duration-300 hover:from-violet-700 hover:to-fuchsia-700 shadow-lg"
                >
                  إنشاء حساب
                </NuxtLink>
              </div>
            </div>
            
            <!-- Mobile User Menu -->
            <div v-else class="pt-4 border-t border-gray-200 dark:border-gray-600">
              <div class="flex items-center space-x-3 space-x-reverse mb-3">
                <img v-if="authStore.user?.avatar" :src="authStore.user.avatar" :alt="authStore.user.name" class="w-10 h-10 rounded-full">
                <div v-else class="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center">
                  <span class="text-gray-600 text-sm">{{ authStore.user?.name?.charAt(0) || 'م' }}</span>
                </div>
                <span class="text-gray-900 dark:text-white font-medium">{{ authStore.user?.name || 'المستخدم' }}</span>
              </div>
              <div class="flex flex-col space-y-2">
                <NuxtLink to="/profile" class="py-2 px-4 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors">
                  الملف الشخصي
                </NuxtLink>
                <NuxtLink v-if="authStore.isInstructor" to="/dashboard" class="py-2 px-4 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors">
                  لوحة التحكم
                </NuxtLink>
                <button @click="logout" class="w-full text-right py-2 px-4 text-red-600 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors">
                  تسجيل الخروج
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>

    <!-- Main Content -->
    <main class="flex-1">
      <slot />
    </main>



    <Footer />
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useAuthStore } from '~/stores/auth'
import { useCartStore } from '~/stores/cart'

const authStore = useAuthStore()
const cartStore = useCartStore()

const showUserMenu = ref(false)
const showMobileMenu = ref(false)
const scrolled = ref(false)

const toggleUserMenu = () => {
  showUserMenu.value = !showUserMenu.value
}

const toggleMobileMenu = () => {
  showMobileMenu.value = !showMobileMenu.value
}

const logout = async () => {
  await authStore.logout()
  showUserMenu.value = false
}

// Handle scroll for navbar background
const handleScroll = () => {
  scrolled.value = window.scrollY > 50
}

// Close dropdowns when clicking outside
onMounted(() => {
  // Add scroll listener
  window.addEventListener('scroll', handleScroll)
  
  document.addEventListener('click', (e) => {
    if (!e.target.closest('.relative')) {
      showUserMenu.value = false
    }
  })
  
  // Cleanup
  onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll)
  })
})

const getHeaderClasses = () => {
  if (showMobileMenu.value) {
    return 'bg-white/95 dark:bg-gray-900/95 backdrop-blur-md shadow-lg'
  }
  return scrolled.value ? 'bg-white/95 dark:bg-gray-900/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
}
</script>

<style scoped>
.nav-link {
  @apply font-medium;
}

.mobile-nav-link {
  @apply py-2;
}

.btn-primary {
  @apply bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-200;
}

.btn-secondary {
  @apply bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-2 px-4 rounded-lg transition-colors duration-200;
}

/* Transparent buttons for hero section */
.btn-primary-transparent {
  @apply bg-violet-600/90 hover:bg-violet-700 text-white font-semibold py-2 px-6 rounded-xl transition-all duration-300 border border-violet-500/30 backdrop-blur-sm hover:scale-105 hover:shadow-lg shadow-lg;
}

.btn-secondary-transparent {
  @apply bg-gray-800/90 dark:bg-white/20 hover:bg-gray-700/90 dark:hover:bg-white/30 text-white font-semibold py-2 px-6 rounded-xl transition-all duration-300 border border-gray-700/30 dark:border-white/30 backdrop-blur-sm hover:scale-105 hover:shadow-lg shadow-lg;
}

/* Navbar text colors based on scroll state */
.nav-link {
  @apply font-medium transition-all duration-300;
}

/* Smooth transitions for navbar */
header {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

/* Backdrop blur effect */
.backdrop-blur-md {
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
}
</style>
