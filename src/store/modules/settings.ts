/*
 * @Author: shaohang-shy
 * @Date: 2022-08-18 18:23:59
 * @LastEditors: shaohang-shy
 * @LastEditTime: 2022-08-19 15:15:10
 * @Description: setting store
 */
import { defineStore } from 'pinia'

export const useSettingStore = defineStore('app-store', {
  state: () => ({
    tagsView: true,
    fixedHeader: false,
    sidebarLogo: false,
  }),
})
