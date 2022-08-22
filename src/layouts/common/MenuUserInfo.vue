<!--
 * @Author: shaohang-shy
 * @Date: 2022-08-18 20:09:18
 * @LastEditors: shaohang-shy
 * @LastEditTime: 2022-08-18 20:14:35
 * @Description: MenuUserInfo
-->
<script setup lang="ts">
const options = [
  {
    label: '个人中心',
    key: 'profile',
  },
  {
    label: '首页',
    key: 'editProfile',
  },
  {
    label: '退出登录',
    key: 'logout',
  },
]
</script>

<template>
  <n-dropdown trigger="hover" :options="options">
    <n-avatar size="medium" class="mx-3 cursor-pointer" src="https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg" />
  </n-dropdown>
</template>
