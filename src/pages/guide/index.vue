<!--
 * @Author: shaohang-shy
 * @Date: 2023-01-30 16:17:55
 * @LastEditors: shaohang-shy
 * @LastEditTime: 2023-01-30 16:40:59
 * @Description: guide
-->
<script setup lang="ts">
import Driver from 'driver.js' // import driver.js
import 'driver.js/dist/driver.min.css' // import driver.js css
import steps from './steps'

function guide() {
  const driver = new Driver()

  driver.defineSteps(steps)
  driver.start()
}
</script>

<template>
  <div class="p-3">
    <n-button @click.prevent.stop="guide">
      打开引导
    </n-button>
  </div>
</template>
