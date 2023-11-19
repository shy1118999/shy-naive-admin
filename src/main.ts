/*
 * @Author: shaohang-shy
 * @Date: 2022-08-11 11:04:24
 * @LastEditors: shaohang-shy
 * @LastEditTime: 2022-08-23 21:04:56
 * @Description: main
 */
import { createApp } from 'vue'
import { store } from './store'

import App from './App.vue'
import router from '~/router'

// import '@unocss/reset/tailwind.css'
import './styles/main.css'

// import './styles/reset.css'
import 'uno.css'
import '~/router/permissions'
import 'virtual:svg-icons-register'

import registerDirective from '~/directives'

const app = createApp(App)
app.use(router)
app.use(store)
registerDirective(app)

app.mount('#app')
