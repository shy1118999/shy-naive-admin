/*
 * @Author: shaohang-shy
 * @Date: 2022-08-22 19:15:00
 * @LastEditors: shaohang-shy
 * @LastEditTime: 2022-08-22 19:15:29
 * @Description: registerDirective
 */
import type { App } from 'vue'
import { registerPermissionDirective } from './permission'

export default function registerDirective(app: App) {
  registerPermissionDirective(app)
}
