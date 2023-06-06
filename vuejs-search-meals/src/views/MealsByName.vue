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
  <!-- 展示搜索结果 -->
  <Meals :meals="meals" />
</template>

<script setup>
import {computed, onMounted, ref} from "vue";
import store from "../store";
import {useRoute} from "vue-router";
import Meals from "../components/Meals.vue";

const keyword = ref('');
const meals = computed(() => store.state.searchedMeals);
const route = useRoute();

function searchMeals() {
  if(keyword.value){
    store.dispatch('searchMeals', keyword.value)
  }else{
    store.commit('setSearchedMeals', [])
  }
}

onMounted(() => {
  keyword.value = route.params.name
  if (keyword.value) {
    searchMeals()
  }
})

</script>