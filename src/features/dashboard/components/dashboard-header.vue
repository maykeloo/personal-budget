<script setup lang="ts">
import DashboardHeaderMenu from '@/features/dashboard/components/dashboard-header-menu.vue'
import DashboardAccountCombobox from '@/features/dashboard/components/dashboard-account-combobox.vue'
import type { Tables } from '@/schema'
import { Loader } from 'lucide-vue-next'

defineProps<{
  accounts: Tables<'bank_accounts'>[]
}>()

const account = defineModel<Tables<'bank_accounts'> | null>('account')
</script>

<template>
  <header class="flex justify-between">
    <h1 class="text-3xl font-bold">Dashboard</h1>
    <div class="flex items-center gap-4">
      <DashboardAccountCombobox v-if="account" :accounts="accounts" v-model:account="account" />
      <Loader v-else />
      <DashboardHeaderMenu />
    </div>
  </header>
</template>
