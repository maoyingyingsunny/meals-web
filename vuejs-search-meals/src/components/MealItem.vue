<!-- 作为搜索结果的MealItem卡片 -->
<template>
  <div
    class="bg-white shadow rounded-2xl"
  >
    <!--  点击图片跳转到对应链接  -->
    <router-link :to="{name:'mealDetails', params:{id:meal.idMeal}}">
      <img
        :src="meal.strMealThumb"
        :alt="meal.strMeal"
        class="rounded-t-xl w-full h-48 object-cover"
      />
    </router-link>
    <!--  图片下方的介绍文字  -->
    <div class="p-3">
      <h3 class="font-bold">{{ meal.strMeal }}</h3>
      <p class="mb-4">
        Lascia che l'invitante aroma dei piatti preparati con cura ti avvolga
        e goditi il fascino unico che il cibo porta con sé.
      </p>
      <!--  两个按钮  -->
      <div class="flex items-center justify-between">
        <YouTubeButton :href="meal.strYoutube" target="_blank"> YouTube</YouTubeButton>
        <SourceButton :href="meal.strSource" target="_blank"> Source</SourceButton>
      </div>
    </div>
  </div>
</template>

<script setup>
import YouTubeButton from "./YouTubeButton.vue";
import SourceButton from "./SourceButton.vue";

const {meal} = defineProps({
  meal: {
    type: Object,
    required: true
  }
})

</script>
