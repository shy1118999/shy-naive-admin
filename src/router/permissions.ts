/*
 * @Author: shaohang-shy
 * @Date: 2022-08-11 16:02:49
 * @LastEditors: shaohang-shy
 * @LastEditTime: 2022-09-03 21:49:56
 * @Description: permissions
 */
import type { NavigationGuardNext, RouteLocationNormalized } from 'vue-router'
import router from './index'

import { getToken } from '~/utils/auth'

// get token from cookie
import { useUserStore } from '~/store'

// no redirect whitelist
import settings from '~/settings'
const whiteList = ['/login', '/403', '/404']
// 路由守卫
router.beforeEach(async (to: RouteLocationNormalized, from: RouteLocationNormalized, next: NavigationGuardNext) => {
  $loadingBar.start()
  if (whiteList.includes(to.path)) {
    next()
    return
  }

  const userState = useUserStore()

  const hasToken = getToken()
  if (hasToken) {
    if (to.path === '/login') {
      // 如果已经登录，重定向到主页
      next({ path: '/' })
    }
    else {
      const hasRoles = userState.roles && userState.roles.length > 0
      if (hasRoles) {
        next()
      }
      else {
        try {
          await userState.getUserInfo()
          next({ ...to, replace: true })
        }
        catch (error) {
          userState.removeToken()
          next(`/login?redirect=${to.path}`)
          $loadingBar.finish()
        }
      }
    }
  }
  else {
    // 获取参数
    const query = to.query
    // 如果有token则setToken 然后next
    if (query.token) {
      userState.loadToken(query.token as unknown as string)
      // eslint-disable-next-line ts/ban-ts-comment
      // @ts-expect-error
      to.query.token = undefined
      next({ ...to, replace: true })
    }
    else {
      next(`/login?redirect=${to.path}`)
    }
  }
})

router.afterEach((to) => {
  useTitle(to.meta.title ? `${to.meta.title} - ${settings.title}` : settings.title)
  $loadingBar.finish()
})
