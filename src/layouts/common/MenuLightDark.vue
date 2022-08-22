<!--
 * @Author: shaohang-shy
 * @Date: 2022-08-18 20:03:11
 * @LastEditors: shaohang-shy
 * @LastEditTime: 2022-08-22 15:46:38
 * @Description: MenuLightDark
-->
<script setup lang="ts">
import { DarkModeRound, LightModeRound } from '@vicons/material'
import { useAppStore } from '~/store'
const appStore = useAppStore()
</script>

<template>
  <n-icon size="30" @click="appStore.toggleTheme()">
    <DarkModeRound v-if="appStore.theme === 'dark'" />
    <LightModeRound v-else />
  </n-icon>
</template>
