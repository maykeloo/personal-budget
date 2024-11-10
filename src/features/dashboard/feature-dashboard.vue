<script setup lang="ts">
import DashboardTabs from '@/features/dashboard/components/dashboard-tabs.vue'
import DashboardSummaryCards from '@/features/dashboard/components/dashboard-summary-cards.vue'
import DashboardRecentTransactions from '@/features/dashboard/components/dashboard-recent-transactions.vue'
import DashboardYearBar from '@/features/dashboard/components/dashboard-year-bar.vue'
import DashboardHeader from '@/features/dashboard/components/dashboard-header.vue'
import { useAccountsStore } from '@/domain/account/data-access/accounts.store'
import { storeToRefs } from 'pinia'
import { useTransactionsStore } from '@/domain/transaction/data-access/transactions.store'

const { accounts, currentAccount } = storeToRefs(useAccountsStore())
const { transactions } = storeToRefs(useTransactionsStore())
</script>

<template>
  <div class="flex flex-col">
    <pre>{{ accounts }}</pre>
    <pre>{{ transactions }}</pre>
    <DashboardHeader v-model:account="currentAccount" :accounts="accounts" />
    <DashboardSummaryCards class="mt-4" />
    <DashboardTabs class="my-6" />
    <div class="flex gap-6">
      <DashboardYearBar class="w-2/3" :transactions="transactions"/>
      <DashboardRecentTransactions class="w-1/3" :transactions="transactions"/>
    </div>
  </div>
</template>
