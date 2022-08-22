/*
 * @Author: shaohang-shy
 * @Date: 2022-08-11 11:04:24
 * @LastEditors: shaohang-shy
 * @LastEditTime: 2022-08-22 17:06:13
 * @Description: main
 */
import { createApp } from 'vue'
import { store } from './store'

import App from './App.vue'
import router from '~/router'
import '@unocss/reset/tailwind.css'
import './styles/main.css'
import 'nprogress/nprogress.css' // 这个nprogress样式必须引入
import 'uno.css'
import '~/router/permissions'
import 'virtual:svg-icons-register'

const app = createApp(App)
app.use(router)
app.use(store)
app.mount('#app')
