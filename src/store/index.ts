/*
 * @Author: shaohang-shy
 * @Date: 2022-08-18 18:08:58
 * @LastEditors: shaohang-shy
 * @LastEditTime: 2022-08-19 13:48:33
 * @Description: store
 */

import { createPinia } from 'pinia'

const store = createPinia()

export { store }

export * from './modules/app'
export * from './modules/settings'
export * from './modules/user'
export * from './modules/permission'

export default store
