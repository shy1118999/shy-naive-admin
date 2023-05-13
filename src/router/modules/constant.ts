/*
 * @Author: shaohang-shy
 * @Date: 2022-08-11 17:23:41
 * @LastEditors: shaohang-shy
 * @LastEditTime: 2023-01-30 16:18:22
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
      { path: '/profile', name: 'Profile', component: () => import('~/pages/user/profile.vue'), hidden: true, meta: { title: '个人中心' } },
      { path: '/dashboard', name: 'DashboardIndex', component: () => import('~/pages/dashboard/index.vue'), meta: { title: '主页', affix: true, icon: 'shouye', breadcrumb: false } },
      { path: '/dashboard/workbench', name: 'DashboardWorkbench', component: () => import('~/pages/dashboard/workbench.vue'), meta: { title: '工作台', icon: 'jiance', keepAlive: true } },
      { path: '/dashboard/analysis', name: 'DashboardAnalysis', component: () => import('~/pages/dashboard/analysis.vue'), meta: { title: '分析页', icon: 'xiangce' } },
    ],
  },
  {
    path: '/guide',
    component: BasicLayout,
    name: 'Guide',
    redirect: '/guide/index',
    meta: {
      title: '引导页',
      icon: 'fenxiang 2',
    },
    children: [
      { path: '/guide/index', name: '引导页', component: () => import('~/pages/guide/index.vue'), meta: { title: '引导页', icon: 'fenxiang 2' } },
    ],
  },
  {
    path: '/component',
    name: 'Component',
    component: BasicLayout,
    meta: { title: '组件', icon: 'gengduo' },
    children: [
      { path: '/component/button', name: 'ComponentButton', component: () => import('~/pages/component/button.vue'), meta: { title: '按钮', icon: 'xihuan' } },
      { path: '/component/card', name: 'ComponentCard', component: () => import('~/pages/component/card.vue'), meta: { title: '卡片', icon: 'renwu1' } },
      { path: '/component/table', name: 'ComponentTable', component: () => import('~/pages/component/table.vue'), meta: { title: '表格', icon: 'caidan' } },
    ],
  },
  {
    path: '/form',
    name: 'Form',
    component: BasicLayout,
    // meta: { title: '表单', icon: 'dingdan' },
    children: [
      { path: '/form/basic', name: 'FormBasic', component: () => import('~/pages/form/basic.vue'), meta: { title: '基础表单', icon: 'gongzimingxi' } },
      { path: '/form/edit', name: 'FormEdit', component: () => import('~/pages/form/edit.vue'), hidden: true, meta: { title: '编辑', icon: 'gongzimingxi' } },
    ],
  },
  {
    path: '/icon',
    name: 'Icon',
    component: BasicLayout,
    children: [
      { path: '/icon/list', name: 'IconList', component: () => import('~/pages/icon/list.vue'), meta: { title: 'Icon', icon: 'dianzan' } },
    ],
  },
  {
    path: '/role',
    name: 'Role',
    component: BasicLayout,
    children: [
      { path: '/role/switch', name: 'RoleSwitch', component: () => import('~/pages/role/switch.vue'), meta: { title: '权限切换', icon: 'dingdan' } },

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
    path: '/403',
    name: '403',
    component: () => import ('~/pages/errorPage/403.vue'),
    hidden: true,
  },
]

export default routes
