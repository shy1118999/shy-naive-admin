<!--
 * @Author: shaohang-shy
 * @Date: 2022-08-28 14:16:16
 * @LastEditors: shaohang-shy
 * @LastEditTime: 2023-01-31 16:11:23
 * @Description: export excel
-->
<script setup lang="ts">
import type { TableColumns } from 'naive-ui/es/data-table/src/interface'
import { exportToExcel } from '~/utils/xlsx/export'
import articles from '~/articles.json'

const columns: TableColumns = [
  {
    title: 'ID',
    key: 'id',
  },
  {
    title: '信息',
    key: 'information',
    align: 'center',
    children: [{
      title: '作者',
      key: 'author',
    }, {
      title: '标题',
      key: 'title',
    }, {
      title: '浏览数',
      key: 'pageviews',
    }],
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
        multiHeader: [['ID', '信息', '', '', '发布时间']],
        data: articles,
        merges: ['A1:A2', 'B1:D1', 'E1:E2'],
        autoWidth: true,
      },
    ],
    fileName: filename.value.trim(),
  })
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
    <n-data-table :data="articles" :columns="columns" />
  </div>
</template>
