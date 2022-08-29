import { createApp } from 'vue'
import App from '@/App.vue'
import { createPinia } from 'pinia'
import router from '@/router'
import '@assets/styles/index.scss'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import * as echarts from 'echarts'

const app = createApp(App)
app.use(router)
app.use(createPinia())
app.use(ElementPlus)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
// 设置全局变量, 供所有组件都可访问
app.config.globalProperties.$echarts = echarts
app.mount('#app')
