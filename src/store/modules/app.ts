/*
 * @Author: shaohang-shy
 * @Date: 2022-08-18 18:15:02
 * @LastEditors: shaohang-shy
 * @LastEditTime: 2022-08-22 16:15:39
 * @Description: app store
 */
import { defineStore } from 'pinia'

export const useAppStore = defineStore('app-store', {
  state: () => ({
    sidebar: {
      opened: localStorage.getItem('sidebarStatus') === '1',
      withoutAnimation: false,
    },
    device: 'desktop',
    theme: useLocalStorage('theme', 'light'),
  }),
  actions: {
    toggleSideBar() {
      this.sidebar.opened = !this.sidebar.opened
      localStorage.setItem('sidebarStatus', this.sidebar.opened ? '1' : '0')
    },
    closeSideBar(b: boolean) {
      this.sidebar.withoutAnimation = b
    },
    toggleDevice(device: string) {
      this.device = device
    },
    toggleTheme() {
      this.theme = this.theme === 'dark' ? 'light' : 'dark'
    },
  },
})
