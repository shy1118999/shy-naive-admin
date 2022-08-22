<!--
 * @Author: shaohang-shy
 * @Date: 2022-08-19 09:05:03
 * @LastEditors: shaohang-shy
 * @LastEditTime: 2022-08-22 18:56:28
 * @Description: login
-->
<script setup lang="ts">
import type { FormInst, FormRules } from 'naive-ui'
import { Password, UserAdmin } from '@vicons/carbon'
import { Eye20Regular, EyeOff20Regular } from '@vicons/fluent'
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
  catch (_e) {
  }
}
</script>

<template>
  <div
    class="login-main fixed w-100vw h-100vh top-0 left-0 flex items-center md:justify-start lt-md:justify-center lt-md:p-10 md:p-20"
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
              <n-icon :component="UserAdmin" />
            </template>
          </n-input>
        </n-form-item>
        <n-form-item path="password">
          <n-input v-model:value="formData.password" size="large" :type="showPwd ? 'text' : 'password'" placeholder="请输入密码" @keydown.enter="handleLogin">
            <template #prefix>
              <n-icon :component="Password" />
            </template>
            <template #suffix>
              <n-icon
                :component="showPwd ? Eye20Regular : EyeOff20Regular" class="cursor-pointer"
                @click="showPwd = !showPwd"
              />
            </template>
          </n-input>
        </n-form-item>
        <n-form-item>
          <n-button block size="large" type="info" @click="handleLogin">
            登录
          </n-button>
        </n-form-item>
      </n-form>
      <div leading-normal text-sm color="gray-500/90">
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
