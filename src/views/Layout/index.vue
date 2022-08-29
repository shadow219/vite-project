<template>
  <div class="sys-container">
    <div class="side-wrapper">
      <div class="logo">
        <img src="" alt="">
      </div>
      <Sidebar />
      <div class="foot-label">
        <div class="circle">
          <div class="outer"></div>
          <div class="inner">
            <i class="iconfont icon-mn_dunpai_fill"></i>
          </div>
        </div>
        <div class="main">
          <p class="info">升级你的计划<br/> 从这里开始</p>
          <el-button>获取专业版</el-button>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="nav-wrapper">
        <Navbar />
      </div>
      <div class="main-wrapper">
        <Main />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Navbar from './NavBar/index.vue'
import Main from './Main/index.vue'
import Sidebar from './Sidebar/index.vue'
</script>

<style scoped lang="scss">
.sys-container {
  .side-wrapper {
    position: fixed;
    left: 0;
    top: 0;
    width: 278px;
    height: 100vh;
    border-right: 1px solid $transparentLineColor;
    background-color: $bgColor;
    .logo {
      height: 123px;
    }
    .foot-label {
      position: absolute;
      bottom: 40px;
      left: 40px;
      width: 208px;
      height: 159px;
      background: $sectionBgColor;
      border-radius: 24px;
      .circle {
        .outer, .inner {
          position: absolute;
          left: 50%;
          transform: translate(-50%, -50%);
        }
        .outer {
          width: 71px;
          height: 71px;
          background: $sectionBgColor;
          border-radius: 50%;
        }
        .inner {
          width: 50px;
          height: 50px;
          background: #FFFFFF;
          text-align: center;
          line-height: 50px;
          border-radius: 50%;
          .iconfont {
            color: $themeColorOne;
            font-size: 24px;
          }
        }
      }
      .info {
        padding-top: 40px;
        color: $fontColor;
        font-size: 12px;
        text-align: center;
      }
      .el-button {
        width: 160px;
        height: 40px;
        margin: 22px 24px 0;
        border: none;
        background: #FDCB9E;
        color: $fontColor;
        border-radius: 8px;
      }
    }
  }
  .container {
    height: 100vh;
    padding-left: 278px;
    background-color: $bgColor;
  }
}
</style>
