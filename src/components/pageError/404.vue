<template>
  <div class="page-404">
    <img src="@/static/404.png" alt="404" class="image-404" />
    <div class="info-404">
      <p class="top-one">404</p>
      <p class="top-two">UH HO! 页面丢失</p>
      <p class="buttom-one">您所寻找的页面不存在。你可以点击下面的按钮回到主页</p>
      <el-button type="success" round plain @click="backHome">back home</el-button>
    </div>
  </div>
</template>

<script setup lang="ts" name="Page404">
import router from '@/router'

function backHome() {
  router.push('/home')
}
</script>

<style lang="scss">
.page-404 {
  height: 100vh;
  width: 100vw;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  .image-404 {
    height: 400px;
  }
  .info-404 {
    height: 400px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    .top-one {
      font-size: 100px;
      font-weight: 700;
    }
    .top-two {
      font-size: 20px;
      font-weight: 700;
    }
  }
}
</style>
