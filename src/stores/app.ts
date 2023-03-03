import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useAppStore = defineStore('app', () => {
  const OPENMENU = ref(true)
  function changeAside() {
    OPENMENU.value = !OPENMENU.value
  }
  return { OPENMENU, changeAside }
})