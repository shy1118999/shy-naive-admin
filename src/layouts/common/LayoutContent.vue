<!--
 * @Author: shaohang-shy
 * @Date: 2022-08-18 17:35:45
 * @LastEditors: shaohang-shy
 * @LastEditTime: 2022-08-24 18:14:13
 * @Description: Layout Content
-->
<script setup lang="ts">
import LayoutTagsView from './LayoutTagsView.vue'
const appStore = useAppStore()
const tagsViewStore = useTagsViewStore()
</script>

<template>
  <n-layout-content :style="{ paddingTop: appStore.showTagsView ? '40px' : '0' }">
    <LayoutTagsView v-show="appStore.showTagsView" />
    <router-view v-slot="{ Component, route }">
      <keep-alive :include="tagsViewStore.cachedViews">
        <component :is="Component" :key="route.fullPath" />
      </keep-alive>
    </router-view>
  </n-layout-content>
</template>
