import { createRouter, createWebHashHistory } from 'vue-router'
import { constantRoute } from './routers'
//创建路由器
const router = createRouter({
  //哈希模式
  history: createWebHashHistory(),
  routes: constantRoute,
  //滚动行为
  scrollBehavior() {
    return {
      left: 0,
      top: 0,
    }
  },
})
export default router
