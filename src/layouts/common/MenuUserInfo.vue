<!--
 * @Author: shaohang-shy
 * @Date: 2022-08-18 20:09:18
 * @LastEditors: shy1118
 * @LastEditTime: 2023-11-19 14:19:39
 * @Description: MenuUserInfo
-->
<script setup lang="ts">
const userStore = useUserStore()
const options = [
  {
    label: '个人中心',
    key: 'profile',
  },
  {
    label: '首页',
    key: 'toIndex',
  },
  {
    label: '退出登录',
    key: 'logout',
  },
]
const avatar = computed(() => {
  return userStore.userInfo?.avatar ?? 'https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg'
})
const router = useRouter()
async function handleSelect(key: string) {
  if (key === 'profile') {
    router.push({ path: '/profile' })
  }
  else if (key === 'toIndex') {
    router.push({ path: '/' })
  }
  else if (key === 'logout') {
    await userStore.logout()
    router.replace({ path: '/' })
  }
}
</script>

<template>
  <n-dropdown trigger="hover" :options="options" @select="handleSelect">
    <n-avatar size="medium" class="mx-3 cursor-pointer" :src="avatar" />
  </n-dropdown>
</template>
