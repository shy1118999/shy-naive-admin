<!--
 * @Author: shaohang-shy
 * @Date: 2022-08-18 19:42:12
 * @LastEditors: shaohang-shy
 * @LastEditTime: 2022-08-18 19:48:01
 * @Description: Menu Logo
-->
<script setup lang="ts">
const logo = 'https://wpimg.wallstcn.com/69a1c46c-eb1c-4b46-8bd4-e9e686ef5251.png'
const title = 'Vue Naive Admin'
</script>

<template>
  <div>
    <router-link class="flex justify-center items-center" to="/">
      <img v-if="logo" :src="logo" class="w-10 h-10 mr-2">
      <h1 v-if="title" class="font-bold">
        {{ title }}
      </h1>
    </router-link>
  </div>
</template>

<style>
</style>
