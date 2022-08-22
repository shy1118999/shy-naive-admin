/*
 * @Author: shaohang-shy
 * @Date: 2022-08-19 11:30:29
 * @LastEditors: shaohang-shy
 * @LastEditTime: 2022-08-19 13:40:36
 * @Description: types
 */
import { RoleType } from './route'

export interface UserInfo {
  nickname: string
  account: string
  avatar: string
  roles: RoleType[]
  is_author: boolean
  is_manager: boolean
  tel: string
}