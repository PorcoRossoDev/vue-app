import { defineStore } from 'pinia'
import ApiDummy from '@/plugin/ApiDummy'
import { useRouter } from 'vue-router'

export const useAuthStore = defineStore('auth', {
    state: () => ({
      isLoggedIn: false,
      user: null,
      token: null
    }),
    actions: {
      async login(payload) {
        try {
          const res = await ApiDummy.post('auth/login', payload)
          const data = res.data
          if( data && data.accessToken ){
            this.user = res.data
            this.token = data.accessToken
            this.isLoggedIn = true
            localStorage.setItem('accessToken', data.accessToken)
          } else {
            alert('Login không thành công!')
          }
          return true
        } catch (error) {
          alert('Có lỗi xin vui lòng thử lại!')
          return false
        }
      },
      logout() {
        this.token = null
        this.user = null
        this.isLoggedIn = false
        return false
      }
    }
  })