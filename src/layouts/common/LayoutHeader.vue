<!--
 * @Author: shaohang-shy
 * @Date: 2022-08-18 17:37:38
 * @LastEditors: shaohang-shy
 * @LastEditTime: 2023-01-31 16:03:49
 * @Description: Layout Header
-->
<script setup lang="ts">
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
  <n-layout-header class="header absolute left-0 right-0 top-0 z-10 h-60px flex items-center justify-between border-b border-gray-300/50 px-5">
    <div class="flex items-center justify-center">
      <!-- icon -->
      <!-- title -->
      <MenuLogo :logo="logo" :title="title" />
      <!-- menu switch icon -->
      <MenuSwitch :is-active="appStore.sidebar.opened" @toggle="appStore.toggleSideBar" />
      <!-- breadcrumb -->
      <MenuBreadcrumb v-if="!isMobile" />
    </div>
    <div class="flex items-center justify-center children-mx-1">
      <!-- search -->
      <!-- fullscreen -->
      <MenuScreenfull id="screenfull" />
      <!-- light/dark -->
      <MenuLightDark id="darkswitch" />
      <!-- user info -->
      <MenuUserInfo />
    </div>
  </n-layout-header>
</template>
