<!--
 * @Author: shaohang-shy
 * @Date: 2022-08-19 14:31:45
 * @LastEditors: shaohang-shy
 * @LastEditTime: 2022-08-25 17:24:51
 * @Description: 404
-->
<script setup lang="ts">
const router = useRouter()
function goBack() {
  router.go(-1)
}
</script>

<template>
  <div class="h-full w-full flex flex-col items-center justify-center">
    <div class="text-30 color-blue">
      4<span class="color-green">0</span>4
    </div>
    <div class="text-30px color-gray">
      啊哦~ 你所访问的页面不存在
    </div>
    <div class="mt-5 pb-50">
      <router-link to="/">
        <n-button type="success" size="large">
          返回首页
        </n-button>
      </router-link>
      <n-button class="ml-10" type="primary" size="large" @click="goBack">
        返回上一页
      </n-button>
    </div>
  </div>
</template>
