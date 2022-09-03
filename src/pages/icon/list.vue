<!--
 * @Author: shaohang-shy
 * @Date: 2022-09-03 21:02:13
 * @LastEditors: shaohang-shy
 * @LastEditTime: 2022-09-03 21:40:58
 * @Description: icon list
-->
<script setup lang="ts">
const iconNames = Object.entries(import.meta.glob('../../assets/icons/*.svg', { eager: false })).map(([filename]) => {
  return /.+\/(.*?).svg$/.exec(filename)?.[1]
})
const source = ref('')
const { copy, isSupported, copied } = useClipboard({ source })
function handleCopy(name: string) {
  source.value = name
  if (isSupported.value)
    copy()
}
watchEffect(() => {
  if (copied.value)
    $message.success(`${source.value} copied!`)
})
</script>

<template>
  <div class="p-3">
    icon list
    <n-space>
      <n-space v-for="icon in iconNames" :key="icon" class="w-25 h-25 cursor-pointer" vertical justify="center" align="center" :title="icon">
        <n-icon size="40" @click="handleCopy(`<svg-icon name='${icon}' />`)">
          <svg-icon :name="icon!" />
        </n-icon>
        <span @click="handleCopy(icon!)">{{ icon }}</span>
      </n-space>
    </n-space>
  </div>
</template>
