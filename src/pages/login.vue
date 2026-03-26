<script setup lang="ts">
import { useLoginForm } from '@/modules/auth/composables/useLoginForm'
import { useAuthStore } from '@/modules/auth/store/auth.store'
import { computed, ref } from 'vue'
import { useRouter } from 'vue-router'
import { useTheme } from 'vuetify'

import logo from '@images/logo.png'
import authV1MaskDark from '@images/pages/auth-v1-mask-dark.png'
import authV1MaskLight from '@images/pages/auth-v1-mask-light.png'
import authV1Tree2 from '@images/pages/auth-v1-tree-2.png'
import authV1Tree from '@images/pages/auth-v1-tree.png'

const router = useRouter()
const authStore = useAuthStore()
const { form, errors, validate } = useLoginForm()

const vuetifyTheme = useTheme()

const authThemeMask = computed(() => {
  return vuetifyTheme.global.name.value === 'light'
    ? authV1MaskLight
    : authV1MaskDark
})

const isPasswordVisible = ref(false)
const serverError = ref('')

// Map validation errors to Vuetify
const fieldErrors = (field: 'email' | 'password') => {
  return errors.value[field] ? [errors.value[field]] : []
}

// Submit handler
const onSubmit = async () => {
  serverError.value = ''

  if (!validate()) return

  try {
    await authStore.login({
      email: form.email,
      password: form.password,
    })

    await router.push({ name: 'dashboard' })
  } catch (error: any) {
    serverError.value =
      error?.response?.data?.message ?? 'Login failed. Please try again.'
  }
}
</script>

<template>
  <!-- eslint-disable vue/no-v-html -->

  <div class="auth-wrapper d-flex align-center justify-center pa-4">
    <VCard
      class="auth-card pa-4 pt-7"
      max-width="448"
    >
      <VCardItem class="justify-center">
          <VImg
            :src="logo"
            alt="logo"
            class="d-flex w-100"
          />
      
          <h2 class="font-weight-medium text-2xl text-uppercase">
            International
          </h2>
      </VCardItem>

      <VCardText class="pt-2">
        <h4 class="text-h4 mb-1">
          Welcome to Axios Portal!
        </h4>
        <p class="mb-0">
          Please login-in to your account and start the adventure
        </p>
      </VCardText>

      <VCardText>
        <!-- Backend error -->
        <VAlert
          v-if="serverError"
          type="error"
          variant="tonal"
          class="mb-4"
        >
          {{ serverError }}
        </VAlert>

        <VForm @submit.prevent="onSubmit">
          <VRow>
            <!-- email -->
            <VCol cols="12">
              <VTextField
                v-model="form.email"
                label="Email"
                type="email"
                aria-placeholder="email..."
                :error-messages="fieldErrors('email')"
              />
            </VCol>

            <!-- password -->
            <VCol cols="12">
              <VTextField
                v-model="form.password"
                label="Password"
                placeholder="············"
                :type="isPasswordVisible ? 'text' : 'password'"
                :append-inner-icon="isPasswordVisible ? 'ri-eye-off-line' : 'ri-eye-line'"
                :error-messages="fieldErrors('password')"
                @click:append-inner="isPasswordVisible = !isPasswordVisible"
              />
            </VCol>

            <!-- login button -->
            <VCol cols="12">
              <VBtn
                block
                type="submit"
                :loading="authStore.loading"
                :disabled="authStore.loading"
              >
                Login
              </VBtn>
           </VCol>

          </VRow>
        </VForm>
      </VCardText>
    </VCard>

    <VImg
      class="auth-footer-start-tree d-none d-md-block"
      :src="authV1Tree"
      :width="250"
    />

    <VImg
      :src="authV1Tree2"
      class="auth-footer-end-tree d-none d-md-block"
      :width="350"
    />

    <!-- bg img -->
    <VImg
      class="auth-footer-mask d-none d-md-block"
      :src="authThemeMask"
    />
  </div>
</template>

<style lang="scss">
@use "@core/scss/template/pages/page-auth";
</style>
