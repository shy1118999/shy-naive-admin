<!--
 * @Author: shaohang-shy
 * @Date: 2022-08-10 19:13:08
 * @LastEditors: shy1118
 * @LastEditTime: 2023-11-19 14:22:12
 * @Description: Footer
-->
<script lang="ts" setup></script>

<template>
  <nav mt-6 inline-flex gap-2 text-xl>
    <button icon-btn @click="toggleDark()">
      <div class="i-carbon-sun dark:i-carbon-moon" />
    </button>

    <a
      class="i-carbon-logo-github icon-btn"
      rel="noreferrer"
      href="https://github.com/shy1118/shy-vue-template"
      target="_blank"
      title="GitHub"
    />
  </nav>
</template>
