import { defineConfig } from 'vite'
/* 导入配置 */
// 基础配置
import BaseConfig from './vite.base.config.ts'
// 测试环境配置
import TestConfig from './vite.test.config.ts'
// 生产环境配置
import ProdConfig from './vite.prod.config.ts'

const config = (command: string, mode: string) => {
  // 
  if (command === 'serve') {
    return { ...BaseConfig, ...TestConfig }
  } else {
    return { ...BaseConfig, ...ProdConfig }
  }
}

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  return config(command, mode)
})
