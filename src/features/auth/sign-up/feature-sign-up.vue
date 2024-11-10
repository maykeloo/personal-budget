<script setup lang="ts">
import AuthForm from '@/features/auth/shared/auth-form.vue'
import LoginWrapper from '@/features/auth/shared/login-wrapper.vue'
import { useUserSignUp } from '@/features/auth/sign-up/composables/use-user-sign-up'

const { signUpRequest } = useUserSignUp()
</script>

<template>
  <LoginWrapper view="sign-up">
    <template #form>
      <AuthForm
        :is-loading="signUpRequest.loading.value"
        :error-message="signUpRequest.error.value?.message"
        @submit="signUpRequest.run($event.email, $event.password)"
      />
      {{ signUpRequest }}
    </template>
  </LoginWrapper>
</template>
