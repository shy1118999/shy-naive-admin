/*
 * @Author: shaohang-shy
 * @Date: 2022-08-22 15:01:37
 * @LastEditors: shaohang-shy
 * @LastEditTime: 2022-08-22 15:01:48
 * @Description: route helpers
 */
import type { RouteRecord } from '~/typings/route'

/**
 * 获取所有固定路由的名称集合
 * @param routes - 固定路由
 */
export function getConstantRouteNames(routes: RouteRecord[]) {
  return routes.map(route => getConstantRouteName(route)).flat(1)
}

/**
 * 获取所有固定路由的名称集合
 * @param route - 固定路由
 */
function getConstantRouteName(route: RouteRecord) {
  const names = [route.name]
  if (hasChildren(route))
    names.push(...route.children!.map(item => getConstantRouteName(item)).flat(1))

  return names
}

/**
 * 是否有子路由
 * @param item - 权限路由
 */
function hasChildren(item: RouteRecord) {
  return Boolean(item.children && item.children.length)
}
