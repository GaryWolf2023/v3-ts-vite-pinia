<script setup lang="ts">
import { ref } from 'vue'
import { RouterView } from 'vue-router'
import Layout from '@/layout/index.vue'
import { ElConfigProvider } from 'element-plus'
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'

const locale = ref(zhCn)
</script>

<template>
  <el-config-provider :locale="locale">
    <RouterView>
    </RouterView>
  </el-config-provider>
</template>

<style scoped></style>
