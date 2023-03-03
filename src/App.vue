<script setup lang="ts">
import { ref } from 'vue'
import { RouterView } from 'vue-router'
import Layout from '@/layout/index.vue'
import { ElConfigProvider } from 'element-plus'
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'

const locale = ref(zhCn)
</script>

<template>
  <RouterView>
    <el-config-provider :locale="locale">
      <Layout></Layout>
    </el-config-provider>
  </RouterView>
</template>

<style scoped></style>
