import { defineStore } from 'pinia'
export const useStore = defineStore('storeId', {
  state: () => {
    return {
      // 用于初始化空列表
      userList: [] as UserInfo[],
      // 用于尚未加载的数据
      user: null as UserInfo | null,
    }
  },
})

interface UserInfo {
  name: string
  age: number
}