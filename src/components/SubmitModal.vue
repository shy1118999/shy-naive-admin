<!--
 * @Author: shaohang-shy
 * @Date: 2022-09-15 17:03:51
 * @LastEditors: shaohang-shy
 * @LastEditTime: 2023-01-30 10:00:00
 * @Description: SubmitModal
-->
<script setup lang="ts">
const props = withDefaults(defineProps<{
  show: boolean
  loading: boolean
  title: string
  displayDirective?: 'show' | 'if'
  positiveText?: string
  negativeText?: string
  styleClass?: string
  size?: 'small' | 'medium' | 'large' | 'huge'
}>(), {
  displayDirective: 'show',
  positiveText: '确认',
  negativeText: '取消',
  styleClass: 'w-150',
  size: 'medium',
})
const emits = defineEmits(['submit', 'cancel', 'update:show'])
</script>

<template>
  <n-modal
    :show="props.show"
    :display-directive="props.displayDirective"
    @update:show="(e: any) => emits('update:show', e)"
  >
    <n-card :size="props.size" :class="props.styleClass" :title="props.title" :border="false">
      <slot />
      <template #footer>
        <n-space justify="end">
          <NButton :loading="props.loading" type="primary" @click="emits('submit')">
            {{ props.positiveText }}
          </NButton>
          <NButton @click="emits('cancel')">
            {{ props.negativeText }}
          </NButton>
        </n-space>
      </template>
    </n-card>
  </n-modal>
</template>
