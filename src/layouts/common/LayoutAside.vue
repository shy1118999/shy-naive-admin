<!--
 * @Author: shaohang-shy
 * @Date: 2022-08-18 17:47:22
 * @LastEditors: shaohang-shy
 * @LastEditTime: 2022-08-24 16:40:41
 * @Description: LayoutAside
-->
<script setup lang="ts">
import { MenuOption } from 'naive-ui'
import SvgIcon from '~/components/SvgIcon.vue'
import { usePermissionStore } from '~/store'

const props = defineProps<{
  collapsed: boolean
}>()

const emits = defineEmits(['update:collapsed'])

const isMobile = useLayout().isMobile

const permissionStore = usePermissionStore()
const router = useRouter()

function handleUpdateMenu(_key: string, item: MenuOption) {
  router.push(item.key as unknown as string)
  if (isMobile.value)
    emits('update:collapsed', false)
}
const route = useRoute()

function renderMenuIcon(options: MenuOption) {
  return h(SvgIcon, { name: options.iconName as string ?? 'dingdan' })
}
</script>

<template>
  <template v-if="!isMobile">
    <n-layout-sider
      bordered class="fixed left-0 top-0 bottom-0 pt-60px shadow z-9"
      collapse-mode="width"
      :collapsed-width="64"
      :width="240"
      :collapsed="props.collapsed"
      show-trigger
      @collapse="emits('update:collapsed', true)"
      @expand="emits('update:collapsed', false)"
    >
      <n-menu
        :options="permissionStore.menus as MenuOption[]"
        :collapsed="props.collapsed"
        :collapsed-width="64"
        :collapsed-icon-size="22"
        :render-icon="renderMenuIcon"
        :value="route.fullPath"
        @update:value="handleUpdateMenu"
      />
    </n-layout-sider>
  </template>
  <template v-else>
    <n-drawer
      :show="props.collapsed"
      width="80vw"
      placement="left"
      display-directive="show"
      @update:show="emits('update:collapsed', false)"
    >
      <n-menu
        :options="permissionStore.menus as MenuOption[]"
        :render-icon="renderMenuIcon"
        :value="route.fullPath"
        @update:value="handleUpdateMenu"
      />
    </n-drawer>
  </template>
</template>
