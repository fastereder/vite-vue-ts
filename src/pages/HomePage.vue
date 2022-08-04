<template>
  <div>{{ message }}</div>
</template>

<script lang="ts" setup>
import { useMainStore } from '@/store/main'
import { useHead } from '@vueuse/head'

const { message } = useMainStore()

useHead({
  title: 'Home'
})
</script>
