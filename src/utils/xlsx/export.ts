/*
 * @Author: shaohang-shy
 * @Date: 2022-08-28 20:52:43
 * @LastEditors: shaohang-shy
 * @LastEditTime: 2023-01-30 09:54:33
 * @Description: xlsx export
 */
import { saveAs } from 'file-saver'
import * as XLSX from 'xlsx'
import type { WorkBook, WorkSheet } from 'xlsx'
import { decodeCell, decodeRange, encodeRange } from './utils'

interface HeaderProps {
  key: string
  title: string
  formatter?: (v: string | number) => string
}

type ExcelType = 'xlsx' | 'xls'

interface Options {
  sheets: {
    header: HeaderProps[]
    data: any[]
    multiHeader?: string[][]
    merges?: string[]
    autoWidth?: boolean
    sheetName?: string
  }[]
  fileName?: string
  type?: ExcelType
}

export function exportToExcel(options: Options) {
  const sheets = options.sheets.reduce((result, { header, data, multiHeader = [], merges = [], autoWidth = false, sheetName = '' }, index) => {
    const head = header.map(x => x.title)
    const body = data.map(item => header.map((h) => {
      if (h.formatter)
        return h.formatter(item[h.key])
      return item[h.key]
    }))
    const outputData = [
      ...multiHeader,
      head,
      ...body,
    ]
    const sheetData = sheetFromArrayOfArrays(outputData)
    // merges
    if (merges.length > 0) {
      if (!sheetData['!merges'])
        sheetData['!merges'] = []
      merges.forEach((item) => {
        sheetData['!merges']?.push(decodeRange(item))
      })
    }
    // autoWidth
    if (autoWidth) {
      /* 设置worksheet每列的最大宽度 */
      const colWidth = [head, ...body].map(row => row.map((val: any) => {
        /* 先判断是否为null/undefined */
        if (val == null) {
          return {
            wch: 10,
          }
        }
        /* 再判断是否为中文 */
        else if (val.toString().charCodeAt(0) > 255) {
          return {
            wch: val.toString().length * 2,
          }
        }
        else {
          return {
            wch: val.toString().length,
          }
        }
      }))
      /* 以第一行为初始值 */
      const result = colWidth[0]
      for (let i = 1; i < colWidth.length; i++) {
        for (let j = 0; j < colWidth[i].length; j++) {
          if (result[j].wch < colWidth[i][j].wch)
            result[j].wch = colWidth[i][j].wch
        }
      }
      sheetData['!cols'] = result
    }
    result[sheetName === '' ? `Sheet${index + 1}` : sheetName] = sheetData
    return result
  }, {} as { [sheet: string]: WorkSheet })

  const wookbook: WorkBook = {
    Sheets: sheets,
    SheetNames: Object.keys(sheets),
  }
  const bookType = options.type ?? 'xlsx'
  const fileName = options.fileName ?? 'output'

  const file = XLSX.write(wookbook, {
    bookType,
    bookSST: false,
    type: 'binary',
  })

  saveAs(new Blob([s2ab(file)], {
    type: 'application/octet-stream',
  }), `${fileName}.${bookType}`)
}

function sheetFromArrayOfArrays(data: (string | number)[][]) {
  const ws: WorkSheet = {}
  const range = {
    s: {
      c: 10000000,
      r: 10000000,
    },
    e: {
      c: 0,
      r: 0,
    },
  }
  for (let R = 0; R !== data.length; ++R) {
    for (let C = 0; C !== data[R].length; ++C) {
      if (range.s.r > R)
        range.s.r = R
      if (range.s.c > C)
        range.s.c = C
      if (range.e.r < R)
        range.e.r = R
      if (range.e.c < C)
        range.e.c = C
      const cell: Record<string, any> = {
        v: data[R][C],
      }
      if (cell.v == null)
        continue
      const cell_ref = decodeCell({
        c: C,
        r: R,
      })

      if (typeof cell.v === 'number') { cell.t = 'n' }
      else if (typeof cell.v === 'boolean') { cell.t = 'b' }
      else if (cell.v instanceof Date) {
        cell.t = 'n'
        cell.z = XLSX.SSF._table[14]
        cell.v = datenum(cell.v as unknown as string)
      }
      else { cell.t = 's' }

      ws[cell_ref] = cell
    }
  }
  if (range.s.c < 10000000)
    ws['!ref'] = encodeRange(range)
  return ws
}

function datenum(v: string, date1904 = false) {
  if (date1904)
    v += 1462
  const epoch = Date.parse(v)
  return (epoch - ((new Date(Date.UTC(1899, 11, 30))) as unknown as number)) / (24 * 60 * 60 * 1000)
}

function s2ab(s: any) {
  const buf = new ArrayBuffer(s.length)
  const view = new Uint8Array(buf)
  for (let i = 0; i !== s.length; ++i) view[i] = s.charCodeAt(i) & 0xFF
  return buf
}
