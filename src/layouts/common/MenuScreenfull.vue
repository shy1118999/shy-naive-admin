<!--
 * @Author: shaohang-shy
 * @Date: 2022-08-18 19:50:52
 * @LastEditors: shaohang-shy
 * @LastEditTime: 2022-08-18 20:02:03
 * @Description: Menu Screenfull
-->
<script setup lang="ts">
import screenfull from 'screenfull'
import { FullscreenExitRound, FullscreenRound } from '@vicons/material'
const isFullscreen = ref(false)
screenfull.on('change', change)
function change() {
  isFullscreen.value = screenfull.isFullscreen
}
</script>

<template>
  <n-icon size="30" @click="screenfull.toggle()">
    <FullscreenExitRound v-if="isFullscreen" />
    <FullscreenRound v-else />
  </n-icon>
</template>
