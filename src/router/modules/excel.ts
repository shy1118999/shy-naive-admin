/*
 * @Author: shaohang-shy
 * @Date: 2022-08-22 11:03:18
 * @LastEditors: shaohang-shy
 * @LastEditTime: 2023-01-30 09:04:41
 * @Description: admin router
 */
import type { RouteRecord } from '~/typings/route'
import { BasicLayout } from '~/layouts'

const routes: RouteRecord[] = [
  {
    path: '/excel',
    name: 'Excel',
    component: BasicLayout,
    redirect: '/excel/export-excel',
    meta: {
      title: 'Excel',
      icon: 'zixun1',
    },
    children: [
      {
        path: '/excel/export-excel',
        name: 'ExcelExportExcel',
        component: () => import('~/pages/excel/export-excel.vue'),
        meta: {
          title: '导出至Excel',
          icon: 'xiazai',
        },
      },
      {
        path: '/excel/export-selected-excel',
        name: 'ExcelExportSelectedExcel',
        component: () => import('~/pages/excel/export-selected-excel.vue'),
        meta: {
          title: '导出选中项',
          icon: 'xiazaiwenjian',
        },
      },
      {
        path: '/excel/export-merge-header',
        name: 'ExcelExportMergeHeader',
        component: () => import('~/pages/excel/export-merge-header.vue'),
        meta: {
          title: '合并表头',
          icon: 'shounahe',
        },
      },
      {
        path: '/excel/upload-excel',
        name: 'ExcelUploadExcel',
        component: () => import('~/pages/excel/upload-excel.vue'),
        meta: {
          title: '上传Excel',
          icon: 'shangchuan',
        },
      },
    ],
  },
]

export default routes
