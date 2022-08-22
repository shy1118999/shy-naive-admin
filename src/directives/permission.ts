/*
 * @Author: shaohang-shy
 * @Date: 2022-08-22 19:04:03
 * @LastEditors: shaohang-shy
 * @LastEditTime: 2022-08-22 19:21:30
 * @Description: permission directives
 */
import type { App, Directive } from 'vue'
import type { RoleType } from '~/typings/route'

function hasPermission(permission: RoleType | RoleType[]) {
  const { roles } = useUserStore()
  return [permission].flat().some(role => roles.includes(role))
}

function updateElVisible(el: HTMLElement, permission: RoleType | RoleType[]) {
  if (!permission)
    throw new Error('need roles: like v-permission="\'admin\'", v-permission="[\'admin\', \'test]"')

  if (!hasPermission(permission))
    el.parentElement?.removeChild(el)
}

const permissionDirective: Directive<HTMLElement, RoleType | RoleType[]> = {
  mounted(el, binding) {
    updateElVisible(el, binding.value)
  },
  beforeUpdate(el, binding) {
    updateElVisible(el, binding.value)
  },
}

export function registerPermissionDirective(app: App) {
  app.directive('permission', permissionDirective)
}
