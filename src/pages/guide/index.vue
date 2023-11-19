<!--
 * @Author: shaohang-shy
 * @Date: 2023-01-30 16:17:55
 * @LastEditors: shaohang-shy
 * @LastEditTime: 2023-01-30 18:00:22
 * @Description: guide
-->
<script setup lang="ts">
import Driver from 'driver.js'

// import driver.js
import 'driver.js/dist/driver.min.css'

// import driver.js css
import steps from './steps'

function guide() {
  const driver = new Driver()

  driver.defineSteps(steps)
  driver.start()
}
</script>

<template>
  <div class="p-3">
    <p class="mb-3 bg-gray/20 px-3 py-2">
      引导页对于一些第一次进入项目的人很有用，你可以简单介绍下项目的功能。本 Demo 是基于 <a
        href="https://github.com/kamranahmedse/driver.js" target="_black"
        class="text-blue"
      >driver.js.</a>
    </p>
    <n-button @click.prevent.stop="guide">
      打开引导
    </n-button>
  </div>
</template>

<style>
.dark #driver-highlighted-element-stage,
.dark #driver-popover-item {
  background-color: #333 !important;
  color: #fff !important;
}

.dark #driver-popover-item .driver-popover-description {
  color: #ddd;
}

.dark #driver-popover-item .driver-close-btn,
.dark #driver-popover-item .driver-prev-btn,
.dark #driver-popover-item .driver-next-btn {
  background-color: #333 !important;
}

.dark #driver-popover-item .driver-popover-tip.top {
  border-color: transparent transparent #333 !important;
}

.dark #driver-popover-item .driver-popover-tip.right {
  border-color: transparent transparent transparent #333 !important;
}
.dark #driver-popover-item .driver-popover-footer button {
  color: #fff;
  text-shadow: 1px 1px 0 #000;
}
</style>
