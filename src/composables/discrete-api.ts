/*
 * @Author: shaohang-shy
 * @Date: 2022-08-19 10:50:37
 * @LastEditors: shaohang-shy
 * @LastEditTime: 2022-08-19 10:51:22
 * @Description: disrete-api
 */
import {
  createDiscreteApi,
} from 'naive-ui'

export const { message, notification, dialog, loadingBar } = createDiscreteApi(
  ['message', 'dialog', 'notification', 'loadingBar'],
)
