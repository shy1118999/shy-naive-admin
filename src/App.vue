<!--
 * @Author: shaohang-shy
 * @Date: 2022-08-10 18:47:24
 * @LastEditors: shaohang-shy
 * @LastEditTime: 2022-08-22 15:48:50
 * @Description: App
-->
<script lang="ts" setup>
import { darkTheme } from 'naive-ui'
import { useAppStore } from '~/store'

const appStore = useAppStore()
</script>

<template>
  <n-config-provider
    :theme="appStore.theme === 'dark' ? darkTheme : null"
    class="h-full"
  >
    <router-view />
  </n-config-provider>
</template>
