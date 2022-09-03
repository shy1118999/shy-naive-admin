/*
 * @Author: shaohang-shy
 * @Date: 2022-08-29 20:22:30
 * @LastEditors: shaohang-shy
 * @LastEditTime: 2022-09-03 19:27:36
 * @Description:
 */
import * as XLSX from 'xlsx'
import { sheetToHtml, sheetToJson } from './utils'
export function parseAllSheetExcel(file: File, options?: XLSX.Sheet2JSONOpts) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.onload = (e) => {
      const data = e.target?.result
      const workbook = XLSX.read(data, { type: 'array' })
      const results = []
      for (const sheetName of workbook.SheetNames) {
        const sheet = workbook.Sheets[sheetName]
        const sheetData = sheetToJson(sheet, options)
        results.push({
          sheet: sheetName,
          data: sheetData,
        })
      }
      resolve(results)
    }
    reader.onerror = (e) => {
      reject(e)
    }
    reader.readAsArrayBuffer(file)
  })
}

export function parseExcel(file: File, options?: XLSX.Sheet2JSONOpts) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.onload = (e) => {
      const data = e.target?.result
      const workbook = XLSX.read(data, { type: 'array' })
      const firstSheetName = workbook.SheetNames[0]
      const worksheet = workbook.Sheets[firstSheetName]
      const results = sheetToJson(worksheet, options)
      resolve(results)
    }
    reader.onerror = (e) => {
      reject(e)
    }
    reader.readAsArrayBuffer(file)
  })
}

export function parseExcelToTable(file: File) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.onload = (e) => {
      const data = e.target?.result
      const workbook = XLSX.read(data, { type: 'array' })
      const firstSheetName = workbook.SheetNames[0]
      const worksheet = workbook.Sheets[firstSheetName]
      const results = sheetToHtml(worksheet)
      resolve(results)
    }
    reader.onerror = (e) => {
      reject(e)
    }
    reader.readAsArrayBuffer(file)
  })
}
