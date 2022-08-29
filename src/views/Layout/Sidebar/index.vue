<template>
  <div class="sidebar">
    <el-menu
      default-active="1"
      class="el-menu-vertical-demo"
    >
      <SidebarItem v-for="item in routesList" :key="item.name" :route="item" />
    </el-menu>
  </div>
</template>

<script setup lang="ts">
import { routes } from '@/router'
import SidebarItem from './components/sidebarItem.vue'

const routesList = routes.filter(item => item.path !== '/')
</script>

<style scoped lang="scss">
.sidebar {
  ::v-deep(.el-menu) {
    padding-left: 40px;
    border-right: none;
    .el-sub-menu {
      .el-sub-menu__title {
        margin: 0 30px 16px 0;
        height: 48px;
        border-radius: 8px;
        &:hover {
          background-color: rgba(126, 116, 116, 0.3);
        }
      }
      .el-menu {
        padding-left: 0;
      }
    }
    .el-menu-item {
      width: 208px;
      height: 48px;
      margin-bottom: 16px;
      color: $fontColor;
      border-radius: 8px;
      transition: all .6s;
      &.is-active {
        color: $fontColor;
        background: #CCEABB;
        transition: all .5s;
        &:hover {
          background-color: $themeColorOne;
        }
      }
      &:hover {
        background-color: rgba(126, 116, 116, 0.3);
      }
    }
  }
}

</style>
