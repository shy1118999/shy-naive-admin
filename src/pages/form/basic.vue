<!--
 * @Author: shaohang-shy
 * @Date: 2022-08-22 10:16:54
 * @LastEditors: shaohang-shy
 * @LastEditTime: 2023-04-12 10:04:52
 * @Description: FormBasic
-->
<script setup lang="tsx">
import type { TableColumns } from 'naive-ui/es/data-table/src/interface'
import type { Article } from '~/store/modules/article'
const router = useRouter()
const articleStore = useArticleStore()
articleStore.loadList()
function handleDeleteArticle(id: number) {
  $dialog.warning({
    title: '提示',
    content: '确定删除该文章吗？',
    positiveText: '确定',
    negativeText: '取消',
    onPositiveClick: () => {
      articleStore.deleteById(id).then(() => {
        $message.success('删除成功')
      })
    },
    onNegativeClick: () => {
      $message.info('已取消')
    },
  })
}
const columns: TableColumns<Article> = [
  { title: 'ID', key: 'id', width: 80, align: 'center' },
  { title: '标题', key: 'title', width: 200, align: 'center' },
  { title: '作者', key: 'author', width: 100, align: 'center' },
  { title: '发布时间', key: 'publish_time', width: 200, align: 'center' },
  { title: '阅读量', key: 'read_count', width: 100, align: 'center' },
  { title: '状态', key: 'status', width: 100, align: 'center' },
  {
    title: '操作',
    key: 'action',
    width: 200,
    align: 'center',
    render(rowData: Article) {
      return (
        <n-space justify="center">
          <n-button type="primary" size="small" onClick={() => { router.push({ path: '/form/edit', query: { id: rowData.id } }) }}>
            编辑
          </n-button>
          <n-button type="error" size="small" onClick={() => { handleDeleteArticle(rowData.id) }}>
            删除
          </n-button>
        </n-space>
      )
    },
  },
]
</script>

<template>
  <div class="p-3">
    <n-data-table :columns="columns" :data="articleStore.list" :pagination="{ pageSize: 10 }" />
  </div>
</template>
