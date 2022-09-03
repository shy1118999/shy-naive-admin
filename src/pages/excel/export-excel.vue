<!--
 * @Author: shaohang-shy
 * @Date: 2022-08-28 14:16:16
 * @LastEditors: shaohang-shy
 * @LastEditTime: 2022-08-28 21:06:47
 * @Description: export excel
-->
<script setup lang="ts">
import { test } from '~/utils/xlsx/export'
</script>

<template>
  <div>
    <n-button @click="test">
      Test
    </n-button>
  </div>
</template>
