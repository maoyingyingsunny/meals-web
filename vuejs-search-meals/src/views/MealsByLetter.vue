<template>
  <!-- 按字母排序并跳转到对应路由 -->
  <div class="flex justify-center gap-2 mt-2">
    <router-link :to="{name:'byLetter',params:{letter}}"
                 v-for="letter of letters.split('')">
      {{ letter }}
    </router-link>
  </div>
  <!-- 展示搜索结果 -->
  <Meals :meals="meals"/>
</template>

<script setup>
import {computed, onMounted, watch} from "vue";
import store from "../store";
import MealItem from "../components/MealItem.vue";
import Meals from "../components/Meals.vue";
import {useRoute} from "vue-router";

const route = useRoute();
const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const meals = computed(() => store.state.mealsByLetter);

onMounted(() => {
  store.dispatch('searchMealsByLetter', route.params.letter)
})

// 监听route变化，从而重新获取数据
watch(route, () => {
  store.dispatch('searchMealsByLetter', route.params.letter)
})

</script>