<!--
 * @Author: shaohang-shy
 * @Date: 2022-08-28 14:17:48
 * @LastEditors: shaohang-shy
 * @LastEditTime: 2022-09-03 20:59:32
 * @Description: upload-excel
-->
<script setup lang="ts">
import { parseExcelToTable } from '~/utils/xlsx/import'

const html = ref('')
function handleUpload(file: File) {
  parseExcelToTable(file).then((res) => {
    html.value = res
  })
}
</script>

<template>
  <div class="p-3">
    <ShyUpload accept="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" tips="请上传Excel" @upload="handleUpload" />
    <div v-html="html" />
  </div>
</template>
