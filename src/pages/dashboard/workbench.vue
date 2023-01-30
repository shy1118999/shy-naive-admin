<!--
 * @Author: shaohang-shy
 * @Date: 2022-08-11 14:00:48
 * @LastEditors: shaohang-shy
 * @LastEditTime: 2023-01-30 15:51:53
 * @Description: dashboard workbench page
-->
<script setup lang="ts">
const technologyStack = [
  { name: 'Vue.js', desc: '渐进式JavaScript框架', icon: 'vue' },
  { name: 'Vite', desc: '下一代的前端工具链', icon: 'vite' },
  { name: 'TypeScript', desc: '具有类型的JavaScript(JavaScript超集)', icon: 'typescript' },
  { name: 'vue-router', desc: 'Vue.js的官方路由', icon: 'vue' },
  { name: 'Pinia', desc: '值得你喜欢的 Vue Store', icon: 'pinia' },
  { name: 'Naive UI', desc: '一个 Vue 3 组件库', icon: 'naiveui' },
  { name: 'Apache Echarts', desc: '一个基于 JavaScript 的开源可视化图表库', icon: 'echarts' },
  { name: 'VueUse', desc: 'Collection of Vue Composition Utilities', icon: 'vueuse' },
  { name: 'axios', desc: 'Promise based HTTP client for the browser and node.js', icon: 'axios' },
  { name: 'UnoCSS', desc: 'The instant on-demand atomic CSS engine.', icon: 'unocss' },
]

const shortcuts = [
  { name: '主页', icon: 'shouye', path: '/' },
  { name: '图标', icon: 'dianzan', path: '/icon/list' },
  { name: '图表', icon: 'tongji', path: '/charts/line' },
  { name: 'Excel', icon: 'zixun1', path: '/excel/export-excel' },
]
const router = useRouter()
function handleTo(path: string) {
  router.push({
    path,
  })
}
</script>

<template>
  <div class="p-3">
    <n-card>
      <div class="flex items-center">
        <n-avatar round :size="48" src="https://s2.loli.net/2023/01/30/thNH2dbqjzETlSK.jpg" />
        <div class="flex flex-col pl-3">
          <p class="text-xl font-bold">
            你好呀，又是元气满满的一天！
          </p>
          <p>今天想转多云，晚上有星星哦。</p>
        </div>
      </div>
    </n-card>
    <n-grid :x-gap="16" :y-gap="16" :item-responsive="true" class="mt-3">
      <n-grid-item span="0:24 640:24 1024:16">
        <n-card title="主要技术栈">
          <n-grid cols="s:1 m:2 l:4" responsive="screen" :x-gap="16" :y-gap="16">
            <n-grid-item v-for="item, idx in technologyStack" :key="idx">
              <div class="shadow rounded-xl p-3">
                <h3 class="text-16px flex items-center">
                  <svg-icon :name="item.icon" class="text-30px mr-3" />
                  {{ item.name }}
                </h3>
                <div class="flex justify-end text-sm pt-12px pr-5">
                  {{ item.desc }}
                </div>
              </div>
            </n-grid-item>
          </n-grid>
        </n-card>
      </n-grid-item>
      <n-grid-item span="0:24 640:24 1024:8">
        <n-card title="快捷操作">
          <div class="flex flex-wrap">
            <div v-for="item, idx in shortcuts" :key="idx" class="shadow rounded-xl m-2 p-3 w-25 h-25 flex items-center justify-center flex-col cursor-pointer" @click="handleTo(item.path)">
              <svg-icon :name="item.icon" :size="40" />
              <p class="text-lg text-center">
                {{ item.name }}
              </p>
            </div>
          </div>
        </n-card>
      </n-grid-item>
    </n-grid>
  </div>
</template>
