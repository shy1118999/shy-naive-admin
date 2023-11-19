<!--
 * @Author: shaohang-shy
 * @Date: 2022-08-29 18:38:46
 * @LastEditors: shaohang-shy
 * @LastEditTime: 2023-07-04 10:21:42
 * @Description: ShyUpload
-->
<script setup lang="ts">
import type { UploadFileInfo } from 'naive-ui'

const props = defineProps<{
  accept: string
  tips: string
}>()
const emits = defineEmits(['upload'])
function handleUpload({ file }: { file: UploadFileInfo }) {
  emits('upload', file?.file as File)
  return false
}
</script>

<template>
  <n-upload
    class="my-3"
    directory-dnd
    :accept="props.accept"
    :on-before-upload="handleUpload as any"
  >
    <n-upload-dragger>
      <div class="m-3">
        <n-icon size="48" :depth="3">
          <div class="i-custom-folder-upload h-full w-full text-gray" />
        </n-icon>
      </div>
      <n-text v-if="tips" class="text-sm">
        {{ tips }}
      </n-text>
    </n-upload-dragger>
  </n-upload>
</template>
