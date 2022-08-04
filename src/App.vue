<template>
  <div>Hello boilerplate</div>
  <RouterView></RouterView>
</template>

<script lang="ts" setup>
import { useHead } from '@vueuse/head'

/* Default header options  */
useHead({
  meta: [
    {
      name: 'description',
      content: 'This is an example description'
    }
  ]
})
</script>
