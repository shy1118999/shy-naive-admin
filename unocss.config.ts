/*
 * @Author: shaohang-shy
 * @Date: 2022-08-11 11:04:24
 * @LastEditors: shaohang-shy
 * @LastEditTime: 2023-07-04 10:21:00
 * @Description:
 */
import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetUno,
  presetWebFonts,
  // transformerDirectives,
  // transformerVariantGroup,
} from 'unocss'
import { FileSystemIconLoader } from '@iconify/utils/lib/loader/node-loaders'

export default defineConfig({
  shortcuts: [
    ['btn', 'px-4 py-1 rounded inline-block bg-teal-600 text-white cursor-pointer hover:bg-teal-700 disabled:cursor-default disabled:bg-gray-600 disabled:opacity-50'],
    ['icon-btn', 'text-[0.9em] inline-block cursor-pointer select-none opacity-75 transition duration-200 ease-in-out hover:opacity-100 hover:text-teal-600 !outline-none'],
    ['bg', 'bg-$n-color'],
  ],
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({
      scale: 1.2,
      warn: true,
      collections: {
        custom: FileSystemIconLoader(
          './src/icons',
          // 将fill属性转换为currentColor
          svg => svg.replace(/fill="[^"]*"/g, 'fill="currentColor"'),
        ),
        colorful: FileSystemIconLoader(
          './src/icons/colorful',
          // 将fill属性转换为currentColor
          svg => svg,
        ),
      },
    }),
    presetWebFonts({
      fonts: {
        sans: 'DM Sans',
        serif: 'DM Serif Display',
        mono: 'DM Mono',
      },
    }),
  ],
  // transformers: [
  //   transformerDirectives(),
  //   transformerVariantGroup(),
  // ],
})
