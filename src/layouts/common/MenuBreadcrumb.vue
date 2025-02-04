<!--
 * @Author: shaohang-shy
 * @Date: 2022-08-18 19:12:49
 * @LastEditors: shaohang-shy
 * @LastEditTime: 2023-01-30 16:22:46
 * @Description: menu breadcrumb
-->
<script setup lang="ts">
import type { MenuOption } from 'naive-ui'
import type { RouteLocationMatched, RouteLocationNormalizedLoaded } from 'vue-router'
import type { RouteRecord } from '~/typings/route'

const levelList = ref<RouteRecord[]>([])
const route = useRoute()
const router = useRouter()
const permissionStore = usePermissionStore()
getLevelList(route, permissionStore.menus as unknown as MenuOption[])

watchEffect(() => {
  getLevelList(route, permissionStore.menus as unknown as MenuOption[])
})

function getLevelList(route: RouteLocationNormalizedLoaded, menus: MenuOption[]) {
  let matched = route.matched.filter(x => x.meta && x.meta.title)
  const first = matched[0]
  if (!isDashboard(first))
    matched = [{ path: '/dashboard', meta: { title: '主页' }, children: menus.map(x => ({ meta: { title: x.label }, path: x.key })) } as unknown as RouteLocationMatched, ...matched]
  levelList.value = matched.filter(item => item.meta && item.meta.title && item.meta.breadcrumb !== false) as unknown as RouteRecord[]
}

function isDashboard(route: RouteLocationMatched) {
  const name = route && route.name
  if (!name)
    return false
  return name.toString().trim().toLocaleLowerCase() === 'Dashboard'.toLocaleLowerCase()
}

function handleSelect(key: string) {
  router.push(key as unknown as string)
}
</script>

<template>
  <n-breadcrumb id="breadcrumb-container">
    <n-breadcrumb-item v-for="(item,) in levelList" :key="item.path">
      <template v-if="item.children && item.children.filter(x => x.hidden !== true)">
        <n-dropdown trigger="hover" :options="item.children.filter(x => x.hidden !== true).map(x => ({ label: x.meta?.title, key: x.path }))" @select="handleSelect">
          <span>{{ item.meta?.title }}</span>
        </n-dropdown>
      </template>
      <template v-else>
        <span>{{ item.meta?.title }}</span>
      </template>
    </n-breadcrumb-item>
  </n-breadcrumb>
</template>
