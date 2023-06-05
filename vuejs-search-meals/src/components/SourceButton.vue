<template>
  <!--  Details按钮  -->
  <a
    :href="href" target="_blank"
    class="px-3 py-2 rounded border-2 text-white border-purple-600 bg-purple-500 hover:bg-purple-600 hover:text=white transition"
  >
    <slot></slot>
  </a>
</template>

<script setup>
const props = defineProps({
  href: String
})
</script>

<style scoped>

</style>