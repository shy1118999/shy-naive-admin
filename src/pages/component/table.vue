<!--
 * @Author: shaohang-shy
 * @Date: 2022-08-11 14:03:26
 * @LastEditors: shaohang-shy
 * @LastEditTime: 2023-01-30 09:47:37
 * @Description: component table page
-->
<script setup lang="tsx">
import { NRate } from 'naive-ui'
import articles from '~/articles.json'

interface ArticleItem {
  id: number
  timestamp: number
  author: string
  reviewer: string
  title: string
  content_short: string
  content: string
  forecast: number
  importance: number
  type: string
  status: string
  display_name: string
  comment_disabled: boolean
  pageviews: number
  image_uri: string
  platforms: string[]
}
const columns = [
  {
    title: 'ID',
    key: 'id',
  },
  {
    title: 'Date',
    key: 'display_time',
  },
  {
    title: 'Author',
    key: 'author',
  },
  {
    title: 'Importance',
    key: 'importance',
    render(row: ArticleItem) {
      return (<NRate readonly default-value={row.importance}></NRate>)
    },
  },
  {
    title: 'Title',
    key: 'title',
  },
]
</script>

<template>
  <div class="p-3">
    <n-h1>Table</n-h1>
    <n-data-table :data="articles" :columns="columns" :pagination="{}" />
  </div>
</template>
