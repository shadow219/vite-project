import vue from '@vitejs/plugin-vue'
/* 使用node模块需导入node对应的类型声明包 */
import path from 'path'

// 开发分支和正式分支公用的配置
export default {
  /* 配置插件 */
  plugins: [vue()],
  resolve: {
    alias: {
      // 设置项目根路径别名
      '@': path.resolve(__dirname, './src'),
      // 设置静态文件访问路径别名
      '@assets': path.resolve(__dirname, './src/assets')
    }
  },
  /* 配置本地开发服务器 */
  server: {
    open: true,
    port: 8090
  },
  /* 配置css */
  css: {
    // 配置使用sass全局变量
    preprocessorOptions: {
      scss: {
        additionalData: `@import "@/assets/styles/variable.scss";`
      }
    }
  },
  
}