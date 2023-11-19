<!--
 * @Author: shaohang-shy
 * @Date: 2022-08-11 14:00:16
 * @LastEditors: shaohang-shy
 * @LastEditTime: 2023-01-31 16:04:03
 * @Description: dashboard analysis page
-->
<script setup lang="ts">
import articles from '~/articles.json'

const cardData = ref([
  { name: '访问量', value: '1,000,000', colors: ['#ec4786', '#b955a4'] },
  { name: '上传量', value: '1,000,000', colors: ['#865ec0', '#5144b4'] },
  { name: '下载量', value: '1,000,000', colors: ['#56cdf3', '#719de3'] },
  { name: '总人数', value: '1,000', colors: ['#fcbc25', '#f68057'] },
])

const columns = [
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
</script>

<template>
  <div class="p-3">
    <n-card title="数据统计" :bordered="false" class="my-5 rounded-16px shadow-sm">
      <n-grid cols="s:1 m:2 l:4" responsive="screen" :x-gap="16" :y-gap="16">
        <n-grid-item v-for="item, idx in cardData" :key="idx">
          <gradient-bg class="h-100px" :start-color="item.colors[0]" :end-color="item.colors[1]">
            <h3 class="text-16px">
              {{ item.name }}
            </h3>
            <div class="flex justify-end pr-5 pt-12px text-2xl">
              {{ item.value }}
            </div>
          </gradient-bg>
        </n-grid-item>
      </n-grid>
    </n-card>
    <n-grid :x-gap="16" :y-gap="16" :item-responsive="true">
      <n-grid-item span="0:24 640:24 1024:8">
        <n-card title="时间线">
          <n-timeline>
            <n-timeline-item title="这是第一个状态" content="万事开头难，开始了就好了。" time="2018-01-01 18:00" />
            <n-timeline-item type="success" title="成功" content="哪里成功" time="2018-04-03 20:46" />
            <n-timeline-item type="error" content="哪里错误" time="2018-04-03 20:46" />
            <n-timeline-item type="warning" title="警告" content="哪里警告" time="2018-04-03 20:46" />
            <n-timeline-item type="info" title="信息" content="是的" time="2018-04-03 20:46" line-type="dashed" />
            <n-timeline-item title="这是最终的结果" content="game over" time="2018-05-01 16:00" />
          </n-timeline>
        </n-card>
      </n-grid-item>
      <n-grid-item span="0:24 640:24 1024:16">
        <n-card title="表格">
          <n-data-table :data="articles" :columns="columns" :bordered="false" :pagination="{}" />
        </n-card>
      </n-grid-item>
    </n-grid>
  </div>
</template>
