<!--
 * @Author: shaohang-shy
 * @Date: 2022-08-23 20:07:48
 * @LastEditors: shy1118
 * @LastEditTime: 2023-11-19 14:19:54
 * @Description: LayoutTagsView
-->
<script setup lang="ts">
import { useThemeVars } from 'naive-ui'
import type { RouteLocationNormalizedLoaded } from 'vue-router'
import type { TagView } from '~/typings/route'

const tagsViewStore = useTagsViewStore()
const route = useRoute()
const router = useRouter()

watch(route, () => {
  if (route.name) {
    tagsViewStore.addView(getTagView(route))
    nextTick(() => {
      handleScroll()
    })
  }
}, { immediate: true })

function getTagView(route: RouteLocationNormalizedLoaded): TagView {
  return {
    name: route.name as string,
    title: route.meta.title as string || 'no-title',
    path: route.fullPath,
    affix: !!route.meta.affix,
    query: route.query,
    keepAlive: route.meta.keepAlive === true,
  }
}

function isActive(view: TagView) {
  return view.path === route.fullPath
}

function handleToView(view: TagView) {
  router.push({
    path: view.path,
    query: view.query,
  })
}

function handleDelView(view: TagView) {
  if (isActive(view)) {
    // 重定向到首页
    router.replace({ path: '/' })
  }
  tagsViewStore.delView(view)
}
const themeVars = useThemeVars()

const x = ref(0)
const y = ref(0)
const showDropdown = ref(false)
let currentTag: null | TagView = null
function handleContextMenu(e: MouseEvent, tag: TagView) {
  e.preventDefault()
  showDropdown.value = false
  currentTag = tag
  nextTick().then(() => {
    showDropdown.value = true
    x.value = e.clientX
    y.value = e.clientY
  })
}
function onClickoutside() {
  showDropdown.value = false
}
function handleSelect(key: string) {
  showDropdown.value = false
  if (!currentTag)
    return
  if (key === 'close') {
    handleDelView(currentTag)
  }
  else if (key === 'close-all') {
    if (isActive(currentTag)) {
      // 重定向到首页
      router.replace({ path: '/' })
    }
    tagsViewStore.delAllViews()
  }
  else if (key === 'close-other') {
    if (!isActive(currentTag)) {
      // 重定向到首页
      router.replace({
        path: currentTag.path,
        query: currentTag.query,
      })
    }
    tagsViewStore.delOthersViews(currentTag)
  }
}

const scrollContainer = ref()
const tags = ref()

function handleScroll() {
  for (const tag of tags.value) {
    if (!tag.secondary)
      scrollContainer.value.scrollTo({ left: tag.$el.offsetLeft - 8 })
  }
}
</script>

<template>
  <div
    id="tags-view-container" class="absolute left-0 right-0 top-0 z-9 h-40px bg shadow"
    :style="{ boxShadow: themeVars.boxShadow1 }"
  >
    <n-scrollbar ref="scrollContainer" x-scrollable>
      <div class="h-40px flex flex-row items-center justify-start gap-2 px-2">
        <n-button
          v-for="tag in tagsViewStore.visitedViews" ref="tags" :key="tag.path" class="flex-shrink-0" size="small"
          :secondary="!isActive(tag)" type="primary" @click="handleToView(tag)"
          @contextmenu="handleContextMenu($event, tag)"
        >
          {{ tag.title }}
          <n-button v-if="!tag.affix" quaternary circle size="tiny" class="ml-1" @click.stop="handleDelView(tag)">
            <n-icon>
              <div class="i-carbon:close h-full w-full" />
            </n-icon>
          </n-button>
        </n-button>
      </div>
    </n-scrollbar>
    <n-dropdown
      placement="bottom-start" trigger="manual" :x="x" :y="y" :options="[
        {
          label: '关闭',
          key: 'close',
        },
        {
          label: '关闭其他',
          key: 'close-other',
        },
        {
          label: '关闭全部',
          key: 'close-all',
        },
      ]" :show="showDropdown" :on-clickoutside="onClickoutside" @select="handleSelect"
    />
  </div>
</template>
