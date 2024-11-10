<script setup lang="ts">
import { useUserStore } from '@/domain/user/data-access/user.store'
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from '@/ui/components/ui/navigation-menu'

const { user } = useUserStore()
</script>

<template>
  <NavigationMenu>
    <NavigationMenuList>
      <NavigationMenuItem>
        <NavigationMenuLink href="/docs/introduction" :class="navigationMenuTriggerStyle()">
          {{ user?.id }}
        </NavigationMenuLink>
      </NavigationMenuItem>
    </NavigationMenuList>
  </NavigationMenu>
</template>
