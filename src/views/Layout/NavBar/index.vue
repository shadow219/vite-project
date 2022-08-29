<template>
  <div class="navbar">
    <div class="left">
      <div class="title">早上好</div>
      <el-button>新建课程</el-button>
    </div>
    <div class="right">
      <div class="avatar">
        <img src="@assets/images/avatar.webp" alt="">
      </div>
      <div class="info">
        <div class="user_name">张三</div>
        <div class="nick_name">李四</div>
      </div>
      <div class="btn">
        <i class="iconfont icon-xiaoxi"></i>
        <i class="iconfont icon-tongzhi"></i>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.navbar {
  display: flex;
  align-items: center;
  height: 104px;
  border-bottom: 1px solid $transparentLineColor;
  .left {
    flex: 2;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left: 34px;
    padding-right: 32px;
    .title {
      color: #000;
      font-size: 24px;
    }
    .el-button {
      width: 168px;
      height: 48px;
      border: none;
      background: $themeColorTwo;
      border-radius: 8px;
    }
  }
  .right {
    flex: 1;
    display: flex;
    align-items: center;
    padding-left: 32px;
    padding-right: 40px;
    .avatar {
      width: 66px;
      height: 66px;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 50%;
      }
    }
    .info {
      flex: 1;
      padding-left: 16px;
      color: $fontColor;
      font-size: 12px;
      .user_name {
        margin-bottom: 9px;
      }
    }
    .btn {
      .iconfont {
        font-size: 24px;
        &:first-child {
          margin-right: 20px;
        }
      }
    }
  }
}
</style>
