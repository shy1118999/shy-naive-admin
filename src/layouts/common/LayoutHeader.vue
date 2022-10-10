<!--
 * @Author: shaohang-shy
 * @Date: 2022-08-18 17:37:38
 * @LastEditors: shaohang-shy
 * @LastEditTime: 2022-10-10 14:50:10
 * @Description: Layout Header
-->
<script setup lang="ts">
import { useThemeVars } from 'naive-ui'
import MenuSwitch from './MenuSwitch.vue'
import MenuBreadcrumb from './MenuBreadcrumb.vue'
import MenuLogo from './MenuLogo.vue'
import MenuScreenfull from './MenuScreenfull.vue'
import MenuLightDark from './MenuLightDark.vue'
import MenuUserInfo from './MenuUserInfo.vue'
import { useAppStore } from '~/store'
import settings from '~/settings'
const { title, logo } = settings
const appStore = useAppStore()
// const themeVars = useThemeVars()
const isMobile = useLayout().isMobile
</script>

<template>
  <n-layout-header class="flex justify-between px-5 items-center h-60px fixed z-10 left-0 top-0 right-0 header  border-b border-gray-300/50">
    <div class="flex justify-center items-center">
      <!-- icon -->
      <!-- title -->
      <MenuLogo :logo="logo" :title="title" />
      <!-- menu switch icon -->
      <MenuSwitch :is-active="appStore.sidebar.opened" @toggle="appStore.toggleSideBar" />
      <!-- breadcrumb -->
      <MenuBreadcrumb v-if="!isMobile" />
    </div>
    <div class="flex justify-center items-center children-mx-1">
      <!-- search -->
      <!-- fullscreen -->
      <MenuScreenfull />
      <!-- light/dark -->
      <MenuLightDark />
      <!-- user info -->
      <MenuUserInfo />
    </div>
  </n-layout-header>
</template>

