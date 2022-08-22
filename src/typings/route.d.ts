/*
 * @Author: shaohang-shy
 * @Date: 2022-08-11 16:50:10
 * @LastEditors: shaohang-shy
 * @LastEditTime: 2022-08-22 14:46:11
 * @Description: route.d.ts
 */
// import { Component } from 'vue'
import type { RawRouteComponent, RouteRecordRaw } from 'vue-router'


type RoleType = keyof typeof import('~/enum').UserRoleEnum


interface RouteRecordRedirect {
  path: string
  name: string
  redirect: string
  hidden?: boolean
  alwaysShow?: boolean
  meta?: RouteMeta
  children?: RouteRecord[]
}

interface RouteRecordComponent {
  path: string
  name: string
  component: RawRouteComponent
  hidden?: boolean
  alwaysShow?: boolean
  meta?: RouteMeta
  children?: RouteRecord[]
}

type RouteRecord = RouteRecordRedirect | RouteRecordComponent

interface RouteMeta {
  roles?: RoleType[],
  title: string,
  icon?: string,
  noCache?: boolean,
  affix?: boolean,
  breadcrumb?: boolean,
  activeMenu?: string,
}