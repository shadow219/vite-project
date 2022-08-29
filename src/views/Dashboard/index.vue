<template>
  <div class="dashboard-wrapper">
    <div class="left">
      <div id="income"></div>
      <ul class="card_list">
        <template v-for="item in cardList" :key="item.id">
          <li class="card-item">
            <div class="top">
              <i class="iconfont" :class="item.icon"></i>
              <span class="value">{{ item.value }}</span>
            </div>
            <div class="bottom">
              <span class="name">{{ item.name }}</span>
              <i class="iconfont icon-zhexiantu"></i>
            </div>
          </li>
        </template>
      </ul>
      <div class="foot_info">
        <div class="sales_statistics">
          <div class="sales_title">每周销售统计</div>
          <div class="sales_list"></div>
        </div>
        <div class="course_effect">
          <div class="course_title">课程效果</div>
          <div id="course_chart"></div>
        </div>
      </div>
    </div>
    <div class="right">

    </div>
  </div>
</template>

<script setup lang="ts">
import {onMounted, onUnmounted} from 'vue'
import { getContext } from '@/assets/ts/utils'

// 初始化绘制收入统计柱状图
let incomeChart: any = null
function initIncomeChart() {
  incomeChart = getContext().$echarts.init(document.getElementById('income') as HTMLDivElement)
  incomeChart.setOption({
    title: {
      text: '收入',
      textStyle: {
        color: '#3F3F44',
        fontSize: '16px'
      }
    },
    grid: {
      left: '0%',
      right: '0%'
    },
    tooltip: {},
    legend: {
      data: ['课程访问', '已购课程', '收入'],
      icon: 'circle',
      textStyle: {
        fontSize: '12px'
      },
      itemWidth: 12,
      itemHeight: 12
    },
    xAxis: {
      data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
    },
    yAxis: {},
    series: [
      {
        name: '课程访问',
        type: 'bar',
        data: [5, 20, 36, 10, 10, 20, 5, 20, 36, 10, 10, 20],
        barGap: '0%',
        itemStyle: {
          color: '#CCEABB'
        }
      },
      {
        name: '已购课程',
        type: 'bar',
        data: [5, 20, 36, 10, 10, 20, 5, 20, 36, 10, 10, 20],
        itemStyle: {
          color: '#FDCB9E'
        }
      },
      {
        name: '收入',
        type: 'line',
        data: [5, 20, 36, 10, 10, 20, 5, 20, 36, 10, 10, 20],
        itemStyle: {
          color: '#3F3F44'
        },
        smooth: true
      }
    ]
  })
}

// 卡片信息
const cardList = [
  { id: 1, name: '总收入', value: 9000, icon: 'icon-shouru' },
  { id: 2, name: '平均评分', value: 9000, icon: 'icon-score' },
  { id: 3, name: '学生总数', value: 9000, icon: 'icon-xueshengliebiao' }
]

// 页面大小发生变化, 动态更新图表的宽高
const resizePage = () => {
  incomeChart.resize()
}

// 组件已挂载
onMounted(() => {
  initIncomeChart()
  // 监听resize事件
  window.addEventListener('resize', resizePage)
})

// 组件卸载之前
onUnmounted(() => {
  // 移除resize事件
  window.removeEventListener('resize', resizePage)
})
</script>

<style scoped lang="scss">
.dashboard-wrapper {
  display: flex;
  .left {
    flex: 2;
    #income {
      width: 100%;
      height: 300px;
    }
    .card_list {
      display: flex;
      .card-item {
        flex: 1;
        height: 112px;
        margin-right: 24px;
        padding: 25px 16px;
        background: #FFFFFF;
        border-radius: 8px;
        box-shadow: 0 2px 10px 1px rgba(63, 63, 68, .1);
        &:last-child {
          margin-right: 0;
        }
        .top, .bottom {
          display: flex;
          justify-content: space-between;
          align-items: center;
          .iconfont {
            font-size: 27px;
          }
          .value {
            color: #A5CC8F;
            font-size: 24px;
          }
        }
        .top {
          padding-bottom: 20px;
        }
      }
    }
    .foot_info {
      display: flex;
      align-items: stretch;
      padding-top: 40px;
      .sales_statistics, .course_effect {
        flex: 1;
        height: 320px;
        background-color: #f00;
      }
    }
  }
  .right {
    flex: 1;
  }
}

</style>
