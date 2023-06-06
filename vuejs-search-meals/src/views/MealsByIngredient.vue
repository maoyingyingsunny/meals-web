<template>
  <div class="p-8">
    <h1 class="text-4xl font-bold mb-4">Ingredients</h1>
    <!-- 展示食物原料的卡片 -->
    <router-link
      :to="{
      name:'byIngredient',
      params:{ingredient:ingredient.strIngredient}
      }"
      v-for="ingredient of ingredients" :key="ingredient.id"
      class="block bg-white rounded p-3 mb-3 shadow-xl">
      <!-- 卡片标题及描述 -->
      <h3 class="text-2xl font-bold mb-2">{{ ingredient.strIngredient }}</h3>
      <p>{{ ingredient.strDescription }}</p>
    </router-link>
  </div>
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