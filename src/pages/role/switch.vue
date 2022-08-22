<!--
 * @Author: shaohang-shy
 * @Date: 2022-08-22 11:07:54
 * @LastEditors: shaohang-shy
 * @LastEditTime: 2022-08-22 14:18:28
 * @Description: RoleSwitch
-->
<script setup lang="ts">
import { useUserStore } from '~/store'
import type { RoleType } from '~/typings/route'
const userStore = useUserStore()
function handleChange(value: unknown[]) {
  userStore.setRoles(value as RoleType[])
}
</script>

<template>
  <div>
    切换角色
    <n-checkbox-group :value="userStore.roles" @update:value="handleChange">
      <n-space item-style="display: flex;">
        <n-checkbox value="admin" label="Admin" />
        <n-checkbox value="user" label="User" />
      </n-space>
    </n-checkbox-group>
  </div>
</template>
