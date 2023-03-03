<template>
  <i
    class="ctrl-aside iconfont"
    :class="[isopen ? 'icon-a-10Gcaidankaiqi' : 'icon-a-10Hcaidanguanbi']"
    @click="changeAside"
  />
  <div class="img-user">12312312</div>
</template>

<script lang="ts" setup name="Header">
import { ref, reactive } from 'vue'

let isopen = ref(true)
let userInfo = reactive({})
console.log(isopen.value)
console.log(typeof userInfo)
function changeAside() {
  isopen.value = !isopen.value
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
}
</style>
