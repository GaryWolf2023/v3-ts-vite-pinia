<script setup lang="ts" name="Layout">
import Header from './Header/index.vue'
import { ref, onMounted } from 'vue'
const a = ref(10)
onMounted(() => {
  console.log(a)
})
</script>
<template>
  <div class="layout-box">
    <aside class="layout-aside">1</aside>
    <div class="layout-content">
      <header class="layout-header">
        <Header></Header>
      </header>
      <second class="layout-main">2</second>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.layout-box {
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: flex-start;
  background-color: $bg-color;
  .layout-aside {
    width: 220px;
    height: 100%;
    border-right: $border;
  }
  .layout-content {
    width: calc(100% - 220px);
    height: 100%;
    .layout-header {
      height: 50px;
      width: 100%;
      border-bottom: $border;
      padding-left: 50px;
      display: flex;
      position: relative;
    }
    .layout-main {
      height: calc(100% - 50px);
    }
  }
}
</style>
