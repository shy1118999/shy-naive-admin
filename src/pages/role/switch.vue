<!--
 * @Author: shaohang-shy
 * @Date: 2022-08-22 11:07:54
 * @LastEditors: shaohang-shy
 * @LastEditTime: 2023-01-30 09:15:21
 * @Description: RoleSwitch
-->
<script setup lang="ts">
import { useUserStore } from '~/store'
import type { RoleType } from '~/typings/route'

const userStore = useUserStore()
const key = ref(1)
function handleChange(value: unknown[]) {
  userStore.setRoles(value as RoleType[])
  key.value++
}
</script>

<template>
  <div class="p-3">
    切换角色
    <n-checkbox-group :value="userStore.roles" @update:value="handleChange">
      <n-space item-style="display: flex;">
        <n-checkbox value="admin" label="Admin" />
        <n-checkbox value="user" label="User" />
      </n-space>
    </n-checkbox-group>
    <div :key="key">
      <n-tag v-permission="['admin']" type="success">
        Admin
      </n-tag>
      <n-tag v-permission="['user']" type="success">
        User
      </n-tag>
    </div>
  </div>
</template>
