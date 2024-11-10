<script setup lang="ts">
import { LineChart } from '@/ui/components/ui/chart-line'
import { Card, CardContent, CardHeader, CardTitle } from '@/ui/components/ui/card'
import type { Tables } from '@/schema'
import { useTransactions } from '@/features/transaction/composables/useTransactions'
import { Month } from '@/shared/types/time'
import { computed } from 'vue'
import dayjs from 'dayjs'
import ChartTooltip from '@/ui/components/chart-tooltip.vue'

const props = defineProps<{
  transactions: Tables<'transactions'>[]
}>()

const { getTransactionForMonth } = useTransactions()

const data = computed(() => {
  const months = Object.values(Month) as Month[]
  const deposit = months.map((month) => {
    return getTransactionForMonth(props.transactions, 'DEPOSIT', month)
  })
  const expense = months.map((month) => {
    return getTransactionForMonth(props.transactions, 'EXPENSE', month)
  })

  return months.map((month, i) => {
    return {
      name: month.key,
      deposit: deposit[i],
      expense: expense[i],
    }
  })
})
</script>

<template>
  <Card class="basis-2/3">
    <CardHeader>
      <CardTitle>Overview</CardTitle>
    </CardHeader>
    <CardContent class="pl-2">
      <LineChart
        :data="data"
        index="name"
        :categories="['deposit', 'expense']"
      />
    </CardContent>
  </Card>
</template>
