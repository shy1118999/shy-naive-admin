<!--
 * @Author: shaohang-shy
 * @Date: 2022-08-19 09:05:03
 * @LastEditors: shaohang-shy
 * @LastEditTime: 2023-07-04 10:15:55
 * @Description: login
-->
<script setup lang="ts">
import type { FormInst, FormRules } from 'naive-ui'
import { useUserStore } from '~/store'

const INITIAL_DATA = {
  account: '',
  password: '',
}
const FORM_RULES: FormRules = {
  account: [{ required: true, message: '账号必填', trigger: ['input', 'blur'] }],
  password: [{ required: true, message: '密码必填', trigger: ['input', 'blur'] }],
}
const formRef = ref<FormInst | null>(null)
const formData = ref({ ...INITIAL_DATA })
const showPwd = ref(false)
const router = useRouter()
const userState = useUserStore()

const redirect = useRoute().query.redirect || '/'
async function handleLogin() {
  // 验证
  if (formData.value.account.trim() === '') {
    $message.warning('请输入账号')
    return
  }
  if (formData.value.password.trim() === '') {
    $message.warning('请输入密码')
    return
  }
  try {
    await userState.login(formData.value.account, formData.value.password)
    $message.success('登陆成功')
    router.push({
      path: (redirect || '/') as string,
    })
  }
  catch (e) {
    console.error(e)
  }
}
</script>

<template>
  <div
    class="login-main fixed left-0 top-0 h-100vh w-100vw flex items-center md:justify-start lt-md:justify-center lt-md:p-10 md:p-20"
  >
    <div class="w-md">
      <!-- 登录面板 -->
      <div>
        <h1 class="text-5xl text-light-900 leading-loose lt-md:text-3xl">
          登录到
        </h1>
        <h1 class="text-5xl text-light-900 leading-loose lt-md:text-3xl">
          Vue Naive Admin
        </h1>
      </div>
      <n-form ref="formRef" label-placement="left" class="my-5xl" :model="formData" :rules="FORM_RULES">
        <n-form-item path="account">
          <n-input v-model:value="formData.account" size="large" placeholder="请输入账号">
            <template #prefix>
              <div class="i-carbon:user-admin" />
            </template>
          </n-input>
        </n-form-item>
        <n-form-item path="password">
          <n-input v-model:value="formData.password" size="large" :type="showPwd ? 'text' : 'password'" placeholder="请输入密码" @keydown.enter="handleLogin">
            <template #prefix>
              <div class="i-carbon:password" />
            </template>
            <template #suffix>
              <div :class="{ 'i-carbon:view-off': !showPwd, 'i-carbon:view': showPwd }" class="cursor-pointer" @click="showPwd = !showPwd" />
            </template>
          </n-input>
        </n-form-item>
        <n-form-item>
          <n-button block size="large" type="info" @click="handleLogin">
            登录
          </n-button>
        </n-form-item>
      </n-form>
      <div text-sm leading-normal color="gray-500/90">
        Copyright @ 2022-{{ new Date().getFullYear() }} ShyNaiveAdmin. All Rights Reserved
      </div>
      <div class="h-30" />
    </div>
  </div>
</template>

<style>
.login-main {
  background-image: url(~/assets/images/login-bg.png);
  background-size: cover;
  background-position: 100%;
}
</style>
