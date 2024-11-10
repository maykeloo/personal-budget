<script setup lang="ts">
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/ui/components/ui/dropdown-menu'
import { Button } from '@/ui/components/ui/button'
</script>

<template>
  <DropdownMenu>
    <DropdownMenuTrigger>
      <Button> Add cash flow </Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent>
      <DropdownMenuItem>Expense</DropdownMenuItem>
      <DropdownMenuItem>Dodanie kasy</DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
</template>
