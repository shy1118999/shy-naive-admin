/*
 * @Author: shaohang-shy
 * @Date: 2022-08-22 11:03:18
 * @LastEditors: shaohang-shy
 * @LastEditTime: 2023-01-30 08:59:07
 * @Description: admin router
 */
import type { RouteRecord } from '~/typings/route'
import { BasicLayout } from '~/layouts'

const routes: RouteRecord[] = [
  {
    path: '/admin',
    name: 'Admin',
    component: BasicLayout,
    meta: {
      title: '管理后台',
      roles: ['admin'],
    },
    children: [
      {
        path: '/admin/data',
        name: 'AdminData',
        component: () => import('~/pages/admin/data.vue'),
        meta: {
          title: '数据管理',
          icon: 'baogao',
        },
      },
    ],
  },
]

export default routes
