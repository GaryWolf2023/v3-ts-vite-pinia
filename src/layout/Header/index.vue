<template>
  <!-- <i
    class="ctrl-aside iconfont"
    :class="[isopen ? 'icon-a-10Gcaidankaiqi' : 'icon-a-10Hcaidanguanbi']"
    @click="changeAside"
  /> -->
  <i
    class="ctrl-aside iconfont"
    :class="[OPENMENU ? 'icon-a-10Gcaidankaiqi' : 'icon-a-10Hcaidanguanbi']"
    @click="changeAside"
  />
  <div class="img-user">
    <img class="user-image" v-if="Object.keys(userInfo).length > 0" src="" alt="" />
    <i v-else class="iconfont icon-icon-test1" />
    <span class="user-name">{{ '张三' }}</span>
  </div>
</template>

<script lang="ts" setup name="Header">
import { reactive, watch, computed } from 'vue'
import { useAppStore } from '@/stores/app'
import { storeToRefs } from 'pinia'

const appStore = useAppStore()
// const isopen = computed(() => appStore.OPENMENU) // 我们使用计算属性来获取我们的store内容
const { OPENMENU } = storeToRefs(appStore) // pinia提供的方法，使我们获取到的数据是响应式的
let userInfo = reactive({})
function changeAside() {
  // appStore.changeAside()
  // appStore.OPENMENU = !appStore.OPENMENU
  appStore.$patch((state) => {
    console.log(state)
    state.items.push({ OPENMENU: false })
    state.hasChanged = true
  })
  console.log(appStore)
}
</script>

<style lang="scss" scoped>
.ctrl-aside {
  height: 100%;
  width: 50px;
  position: absolute;
  left: 0;
  top: 0;
  :hover {
    color: aqua;
  }
}
.iconfont {
  font-size: 24px;
  font-weight: 200;
  display: inline-block;
  height: 100%;
  line-height: 50px;
  padding: 0 10px;
}
.img-user {
  height: 100%;
  position: absolute;
  right: 0;
  top: 0;
  padding-right: 5px;
  .user-image {
    height: 100%;
    width: 50px;
    border-radius: 25px;
  }
  .iocnfont {
    display: inline-block;
    height: 100%;
    width: 70px;
    padding: 0 0;
    line-height: 50px;
    font-size: 25px;
  }
  .user-name {
    max-width: 80px;
    @include oneLineTextout;
  }
}
</style>
