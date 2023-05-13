<!--
 * @Author: shaohang-shy
 * @Date: 2023-04-12 09:50:30
 * @LastEditors: shaohang-shy
 * @LastEditTime: 2023-05-13 15:17:45
 * @Description: edit
-->
<script setup lang="ts">
const form = ref({
  title: '',
  author: '',
})

const router = useRouter()
// 获取route中的id
const id = router.currentRoute.value.query.id
const articleStore = useArticleStore()
// 获取store中指定ID的文章
const article = articleStore.list.find(item => item.id === Number(id))
// 将文章信息赋值给from
if (article) {
  form.value.title = article.title
  form.value.author = article.author
}
else {
  // 提示文章不存在 并且返回
  $dialog.error({
    title: '提示',
    content: '文章不存在',
    positiveText: '确定',
    onPositiveClick: () => {
      router.back()
    },
  })
}
function submit() {
  // 更新文章
  articleStore.updateById(Number(id), form.value).then(() => {
    $message.success('更新成功')
    router.back()
  })
}
</script>

<template>
  <div class="p-3">
    <n-form>
      <n-form-item label="标题">
        <n-input v-model:value="form.title" type="textarea" @keydown.enter.prevent />
      </n-form-item>
      <n-form-item label="作者">
        <n-input v-model:value="form.author" @keydown.enter.prevent />
      </n-form-item>
      <n-form-item>
        <n-space justify="end" class="w-full">
          <n-button type="primary" @click="submit">
            完成
          </n-button>
        </n-space>
      </n-form-item>
    </n-form>
  </div>
</template>
