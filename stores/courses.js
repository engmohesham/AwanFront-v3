import { defineStore } from 'pinia'

export const useCoursesStore = defineStore('courses', {
  state: () => ({
    courses: [],
    instructors: [],
    categories: [],
    loading: false,
    error: null
  }),

  getters: {
    getCourseById: (state) => (id) => {
      return state.courses.find(course => course.id === id)
    },
    
    getCoursesByInstructor: (state) => (instructorId) => {
      return state.courses.filter(course => course.instructorId === instructorId)
    },
    
    getCoursesByCategory: (state) => (categoryId) => {
      return state.courses.filter(course => course.categoryId === categoryId)
    }
  },

  actions: {
    async fetchCourses() {
      this.loading = true
      try {
        // محاكاة API call
        const response = await fetch('/api/courses')
        const data = await response.json()
        this.courses = data
      } catch (error) {
        this.error = error.message
      } finally {
        this.loading = false
      }
    },

    async fetchInstructors() {
      try {
        const response = await fetch('/api/instructors')
        const data = await response.json()
        this.instructors = data
      } catch (error) {
        this.error = error.message
      }
    },

    async fetchCategories() {
      try {
        const response = await fetch('/api/categories')
        const data = await response.json()
        this.categories = data
      } catch (error) {
        this.error = error.message
      }
    }
  }
})
