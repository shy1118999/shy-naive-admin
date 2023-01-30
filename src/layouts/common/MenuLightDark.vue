<!--
 * @Author: shaohang-shy
 * @Date: 2022-08-18 20:03:11
 * @LastEditors: shaohang-shy
 * @LastEditTime: 2023-01-30 17:48:54
 * @Description: MenuLightDark
-->
<script setup lang="ts">
import { DarkModeRound, LightModeRound } from '@vicons/material'
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
    <DarkModeRound v-if="appStore.theme === 'dark'" />
    <LightModeRound v-else />
  </n-icon>
</template>
