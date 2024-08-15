import { createApp } from 'vue'
import App from './App.vue'
//引入element-plus插件与样式
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import '@/styles/index.scss'

//svg插件需要的配置代码
import 'virtual:svg-icons-register'

//引入自定义插件对象：注册整个项目全局组件
import gloablComponent from './components/index'

//配置element-plus国际化
//@ts-expect-error忽略当前文件ts类型的检测否则有红色提示(打包会失败)
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
import router from './router'

import pinia from './store'

import './permission'
//获取应用对象实例化
const app = createApp(App)

app.use(pinia)
app.use(ElementPlus, {
  locale: zhCn, //国际化配置
})

//安装自定义插件
app.use(gloablComponent)
app.use(router)

//将应用挂载到挂载点上
app.mount('#app')
