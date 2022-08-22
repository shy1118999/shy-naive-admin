/*
 * @Author: shaohang-shy
 * @Date: 2022-08-19 11:02:43
 * @LastEditors: shaohang-shy
 * @LastEditTime: 2022-08-19 11:03:48
 * @Description: auth util
 */
const TokenKey = 'Admin-Token'

export function getToken() {
  return localStorage.getItem(TokenKey)
}

export function setToken(token: string) {
  return localStorage.setItem(TokenKey, token)
}

export function removeToken() {
  return localStorage.removeItem(TokenKey)
}
