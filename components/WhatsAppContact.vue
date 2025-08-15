<template>
  <div>
    <!-- WhatsApp Button -->
    <button 
      @click="openModal"
      class="whatsapp-btn fixed bottom-8 left-8 w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-2xl transition-all duration-300 z-50 flex items-center justify-center"
    >
      <svg class="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
      </svg>
    </button>

    <!-- WhatsApp Chat Modal -->
    <div v-if="isModalOpen" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4" @click="closeModal">
      <div class="whatsapp-chat-container bg-white rounded-2xl shadow-2xl max-w-md w-full overflow-hidden" @click.stop>
        <!-- Chat Header -->
        <div class="bg-green-600 text-white p-4 flex items-center justify-between">
          <div class="flex items-center space-x-3">
            <div class="relative">
              <div class="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                <span class="text-green-600 font-bold text-lg">Ws</span>
              </div>
              <div class="absolute -bottom-1 -right-1 w-3 h-3 bg-green-400 rounded-full border-2 border-white"></div>
            </div>
            <div>
              <h3 class="font-semibold">WasenderAPI Support</h3>
              <p class="text-xs text-green-100">online</p>
            </div>
          </div>
          <button @click="closeModal" class="text-white hover:text-green-100">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>

        <!-- Chat Messages -->
        <div class="chat-messages bg-gray-100 p-4 h-48 overflow-y-auto">
          <!-- Welcome Message -->
          <div class="flex justify-start mb-4">
            <div class="bg-white rounded-lg p-3 max-w-xs shadow-sm">
              <p class="text-gray-800">Hello there! 👋 How can we help?</p>
              <div class="flex items-center justify-between mt-2">
                <span class="text-xs text-gray-500">09:13 ص</span>
                <div class="flex items-center space-x-1">
                  <svg class="w-4 h-4 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                  <svg class="w-4 h-4 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Contact Form -->
        <div class="bg-white p-4 border-t border-gray-200">
          <form @submit.prevent="sendWhatsAppMessage" class="space-y-4">
            <!-- Name -->
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">الاسم</label>
              <input 
                v-model="formData.name"
                type="text" 
                required
                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                placeholder="أدخل اسمك"
              />
            </div>

            <!-- Phone Number -->
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">رقم الهاتف</label>
              <input 
                v-model="formData.phone"
                type="tel" 
                required
                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                placeholder="201102161026"
              />
              <p class="text-xs text-gray-500 mt-1">أدخل الرقم مع رمز الدولة (مثال: 201102161026)</p>
            </div>

            <!-- Submit Button -->
            <button 
              type="submit" 
              :disabled="isLoading"
              class="w-full bg-green-500 hover:bg-green-600 disabled:bg-gray-400 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center"
            >
              <span v-if="isLoading" class="flex items-center">
                <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                  <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                جاري الإرسال...
              </span>
              <span v-else>إرسال رسالة واتساب</span>
            </button>
          </form>

          <!-- Success Message -->
          <div v-if="successMessage" class="mt-4 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">
            {{ successMessage }}
          </div>

          <!-- Error Message -->
          <div v-if="errorMessage" class="mt-4 p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg">
            {{ errorMessage }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted } from 'vue'

// Reactive data
const isModalOpen = ref(false)
const isLoading = ref(false)
const successMessage = ref('')
const errorMessage = ref('')
const sentPhones = ref(new Set()) // Track sent phone numbers

const formData = reactive({
  name: '',
  phone: ''
})

// API Configuration
const API_KEY = '9fb852bd081005dd7ab7154a322369d925a0ad3bed4817224b48a01de7d767e5'
const API_URL = 'https://www.wasenderapi.com/api/send-message'

// Methods
const openModal = () => {
  isModalOpen.value = true
  resetMessages()
}

const closeModal = () => {
  isModalOpen.value = false
  resetForm()
  resetMessages()
}

const resetForm = () => {
  formData.name = ''
  formData.phone = ''
}

const resetMessages = () => {
  successMessage.value = ''
  errorMessage.value = ''
}

// Clear sent phones after 24 hours
const clearSentPhones = () => {
  setTimeout(() => {
    sentPhones.value.clear()
  }, 24 * 60 * 60 * 1000) // 24 hours
}

// Initialize clear timer
onMounted(() => {
  clearSentPhones()
})

const sendWhatsAppMessage = async () => {
  try {
    isLoading.value = true
    resetMessages()

    // Validate phone number
    if (!formData.phone.startsWith('20')) {
      errorMessage.value = 'يرجى إدخال رقم هاتف صحيح مع رمز الدولة 20'
      return
    }

    // Check if phone number has been sent recently
    if (sentPhones.value.has(formData.phone)) {
      errorMessage.value = 'لقد أرسلت رسالة واتساب لهذا الرقم من قبل. يرجى الانتظار قليلاً.'
      return
    }

    // Prepare message
    const message = `كيف أحوالك ${formData.name}؟\n\nتم إرسال طلب منك للتواصل، كيف استطيع مساعدتك؟`

    // Send API request
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${API_KEY}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        to: formData.phone,
        text: message
      })
    })

    if (response.ok) {
      const result = await response.json()
      successMessage.value = 'تم إرسال رسالة الواتساب بنجاح! سنتواصل معك قريباً.'
      resetForm()
      sentPhones.value.add(formData.phone) // Mark phone as sent
      setTimeout(() => {
        closeModal()
      }, 3000)
    } else {
      const error = await response.json()
      errorMessage.value = `خطأ في الإرسال: ${error.message || 'حدث خطأ غير متوقع'}`
    }
  } catch (error) {
    console.error('Error sending WhatsApp message:', error)
    errorMessage.value = 'حدث خطأ في الاتصال. يرجى المحاولة مرة أخرى.'
  } finally {
    isLoading.value = false
  }
}
</script>

<style scoped>
.whatsapp-btn {
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0% {
    box-shadow: 0 0 0 0 rgba(34, 197, 94, 0.7);
  }
  70% {
    box-shadow: 0 0 0 10px rgba(34, 197, 94, 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(34, 197, 94, 0);
  }
}

.whatsapp-btn:hover {
  transform: scale(1.1);
  animation: none;
}

.whatsapp-chat-container {
  background: linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%);
}

.chat-messages {
  background-image: 
    radial-gradient(circle at 20% 80%, rgba(120, 119, 198, 0.1) 0%, transparent 50%),
    radial-gradient(circle at 80% 20%, rgba(255, 119, 198, 0.1) 0%, transparent 50%),
    radial-gradient(circle at 40% 40%, rgba(120, 219, 255, 0.1) 0%, transparent 50%);
}

/* Custom scrollbar */
.chat-messages::-webkit-scrollbar {
  width: 6px;
}

.chat-messages::-webkit-scrollbar-track {
  background: transparent;
}

.chat-messages::-webkit-scrollbar-thumb {
  background: rgba(0, 0, 0, 0.2);
  border-radius: 3px;
}

.chat-messages::-webkit-scrollbar-thumb:hover {
  background: rgba(0, 0, 0, 0.3);
}
</style>
