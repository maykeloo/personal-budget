<script setup lang="ts">
import { loginForm, type UserLoginForm } from '@/domain/user/models/user-login'
import { Button } from '@/ui/components/ui/button'
import { Input } from '@/ui/components/ui/input'
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/ui/components/ui/form'
import { useForm } from 'vee-validate'
import { Alert, AlertDescription, AlertTitle } from '@/ui/components/ui/alert'

defineProps<{
  isLoading: boolean
  errorMessage: string | undefined
}>()

const emits = defineEmits<{
  submit: [UserLoginForm]
}>()

const form = useForm({ validationSchema: loginForm })

const onSubmit = form.handleSubmit((values) => {
  emits('submit', values)
})
</script>

<template>
  <form @submit.prevent="onSubmit" class="flex flex-col gap-5">
    <FormField v-slot="{ componentField }" name="email">
      <FormItem>
        <FormLabel>Email</FormLabel>
        <FormControl>
          <Input type="text" placeholder="shadcn" v-bind="componentField" />
        </FormControl>
        <FormMessage />
      </FormItem>
    </FormField>
    <FormField v-slot="{ componentField }" name="password">
      <FormItem>
        <FormLabel>Password</FormLabel>
        <FormControl>
          <Input type="text" placeholder="shadcn" v-bind="componentField" />
        </FormControl>
        <FormMessage />
      </FormItem>
    </FormField>
    <Button type="submit"> Submit </Button>
    <Alert v-if="errorMessage" variant="destructive">
      <AlertTitle>Error</AlertTitle>
      <AlertDescription>{{ errorMessage }}</AlertDescription>
    </Alert>
  </form>
</template>
