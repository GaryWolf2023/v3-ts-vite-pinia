import { defineStore } from 'pinia'
import { ref } from 'vue'
export const useUserStore = defineStore('users', () => {
    const count = ref(0)
    function increment() {
      count.value++
    }
  
    return { count, increment }
})
/**
 * ref() 就是 state 属性
 * computed() 就是 getters
 * function() 就是 actions
 */