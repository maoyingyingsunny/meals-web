<template>
  <!-- 有搜索结果 -->
  <div class="grid grid-cols-1 md:grid-cols-3 gap-5 p-8">
    <MealItem v-for="meal of meals" :key="meal.idMeal" :meal="meal"/>
  </div>
  <!-- 无搜索结果 -->
  <div v-if="!meals.length" class="flex justify-center items-center text-gray-600 ">
    There are no meals
  </div>
</template>

<script setup>
import MealItem from "./MealItem.vue";

const {meals} = defineProps({
  meals: {
    type: Array,
    required: true,
  }
})

</script>
