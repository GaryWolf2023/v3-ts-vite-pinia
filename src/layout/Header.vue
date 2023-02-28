<template>
  <i class="ctrl-aside" :class="[]" />
  <div class="img-user">12312312</div>
</template>

<script lang="ts" setup name="Header">
import { ref, reactive } from 'vue'
let isopen = ref(true)
let userInfo = reactive({})
console.log(isopen.value)
console.log(typeof userInfo)
</script>

<style lang="scss" scoped>
.ctrl-aside {
  height: 100%;
  width: 50px;
  position: absolute;
  left: 0;
  top: 0;
}
.img-user {
  height: 100%;
  position: absolute;
  right: 0;
  top: 0;
}
</style>
