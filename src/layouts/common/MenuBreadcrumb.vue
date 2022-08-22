<!--
 * @Author: shaohang-shy
 * @Date: 2022-08-18 19:12:49
 * @LastEditors: shaohang-shy
 * @LastEditTime: 2022-08-19 09:17:42
 * @Description: menu breadcrumb
-->
<script setup lang="ts">
import type { RouteLocationMatched, RouteLocationNormalizedLoaded } from 'vue-router'
import type { RouteRecord } from '~/typings/route'

const levelList = ref<RouteRecord[]>([])
const route = useRoute()
const router = useRouter()
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
function handleLink(item: RouteRecord) {
  const { redirect, path } = item
  if (redirect) {
    router.push(redirect)
    return
  }
  router.push(path)
}
</script>

<template>
  <n-breadcrumb>
    <n-breadcrumb-item v-for="(item, index) in levelList" :key="item.path">
      <span v-if="item.redirect === 'noRedirect' || index === levelList.length - 1" class="color-[#97a8be] cursor-text">
        {{ item.meta?.title }}
      </span>
      <span v-else @click.prevent="handleLink(item)">{{ item.meta?.title }}</span>
    </n-breadcrumb-item>
  </n-breadcrumb>
</template>
