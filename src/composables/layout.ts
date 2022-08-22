/*
 * @Author: shaohang-shy
 * @Date: 2022-08-22 16:48:06
 * @LastEditors: shaohang-shy
 * @LastEditTime: 2022-08-22 16:48:59
 * @Description: layout
 */
import { breakpointsTailwind } from '@vueuse/core'

export function useLayout() {
  const breakpoints = useBreakpoints(breakpointsTailwind)
  const isMobile = breakpoints.smaller('sm')
  return {
    isMobile,
  }
}
