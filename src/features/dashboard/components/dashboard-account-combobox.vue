<script setup lang="ts">
import type { Tables } from '@/schema'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/ui/components/ui/select'

defineProps<{
  accounts: Tables<'bank_accounts'>[]
}>()

const account = defineModel<Tables<'bank_accounts'>>('account')
</script>

<template>
  <Select v-if="account" v-model:model-value="account.id">
    <SelectTrigger class="w-40">
      <SelectValue placeholder="Select a fruit" />
    </SelectTrigger>
    <SelectContent>
      <SelectGroup>
        <SelectLabel>Accounts</SelectLabel>
        <SelectItem v-for="account in accounts" :value="account.id" :key="account.id">
          {{ account.name }}
        </SelectItem>
      </SelectGroup>
    </SelectContent>
  </Select>
</template>
