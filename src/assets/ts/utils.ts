import { getCurrentInstance } from 'vue'
import type { ComponentInternalInstance } from 'vue'

// 获取全局变量
export function getContext() {
  const { appContext } = getCurrentInstance() as ComponentInternalInstance
  return appContext.config.globalProperties
}
