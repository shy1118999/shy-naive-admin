<!--
 * @Author: shaohang-shy
 * @Date: 2022-08-22 17:56:10
 * @LastEditors: shaohang-shy
 * @LastEditTime: 2022-08-22 17:58:24
 * @Description: Nightingale Chart
-->
<script setup lang="ts">
import { type ECOption } from '~/composables'

const lineOptions = ref<ECOption>({
  title: {
    text: 'Nightingale Chart',
    subtext: 'Fake Data',
    left: 'center',
  },
  tooltip: {
    trigger: 'item',
    formatter: '{a} <br/>{b} : {c} ({d}%)',
  },
  legend: {
    left: 'center',
    top: 'bottom',
    data: [
      'rose1',
      'rose2',
      'rose3',
      'rose4',
      'rose5',
      'rose6',
      'rose7',
      'rose8',
    ],
  },
  toolbox: {
    show: true,
  },
  series: [
    {
      name: 'Radius Mode',
      type: 'pie',
      radius: [20, 140],
      center: ['25%', '50%'],
      roseType: 'radius',
      itemStyle: {
        borderRadius: 5,
      },
      label: {
        show: false,
      },
      emphasis: {
        label: {
          show: true,
        },
      },
      data: [
        { value: 40, name: 'rose 1' },
        { value: 33, name: 'rose 2' },
        { value: 28, name: 'rose 3' },
        { value: 22, name: 'rose 4' },
        { value: 20, name: 'rose 5' },
        { value: 15, name: 'rose 6' },
        { value: 12, name: 'rose 7' },
        { value: 10, name: 'rose 8' },
      ],
    },
    {
      name: 'Area Mode',
      type: 'pie',
      radius: [20, 140],
      center: ['75%', '50%'],
      roseType: 'area',
      itemStyle: {
        borderRadius: 5,
      },
      data: [
        { value: 30, name: 'rose 1' },
        { value: 28, name: 'rose 2' },
        { value: 26, name: 'rose 3' },
        { value: 24, name: 'rose 4' },
        { value: 22, name: 'rose 5' },
        { value: 20, name: 'rose 6' },
        { value: 18, name: 'rose 7' },
        { value: 16, name: 'rose 8' },
      ],
    },
  ],
})
const { domRef: chartRef } = useEcharts(lineOptions)
</script>

<template>
  <div class="p-2">
    <div ref="chartRef" w-full h-600px />
  </div>
</template>
