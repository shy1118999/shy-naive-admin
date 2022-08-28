/*
 * @Author: shaohang-shy
 * @Date: 2022-08-19 11:30:29
 * @LastEditors: shaohang-shy
 * @LastEditTime: 2022-08-28 13:48:30
 * @Description: types
 */
import { RoleType } from './route'

export interface UserInfo {
  nickname: string
  avatar: string
  roles: RoleType[]
}