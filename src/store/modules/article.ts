/*
 * @Author: shaohang-shy
 * @Date: 2023-04-12 09:29:22
 * @LastEditors: shaohang-shy
 * @LastEditTime: 2023-05-13 15:23:02
 * @Description: article store
 */
import { defineStore } from 'pinia'

export interface Article {
  id: number
  title: string
  author: string
  publish_time: string
  read_count: number
  status: number
}

export const useArticleStore = defineStore('article-store', {
  state: () => ({
    list: [] as Article[],
  }),
  actions: {
    loadList() {
      if (this.list.length > 0)
        return
      this.list = [
        {
          id: 1,
          title: '如何提高写作能力',
          author: '张三',
          publish_time: '2022-01-01 10:00:00',
          read_count: 100,
          status: 1,
        },
        {
          id: 2,
          title: '如何做好时间管理',
          author: '李四',
          publish_time: '2022-01-02 11:00:00',
          read_count: 200,
          status: 1,
        },
        {
          id: 3,
          title: '如何学习编程',
          author: '王五',
          publish_time: '2022-01-03 12:00:00',
          read_count: 300,
          status: 1,
        },
        {
          id: 4,
          title: '如何提高口语能力',
          author: '赵六',
          publish_time: '2022-01-04 13:00:00',
          read_count: 400,
          status: 1,
        },
        {
          id: 5,
          title: '如何防止抑郁症',
          author: '钱七',
          publish_time: '2022-01-05 14:00:00',
          read_count: 500,
          status: 1,
        },
        {
          id: 6,
          title: '如何学好英语',
          author: '孙八',
          publish_time: '2022-01-06 15:00:00',
          read_count: 600,
          status: 1,
        },
        {
          id: 7,
          title: '如何提高写作能力（续）',
          author: '张三',
          publish_time: '2022-01-07 16:00:00',
          read_count: 700,
          status: 1,
        },
        {
          id: 8,
          title: '如何做好时间管理（续）',
          author: '李四',
          publish_time: '2022-01-08 17:00:00',
          read_count: 800,
          status: 1,
        },
        {
          id: 9,
          title: '如何学习编程（续）',
          author: '王五',
          publish_time: '2022-01-09 18:00:00',
          read_count: 900,
          status: 1,
        },
        {
          id: 10,
          title: '如何提高口语能力（续）',
          author: '赵六',
          publish_time: '2022-01-10 19:00:00',
          read_count: 1000,
          status: 1,
        },
        {
          id: 11,
          title: '如何防止抑郁症（续）',
          author: '钱七',
          publish_time: '2022-01-11 20:00:00',
          read_count: 1100,
          status: 1,
        },
        {
          id: 12,
          title: '如何学好英语（续）',
          author: '孙八',
          publish_time: '2022-01-12 21:00:00',
          read_count: 1200,
          status: 1,
        },
        {
          id: 13,
          title: '学习Python的最佳途径',
          author: '张三',
          publish_time: '2022-01-13 22:00:00',
          read_count: 1300,
          status: 1,
        },
        {
          id: 14,
          title: '如何在工作中提高效率',
          author: '李四',
          publish_time: '2022-01-14 23:00:00',
          read_count: 1400,
          status: 1,
        },
        {
          id: 15,
          title: '如何写一篇好的英文论文',
          author: '王五',
          publish_time: '2022-01-15 10:00:00',
          read_count: 1500,
          status: 1,
        },
        {
          id: 16,
          title: '如何在高峰期驾驶汽车',
          author: '赵六',
          publish_time: '2022-01-16 11:00:00',
          read_count: 1600,
          status: 1,
        },
        {
          id: 17,
          title: '如何做好项目管理',
          author: '钱七',
          publish_time: '2022-01-17 12:00:00',
          read_count: 1700,
          status: 1,
        },
        {
          id: 18,
          title: '如何面对职场挑战',
          author: '孙八',
          publish_time: '2022-01-18 13:00:00',
          read_count: 1800,
          status: 1,
        },
        {
          id: 19,
          title: '如何打造自己的个人品牌',
          author: '张三',
          publish_time: '2022-01-19 14:00:00',
          read_count: 1900,
          status: 1,
        },
        {
          id: 20,
          title: '如何在家办公提高工作效率',
          author: '李四',
          publish_time: '2022-01-20 15:00:00',
          read_count: 2000,
          status: 1,
        },
        {
          id: 21,
          title: '如何安排旅行行程',
          author: '王五',
          publish_time: '2022-01-21 16:00:00',
          read_count: 2100,
          status: 1,
        },
      ]
    },
    deleteById(id: number) {
      return new Promise((resolve) => {
        const index = this.list.findIndex(item => item.id === id)
        this.list.splice(index, 1)
        resolve(true)
      })
    },
    updateById(id: number, data: Partial<Article>) {
      // 更新
      return new Promise((resolve) => {
        const index = this.list.findIndex(item => item.id === id)
        this.list[index] = {
          ...this.list[index],
          ...data,
        }
        resolve(true)
      })
    },
  },
})
