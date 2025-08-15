import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: null,
    isAuthenticated: false,
    loading: false,
    error: null
  }),

  getters: {
    userRole: (state) => state.user?.role || 'guest',
    isInstructor: (state) => state.user?.role === 'instructor',
    isStudent: (state) => state.user?.role === 'student'
  },

  actions: {
    async login(credentials) {
      this.loading = true
      this.error = null
      
      try {
        // محاكاة API call
        const response = await fetch('/api/auth/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(credentials)
        })
        
        const data = await response.json()
        
        if (response.ok) {
          this.user = data.user
          this.isAuthenticated = true
          localStorage.setItem('token', data.token)
        } else {
          throw new Error(data.message || 'فشل تسجيل الدخول')
        }
      } catch (error) {
        this.error = error.message
        throw error
      } finally {
        this.loading = false
      }
    },

    async register(userData) {
      this.loading = true
      this.error = null
      
      try {
        const response = await fetch('/api/auth/register', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(userData)
        })
        
        const data = await response.json()
        
        if (response.ok) {
          this.user = data.user
          this.isAuthenticated = true
          localStorage.setItem('token', data.token)
        } else {
          throw new Error(data.message || 'فشل إنشاء الحساب')
        }
      } catch (error) {
        this.error = error.message
        throw error
      } finally {
        this.loading = false
      }
    },

    async logout() {
      try {
        await fetch('/api/auth/logout', {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`
          }
        })
      } catch (error) {
        console.error('Logout error:', error)
      } finally {
        this.user = null
        this.isAuthenticated = false
        localStorage.removeItem('token')
      }
    },

    async checkAuth() {
      const token = localStorage.getItem('token')
      if (!token) return false
      
      try {
        const response = await fetch('/api/auth/me', {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        })
        
        if (response.ok) {
          const data = await response.json()
          this.user = data.user
          this.isAuthenticated = true
          return true
        } else {
          this.logout()
          return false
        }
      } catch (error) {
        this.logout()
        return false
      }
    }
  },

  persist: true
})
