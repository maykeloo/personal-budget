<script setup lang="ts">
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/ui/components/ui/tabs'
</script>

<template>
  <Tabs default-value="account" class="w-[400px]">
    <TabsList>
      <TabsTrigger value="day"> Day </TabsTrigger>
      <TabsTrigger value="month"> Month </TabsTrigger>
      <TabsTrigger value="quarter"> Quarter </TabsTrigger>
      <TabsTrigger value="year"> Year </TabsTrigger>
    </TabsList>
    <TabsContent value="day"> Day content </TabsContent>
    <TabsContent value="month"> Month content </TabsContent>
    <TabsContent value="quarter"> Quarter content </TabsContent>
    <TabsContent value="year"> Year content </TabsContent>
  </Tabs>
</template>
