/*
 * @Author: shaohang-shy
 * @Date: 2022-08-22 11:03:18
 * @LastEditors: shaohang-shy
 * @LastEditTime: 2022-08-28 14:18:53
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
    },
    children: [
      {
        path: '/excel/export-excel',
        name: 'ExcelExportExcel',
        component: () => import('~/pages/excel/export-excel.vue'),
        meta: {
          title: '导出至Excel',
        },
      },
      {
        path: '/excel/export-selected-excel',
        name: 'ExcelExportSelectedExcel',
        component: () => import('~/pages/excel/export-selected-excel.vue'),
        meta: {
          title: '导出选中项',
        },
      },
      {
        path: '/excel/export-merge-header',
        name: 'ExcelExportMergeHeader',
        component: () => import('~/pages/excel/export-merge-header.vue'),
        meta: {
          title: '合并表头',
        },
      },
      {
        path: '/excel/upload-excel',
        name: 'ExcelUploadExcel',
        component: () => import('~/pages/excel/upload-excel.vue'),
        meta: {
          title: '上传Excel',
        },
      },
    ],
  },
]

export default routes
