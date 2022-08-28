/*
 * @Author: shaohang-shy
 * @Date: 2022-08-19 11:01:01
 * @LastEditors: shaohang-shy
 * @LastEditTime: 2022-08-28 13:50:53
 * @Description: apis
 */
const url = ''

const path = {
  test: '/test/test',
  /**
   * 登录相关接口
   */
  // 登录
  login: '/login',
  // logout: 'logout/web',
  /**
   * 用户相关API
   */
  // 根据Token获取用户信息
  getUserInfo: '/user/info',
}
type ApiKeys = keyof typeof path

const getApi = () => {
  const Api = {} as Record<ApiKeys, string>
  Object.keys(path).forEach((item) => {
    Api[item as ApiKeys] = `${url}${path[item as ApiKeys]}`
  })
  return Api
}

export default getApi()
