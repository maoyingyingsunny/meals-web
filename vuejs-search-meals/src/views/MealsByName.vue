<template>
  <div class="p-8 pb-0">
    <!-- 搜索框 -->
    <input type="text"
           v-model="keyword"
           class="rounded border-2 border-gray-200 w-full"
           placeholder="Search for Meals"
           @change="searchMeals"
    />
  </div>

  <div class="grid grid-cols-1 md:grid-cols-3 gap-5 p-8"
  >
    <div
      v-for="meal of meals"
      :key="meal.idMeal"
      class="bg-white shadow rounded-2xl"
    >
      <router-link :to="{name:'mealDetails', params:{id:meal.idMeal}}">
        <img
          :src="meal.strMealThumb"
          :alt="strMeal"
          class="rounded-t-xl w-full h-48 object-cover"
        />
      </router-link>

      <div class="p-3">
        <h3 class="font-semibold">{{ meal.strMeal }}</h3>
        <p class="mb-4">
          Lascia che l'invitante aroma dei piatti preparati con cura ti avvolga e goditi il fascino unico che il cibo
          porta con sé.
        </p>
        <div class="flex items-center justify-between">
          <YouTubeButton :href="meal.strYoutube" target="_blank"> YouTube</YouTubeButton>
          <SourceButton :href="meal.strSource" target="_blank"> Source</SourceButton>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import {computed, onMounted, ref} from "vue";
import store from "../store";
import {useRoute} from "vue-router";
import YouTubeButton from "../components/YouTubeButton.vue";
import SourceButton from "../components/SourceButton.vue";

const keyword = ref('');
const meals = computed(() => store.state.searchedMeals);
const route = useRoute();

function searchMeals() {
  store.dispatch('searchMeals', keyword.value)
}

onMounted(() => {
  keyword.value = route.params.name
  if (keyword.value) {
    searchMeals()
  }
})

</script>