/*
 * @Author: shaohang-shy
 * @Date: 2022-08-11 16:02:49
 * @LastEditors: shaohang-shy
 * @LastEditTime: 2022-08-22 15:03:05
 * @Description: permissions
 */
import NProgress from 'nprogress' // progress bar
import type { NavigationGuardNext, RouteLocationNormalized } from 'vue-router'
import router from './index'
import { getToken } from '~/utils/auth' // get token from cookie
import { useUserStore } from '~/store'

const whiteList = ['/login', '/401', '/404'] // no redirect whitelist

// 路由守卫
router.beforeEach(async (to: RouteLocationNormalized, from: RouteLocationNormalized, next: NavigationGuardNext) => {
  NProgress.start()
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
          NProgress.done()
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
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      to.query.token = undefined
      next({ ...to, replace: true })
    }
    else {
      next(`/login?redirect=${to.path}`)
    }
  }
})

router.afterEach(() => {
  NProgress.done()
})
