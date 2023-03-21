<template>
  <div class="login-box">
    <el-form :model="form" label-width="120px">
    <el-form-item :label="$t('login.username')">
      <el-input v-model="form.username" type="text"/>
    </el-form-item>
    <el-form-item :label="$t('login.password')">
      <el-input v-model="form.password" type="text" />
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="login">{{ $t('login.login') }}</el-button>
    </el-form-item>
  </el-form>
  </div>
</template>

<script setup lang="ts" name="Login">
let form = reactive({
  username: '',
  password: '',
  CAPTCHA: ''
})
const login = () => {}
</script>

<style lang="scss" scoped>
.login-box {
  height: 100vh;
  width: 100vw;
  position: relative;
  background-image: url('@/assets/login_background.jpg');
  background-size: 100% ;
  background-repeat: no-repeat;
  ::v-deep .el-form {
    width: 560px;
    margin: 200px auto;
    background-color: #c0c0c083;
    padding: 80px 60px 40px;
    border-radius: 20px;
  }
}
</style>
