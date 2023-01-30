/*
 * @Author: shaohang-shy
 * @Date: 2022-08-22 11:03:18
 * @LastEditors: shaohang-shy
 * @LastEditTime: 2023-01-30 08:58:22
 * @Description: admin router
 */
import type { RouteRecord } from '~/typings/route'
import { BasicLayout } from '~/layouts'

const routes: RouteRecord[] = [
  {
    path: '/charts',
    name: 'Charts',
    component: BasicLayout,
    meta: {
      title: '图表',
      icon: 'tongji',
    },
    children: [
      {
        path: '/charts/line',
        name: 'ChartsLine',
        component: () => import('~/pages/charts/line.vue'),
        meta: {
          title: '折线图',
          icon: 'zoushi1',
        },
      },
      {
        path: '/charts/nightingale',
        name: 'ChartsNightingale',
        component: () => import('~/pages/charts/nightingale.vue'),
        meta: {
          title: '南丁格尔玫瑰图',
          icon: 'gaishuai',
        },
      },
      {
        path: '/charts/area',
        name: 'ChartsArea',
        component: () => import('~/pages/charts/area.vue'),
        meta: {
          title: '堆叠图',
          icon: 'shoucang1',
        },
      },
      {
        path: '/charts/clock',
        name: 'ChartsClock',
        component: () => import('~/pages/charts/clock.vue'),
        meta: {
          title: '时钟仪表盘',
          icon: 'shijian',
          keepAlive: true,
        },
      },
    ],
  },
]

export default routes
