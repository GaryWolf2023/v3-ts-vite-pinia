<template>
  <div class="login-box">
    <el-form :model="form" label-width="120px">
      <el-form-item label="Activity name">
        <el-input v-model="form.name" />
      </el-form-item>
      <el-form-item label="Activity zone">
        <el-select v-model="form.region" placeholder="please select your zone">
          <el-option label="Zone one" value="shanghai" />
          <el-option label="Zone two" value="beijing" />
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">Create</el-button>
        <el-button>Cancel</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup lang="ts" name="Login">
import { reactive } from 'vue'

const loginForm = reactive({})
</script>

<style lang="scss" scoped>
.login-box {
  height: 100%;
  width: 100%;
  position: relative;
}
</style>
