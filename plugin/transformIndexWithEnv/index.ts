/*
 * @Author: shaohang-shy
 * @Date: 2022-08-25 10:29:14
 * @LastEditors: shaohang-shy
 * @LastEditTime: 2022-08-25 10:47:58
 * @Description: plugin transformIndexWithEnv
 */
export function transformIndexWithEnv(data: Record<string, string>) {
  return {
    name: 'transform-index-with-env',
    transformIndexHtml(html: string) {
      return html.replace(
        /\{\{(.*?)\}\}/g,
        (s, k) => {
          return data[k.trim()] ?? s
        },
      )
    },
  }
}
