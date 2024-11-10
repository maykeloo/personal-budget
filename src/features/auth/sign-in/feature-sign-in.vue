<script setup lang="ts">
import AuthForm from '@/features/auth/shared/auth-form.vue'
import LoginWrapper from '@/features/auth/shared/login-wrapper.vue'
import { useUserSignIn } from '@/features/auth/sign-in/composables/use-user-sign-in'

const { signInRequest } = useUserSignIn()
</script>

<template>
  <LoginWrapper view="sign-in">
    <template #form>
      <AuthForm
        :error-message="signInRequest.error.value?.message"
        :is-loading="signInRequest.loading.value"
        @submit="signInRequest.run($event.email, $event.password)"
      />
    </template>
  </LoginWrapper>
</template>
