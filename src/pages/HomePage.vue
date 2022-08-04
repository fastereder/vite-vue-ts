<template>
  <div>{{ message }}</div>
</template>

<script lang="ts" setup>
import { useMainStore } from '@/store/main'
import { useHead } from '@vueuse/head'

const { message } = useMainStore()

defineExpose({ message })
useHead({
  title: 'Home'
})
</script>
