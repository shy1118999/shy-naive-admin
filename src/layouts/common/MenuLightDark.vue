<!--
 * @Author: shaohang-shy
 * @Date: 2022-08-18 20:03:11
 * @LastEditors: shaohang-shy
 * @LastEditTime: 2022-08-18 20:06:10
 * @Description: MenuLightDark
-->
<script setup lang="ts">
import { DarkModeRound, LightModeRound } from '@vicons/material'
</script>

<template>
  <n-icon size="30" @click="toggleDark()">
    <DarkModeRound v-if="isDark" />
    <LightModeRound v-else />
  </n-icon>
</template>
