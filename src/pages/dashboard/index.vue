<!--
 * @Author: shaohang-shy
 * @Date: 2022-08-11 14:33:40
 * @LastEditors: shaohang-shy
 * @LastEditTime: 2023-01-31 15:59:29
 * @Description: dashboard index page
-->
<script setup lang="ts">

</script>

<template>
  <div class="p-10">
    <article>
      <h1 class="text-center text-2xl">
        SHY VUE Naive Admin
      </h1>
      <h2 class="my-2 text-xl">
        简介
      </h2>
      <p dir="auto">
        <a href="https://github.com/shy1118999/shy-naive-admin">shy-naive-admin</a> 是一个基于<code>Vue3</code>、<code>Vite4</code>、<code>TypeScript</code>、<code>NaiveUI</code>、<code>Pinia</code>、<code>UnoCSS</code>的开箱即用的中后台前端模版。
      </p>
      <h2 class="mb-2 text-xl">
        特性
      </h2>
      <ul dir="auto">
        <li><em><strong>最新技术栈</strong></em>：全部采用最新的前端框架及技术，如<code>Vue3</code>、<code>Vite</code>、包管理器<code>pnpm</code>等。</li>
        <li><em><strong>代码规范</strong></em>：采用ESLint保证代码统一。</li>
        <li><em><strong>权限路由</strong></em>：更加用户身份加载不同路由。</li>
        <li><em><strong>useEcharts</strong></em>：快速使用echarts制作图表。</li>
      </ul>
      <h2 class="my-2 text-xl">
        主要技术栈
      </h2>
      <ul dir="auto">
        <li>+ <a href="https://vitejs.dev/" rel="nofollow">Vite</a>-下一代的前端工具链</li>
        <li>+ <a href="https://www.typescriptlang.org/" rel="nofollow">TypeScript</a>-具有类型的JavaScript(JavaScript超集)</li>
        <li>+ <a href="https://vuejs.org/" rel="nofollow">Vue.js</a>-渐进式JavaScript框架</li>
        <li>+ <a href="https://router.vuejs.org/" rel="nofollow">vue-router</a>-Vue.js的官方路由</li>
        <li>+ <a href="https://pinia.vuejs.org/" rel="nofollow">Pinia</a>-值得你喜欢的 Vue Store</li>
        <li>+ <a href="https://www.naiveui.com/" rel="nofollow">Naive UI</a>-一个 Vue 3 组件库</li>
        <li>+ <a href="https://echarts.apache.org/" rel="nofollow">Apache Echarts</a>-一个基于 JavaScript 的开源可视化图表库</li>
        <li>+ <a href="https://vueuse.org/" rel="nofollow">VueUse</a>-Collection of Vue Composition Utilities</li>
        <li>+ <a href="https://github.com/axios/axios">axios</a>-Promise based HTTP client for the browser and node.js</li>
        <li>+ <a href="https://github.com/unocss/unocss">UnoCSS</a>-The instant on-demand atomic CSS engine.</li>
      </ul>
      <h2 class="my-2 text-xl">
        项目示例图
      </h2>
      <p dir="auto">
        <a target="_blank" rel="noopener noreferrer nofollow" href="https://s2.loli.net/2023/01/30/dSHc4xPs5gqzAiL.png"><img src="https://s2.loli.net/2023/01/30/dSHc4xPs5gqzAiL.png" alt="登录页面" data-canonical-src="https://s2.loli.net/2023/01/30/dSHc4xPs5gqzAiL.png" style="max-width: 100%;"></a>
        <a target="_blank" rel="noopener noreferrer nofollow" href="https://s2.loli.net/2023/01/30/gT7XP3HdZW84ciJ.png"><img src="https://s2.loli.net/2023/01/30/gT7XP3HdZW84ciJ.png" alt="工作台" data-canonical-src="https://s2.loli.net/2023/01/30/gT7XP3HdZW84ciJ.png" style="max-width: 100%;"></a>
        <a target="_blank" rel="noopener noreferrer nofollow" href="https://s2.loli.net/2023/01/30/MDHGc3Iwu8xONfV.png"><img src="https://s2.loli.net/2023/01/30/MDHGc3Iwu8xONfV.png" alt="分析页" data-canonical-src="https://s2.loli.net/2023/01/30/MDHGc3Iwu8xONfV.png" style="max-width: 100%;"></a>
        <a target="_blank" rel="noopener noreferrer nofollow" href="https://s2.loli.net/2023/01/30/3lrHuWRN5ditQ7Z.png"><img src="https://s2.loli.net/2023/01/30/3lrHuWRN5ditQ7Z.png" alt="分析页-夜间" data-canonical-src="https://s2.loli.net/2023/01/30/3lrHuWRN5ditQ7Z.png" style="max-width: 100%;"></a>
        <a target="_blank" rel="noopener noreferrer nofollow" href="https://s2.loli.net/2023/01/31/oS142kmwsMXKdCQ.png"><img src="https://s2.loli.net/2023/01/31/oS142kmwsMXKdCQ.png" alt="按钮-夜间" data-canonical-src="https://s2.loli.net/2023/01/30/zcuAprdfQisxJFD.png" style="max-width: 100%;"></a>
      </p>
      <h2 dir="auto">
        <a id="user-content-mock" class="anchor" aria-hidden="true" href="#mock"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z" /></svg></a>Mock
      </h2>
    </article>
  </div>
</template>
