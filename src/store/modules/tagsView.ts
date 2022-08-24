/*
 * @Author: shaohang-shy
 * @Date: 2022-08-24 13:59:22
 * @LastEditors: shaohang-shy
 * @LastEditTime: 2022-08-24 14:26:50
 * @Description: tagsView
 */
import { defineStore } from 'pinia'
import type { TagView } from '~/typings/route'

export const useTagsViewStore = defineStore('tags-view-store', {
  state: () => ({
    visitedViews: [] as TagView[],
    cachedViews: [] as string[],
  }),
  actions: {
    addView(view: TagView) {
      this.addVisitedView(view)
      this.addCachedView(view)
    },
    addVisitedView(view: TagView) {
      if (this.visitedViews.some(v => v.path === view.path))
        return
      this.visitedViews.push({ ...view })
    },
    addCachedView(view: TagView) {
      if (this.cachedViews.includes(view.name))
        return
      if (!view.noCache)
        this.cachedViews.push(view.name)
    },
    delView(view: TagView) {
      this.delVisitedView(view)
      this.delCachedView(view)
    },
    delVisitedView(view: TagView) {
      for (const [i, v] of this.visitedViews.entries()) {
        if (v.path === view.path) {
          this.visitedViews.splice(i, 1)
          break
        }
      }
    },
    delCachedView(view: TagView) {
      const index = this.cachedViews.indexOf(view.name)
      index > -1 && this.cachedViews.splice(index, 1)
    },
    delOthersViews(view: TagView) {
      this.delOthersVisitedViews(view)
      this.delOthersCachedViews(view)
    },
    delOthersVisitedViews(view: TagView) {
      this.visitedViews = this.visitedViews.filter((v) => {
        return v.affix || v.path === view.path
      })
    },
    delOthersCachedViews(view: TagView) {
      const index = this.cachedViews.indexOf(view.name)
      if (index > -1) {
        this.cachedViews = this.cachedViews.slice(index, index + 1)
      }
      else {
      // if index = -1, there is no cached tags
        this.cachedViews = []
      }
    },
    delAllViews() {
      this.delAllCachedViews()
      this.delAllVisitedViews()
    },
    delAllVisitedViews() {
      const affixTags = this.visitedViews.filter(tag => tag.affix)
      this.visitedViews = affixTags
    },
    delAllCachedViews() {
      this.cachedViews = []
    },
    updateVisitedViews(view: TagView) {
      for (let v of this.visitedViews) {
        if (v.path === view.path) {
          v = Object.assign(v, view)
          break
        }
      }
    },
  },
})
