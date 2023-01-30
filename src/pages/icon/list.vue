<!--
 * @Author: shaohang-shy
 * @Date: 2022-09-03 21:02:13
 * @LastEditors: shaohang-shy
 * @LastEditTime: 2023-01-30 11:28:14
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
    <n-h1>
      图标
    </n-h1>
    <p>点击图标复制组件名(例如：`{{ `<svg-icon name='QQ' />` }}`)。</p>
    <p>点击图标名称复制图片名(例如：`{{ `QQ` }}`)。</p>
    <p>图标来自<a class="text-blue" href="https://www.iconfont.cn/collections/detail?spm=a313x.7781069.0.da5a778a4&cid=42779">iconfont</a>，商业使用请联系作者。</p>
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
