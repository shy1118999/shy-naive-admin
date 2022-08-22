<!--
 * @Author: shaohang-shy
 * @Date: 2022-08-18 17:37:38
 * @LastEditors: shaohang-shy
 * @LastEditTime: 2022-08-19 16:39:15
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
const appStore = useAppStore()
</script>

<template>
  <n-layout-header class="flex justify-between px-5 shadow-md items-center h-60px fixed z-10 left-0 top-0 right-0 bg-white header">
    <div class="flex justify-center items-center">
      <!-- icon -->
      <!-- title -->
      <MenuLogo />
      <!-- menu switch icon -->
      <MenuSwitch :is-active="appStore.sidebar.opened" @toggle="appStore.toggleSideBar" />
      <!-- breadcrumb -->
      <MenuBreadcrumb />
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

