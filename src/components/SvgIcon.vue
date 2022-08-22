<!--
 * @Author: shaohang-shy
 * @Date: 2022-08-20 09:58:35
 * @LastEditors: shaohang-shy
 * @LastEditTime: 2022-08-22 10:42:07
 * @Description: SvgIcon
-->
<script lang="ts" setup>
const props = withDefaults(defineProps<{
  prefix?: string
  name: string
  size?: number
}>(), {
  prefix: 'icon',
  // size: 40,
})
const symbolId = computed(() => `#${props.prefix}-${props.name}`)
</script>

<template>
  <n-icon :size="props.size">
    <svg aria-hidden="true">
      <use :xlink:href="symbolId" />
    </svg>
  </n-icon>
</template>
