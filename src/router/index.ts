/*
 * @Author: shaohang-shy
 * @Date: 2022-08-11 13:50:28
 * @LastEditors: shaohang-shy
 * @LastEditTime: 2022-08-22 14:43:17
 * @Description: router
 */
import type { RouteRecordRaw } from 'vue-router'
import { createRouter, createWebHistory } from 'vue-router'
import adminRoutes from './modules/admin'
import constantRoutes from './modules/constant'
import type { RouteRecord } from '~/typings/route'

export const asyncRoutes: RouteRecord[] = [
  ...adminRoutes,
  { path: '/:pathMatch(.*)*', name: 'not-found-page', redirect: '/404', hidden: true },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [...constantRoutes] as unknown as RouteRecordRaw[],
  scrollBehavior: () => ({ top: 0 }),
})

export default router

export { constantRoutes }
