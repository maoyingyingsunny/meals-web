<template>
  <Meals :meals="meals"/>
</template>

<script setup>
import Meals from "../components/Meals.vue";
import {computed, onMounted} from "vue";
import store from "../store/index.js";
import {useRoute} from "vue-router";

const meals = computed(() => store.state.mealsByIngredient);
const route = useRoute();

onMounted(() => {
  store.dispatch('searchMealsByIngredient', route.params.ingredient)
})

</script>