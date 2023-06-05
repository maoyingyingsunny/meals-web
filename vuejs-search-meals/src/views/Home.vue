<template>
  <div class="flex flex-col p-8 ">
    <!-- 搜索框 -->
    <input type="text"
           class="rounded border-2 border-gray-200 w-full"
           placeholder="Search for Meals"
    />

  </div>
</template>

<script setup>
import axiosClient from "../axiosClient.js";
import {onMounted, ref} from "vue";

const ingredients = ref([]);

onMounted(async () => {
  const {data} = await axiosClient.get('/list.php?i=list');
  console.log(data);
  ingredients.value = data.meals;
})

</script>