<!--
 * @Author: shaohang-shy
 * @Date: 2022-08-28 14:16:16
 * @LastEditors: shaohang-shy
 * @LastEditTime: 2023-01-30 10:43:46
 * @Description: export excel
-->
<script setup lang="ts">
import type { TableColumns } from 'naive-ui/es/data-table/src/interface'
import type { DataTableRowKey } from 'naive-ui'
import { exportToExcel } from '~/utils/xlsx/export'
import articles from '~/articles.json'

const columns: TableColumns = [
  {
    type: 'selection',
  },
  {
    title: 'ID',
    key: 'id',
  },
  {
    title: '作者',
    key: 'author',
  },
  {
    title: '标题',
    key: 'title',
  },
  {
    title: '浏览数',
    key: 'pageviews',
  },
  {
    title: '发布时间',
    key: 'timestamp',
    render(row: any) {
      return (new Date(row.timestamp)).toDateString()
    },
  },

]

const modalShow = ref(false)
const filename = ref('')
const checkedRowKeysRef = ref<DataTableRowKey[]>([])

function handleShowExport() {
  modalShow.value = true
}
function handleExport() {
  exportToExcel({
    sheets: [
      {
        header: [
          { key: 'id', title: 'ID' },
          { key: 'author', title: '作者' },
          { key: 'title', title: '标题' },
          { key: 'pageviews', title: '浏览数' },
          { key: 'timestamp', title: '发布时间', formatter: (v: string | number) => (new Date(v)).toDateString() },
        ],
        data: articles.filter(x => checkedRowKeysRef.value.includes(x.id)),
        autoWidth: true,
      },
    ],
    fileName: filename.value.trim(),
  })
}

function handleCheck(rowKeys: DataTableRowKey[]) {
  checkedRowKeysRef.value = rowKeys
}
</script>

<template>
  <div class="p-3">
    <n-button class="mb-3" @click="handleShowExport">
      导出至Excel
    </n-button>
    <submit-modal title="请输入Excel文件名" :loading="false" :show="modalShow" @submit="handleExport" @cancel="modalShow = false">
      <n-input v-model:value="filename" placeholder="请输入人Excel文件名" />
    </submit-modal>
    <n-data-table :data="articles" :columns="columns" :row-key="row => row.id" @update:checked-row-keys="handleCheck" />
  </div>
</template>
