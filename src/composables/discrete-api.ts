/*
 * @Author: shaohang-shy
 * @Date: 2022-08-19 10:50:37
 * @LastEditors: shaohang-shy
 * @LastEditTime: 2022-08-22 18:26:40
 * @Description: disrete-api
 */
import {
  createDiscreteApi,
} from 'naive-ui'

const { message, notification, dialog, loadingBar } = createDiscreteApi(
  ['message', 'dialog', 'notification', 'loadingBar'],
)

export { message as $message }
export { notification as $notification }
export { dialog as $dialog }
export { loadingBar as $loadingBar }
