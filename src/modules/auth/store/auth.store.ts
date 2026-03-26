import { defineStore } from "pinia";
import {
  getCsrfCookie,
  getLoggedInUser,
  login,
  logout,
} from '../api/auth.api';
import type { LoginPayload } from '../schemas/auth.schema';
import type { User } from "../types/auth.types";

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: null as User | null,
    loading: false,
    initialized: false,
  }),

  getters:{
    isAuthenticated: (state) => !!state.user,
  },

  actions: {
    /**
     * Initialize auth state on app start
     */
    async initialize() {
      if (this.initialized) return

      try {
        const response = await getLoggedInUser()
        this.user = response.data.data
      } catch {
        this.user = null
      } finally {
        this.initialized = true
      }
    },

    /**
     * Login user
     */
    async login(payload: LoginPayload) {
      if (this.loading) return

      this.loading = true

      try {
        await getCsrfCookie()
        const response = await login(payload)

        this.user = response.data.data

      } finally {
        this.loading = false
      }
    },

    /**
     * Logout user
     */
    async logout() {
      await logout()
      this.user = null
      this.initialized = false
    },
  },

})
