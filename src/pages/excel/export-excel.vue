<!--
 * @Author: shaohang-shy
 * @Date: 2022-08-28 14:16:16
 * @LastEditors: shaohang-shy
 * @LastEditTime: 2022-09-03 20:59:15
 * @Description: export excel
-->
<script setup lang="ts">
import { test } from '~/utils/xlsx/export'
</script>

<template>
  <div class="p-3">
    <n-button @click="test">
      Test
    </n-button>
  </div>
</template>
