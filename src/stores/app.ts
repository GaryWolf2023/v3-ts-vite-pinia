import { ref } from 'vue'
import { defineStore } from 'pinia'

// 使用setup形式的写法
// export const useAppStore = defineStore('app', () => {
//   const OPENMENU = ref(true)
//   function changeAside() {
//     OPENMENU.value = !OPENMENU.value
//   }
//   return { OPENMENU, changeAside }
// })
export const useAppStore = defineStore('app', {
  state: () => ({
    OPENMENU: true
  }),
  actions:{
    changeAside() {
      this.OPENMENU = !this.OPENMENU
    },
    resetStore() {
      this.$reset()
    }
  },
  getters: {
    
  }
})