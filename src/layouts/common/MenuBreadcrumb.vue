<!--
 * @Author: shaohang-shy
 * @Date: 2022-08-18 19:12:49
 * @LastEditors: shaohang-shy
 * @LastEditTime: 2022-08-22 15:40:00
 * @Description: menu breadcrumb
-->
<script setup lang="ts">
import type { RouteLocationMatched, RouteLocationNormalizedLoaded } from 'vue-router'
import type { RouteRecord } from '~/typings/route'

const levelList = ref<RouteRecord[]>([])
const route = useRoute()
getLevelList(route)

watchEffect(() => {
  getLevelList(route)
})

function getLevelList(route: RouteLocationNormalizedLoaded) {
  let matched = route.matched.filter(x => x.meta && x.meta.title)
  const first = matched[0]
  if (!isDashboard(first))
    matched = [{ path: '/dashboard', meta: { title: '主页' } } as unknown as RouteLocationMatched, ...matched]
  levelList.value = matched.filter(item => item.meta && item.meta.title && item.meta.breadcrumb !== false) as unknown as RouteRecord[]
}

function isDashboard(route: RouteLocationMatched) {
  const name = route && route.name
  if (!name)
    return false
  return name.toString().trim().toLocaleLowerCase() === 'Dashboard'.toLocaleLowerCase()
}
</script>

<template>
  <n-breadcrumb>
    <n-breadcrumb-item v-for="(item,) in levelList" :key="item.path">
      <span>{{ item.meta?.title }}</span>
    </n-breadcrumb-item>
  </n-breadcrumb>
</template>
