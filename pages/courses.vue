<template>
  <div class="min-h-screen bg-gray-50 dark:bg-gray-900 py-8">
    <div class="container mx-auto px-4">
      <!-- Page Header -->
      <div class="text-center mb-12">
        <h1 class="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          استكشف الكورسات
        </h1>
        <p class="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          اكتشف آلاف الكورسات في مختلف المجالات من نخبة من المدربين المحترفين
        </p>
      </div>

      <!-- Search and Filters -->
      <div class="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 mb-8">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-4">
          <!-- Search -->
          <div class="md:col-span-2">
            <div class="relative">
              <input
                v-model="searchQuery"
                type="text"
                placeholder="ابحث عن كورس أو مدرب..."
                class="input-field pr-12"
              />
              <div class="absolute left-3 top-1/2 transform -translate-y-1/2">
                <svg class="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                </svg>
              </div>
            </div>
          </div>

          <!-- Category Filter -->
          <div>
            <select v-model="selectedCategory" class="input-field">
              <option value="">جميع الفئات</option>
              <option v-for="category in categories" :key="category.id" :value="category.id">
                {{ category.name }}
              </option>
            </select>
          </div>

          <!-- Price Filter -->
          <div>
            <select v-model="selectedPrice" class="input-field">
              <option value="">جميع الأسعار</option>
              <option value="free">مجاني</option>
              <option value="paid">مدفوع</option>
              <option value="0-100">0 - 100 ريال</option>
              <option value="100-500">100 - 500 ريال</option>
              <option value="500+">500+ ريال</option>
            </select>
          </div>
        </div>

        <!-- Advanced Filters -->
        <div class="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
          <div class="grid grid-cols-1 md:grid-cols-5 gap-4">
            <div>
              <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                مستوى الصعوبة
              </label>
              <select v-model="selectedLevel" class="input-field">
                <option value="">جميع المستويات</option>
                <option value="beginner">مبتدئ</option>
                <option value="intermediate">متوسط</option>
                <option value="advanced">متقدم</option>
              </select>
            </div>

            <div>
              <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                مدة الكورس
              </label>
              <select v-model="selectedDuration" class="input-field">
                <option value="">جميع المدد</option>
                <option value="0-2">0 - 2 ساعة</option>
                <option value="2-5">2 - 5 ساعات</option>
                <option value="5-10">5 - 10 ساعات</option>
                <option value="10+">10+ ساعات</option>
              </select>
            </div>

            <div>
              <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                التقييم
              </label>
              <select v-model="selectedRating" class="input-field">
                <option value="">جميع التقييمات</option>
                <option value="4.5+">4.5+ نجوم</option>
                <option value="4.0+">4.0+ نجوم</option>
                <option value="3.5+">3.5+ نجوم</option>
              </select>
            </div>

            <div>
              <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                اللغة
              </label>
              <select v-model="selectedLanguage" class="input-field">
                <option value="">جميع اللغات</option>
                <option value="arabic">العربية</option>
                <option value="english">الإنجليزية</option>
                <option value="french">الفرنسية</option>
              </select>
            </div>

            <div class="flex items-end">
              <button 
                @click="clearFilters"
                class="btn-secondary w-full"
              >
                مسح الفلاتر
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- Results Count and Sort -->
      <div class="flex flex-col sm:flex-row justify-between items-center mb-6">
        <div class="text-gray-600 dark:text-gray-400 mb-4 sm:mb-0">
          تم العثور على {{ filteredCourses.length }} كورس
        </div>
        
        <div class="flex items-center space-x-4 space-x-reverse">
          <label class="text-sm text-gray-700 dark:text-gray-300">ترتيب حسب:</label>
          <select v-model="sortBy" class="input-field w-auto">
            <option value="relevance">الأكثر صلة</option>
            <option value="newest">الأحدث</option>
            <option value="rating">الأعلى تقييماً</option>
            <option value="price-low">السعر: من الأقل للأعلى</option>
            <option value="price-high">السعر: من الأعلى للأقل</option>
            <option value="popularity">الأكثر شعبية</option>
          </select>
        </div>
      </div>

      <!-- Courses Grid -->
      <div v-if="filteredCourses.length > 0" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        <CourseCard 
          v-for="course in paginatedCourses" 
          :key="course.id" 
          :course="course"
        />
      </div>

      <!-- No Results -->
      <div v-else class="text-center py-16">
        <div class="text-6xl mb-4">🔍</div>
        <h2 class="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
          لم يتم العثور على نتائج
        </h2>
        <p class="text-gray-600 dark:text-gray-400 mb-8">
          جرب تغيير الفلاتر أو البحث بكلمات مختلفة
        </p>
        <button @click="clearFilters" class="btn-primary">
          مسح جميع الفلاتر
        </button>
      </div>

      <!-- Pagination -->
      <div v-if="totalPages > 1" class="mt-12 flex justify-center">
        <div class="flex items-center space-x-2 space-x-reverse">
          <button 
            @click="currentPage--"
            :disabled="currentPage === 1"
            class="p-2 rounded-lg border border-gray-300 dark:border-gray-600 text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
            </svg>
          </button>
          
          <div class="flex space-x-1 space-x-reverse">
            <button 
              v-for="page in visiblePages" 
              :key="page"
              @click="currentPage = page"
              :class="[
                'px-3 py-2 rounded-lg border transition-colors',
                page === currentPage 
                  ? 'bg-blue-600 text-white border-blue-600' 
                  : 'border-gray-300 dark:border-gray-600 text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700'
              ]"
            >
              {{ page }}
            </button>
          </div>
          
          <button 
            @click="currentPage++"
            :disabled="currentPage === totalPages"
            class="p-2 rounded-lg border border-gray-300 dark:border-gray-600 text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, watch } from 'vue'
import { useCoursesStore } from '~/stores/courses'
import { gsap } from 'gsap'

const coursesStore = useCoursesStore()

// Reactive data
const searchQuery = ref('')
const selectedCategory = ref('')
const selectedPrice = ref('')
const selectedLevel = ref('')
const selectedDuration = ref('')
const selectedRating = ref('')
const selectedLanguage = ref('')
const sortBy = ref('relevance')
const currentPage = ref(1)
const itemsPerPage = 12

// Sample data (in real app, this would come from API)
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

const allCourses = ref([
  {
    id: 1,
    title: 'مقدمة في تطوير الويب',
    instructor: 'أحمد محمد',
    price: 199,
    rating: 4.8,
    students: 1250,
    category: 'تطوير الويب',
    level: 'beginner',
    duration: 8,
    language: 'arabic'
  },
  {
    id: 2,
    title: 'أساسيات التصميم الجرافيكي',
    instructor: 'سارة أحمد',
    price: 149,
    rating: 4.9,
    students: 890,
    category: 'التصميم',
    level: 'beginner',
    duration: 6,
    language: 'arabic'
  },
  {
    id: 3,
    title: 'تعلم اللغة الإنجليزية للمبتدئين',
    instructor: 'محمد علي',
    price: 99,
    rating: 4.7,
    students: 2100,
    category: 'اللغات',
    level: 'beginner',
    duration: 12,
    language: 'english'
  },
  {
    id: 4,
    title: 'React.js للمطورين المتقدمين',
    instructor: 'فاطمة حسن',
    price: 299,
    rating: 4.9,
    students: 750,
    category: 'تطوير الويب',
    level: 'advanced',
    duration: 15,
    language: 'arabic'
  },
  {
    id: 5,
    title: 'أساسيات التسويق الرقمي',
    instructor: 'علي محمود',
    price: 179,
    rating: 4.6,
    students: 1100,
    category: 'الأعمال',
    level: 'intermediate',
    duration: 10,
    language: 'arabic'
  },
  {
    id: 6,
    title: 'تعلم العزف على الجيتار',
    instructor: 'نور الدين',
    price: 129,
    rating: 4.8,
    students: 680,
    category: 'الموسيقى',
    level: 'beginner',
    duration: 8,
    language: 'arabic'
  }
])

// Computed properties
const filteredCourses = computed(() => {
  let filtered = allCourses.value

  // Search filter
  if (searchQuery.value) {
    filtered = filtered.filter(course => 
      course.title.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
      course.instructor.toLowerCase().includes(searchQuery.value.toLowerCase())
    )
  }

  // Category filter
  if (selectedCategory.value) {
    const category = categories.value.find(c => c.id == selectedCategory.value)
    if (category) {
      filtered = filtered.filter(course => course.category === category.name)
    }
  }

  // Price filter
  if (selectedPrice.value) {
    switch (selectedPrice.value) {
      case 'free':
        filtered = filtered.filter(course => course.price === 0)
        break
      case 'paid':
        filtered = filtered.filter(course => course.price > 0)
        break
      case '0-100':
        filtered = filtered.filter(course => course.price >= 0 && course.price <= 100)
        break
      case '100-500':
        filtered = filtered.filter(course => course.price >= 100 && course.price <= 500)
        break
      case '500+':
        filtered = filtered.filter(course => course.price >= 500)
        break
    }
  }

  // Level filter
  if (selectedLevel.value) {
    filtered = filtered.filter(course => course.level === selectedLevel.value)
  }

  // Duration filter
  if (selectedDuration.value) {
    const [min, max] = selectedDuration.value.split('-').map(Number)
    if (max) {
      filtered = filtered.filter(course => course.duration >= min && course.duration <= max)
    } else {
      filtered = filtered.filter(course => course.duration >= min)
    }
  }

  // Rating filter
  if (selectedRating.value) {
    const minRating = parseFloat(selectedRating.value)
    filtered = filtered.filter(course => course.rating >= minRating)
  }

  // Language filter
  if (selectedLanguage.value) {
    filtered = filtered.filter(course => course.language === selectedLanguage.value)
  }

  return filtered
})

const sortedCourses = computed(() => {
  const courses = [...filteredCourses.value]
  
  switch (sortBy.value) {
    case 'newest':
      return courses.sort((a, b) => b.id - a.id)
    case 'rating':
      return courses.sort((a, b) => b.rating - a.rating)
    case 'price-low':
      return courses.sort((a, b) => a.price - b.price)
    case 'price-high':
      return courses.sort((a, b) => b.price - a.price)
    case 'popularity':
      return courses.sort((a, b) => b.students - a.students)
    default:
      return courses
  }
})

const totalPages = computed(() => Math.ceil(sortedCourses.value.length / itemsPerPage))

const paginatedCourses = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage
  const end = start + itemsPerPage
  return sortedCourses.value.slice(start, end)
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
  selectedPrice.value = ''
  selectedLevel.value = ''
  selectedDuration.value = ''
  selectedRating.value = ''
  selectedLanguage.value = ''
  currentPage.value = 1
}

// Watch for filter changes to reset pagination
watch([searchQuery, selectedCategory, selectedPrice, selectedLevel, selectedDuration, selectedRating, selectedLanguage], () => {
  currentPage.value = 1
})

onMounted(() => {
  // GSAP animations
  gsap.from('.grid', {
    opacity: 0,
    y: 30,
    duration: 1,
    ease: 'power2.out'
  })
})
</script>
