<!--
 * @Author: shaohang-shy
 * @Date: 2022-08-11 17:27:12
 * @LastEditors: shaohang-shy
 * @LastEditTime: 2023-01-30 17:30:22
 * @Description: Basic Layout
-->
<script setup lang="ts">
import LayoutContent from '../common/LayoutContent.vue'
import LayoutHeader from '../common/LayoutHeader.vue'
import LayoutAside from '../common/LayoutAside.vue'
import { useAppStore } from '~/store'

const appStore = useAppStore()
const isMobile = useLayout().isMobile
</script>

<template>
  <n-layout class="w-full h-full pt-60px" :class="{ 'hide-sidebar': !appStore.sidebar.opened, 'open-sidebar': appStore.sidebar.opened, 'without-animation': appStore.sidebar.withoutAnimation, 'mobile': appStore.device === 'mobile' }">
    <!-- header -->
    <LayoutHeader />
    <n-layout has-sider class="w-full h-full" :style="{ paddingLeft: isMobile ? '0px' : appStore.sidebar.opened ? '64px' : '240px' }">
      <!-- aside -->
      <LayoutAside :collapsed="appStore.sidebar.opened" @update:collapsed="appStore.toggleSideBar" />
      <!-- content -->
      <LayoutContent />
    </n-layout>
    <n-back-top />
  </n-layout>
</template>
