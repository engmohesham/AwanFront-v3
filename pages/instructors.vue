<template>
  <div class="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900 py-12">
    <div class="w-full max-w-7xl mx-auto px-6 lg:px-8">
      <!-- Hero Section -->
      <div class="text-center mb-16 lg:mb-20">
        <div class="inline-flex items-center space-x-3 space-x-reverse bg-yellow-500 text-gray-900 px-6 py-3 rounded-full text-sm font-semibold shadow-lg mb-6">
          <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
          </svg>
          <span>نخبة من المدربين المحترفين</span>
        </div>
        
        <h1 class="text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
          تعلم من <span class="text-purple-400">أفضل المدربين</span>
        </h1>
        <p class="text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
          اكتشف عالم من المعرفة مع نخبة من المدربين ذوي الخبرة في مختلف المجالات
        </p>
      </div>

      <!-- Stats Cards -->
      <div class="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
        <div class="stat-card bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl p-6 text-center text-white shadow-xl">
          <div class="w-16 h-16 mx-auto mb-4 bg-white/20 rounded-2xl flex items-center justify-center">
            <svg class="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
          </div>
          <div class="text-3xl font-bold mb-2">50+</div>
          <div class="text-blue-100">مدرب محترف</div>
        </div>
        
        <div class="stat-card bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl p-6 text-center text-white shadow-xl">
          <div class="w-16 h-16 mx-auto mb-4 bg-white/20 rounded-2xl flex items-center justify-center">
            <svg class="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
              <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
              <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path>
            </svg>
          </div>
          <div class="text-3xl font-bold mb-2">500+</div>
          <div class="text-purple-100">كورس متاح</div>
        </div>
        
        <div class="stat-card bg-gradient-to-br from-green-500 to-green-600 rounded-2xl p-6 text-center text-white shadow-xl">
          <div class="w-16 h-16 mx-auto mb-4 bg-white/20 rounded-2xl flex items-center justify-center">
            <svg class="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
              <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z"></path>
            </svg>
          </div>
          <div class="text-3xl font-bold mb-2">10K+</div>
          <div class="text-green-100">طالب نشط</div>
        </div>
        
        <div class="stat-card bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl p-6 text-center text-white shadow-xl">
          <div class="w-16 h-16 mx-auto mb-4 bg-white/20 rounded-2xl flex items-center justify-center">
            <svg class="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
            </svg>
          </div>
          <div class="text-3xl font-bold mb-2">95%</div>
          <div class="text-orange-100">معدل الرضا</div>
        </div>
      </div>

      <!-- Search and Filters -->
      <div class="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl p-8 mb-12 border border-white/20">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <!-- Search -->
          <div class="md:col-span-2">
            <div class="relative">
              <input
                v-model="searchQuery"
                type="text"
                placeholder="ابحث عن مدرب..."
                class="w-full bg-white/20 border border-white/30 text-white placeholder-gray-300 rounded-xl px-6 py-4 pr-12 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent transition-all duration-300"
              />
              <div class="absolute left-4 top-1/2 transform -translate-y-1/2">
                <svg class="w-6 h-6 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                </svg>
              </div>
            </div>
          </div>

          <!-- Category Filter -->
          <div>
            <select 
              v-model="selectedCategory" 
              class="w-full bg-white/20 border border-white/30 text-white rounded-xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent transition-all duration-300"
            >
              <option value="" class="bg-gray-800 text-white">جميع التخصصات</option>
              <option v-for="category in categories" :key="category.id" :value="category.id" class="bg-gray-800 text-white">
                {{ category.name }}
              </option>
            </select>
          </div>
        </div>
      </div>

      <!-- Instructors Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 w-full">
        <div 
          v-for="instructor in allInstructors" 
          :key="instructor.id"
          class="instructor-card group bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl overflow-hidden transform hover:scale-105 transition-all duration-500 hover:shadow-3xl w-full h-full border border-white/20 hover:border-white/40"
        >
          <!-- Instructor Header with Gradient -->
          <div class="relative h-56 overflow-hidden">
            <div class="absolute inset-0 bg-gradient-to-br from-purple-500 via-blue-500 to-green-500 opacity-80 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div class="absolute inset-0 bg-black/20"></div>
            
            <!-- Floating Icons -->
            <div class="absolute top-4 right-4 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
              <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </div>
            
            <div class="absolute bottom-6 right-6 text-white">
              <div class="text-2xl lg:text-3xl font-bold mb-2">{{ instructor.name }}</div>
              <div class="text-blue-100 text-lg">{{ instructor.specialty }}</div>
            </div>
          </div>

          <!-- Instructor Avatar -->
          <div class="relative -mt-20 mx-8 mb-6">
            <div class="w-32 h-32 bg-gradient-to-br from-purple-400 to-blue-500 rounded-full flex items-center justify-center border-4 border-white shadow-2xl group-hover:scale-110 transition-transform duration-500">
              <span class="text-white text-4xl font-bold">{{ instructor.name.charAt(0) }}</span>
            </div>
            <!-- Decorative Ring -->
            <div class="absolute inset-0 w-32 h-32 border-2 border-purple-300/50 rounded-full animate-pulse"></div>
          </div>

          <!-- Instructor Info -->
          <div class="px-8 pb-8">
            <!-- Stats -->
            <div class="grid grid-cols-3 gap-4 mb-6 text-center">
              <div class="bg-white/10 backdrop-blur-sm rounded-xl p-3">
                <div class="text-xl font-bold text-blue-400 mb-1">{{ instructor.coursesCount }}</div>
                <div class="text-sm text-gray-300">كورس</div>
              </div>
              <div class="bg-white/10 backdrop-blur-sm rounded-xl p-3">
                <div class="text-xl font-bold text-purple-400 mb-1">{{ instructor.studentsCount }}</div>
                <div class="text-sm text-gray-300">طالب</div>
              </div>
              <div class="bg-white/10 backdrop-blur-sm rounded-xl p-3">
                <div class="text-xl font-bold text-green-400 mb-1">{{ instructor.rating }}</div>
                <div class="text-sm text-gray-300">تقييم</div>
              </div>
            </div>

            <!-- Description -->
            <p class="text-gray-300 text-base mb-6 line-clamp-3 leading-relaxed">
              {{ instructor.description }}
            </p>

            <!-- Skills -->
            <div class="mb-6">
              <div class="flex flex-wrap gap-2">
                <span 
                  v-for="skill in instructor.skills.slice(0, 3)" 
                  :key="skill"
                  class="px-3 py-2 bg-purple-500/20 text-purple-300 text-sm rounded-xl border border-purple-400/30 backdrop-blur-sm"
                >
                  {{ skill }}
                </span>
                <span v-if="instructor.skills.length > 3" class="px-3 py-2 bg-gray-500/20 text-gray-300 text-sm rounded-xl border border-gray-400/30 backdrop-blur-sm">
                  +{{ instructor.skills.length - 3 }}
                </span>
              </div>
            </div>

            <!-- Actions -->
            <div class="flex space-x-4 space-x-reverse">
              <NuxtLink 
                :to="`/instructor/${instructor.id}`"
                class="flex-1 bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white font-semibold py-3 px-6 rounded-xl text-center transition-all duration-300 hover:shadow-lg hover:scale-105"
              >
                عرض الملف الشخصي
              </NuxtLink>
              <button class="bg-white/20 backdrop-blur-sm border border-white/30 text-white hover:bg-white/30 px-4 py-3 rounded-xl transition-all duration-300 hover:scale-105">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- No Results (Hidden for now) -->
      <div v-if="false" class="text-center py-16">
        <div class="text-6xl mb-4">👨‍🏫</div>
        <h2 class="text-2xl font-semibold text-white mb-4">
          لم يتم العثور على مدربين
        </h2>
        <p class="text-gray-300 mb-8">
          جرب تغيير الفلاتر أو البحث بكلمات مختلفة
        </p>
        <button @click="clearFilters" class="bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold py-3 px-6 rounded-xl hover:from-purple-600 hover:to-blue-600 transition-all duration-300">
          مسح جميع الفلاتر
        </button>
      </div>

      <!-- Pagination -->
      <div v-if="totalPages > 1" class="mt-16 flex justify-center">
        <div class="flex items-center space-x-3 space-x-reverse">
          <button 
            @click="currentPage--"
            :disabled="currentPage === 1"
            class="p-3 rounded-xl border border-white/30 text-white hover:bg-white/20 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 backdrop-blur-sm"
          >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
            </svg>
          </button>
          
          <div class="flex space-x-2 space-x-reverse">
            <button 
              v-for="page in visiblePages" 
              :key="page"
              @click="currentPage = page"
              :class="[
                'px-4 py-3 rounded-xl border transition-all duration-300 backdrop-blur-sm',
                page === currentPage 
                  ? 'bg-gradient-to-r from-purple-500 to-blue-500 text-white border-transparent shadow-lg' 
                  : 'border-white/30 text-white hover:bg-white/20'
              ]"
            >
              {{ page }}
            </button>
          </div>
          
          <button 
            @click="currentPage++"
            :disabled="currentPage === totalPages"
            class="p-3 rounded-xl border border-white/30 text-white hover:bg-white/20 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 backdrop-blur-sm"
          >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
            </svg>
          </button>
        </div>
      </div>
    </div>

    <!-- WhatsApp Contact -->
    <WhatsAppContact />
  </div>
</template>

<script setup>
import { ref, computed, onMounted, watch } from 'vue'
import WhatsAppContact from '~/components/WhatsAppContact.vue'

// Reactive data
const searchQuery = ref('')
const selectedCategory = ref('')
const currentPage = ref(1)
const itemsPerPage = 9

// Sample data
const categories = ref([
  { id: 1, name: 'تطوير الويب' },
  { id: 2, name: 'التصميم' },
  { id: 3, name: 'اللغات' },
  { id: 4, name: 'الأعمال' },
  { id: 5, name: 'الموسيقى' },
  { id: 6, name: 'الصحة' },
  { id: 7, name: 'الرياضة' },
  { id: 8, name: 'الطبخ' }
])

const allInstructors = ref([
  {
    id: 1,
    name: 'أحمد محمد',
    specialty: 'تطوير الويب',
    description: 'مطور ويب محترف مع أكثر من 8 سنوات من الخبرة في تطوير التطبيقات الحديثة باستخدام React و Node.js',
    coursesCount: 15,
    studentsCount: 2500,
    rating: 4.9,
    skills: ['React', 'Node.js', 'JavaScript', 'TypeScript', 'MongoDB', 'AWS']
  },
  {
    id: 2,
    name: 'سارة أحمد',
    specialty: 'التصميم الجرافيكي',
    description: 'مصممة جرافيكية موهوبة متخصصة في تصميم الهويات البصرية والمواقع الإلكترونية',
    coursesCount: 12,
    studentsCount: 1800,
    rating: 4.8,
    skills: ['Photoshop', 'Illustrator', 'Figma', 'UI/UX', 'Branding']
  },
  {
    id: 3,
    name: 'محمد علي',
    specialty: 'تعليم اللغات',
    description: 'مدرس لغة إنجليزية محترف مع شهادات دولية وخبرة في تدريس الطلاب من جميع المستويات',
    coursesCount: 8,
    studentsCount: 3200,
    rating: 4.7,
    skills: ['English', 'TOEFL', 'IELTS', 'Business English', 'Conversation']
  },
  {
    id: 4,
    name: 'فاطمة حسن',
    specialty: 'تطوير الويب',
    description: 'مطورة ويب متقدمة متخصصة في React و Vue.js مع خبرة في تطوير تطبيقات المؤسسات',
    coursesCount: 18,
    studentsCount: 1900,
    rating: 4.9,
    skills: ['React', 'Vue.js', 'Python', 'Django', 'PostgreSQL', 'Docker']
  },
  {
    id: 5,
    name: 'علي محمود',
    specialty: 'التسويق الرقمي',
    description: 'خبير تسويق رقمي مع أكثر من 10 سنوات من الخبرة في استراتيجيات التسويق الحديثة',
    coursesCount: 22,
    studentsCount: 4100,
    rating: 4.8,
    skills: ['SEO', 'Google Ads', 'Facebook Ads', 'Content Marketing', 'Analytics']
  },
  {
    id: 6,
    name: 'نور الدين',
    specialty: 'الموسيقى',
    description: 'موسيقي محترف وعازف جيتار مع خبرة في تدريس الموسيقى للمبتدئين والمتقدمين',
    coursesCount: 14,
    studentsCount: 1200,
    rating: 4.9,
    skills: ['Guitar', 'Music Theory', 'Composition', 'Recording', 'Performance']
  },
  {
    id: 7,
    name: 'ريم أحمد',
    specialty: 'التصميم الداخلي',
    description: 'مصممة داخلية محترفة متخصصة في تصميم المساحات السكنية والتجارية الحديثة',
    coursesCount: 16,
    studentsCount: 2800,
    rating: 4.8,
    skills: ['AutoCAD', '3D Max', 'SketchUp', 'Interior Design', 'Furniture']
  },
  {
    id: 8,
    name: 'كريم سعيد',
    specialty: 'تطوير تطبيقات الموبايل',
    description: 'مطور تطبيقات موبايل متخصص في iOS و Android مع خبرة في React Native و Flutter',
    coursesCount: 20,
    studentsCount: 3500,
    rating: 4.9,
    skills: ['React Native', 'Flutter', 'iOS', 'Android', 'Firebase', 'Swift']
  },
  {
    id: 9,
    name: 'ليلى محمود',
    specialty: 'التصوير الفوتوغرافي',
    description: 'مصورة فوتوغرافية محترفة متخصصة في التصوير التجاري والطبيعة',
    coursesCount: 10,
    studentsCount: 1600,
    rating: 4.7,
    skills: ['Photography', 'Lightroom', 'Photoshop', 'Composition', 'Lighting']
  }
])

// Computed properties
const filteredInstructors = computed(() => {
  let filtered = allInstructors.value

  // Search filter
  if (searchQuery.value) {
    filtered = filtered.filter(instructor => 
      instructor.name.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
      instructor.specialty.toLowerCase().includes(searchQuery.value.toLowerCase())
    )
  }

  // Category filter
  if (selectedCategory.value) {
    const category = categories.value.find(c => c.id == selectedCategory.value)
    if (category) {
      filtered = filtered.filter(instructor => instructor.specialty === category.name)
    }
  }

  return filtered
})

const totalPages = computed(() => Math.ceil(filteredInstructors.value.length / itemsPerPage))

const paginatedInstructors = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage
  const end = start + itemsPerPage
  return filteredInstructors.value.slice(start, end)
})

const visiblePages = computed(() => {
  const pages = []
  const maxVisible = 5
  let start = Math.max(1, currentPage.value - Math.floor(maxVisible / 2))
  let end = Math.min(totalPages.value, start + maxVisible - 1)
  
  if (end - start + 1 < maxVisible) {
    start = Math.max(1, end - maxVisible + 1)
  }
  
  for (let i = start; i <= end; i++) {
    pages.push(i)
  }
  
  return pages
})

// Methods
const clearFilters = () => {
  searchQuery.value = ''
  selectedCategory.value = ''
  currentPage.value = 1
}

// Watch for filter changes to reset pagination
watch([searchQuery, selectedCategory], () => {
  currentPage.value = 1
})

onMounted(() => {
  // CSS animations will handle the entrance effects
  console.log('Page loaded successfully without GSAP')
})
</script>

<style scoped>
.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.instructor-card {
  min-width: 0;
  max-width: 100%;
  box-sizing: border-box;
  opacity: 0;
  transform: translateY(30px);
  animation: fadeInUp 0.8s ease-out forwards;
}

/* Stagger animation delays for cards */
.instructor-card:nth-child(1) { animation-delay: 0.1s; }
.instructor-card:nth-child(2) { animation-delay: 0.2s; }
.instructor-card:nth-child(3) { animation-delay: 0.3s; }
.instructor-card:nth-child(4) { animation-delay: 0.4s; }
.instructor-card:nth-child(5) { animation-delay: 0.5s; }
.instructor-card:nth-child(6) { animation-delay: 0.6s; }
.instructor-card:nth-child(7) { animation-delay: 0.7s; }
.instructor-card:nth-child(8) { animation-delay: 0.8s; }
.instructor-card:nth-child(9) { animation-delay: 0.9s; }

/* Fade in animation */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Enhanced hover effects */
.instructor-card:hover {
  transform: translateY(-8px) scale(1.02);
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
}

/* Stat cards animation */
.stat-card {
  opacity: 0;
  transform: translateY(20px);
  animation: statCardFadeIn 1s ease-out forwards;
}

.stat-card:nth-child(1) { animation-delay: 0.2s; }
.stat-card:nth-child(2) { animation-delay: 0.4s; }
.stat-card:nth-child(3) { animation-delay: 0.6s; }
.stat-card:nth-child(4) { animation-delay: 0.8s; }

@keyframes statCardFadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Floating icons animation */
.stat-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 20px 40px -12px rgba(0, 0, 0, 0.3);
}

/* Backdrop blur effects */
.backdrop-blur-lg {
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
}

.backdrop-blur-sm {
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
}

/* Glass morphism effect */
.bg-white\/10 {
  background-color: rgba(255, 255, 255, 0.1);
}

.bg-white\/20 {
  background-color: rgba(255, 255, 255, 0.2);
}

.border-white\/20 {
  border-color: rgba(255, 255, 255, 0.2);
}

.border-white\/30 {
  border-color: rgba(255, 255, 255, 0.3);
}

.border-white\/40 {
  border-color: rgba(255, 255, 255, 0.4);
}

/* Enhanced shadows */
.shadow-2xl {
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
}

.shadow-3xl {
  box-shadow: 0 35px 70px -12px rgba(0, 0, 0, 0.3);
}

/* Gradient text effects */
.text-purple-400 {
  background: linear-gradient(135deg, #a855f7, #3b82f6);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

/* Animated decorative ring */
.animate-pulse {
  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

@keyframes pulse {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
}

/* Enhanced transitions */
.transition-all {
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 300ms;
}

.transition-all.duration-500 {
  transition-duration: 500ms;
}

/* Focus states for form elements */
.focus\:ring-2:focus {
  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);
  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);
}

.focus\:ring-purple-400:focus {
  --tw-ring-color: #a855f7;
}

.focus\:border-transparent:focus {
  border-color: transparent;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .stat-card {
    padding: 1rem;
  }
  
  .stat-card .w-16 {
    width: 3rem;
    height: 3rem;
  }
  
  .stat-card .text-3xl {
    font-size: 1.5rem;
  }
}

/* RTL specific adjustments */
.space-x-reverse > :not([hidden]) ~ :not([hidden]) {
  --tw-space-x-reverse: 1;
}

/* Ensure proper grid behavior */
.grid > * {
  min-width: 0;
  max-width: 100%;
  box-sizing: border-box;
}

/* Container fixes */
.w-full {
  width: 100% !important;
}

.max-w-7xl {
  max-width: 80rem !important;
}

/* Ensure no horizontal overflow but allow vertical scroll */
body, html {
  overflow-x: hidden;
  overflow-y: auto;
}

/* Fix for RTL layout */
.rtl {
  direction: rtl;
}

/* Ensure page can scroll */
.min-h-screen {
  min-height: 100vh;
  height: auto;
  overflow-y: visible;
}

/* Smooth transitions */
* {
  transition: all 0.3s ease;
}

/* Enhanced button hover effects */
.hover\:scale-105:hover {
  transform: scale(1.05);
}

.hover\:scale-110:hover {
  transform: scale(1.1);
}

/* Glass morphism for form elements */
.bg-white\/20 {
  background-color: rgba(255, 255, 255, 0.2);
}

.placeholder-gray-300::placeholder {
  color: #d1d5db;
}

/* Enhanced focus states */
.focus\:outline-none:focus {
  outline: 2px solid transparent;
  outline-offset: 2px;
}
</style>
