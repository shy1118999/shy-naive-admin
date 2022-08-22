/*
 * @Author: shaohang-shy
 * @Date: 2022-08-19 11:21:41
 * @LastEditors: shaohang-shy
 * @LastEditTime: 2022-08-22 14:10:32
 * @Description: permission store
 */
import type { MenuOption } from 'naive-ui'
import { defineStore } from 'pinia'
import { asyncRoutes, constantRoutes } from '~/router'
import type { RoleType, RouteRecord } from '~/typings/route'

/**
 * Use meta.role to determine if the current user has permission
 * @param roles
 * @param route
 */
function hasPermission(roles: RoleType[], route: RouteRecord) {
  if (route.meta && route.meta.roles)
    return roles.some(role => route?.meta?.roles?.includes(role))

  else
    return true
}

/**
 * Filter asynchronous routing tables by recursion
 * @param routes asyncRoutes
 * @param roles
 */
function filterAsyncRoutes(routes: RouteRecord[], roles: RoleType[]) {
  const res: RouteRecord[] = []

  routes.forEach((route) => {
    const tmp = { ...route }
    if (hasPermission(roles, tmp)) {
      if (tmp.children)
        tmp.children = filterAsyncRoutes(tmp.children, roles)

      res.push(tmp)
    }
  })

  return res
}

function generateMenus(routes: RouteRecord[]): MenuOption[] {
  const result: MenuOption[] = []
  for (const item of routes) {
    if (!item.hidden) {
      const current: MenuOption = {
        key: item.path,
        label: item.meta?.title,
      }
      current.iconName = item.meta?.icon
      if (item.children && item.children.length > 0) {
        const children = generateMenus(item.children ?? [])
        if (children.length)
          current.children = children
        if (children.length === 1)
          result.push(children[0])
        else
          result.push(current)
      }
      else {
        result.push(current)
      }
    }
  }
  return result
}

export const usePermissionStore = defineStore('permission-store', {
  state: () => ({
    routes: [] as RouteRecord[],
    addRoutes: [] as RouteRecord[],
    menus: [] as MenuOption[],
  }),
  actions: {
    generateRoutes(roles: RoleType[]): Promise<RouteRecord[]> {
      return new Promise((resolve) => {
        const accessedRoutes = filterAsyncRoutes(asyncRoutes, roles)
        this.routes = constantRoutes.concat(accessedRoutes)
        this.addRoutes = accessedRoutes
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        this.menus = generateMenus(this.routes)
        resolve(accessedRoutes)
      })
    },

  },
})
