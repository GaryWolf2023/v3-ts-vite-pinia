<script setup lang="ts" name="Layout">
import Header from './Header/index.vue'
import Aside from './aside/aside.vue'
import { ref, onMounted } from 'vue'

const a = ref(10)
onMounted(() => {
  console.log(a)
})
</script>
<template>
  <div class="layout-box">
    <el-container>
      <el-aside :width="'200'" class="layout-aside">
        <Aside></Aside>
      </el-aside>
      <el-container class="layout-content">
        <el-header class="layout-header">
          <Header></Header>
        </el-header>
        <el-main class="layout-main">
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
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
    /* width: 200px; */
    height: 100%;
    border-right: $border;
  }
  .layout-content {
    /* width: calc(100% - 200px); */
    flex: 1;
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
      padding: 0;
      height: calc(100% - 50px);
    }
  }
}
</style>
