<template>
  <div class="max-w-[800px] mx-auto p-8">
    <!-- 页面标题及图片 -->
    <h1 class="text-5xl font-bold mb-5">{{ meal.strMeal }}</h1>
    <img
      :src="meal.strMealThumb"
      alt="meal.strMeal"
      class="max-w-[100%] "
    >
    <!-- 图片下方的标签信息 -->
    <div class="grid grid-cols-1 sm:grid-cols-3 text-lg py-2">
      <div>
        <strong class="font-bold">Category: </strong>
        {{ meal.strCategory }}
      </div>
      <div>
        <strong class="font-bold">Area: </strong>
        {{ meal.strArea }}
      </div>
      <div>
        <strong class="font-bold">Tags: </strong>
        {{ meal.strTags }}
      </div>
    </div>
    <!--  食谱的介绍  -->
    <div class="my-3">
      <p>{{ meal.strInstructions }}</p>
    </div>
    <!--食谱的原料及重量-->
    <div class="grid grid-cols-1 sm:grid-cols-2">
      <div>
        <h2 class="text-2xl font-semibold mb-2">Ingredients</h2>
        <ul>
          <template v-for="(el,ind) of new Array(20)">
            <li v-if="meal[`strIngredient${ind+1}`]">
              {{ ind + 1 }}. {{ meal[`strIngredient${ind + 1}`] }}
            </li>
          </template>
        </ul>
      </div>
      <div>
        <h2 class="text-2xl font-semibold mb-3">Measures</h2>
        <ul>
          <template v-for="(el,ind) of new Array(20)">
            <li v-if="meal[`strMeasure${ind+1}`]">
              {{ ind + 1 }}. {{ meal[`strMeasure${ind + 1}`] }}
            </li>
          </template>
        </ul>
      </div>
      <!-- YouTube及Source按钮 -->
      <div class="flex items-center justify-between">
        <YouTubeButton> YouTube</YouTubeButton>
        <SourceButton> Source</SourceButton>
      </div>
    </div>
  </div>
</template>

<script setup>
import {onMounted, ref} from "vue";
import {useRoute} from "vue-router";
import axiosClient from "../axiosClient.js";
import YouTubeButton from "../components/YouTubeButton.vue";
import SourceButton from "../components/SourceButton.vue";

const route = useRoute();
const meal = ref({});

onMounted(() => {
  axiosClient.get(`/lookup.php?i=${route.params.id}`)
    .then(({data}) => {
      meal.value = data.meals[0] || {}
    })
})

</script>

<style scoped>

</style>