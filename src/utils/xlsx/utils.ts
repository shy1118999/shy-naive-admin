/*
 * @Author: shaohang-shy
 * @Date: 2022-09-03 19:17:08
 * @LastEditors: shaohang-shy
 * @LastEditTime: 2022-09-03 19:27:53
 * @Description: xlsx utils
 */
import * as XLSX from 'xlsx'

export const decodeRange = XLSX.utils.decode_range

export const encodeRange = XLSX.utils.encode_range

export const decodeCell = XLSX.utils.encode_cell

export const sheetToJson = XLSX.utils.sheet_to_json

export const sheetToHtml = XLSX.utils.sheet_to_html
