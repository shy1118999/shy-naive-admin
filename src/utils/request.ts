/*
 * @Author: shaohang-shy
 * @Date: 2022-08-19 10:46:59
 * @LastEditors: shaohang-shy
 * @LastEditTime: 2023-01-30 18:17:11
 * @Description: request
 */
import axios from 'axios'

// const host = '/' // 如果是mock模式 就不配置host 会走本地Mock拦截
const host = '/' // 如果是mock模式 就不配置host 会走本地Mock拦截

const instance = axios.create({
  baseURL: host,
  timeout: 1000,
  // withCredentials: true,
})

instance.interceptors.request.use(config => config)

instance.defaults.timeout = 5000

instance.interceptors.response.use(
  response => response,
  (error) => {
    const data = error.response.data
    if (data)
      $message.error(data.msg, { duration: 5 * 1000 })
    else
      $message.error(error.message, { duration: 5 * 1000 })

    return Promise.reject(error)
  },
)

export default instance
