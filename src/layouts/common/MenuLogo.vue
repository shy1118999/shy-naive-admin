<!--
 * @Author: shaohang-shy
 * @Date: 2022-08-18 19:42:12
 * @LastEditors: shaohang-shy
 * @LastEditTime: 2022-08-22 16:43:51
 * @Description: Menu Logo
-->
<script setup lang="ts">
const props = defineProps<{
  logo?: string
  title?: string
}>()
</script>

<template>
  <div>
    <router-link class="flex items-center justify-center" to="/">
      <img v-if="props.logo" :src="logo" class="mr-2 h-10 w-10">
      <h1 v-if="props.title" class="font-bold lt-sm:hidden">
        {{ title }}
      </h1>
    </router-link>
  </div>
</template>

<style>
</style>
