<script lang="ts" setup>
import { Avatar } from '@/ui/components/ui/avatar'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/ui/components/ui/card'
import type { Tables } from '@/schema'
import { computed } from 'vue'
import { Minus, Plus } from 'lucide-vue-next'
import { cn } from '@/ui/utils'
import { Button } from '@/ui/components/ui/button'

const props = defineProps<{
  transactions: Tables<'transactions'>[]
}>()

const lastTransactions = computed(() => {
  return props.transactions.slice(0, 5)
})

const sumOfTransactions = computed(() => {
  return props.transactions.reduce((acc, transaction) => acc + transaction.amount, 0)
})
</script>

<template>
  <Card class="flex flex-col basis-1/3">
    <CardHeader>
      <CardTitle>Last transactions</CardTitle>
      <CardDescription> You made {{ sumOfTransactions }} sales this month.</CardDescription>
    </CardHeader>
    <CardContent class="flex flex-col gap-4">
      <div v-for="transaction in lastTransactions" :key="transaction.id" class="space-y-8">
        <div class="flex items-center">
          <Avatar
            class="h-9 w-9"
            :class="
              cn({
                'bg-red-100': transaction.type === 'EXPENSE',
                'bg-green-100': transaction.type === 'DEPOSIT',
              })
            "
          >
            <Minus v-if="transaction.type === 'EXPENSE'" />
            <Plus v-if="transaction.type === 'DEPOSIT'" />
          </Avatar>
          <div class="ml-4 space-y-1">
            <p class="text-sm font-medium leading-none">{{ transaction.name }}</p>
            <p class="text-sm text-muted-foreground">{{ transaction.description }}</p>
          </div>
          <div class="ml-auto font-medium">{{ transaction.amount }} {{ transaction.currency }}</div>
        </div>
      </div>
    </CardContent>
    <div class="p-4 mt-auto w-full">
      <Button variant="secondary" class="w-full">Zobacz wszystkie</Button>
    </div>
  </Card>
</template>
