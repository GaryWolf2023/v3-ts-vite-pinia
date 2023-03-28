<template>
  <div class="login-box">
    <el-form :model="form" label-width="120px">
      <p class="login-title">{{ $t('login.logintitle') }}</p>
      <el-form-item :label="$t('login.username')">
        <el-input v-model="form.username" type="text" />
      </el-form-item>
      <el-form-item :label="$t('login.password')">
        <el-input v-model="form.password" type="text" />
      </el-form-item>
      <el-form-item>
        <el-button :style="{width:'100%'}" type="primary" @click="login">{{ $t('login.login') }}</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup lang="ts" name="Login">
import router from '@/router';

let form = reactive({
  username: 'admin',
  password: '123456',
  CAPTCHA: ''
})
const login = () :void => {
  if (form.username==='admin'&&form.password==='123456') {
    router.push({ path: '/home' })
  }
}
</script>

<style lang="scss" scoped>
.login-box {
  height: 100vh;
  width: 100vw;
  position: relative;
  background-image: url('@/static/images/login_background.jpg');
  background-size: 100%;
  background-repeat: no-repeat;

  ::v-deep(.el-form) {
    width: 560px;
    margin: 200px auto;
    background-color: #d3d3d383;
    padding: 80px 60px 40px 0px;
    border-radius: 20px;
    position: relative;
    
    .login-title {
      position: absolute;
      top: 20px;
      left: 0;
      height: 40px;
      width: 100%;
      font-size: 26px;
      font-weight: 700;
      color: rgb(255, 255, 255);
      line-height: 40px;
      text-align: center;
    }
    .el-form-item {
      width: 100%;
      height: 46px;
      .el-form-item__label {
        height: 100%;
        line-height: 46px;
      }
      .el-form-item__content {
        width: 100%;
        height: 46px;
        .login-btn {
          width: 100%;
        }
      }
    }
  }
}
</style>
