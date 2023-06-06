<template>
  <pre>
    {{ingredients}}
  </pre>
</template>

<script setup>
import {onMounted, ref} from "vue";
import axiosClient from "../axiosClient.js";

const ingredients = ref([]);


onMounted(() => {
  axiosClient.get('/list.php?i=list').then(({data}) => {
      ingredients.value = data.meals;
    })
})

</script>