<script setup lang="ts" name="Aside">
import MenuItem from './menuitem.vue'
import { useAppStore } from '@/stores/app'
// import { computed } from 'vue'
import {asyncRouter} from '@/router/asyncRouter'

const appStore = useAppStore()
// eslint-disable-next-line no-undef
const isopen = computed(() => appStore.OPENMENU) // 我们使用计算属性来获取我们的store内容

</script>
<template>
  <el-scrollbar height="100%">
    <el-menu :collapse="isopen">
      <menu-item></menu-item>
    </el-menu>
  </el-scrollbar>
</template>
<style lang="scss"></style>
