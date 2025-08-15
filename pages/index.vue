<template>
  <div>
    <!-- Main Content Wrapper -->
    <main class="main-content-wrapper">
      <!-- Hero Section -->
      <section class="relative pt-36 md:pt-16 pb-28 md:pb-20 overflow-hidden  flex items-center text-white bg-gradient-to-br from-violet-50 via-white to-purple-50 dark:from-violet-900 dark:via-purple-900 dark:to-blue-900 bg-center bg-no-repeat bg-cover" :style="{ backgroundImage: `url(${bg})` }" id="home">
        <!-- Dark mode overlay for better text readability -->
        <div class="absolute inset-0 bg-gradient-to-br from-black/20 via-transparent to-black/30 dark:from-black/40 dark:via-transparent dark:to-black/50 pointer-events-none"></div>
        
        <div class="container relative mx-auto px-4 sm:px-6 lg:px-8">
          <div class="grid md:grid-cols-2 grid-cols-1 gap-12 lg:gap-16 items-center">
            <!-- النص الأيمن -->
            <div class="text-right z-10 relative md:pr-8">
              <h1 class="font-bold !leading-normal space-y-4 tracking-wide text-4xl lg:text-5xl xl:text-6xl mb-6 text-gray-900 dark:text-white">
                أفضل <span class="before:block  before:absolute before:-inset-2 before:-skew-y-6 before:bg-gradient-to-tl before:from-violet-600 before:to-fuchsia-600 relative inline-block"><span class="relative text-white font-bold">الدورات</span></span> أونلاين<br> من <span class="font-bold mt-10 text-gray-900 dark:text-white">أوان كورسات</span>
              </h1>
              <p class="text-gray-600 dark:text-gray-200 text-xl max-w-xl ml-auto mb-8 leading-relaxed">
                اكتشف عالماً من المعرفة والفرص مع منصتنا التعليمية عبر الإنترنت وابدأ مسيرتك المهنية الجديدة.
              </p>

              <div class="flex flex-col sm:flex-row gap-4 sm:justify-start">
                <NuxtLink to="/courses" class="h-12 px-8 inline-flex items-center justify-center font-medium rounded-xl bg-gradient-to-r from-violet-600 to-fuchsia-600 hover:from-violet-700 hover:to-fuchsia-700 dark:from-violet-500 dark:to-fuchsia-500 dark:hover:from-violet-600 dark:hover:to-fuchsia-600 text-white shadow-xl hover:shadow-2xl dark:shadow-violet-500/25 dark:hover:shadow-violet-500/40 transition-all duration-300 transform hover:scale-105">
                    استكشف الكورسات <svg class="w-5 h-5 mr-2 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path></svg>
                </NuxtLink>
              </div>
            </div>

            <!-- الصورة والبطاقات العائمة -->
            <div class="lg:mr-8 relative z-10 md:pl-8">
              <div class="relative">
                <img :src="heroImg" class="mx-auto w-full max-w-lg drop-shadow-2xl dark:drop-shadow-[0_0_30px_rgba(139,92,246,0.3)]" alt="hero">

                <!-- بطاقة المدربين -->
                <div class="absolute md:bottom-16 bottom-3 md:-right-10 -right-2 p-4 rounded-xl shadow-xl bg-white/95 dark:bg-gray-800/95 backdrop-blur-md text-gray-900 dark:text-gray-100 w-56 z-20 border border-white/20 dark:border-gray-700/50 floating-card">
                  <h5 class="text-lg font-medium mb-3 text-gray-800 dark:text-gray-200">مدربونا</h5>
                  <ul class="list-none relative">
                    <li v-for="(item, index) in teamImg" :key="index" class="inline-block relative -ml-4 first:ml-0 mx-[2px]"><img :src="item" class="w-10 h-10 rounded-full border-4 border-white shadow-lg hover:scale-110 transition-transform duration-300" alt=""/></li>
                    <li class="inline-block relative -ml-4"><span class="w-9 h-9 inline-flex items-center justify-center rounded-full bg-violet-600 text-white font-bold text-lg hover:scale-110 transition-transform duration-300">+</span></li>
                  </ul>
                </div>

                <!-- بطاقة الدورات -->
                <div class="absolute top-36 md:-left-10 -left-3 p-4 rounded-xl shadow-xl bg-white/95 dark:bg-gray-800/95 backdrop-blur-md text-gray-900 dark:text-gray-100 w-52 z-20 border border-white/20 dark:border-gray-700/50 floating-card">
                  <div class="flex items-center">
                    <div class="flex items-center justify-center h-14 min-w-14 bg-violet-600/10 dark:bg-violet-500/20 text-violet-700 dark:text-violet-400 text-center rounded-full ml-3">
                      <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5z M12 14l6.16-3.422A12.083 12.083 0 0118.825 17.5 11.952 11.952 0 0012 20.055 11.952 11.952 0 005.175 17.5a12.078 12.078 0 01.665-6.422L12 14z"/></svg>
                    </div>
                    <div class="flex-1">
                      <span class="text-slate-500 dark:text-gray-400 text-sm">دورات أونلاين</span>
                      <p class="text-xl font-bold text-gray-900 dark:text-gray-100">100+</p>
                    </div>
                  </div>
                </div>

                <!-- دائرة زخرفية خلفية -->
                <div class="absolute md:size-[500px] size-[400px] bg-gradient-to-tl from-violet-600 to-fuchsia-600 bottom-1/2 translate-y-1/2 left-1/2 -translate-x-1/2 -z-10 rounded-full opacity-10 dark:opacity-30 blur-sm dark:animate-pulse"></div>
              </div>
            </div>
          </div>
          
          <!-- الأشكال الزخرفية الخلفية -->
          <div class="absolute top-20 right-20 w-32 h-32 bg-violet-500/20 dark:bg-violet-400/30 rounded-full opacity-40 dark:opacity-60 blur-sm dark:animate-pulse"></div>
          <div class="absolute top-40 left-20 w-24 h-24 bg-fuchsia-500/20 dark:bg-fuchsia-400/30 rounded-full opacity-40 dark:opacity-60 blur-sm dark:animate-pulse" style="animation-delay: 1s;"></div>
          <div class="absolute bottom-20 right-40 w-40 h-40 bg-blue-500/20 dark:bg-blue-400/30 rounded-full opacity-30 dark:opacity-50 blur-sm dark:animate-pulse" style="animation-delay: 2s;"></div>
          <div class="absolute bottom-40 left-40 w-28 h-28 bg-purple-500/20 dark:bg-purple-400/30 rounded-full opacity-30 dark:opacity-50 blur-sm dark:animate-pulse" style="animation-delay: 3s;"></div>
        </div>
      </section>

      <!-- Categories Slider Section -->
      <section class="py-12 bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900">
        <div class="container mx-auto px-4 relative">
          <!-- Section Header -->
          <div class="text-center mb-8">
            <h2 class="section-title text-3xl lg:text-4xl font-bold text-white mb-4">
              المجالات التعليمية
            </h2>
            <p class="section-subtitle text-lg text-gray-300 max-w-2xl mx-auto">
              اكتشف مجموعة واسعة من التخصصات والمجالات التعليمية
            </p>
          </div>
          
          <!-- Categories Grid -->
          <ClientOnly>
            <div class="relative">
              <swiper-container 
                ref="swiperContainerRef"
                :loop="true"
                style="overflow: visible !important; height: 120px;"
              >
                <swiper-slide
                  v-for="category in categories"
                  :key="category.id"
                  style="overflow: visible !important;"
                >
                  <div class="category-slide-card bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 rounded-xl p-4 shadow-lg  transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 dark:border-gray-700 group cursor-pointer">
                    <div class="flex items-center justify-between w-full truncate">
                    <!-- Category Icon (Right Side) -->
                      <div :class="`w-10 h-10 bg-gradient-to-r ${category.color} rounded-lg flex items-center justify-center shadow-lg transition-all duration-300 transform group-hover:scale-110 ml-3`">
                        <span class="text-white text-xl">{{ category.emoji }}</span>
                      </div>
                      <!-- Category Info (Left Side) -->
                      <div class="flex-1 w-full truncate">
                        <h3 class="text-base text-nowrap truncate w-full font-bold text-gray-800 dark:text-white mb-1 group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors duration-300">
                          {{ category.name }}
                        </h3>
                        <span class="text-violet-600 dark:text-violet-400 font-semibold text-sm">
                          {{ category.courseCount }} كورس
                        </span>
                      </div>
                    </div>
                  </div>
                </swiper-slide>
              </swiper-container>
              
              <!-- Navigation Arrows -->
              <button 
                @click="swiper?.prev()" 
                class="absolute lg:left-24 left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center border border-white/20 hover:border-white/40 z-10"
                title="السابق"
              >
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
                </svg>
              </button>
              
              <button 
                @click="swiper?.next()" 
                class="absolute lg:right-24 right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center border border-white/20 hover:border-white/40 z-10"
                title="التالي"
              >
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </button>
            </div>
          </ClientOnly>
          
          <!-- Navigation Buttons -->
          <!-- <div class="flex justify-center items-center space-x-4 space-x-reverse mt-8 mb-12">
            <button @click="swiper?.prev()" class="swiper-nav-btn bg-violet-600 hover:bg-violet-700 text-white w-12 h-12 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center" title="السابق">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
              </svg>
            </button>
            <button @click="swiper?.next()" class="swiper-nav-btn bg-violet-600 hover:bg-violet-700 text-white w-12 h-12 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center" title="التالي">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
              </svg>
            </button>
          </div> -->
        </div>
      </section>

      <!-- Featured Courses -->
      <section class="py-20 lg:py-24 bg-gray-50 dark:bg-gray-900">
        <div class="container mx-auto px-6 lg:px-8">
          <div class="text-center mb-16 lg:mb-20">
            <h2 class="section-title text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              الكورسات المميزة
            </h2>
            <p class="section-subtitle text-xl lg:text-2xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              ابدأ رحلة التعلم مع أفضل الكورسات في مختلف المجالات
            </p>
          </div>
          
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            <div 
              v-for="course in featuredCourses" 
              :key="course.id"
              class="course-card bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden transform hover:scale-105 transition-all duration-300 hover:shadow-2xl"
            >
              <div class="relative h-56 bg-gradient-to-br from-blue-500 to-purple-600">
                <div class="absolute inset-0 bg-black opacity-20"></div>
                <div class="absolute top-5 right-5 bg-yellow-500 text-gray-900 px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                  {{ course.discount }}
                </div>
                <div class="absolute bottom-5 right-5 text-white">
                  <div class="text-2xl lg:text-3xl font-bold mb-2">{{ course.title }}</div>
                  <div class="text-blue-100 text-lg">{{ course.instructor }}</div>
                </div>
              </div>
              
              <div class="p-8">
                <div class="flex items-center justify-between mb-6">
                  <div class="flex items-center space-x-3 space-x-reverse">
                    <div class="flex text-yellow-400">
                      <svg v-for="i in 5" :key="i" class="w-6 h-6" :class="i <= course.rating ? 'text-yellow-400' : 'text-gray-300'" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                    </div>
                    <span class="text-gray-600 dark:text-gray-400 text-lg">({{ course.reviews }})</span>
                  </div>
                  <div class="text-3xl font-bold text-purple-600">{{ course.price }}</div>
                </div>
                
                <p class="text-gray-600 dark:text-gray-400 mb-6 text-lg leading-relaxed">{{ course.description }}</p>
                
                <div class="flex items-center justify-between">
                  <div class="flex items-center space-x-3 space-x-reverse text-lg text-gray-500">
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                    <span>{{ course.duration }}</span>
                  </div>
                  <button class="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 hover:shadow-lg text-lg">
                    ابدأ الآن
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- CTA Section -->
      <section class="py-24 lg:py-32 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
        <div class="container mx-auto px-6 lg:px-8 text-center">
          <h2 class="text-4xl lg:text-6xl font-bold mb-8">ابدأ رحلة التعلم اليوم</h2>
          <p class="text-xl lg:text-2xl mb-12 text-purple-100 max-w-4xl mx-auto leading-relaxed">
            انضم إلى آلاف الطلاب واكتشف عالم من المعرفة والفرص المتاحة
          </p>
          <div class="flex flex-col sm:flex-row gap-6 justify-center">
            <NuxtLink to="/register" class="btn-primary bg-white text-purple-600 hover:bg-gray-100 text-xl px-10 py-4 rounded-xl shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105">
              إنشاء حساب مجاني
            </NuxtLink>
            <button @click="openWhatsAppModal" class="btn-secondary bg-transparent border-2 border-white text-white hover:bg-white hover:text-purple-600 text-xl px-10 py-4 rounded-xl shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105">
              تواصل معنا
            </button>
          </div>
        </div>
      </section>

      <!-- Scroll to Top Button -->
      <button 
        @click="scrollToTop"
        class="scroll-to-top-btn fixed bottom-8 right-8 w-12 h-12 bg-purple-600 hover:bg-purple-700 text-white rounded-full shadow-lg transition-all duration-500 z-40 flex items-center justify-center opacity-0 pointer-events-none"
        :class="{ 'opacity-100 pointer-events-auto': showScrollToTop }"
      >
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 10l7-7m0 0l7 7m-7-7v18"></path>
        </svg>
      </button>

      <!-- WhatsApp Contact -->
      <WhatsAppContact ref="whatsAppContact" />
      
      <!-- Switcher for Dark/Light Mode and RTL/LTR -->
      <Switcher />
    </main>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import WhatsAppContact from '~/components/WhatsAppContact.vue'
import Switcher from '~/components/Switcher.vue'
import { useSwiper } from '#imports'

// Hero assets paths (use relative URLs so we don't require bundler imports)
const bg = '/assets/images/bg/bg.png'
const heroImg = '/assets/images/hero/1.png'
const teamImg = ref([
  '/assets/images/team/1.jpg',
  '/assets/images/team/2.jpg',
  '/assets/images/team/3.jpg',
  '/assets/images/team/4.jpg',
  '/assets/images/team/5.jpg'
])

// Swiper setup
const swiperContainerRef = ref(null)
const swiper = useSwiper(swiperContainerRef, {
  effect: 'slide',
  loop: true,
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  speed: 600,
  slidesPerView: 'auto',
  spaceBetween: 12,
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 12,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 16,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
    1280: {
      slidesPerView: 5,
      spaceBetween: 24,
    },
   }
})

// Scroll to top functionality
const showScrollToTop = ref(false)

        // Sample data
        const featuredCourses = ref([
          {
            id: 1,
            title: 'تصميم المنتجات',
            instructor: 'أحمد محمد',
            description: 'تعلم أساسيات تصميم المنتجات من الصفر حتى الاحتراف مع أحدث الأدوات والتقنيات',
            discount: 'خصم 60%',
            price: '199 ريال',
            rating: 4.8,
            reviews: 1250,
            duration: '16 أسبوع'
          },
          {
            id: 2,
            title: 'تطوير الويب المتقدم',
            instructor: 'سارة أحمد',
            description: 'أتقن تطوير المواقع الحديثة باستخدام React و Node.js مع أفضل الممارسات',
            discount: 'خصم 50%',
            price: '299 ريال',
            rating: 4.9,
            reviews: 890,
            duration: '20 أسبوع'
          },
          {
            id: 3,
            title: 'التسويق الرقمي',
            instructor: 'محمد علي',
            description: 'اكتشف استراتيجيات التسويق الرقمي الفعالة لتعزيز عملك عبر الإنترنت',
            discount: 'خصم 40%',
            price: '149 ريال',
            rating: 4.7,
            reviews: 2100,
            duration: '12 أسبوع'
          }
        ])

const categories = ref([
  { 
    id: 1, 
    name: 'تطوير الويب', 
    emoji: '💻',
    color: 'from-blue-500 to-cyan-500',
    courseCount: 150,
    description: 'تعلم تطوير المواقع والتطبيقات الحديثة بأحدث التقنيات'
  },
  { 
    id: 2, 
    name: 'التصميم الجرافيكي', 
    emoji: '🎨',
    color: 'from-purple-500 to-pink-500',
    courseCount: 120,
    description: 'أتقن فن التصميم والإبداع البصري باحترافية عالية'
  },
  { 
    id: 3, 
    name: 'تعلم اللغات', 
    emoji: '🌍',
    color: 'from-green-500 to-emerald-500',
    courseCount: 80,
    description: 'اكتشف لغات العالم وتواصل بثقة مع مختلف الثقافات'
  },
  { 
    id: 4, 
    name: 'إدارة الأعمال', 
    emoji: '💼',
    color: 'from-indigo-500 to-blue-500',
    courseCount: 95,
    description: 'طور مهاراتك الإدارية وابدأ مشروعك التجاري بنجاح'
  },
  { 
    id: 5, 
    name: 'الموسيقى والفنون', 
    emoji: '🎵',
    color: 'from-pink-500 to-rose-500',
    courseCount: 60,
    description: 'أطلق إبداعك الموسيقي والفني مع أفضل المدربين'
  },
  { 
    id: 6, 
    name: 'الصحة واللياقة', 
    emoji: '❤️',
    color: 'from-red-500 to-pink-500',
    courseCount: 75,
    description: 'حافظ على صحتك ولياقتك البدنية بأفضل الطرق العلمية'
  },
  { 
    id: 7, 
    name: 'الرياضة والتدريب', 
    emoji: '⚡',
    color: 'from-yellow-500 to-orange-500',
    courseCount: 45,
    description: 'احترف رياضتك المفضلة مع مدربين محترفين'
  },
  { 
    id: 8, 
    name: 'الطبخ والفنون المنزلية', 
    emoji: '👨‍🍳',
    color: 'from-amber-500 to-orange-500',
    courseCount: 55,
    description: 'تعلم فن الطبخ وإتقان المهارات المنزلية باحترافية'
  }
])

onMounted(() => {
  // Scroll to top button visibility
  window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset
    if (scrolled > 300) {
      showScrollToTop.value = true
    } else {
      showScrollToTop.value = false
    }
  })

  // Intersection Observer for scroll animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate')
      }
    })
  }, observerOptions)

  // Observe all animated elements
  const animatedElements = document.querySelectorAll('.section-title, .section-subtitle, .section-buttons, .category-card')
  animatedElements.forEach(el => observer.observe(el))
})

// Function to scroll to top
const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}

// Function to open WhatsApp modal
const openWhatsAppModal = () => {
  // Trigger click on WhatsApp button
  const whatsappBtn = document.querySelector('.whatsapp-btn')
  if (whatsappBtn) {
    whatsappBtn.click()
  }
}
</script>

<style scoped>
        /* Floating animation for cards */
        .floating-card {
          animation: float 6s ease-in-out infinite;
        }
        
        .floating-card:nth-child(2) {
          animation-delay: -3s;
        }
        
        .floating-card:nth-child(3) {
          animation-delay: -1.5s;
        }
        
        .floating-card:nth-child(4) {
          animation-delay: -4.5s;
        }
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        
        /* Hero section specific styles */
        .hero-section {
          background: linear-gradient(135deg, #1f2937 0%, #7c3aed 50%, #1e40af 100%);
        }
        
        /* Light mode hero background */
        .hero-section {
          background: linear-gradient(135deg, #faf5ff 0%, #ffffff 50%, #fdf4ff 100%);
        }
        
        /* Dark mode hero background */
        .dark .hero-section {
          background: linear-gradient(135deg, #1f2937 0%, #7c3aed 50%, #1e40af 100%);
        }

        /* Course card styles */
        .course-card {
          transition: all 0.3s ease;
        }

        .course-card:hover {
          transform: translateY(-12px) scale(1.02);
          box-shadow: 0 30px 60px -12px rgba(0, 0, 0, 0.25);
        }

        /* Stats animation */
        .stat-item {
          opacity: 1 !important;
          transform: translateY(0) !important;
          animation: statsFadeIn 1s ease-out;
        }

        @keyframes statsFadeIn {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* Stagger delays for stats */
        .stat-item:nth-child(1) { animation-delay: 0.1s; }
        .stat-item:nth-child(2) { animation-delay: 0.2s; }
        .stat-item:nth-child(3) { animation-delay: 0.3s; }
        .stat-item:nth-child(4) { animation-delay: 0.4s; }

        /* Section animations */
        .section-title, .section-subtitle, .section-buttons, .category-card {
          opacity: 1;
          transform: translateY(0);
          transition: all 0.6s ease-out;
        }

        .section-title.animate, .section-subtitle.animate, .section-buttons.animate, .category-card.animate {
          opacity: 1;
          transform: translateY(0);
        }

        /* Stagger delays for section elements */
        .section-subtitle { transition-delay: 0.2s; }
        .section-buttons { transition-delay: 0.4s; }

        /* Stagger delays for category cards */
        .category-card:nth-child(1) { transition-delay: 0.1s; }
        .category-card:nth-child(2) { transition-delay: 0.2s; }
        .category-card:nth-child(3) { transition-delay: 0.3s; }
        .category-card:nth-child(4) { transition-delay: 0.4s; }
        .category-card:nth-child(5) { transition-delay: 0.5s; }
        .category-card:nth-child(6) { transition-delay: 0.6s; }
        .category-card:nth-child(7) { transition-delay: 0.7s; }
        .category-card:nth-child(8) { transition-delay: 0.8s; }

        /* Scroll to top button */
        .scroll-to-top-btn {
          transition: all 0.3s ease;
        }

        .scroll-to-top-btn:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.3);
        }

        /* RTL specific adjustments */
        .space-x-reverse > :not([hidden]) ~ :not([hidden]) {
          --tw-space-x-reverse: 1;
        }

        /* Button hover effects */
        .btn-primary:hover {
          transform: translateY(-3px);
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);
        }

        .btn-secondary:hover {
          transform: translateY(-3px);
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);
        }

        /* Enhanced shadows */
        .shadow-2xl {
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
        }

        .shadow-3xl {
          box-shadow: 0 35px 70px -12px rgba(0, 0, 0, 0.3);
        }

        /* Better spacing for mobile */
        @media (max-width: 640px) {
          .container {
            padding-left: 1rem;
            padding-right: 1rem;
          }
          
          .space-y-8 > * + * {
            margin-top: 2rem;
          }
          
          .gap-8 {
            gap: 2rem;
          }
        }

        /* Enhanced transitions */
        .transition-all {
          transition-property: all;
          transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
          transition-duration: 300ms;
        }

        /* Better hover effects for cards */
        .category-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
        }

        /* Improved button spacing */
        .btn-primary, .btn-secondary {
          letter-spacing: 0.025em;
          font-weight: 600;
        }

        /* Better text readability */
        .text-gray-300 {
          text-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
        }

        /* Enhanced decorative shapes */
        .opacity-60 {
          filter: blur(0.5px);
        }

        .opacity-20 {
          filter: blur(1px);
        }
        
        /* Categories Swiper Styles */
        :deep(swiper-container) {
          position: relative;
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
          overflow: visible !important;
        }
        
        :deep(swiper-slide) {
          display: flex;
          justify-content: center;
          align-items: center;
        }
        
        .category-slide-card {
          position: relative;
          height: 90px;
          width: 100%;
          flex-shrink: 0;
          display: flex;
          align-items: center;
          transition: all 0.3s ease;
          padding: 0 16px;
          border-radius: 0.75rem;
          overflow: hidden;
        }
        
        /* Ensure rounded corners are preserved */
        .category-slide-card,
        .category-slide-card * {
          border-radius: inherit;
        }
        
        /* Force rounded corners on all breakpoints */
        @media (max-width: 768px) {
          .category-slide-card {
            border-radius: 0.75rem !important;
            box-sizing: border-box;
            flex-shrink: 0;
            flex-grow: 0;
          }
        }
        
        @media (max-width: 480px) {
          .category-slide-card {
            border-radius: 0.75rem !important;
            box-sizing: border-box;
            flex-shrink: 0;
            flex-grow: 0;
          }
        }
        
        /* Ensure cards maintain their shape */
        .category-slide-card {
          box-sizing: border-box;
          flex-shrink: 0;
          flex-grow: 0;
          border-radius: 0.75rem !important;
        }
        
        /* Custom Navigation Buttons */
        .swiper-nav-btn {
          background: linear-gradient(135deg, #8b5cf6, #ec4899);
          backdrop-filter: blur(10px);
          border: 2px solid rgba(139, 92, 246, 0.3);
          border: none;
          outline: none;
          transition: all 0.3s ease;
          transform: scale(1);
          box-shadow: 0 8px 25px rgba(139, 92, 246, 0.3);
        }
        
        .swiper-nav-btn:hover {
          transform: scale(1.1);
          box-shadow: 0 15px 35px rgba(139, 92, 246, 0.5);
          border-color: rgba(139, 92, 246, 0.6);
        }
        
        .swiper-nav-btn:active {
          transform: scale(0.95);
        }
        
        /* Category Slider Navigation Arrows */
        .category-slider-nav {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          width: 48px;
          height: 48px;
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 50%;
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.3s ease;
          z-index: 10;
        }
        
        .category-slider-nav:hover {
          background: rgba(255, 255, 255, 0.2);
          border-color: rgba(255, 255, 255, 0.4);
          transform: translateY(-50%) scale(1.1);
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
        }
        
        .category-slider-nav:active {
          transform: translateY(-50%) scale(0.95);
        }
        
        .category-slider-nav.left {
          left: 16px;
        }
        
        .category-slider-nav.right {
          right: 16px;
        }
        
        /* Responsive Swiper */
        @media (max-width: 768px) {
          :deep(swiper-container) {
            padding: 0 15px;
          }
          
          .category-slide-card {
            height: 90px;
            
            margin: 0 auto;
          }
          
          .swiper-nav-btn {
            width: 40px;
            height: 40px;
          }
          
          /* Hide navigation arrows on mobile */
          .category-slider-nav {
            display: none;
          }
        }
        
        @media (max-width: 480px) {
          :deep(swiper-container) {
            padding: 0 10px;
          }
          
          .category-slide-card {

            margin: 0 auto;
            padding: 0 16px;
          }
          
          .swiper-nav-btn {
            width: 36px;
            height: 36px;
          }
        }
        
        /* Line clamp for description */
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        
        /* Dark mode specific styles */
        .dark .text-gray-900 {
          color: #f9fafb;
        }
        
        .dark .text-gray-600 {
          color: #d1d5db;
        }
        
        /* RTL/LTR direction support */
        [dir="rtl"] .text-right {
          text-align: right;
        }
        
        [dir="ltr"] .text-right {
          text-align: left;
        }
        
        [dir="rtl"] .ml-auto {
          margin-left: auto;
          margin-right: 0;
        }
        
        [dir="ltr"] .ml-auto {
          margin-right: auto;
          margin-left: 0;
        }
        
        /* Smooth color transitions for dark mode */
        .dark * {
          transition: background-color 0.3s ease, color 0.3s ease, border-color 0.3s ease;
        }

        /* Swiper Container */
        :deep(swiper-container) {
          padding: 0 60px;
        }
        
        /* Override Swiper's overflow: hidden */
        :deep(.swiper) {
          overflow: visible !important;
        }
        
        :deep(.swiper-wrapper) {
          overflow: visible !important;
        }
        
        :deep(.swiper-slide) {
          overflow: visible !important;
        }
        
        /* Force override with higher specificity */
        :deep(swiper-container .swiper) {
          overflow: visible !important;
        }
        
        :deep(swiper-container .swiper-wrapper) {
          overflow: visible !important;
        }
        
        :deep(swiper-container .swiper-slide) {
          overflow: visible !important;
        }
        
        /* Additional override for all swiper elements */
        :deep([class*="swiper"]) {
          overflow: visible !important;
        }
        
        /* Global override */
        :global(.swiper) {
          overflow: visible !important;
        }
        
        :global(.swiper-wrapper) {
          overflow: visible !important;
        }
        
        :global(.swiper-slide) {
          overflow: visible !important;
        }
</style>


