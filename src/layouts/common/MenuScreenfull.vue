<!--
 * @Author: shaohang-shy
 * @Date: 2022-08-18 19:50:52
 * @LastEditors: shaohang-shy
 * @LastEditTime: 2023-07-04 13:38:23
 * @Description: Menu Screenfull
-->
<script setup lang="ts">
import screenfull from 'screenfull'
const isFullscreen = ref(false)
screenfull.on('change', change)
function change() {
  isFullscreen.value = screenfull.isFullscreen
}
</script>

<template>
  <n-icon size="30" @click="screenfull.toggle()">
    <div v-if="isFullscreen" class="i-custom-fullscreen-exit w-full h-full" />
    <div v-else class="i-custom-fullscreen w-full h-full" />
  </n-icon>
</template>
