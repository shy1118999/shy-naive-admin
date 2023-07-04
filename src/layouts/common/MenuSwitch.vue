<!--
 * @Author: shaohang-shy
 * @Date: 2022-08-18 19:07:32
 * @LastEditors: shaohang-shy
 * @LastEditTime: 2023-07-04 13:40:40
 * @Description: MenuSwitch
-->
<script setup lang="ts">
const props = defineProps<{
  isActive: boolean
}>()
const emits = defineEmits(['toggle'])
</script>

<template>
  <div id="hamburger-container" class="p-15px cursor-pointer" @click="emits('toggle')">
    <n-icon size="20" class="menu-switch transition-transform duration-500" :class="{ 'is-active': props.isActive }">
      <div class="w-full h-full i-custom-menu-open" />
    </n-icon>
  </div>
</template>

<style scoped>
.menu-switch {
  display: inline-block;
  vertical-align: middle;
  width: 20px;
  height: 20px;
}

.menu-switch.is-active {
  transform: rotate(180deg);
}
</style>
