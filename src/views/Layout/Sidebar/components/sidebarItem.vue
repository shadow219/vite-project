<template>
  <template v-if="!route.hidden">
    <template v-if="hasShowOneChild()">
      <el-menu-item :index="route.path">
        <i class="iconfont" :class="onlyOneChild.meta.icon"></i>
        <span style="padding-left: 21px;">{{ onlyOneChild.meta.title }}</span>
      </el-menu-item>
    </template>

    <template v-else>
      <el-sub-menu index="1">
        <template #title>
          <span>{{ route.meta.title }}</span>
        </template>
        <SidebarItem v-for="item in route.children" :key="item.name" :route="item" />
      </el-sub-menu>
    </template>
  </template>
</template>

<script setup lang="ts">
import { defineProps, ref } from 'vue'
import { MyRouteRecordRaw } from '@/views/types/custom'

const props = withDefaults(defineProps<{
  route: MyRouteRecordRaw[] | any
}>(), {
  route: []
})

const onlyOneChild = ref<MyRouteRecordRaw>()

const hasShowOneChild = () => {
  // 如果父组件传递的路由对象hidden为false，且没有children属性则直接显示
  if (!props.route.hidden && !props.route.children) {
    onlyOneChild.value = props.route
    return true
  }
  // 如果子集只有一个, 直接显示
  const list = props.route.children.filter((item: MyRouteRecordRaw) => {
    if (item.hidden) {
      return false
    } else {
      onlyOneChild.value = item
      return true
    }
  })
  // 筛选无子集, 返回false
  if (list.length === 0) {
    return false
  }
  // 筛选只有一个子集, 返回true
  if (list.length === 1) {
    return true
  }
  // 其他情况, 返回false
  return false
}
</script>

<script lang="ts">
export default {
  name: 'SidebarItem'
}
</script>
