<script setup lang="ts">
import { ref, onMounted } from 'vue'
const a = ref(10)
onMounted(() => {
  console.log(a)
})
</script>
<template>
  <div>
    <aside>1</aside>
    <div>
      <header>1</header>
      <second>2</second>
    </div>
  </div>
</template>
<style lang="scss" scoped></style>
