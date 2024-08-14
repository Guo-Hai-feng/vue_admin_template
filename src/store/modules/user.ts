//创建用户相关的小仓库
//引入登录接口
import { defineStore } from 'pinia'

//引入数据类型
import { reqLogin } from '@/api/user'
import type { loginFormData, loginResponseData } from '@/api/user/type'
import { SET_TOKEN, GET_TOKEN } from '@/utils/token'
import type { UserState } from './types/types'
import { constantRoute } from '@/router/routers'

const useUserStore = defineStore('user', {
  //存储数据的地方
  state: () => {
    return {
      token: GET_TOKEN(),
      menuRoutes: constantRoute, //仓库存储生成菜单需要数组(路由)
    }
  },

  //异步逻辑
  actions: {
    //用户登录的方法
    //async函数会返回一个promise，有成功失败两种状态
    async userLogin(data: loginFormData) {
      const result: loginResponseData = await reqLogin(data)

      //要么登录成功200，返回token,并且保证token是持久化的
      //但是pinia保存的数据是不持久化的，所以应该本地存储
      if (result.code == 200) {
        this.token = result.data.token as string
        SET_TOKEN(result.data.token as string)
        return 'ok'
      }
      //要么登陆失败201，返回错误信息
      else {
        return Promise.reject(new Error(result.data.message))
      }
    },
  },

  //计算

  getters: {},
})

export default useUserStore
