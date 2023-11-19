<!--
 * @Author: shaohang-shy
 * @Date: 2022-08-18 20:03:11
 * @LastEditors: shaohang-shy
 * @LastEditTime: 2023-07-04 10:27:38
 * @Description: MenuLightDark
-->
<script setup lang="ts">
import { toggleDark } from '~/composables/dark'
import { useAppStore } from '~/store'

const appStore = useAppStore()
function toggle() {
  appStore.toggleTheme()
  toggleDark()
}
</script>

<template>
  <n-icon size="30" @click="toggle">
    <div v-if="appStore.theme === 'dark'" class="i-carbon:moon h-full w-full" />
    <div v-else class="i-carbon:sun h-full w-full" />
  </n-icon>
</template>
