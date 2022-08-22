/*
 * @Author: shaohang-shy
 * @Date: 2022-08-11 17:23:41
 * @LastEditors: shaohang-shy
 * @LastEditTime: 2022-08-22 14:49:06
 * @Description: constant
 */
import { BasicLayout } from '~/layouts'
import type { RouteRecord } from '~/typings/route'

const routes: RouteRecord[] = [
  {
    path: '/',
    component: BasicLayout,
    name: 'Dashboard',
    redirect: '/dashboard',
    meta: {
      title: '首页',
      icon: 'shouye',
    },
    children: [
      { path: '/dashboard', name: 'DashboardIndex', component: () => import('~/pages/dashboard/index.vue'), meta: { title: '主页', icon: 'shouye' } },
      { path: '/dashboard/workbench', name: 'DashboardWorkbench', component: () => import('~/pages/dashboard/workbench.vue'), meta: { title: '工作台', icon: 'DesktopCursor20Filled' } },
      { path: '/dashboard/analysis', name: 'DashboardAnalysis', component: () => import('~/pages/dashboard/analysis.vue'), meta: { title: '分析页', icon: 'Table28Filled' } },
    ],
  },
  {
    path: '/component',
    name: 'Component',
    component: BasicLayout,
    meta: { title: '组件', icon: 'AirplaneTakeOff16Filled' },
    children: [
      { path: '/component/button', name: 'ComponentButton', component: () => import('~/pages/component/button.vue'), meta: { title: '按钮', icon: 'RadioButton24Filled' } },
      { path: '/component/card', name: 'ComponentCard', component: () => import('~/pages/component/card.vue'), meta: { title: '卡片', icon: 'ContactCardGroup28Filled' } },
      { path: '/component/table', name: 'ComponentTable', component: () => import('~/pages/component/table.vue'), meta: { title: '表格', icon: 'RadioButton24Filled' } },
    ],
  },
  {
    path: '/form',
    name: 'Form',
    component: BasicLayout,
    meta: { title: '表单', icon: 'Table28Filled' },
    children: [
      { path: '/form/basic', name: 'FormBasic', component: () => import('~/pages/form/basic.vue'), meta: { title: '基础表单', icon: 'RadioButton24Filled' } },
    ],
  },
  {
    path: '/role',
    name: 'Role',
    component: BasicLayout,
    children: [
      { path: '/role/switch', name: 'RoleSwitch', component: () => import('~/pages/role/switch.vue'), meta: { title: '权限切换', icon: 'RadioButton24Filled' } },
    ],
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('~/pages/login/index.vue'),
    hidden: true,
  },
  {
    path: '/404',
    name: '404',
    component: () => import ('~/pages/errorPage/404.vue'),
    hidden: true,
  },
  {
    path: '/401',
    name: '401',
    component: () => import ('~/pages/errorPage/401.vue'),
    hidden: true,
  },
]

export default routes
