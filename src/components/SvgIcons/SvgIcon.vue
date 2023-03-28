<template>
    <svg class="svg-icon" aria-hidden="true">
        <use :xlink:herf="iconName"></use>
    </svg>
</template>

<script setup lang="ts" name="SvgIcon">
const props = defineProps({
    prefix: {
      type: String,
      default: 'icon',
    },
    name: {
      type: String,
      required: true,
    },
    color: {
      type: String,
      default: '#333',
    },
})
// eslint-disable-next-line no-undef
const iconName = computed(()=>{
    return `#${props.prefix}-${props.name}`
})
</script>

<style lang="scss" scoped>
.svg-icon {
    height: 1rem;
    width: 1rem;
    vertical-align: -0.15rem;
    fill: currentColor;
    overflow: hidden;
}
</style>