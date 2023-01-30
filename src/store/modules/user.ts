/*
 * @Author: shaohang-shy
 * @Date: 2022-08-19 10:46:17
 * @LastEditors: shaohang-shy
 * @LastEditTime: 2023-01-30 18:16:37
 * @Description: user store
 */
import { defineStore } from 'pinia'
import type { RouteRecordRaw } from 'vue-router'
import { usePermissionStore } from './permission'
import { getToken, removeToken as rmToken, setToken } from '~/utils/auth'
import request from '~/utils/request'
import api from '~/config/api'
import type { UserInfo } from '~/typings/types'
import type { RoleType } from '~/typings/route'
import router, { constantRoutes } from '~/router'
import { getConstantRouteNames } from '~/router/helpers'

export const useUserStore = defineStore('user-store', () => {
  const token = ref(getToken())
  const userInfo = ref<UserInfo | null>(null)
  const roles = computed(() => Array.from(new Set(userInfo.value?.roles || [])))

  function loadToken(t: string) {
    setToken(t)
    token.value = t
  }

  function login(account: string, pwd: string) {
    return new Promise((resolve, reject) => {
      request.get(api.login, { account, pwd }).then((response) => {
        const { data } = response
        token.value = data.token
        setToken(data.token)
        resolve(response)
      }).catch((error) => {
        reject(error)
      })
    })
  }

  function logout() {
    return new Promise((resolve) => {
      removeToken()
      token.value = ''
      resolve({})
      // request.post(api.logout, { token: t }).then(() => {
      //   removeToken()
      //   token.value = ''
      //   resolve({})
      // }).catch((error) => {
      //   reject(error)
      // })
    })
  }

  async function getUserInfo() {
    return new Promise((resolve, reject) => {
      request.get(api.getUserInfo, { params: { token: token.value } }).then((response) => {
        const { data } = response
        userInfo.value = data.data
        setRoles(userInfo.value?.roles as RoleType[])
        resolve(response)
      }).catch((error) => {
        reject(error)
      })
    })
  }

  function removeToken() {
    token.value = ''
    rmToken()
  }

  async function setRoles(roles: RoleType[]) {
    userInfo.value!.roles = roles
    const permissionStore = usePermissionStore()
    permissionStore.generateRoutes(roles)
    // 更新route
    const accessRoutes = await permissionStore.generateRoutes(roles)
    const constantRouteNames = getConstantRouteNames(constantRoutes)
    router.getRoutes().forEach((route) => {
      const name = (route.name || '') as string
      if (!constantRouteNames.includes(name))
        router.removeRoute(name)
    })
    accessRoutes.forEach((route) => {
      router.addRoute(route as RouteRecordRaw)
    })
  }

  return {
    token,
    userInfo,
    login,
    logout,
    getUserInfo,
    removeToken,
    loadToken,
    setRoles,
    roles,
  }
})
