<template>
  <div class="flex flex-col p-8 ">
    <!-- 搜索框 -->
    <input type="text"
           class="rounded border-2 border-gray-200 w-full"
           placeholder="Search for Meals"
    />
    <!-- 按字母排序并跳转到对应路由 -->
    <div class="flex justify-center gap-2 mt-2">
      <router-link :to="{name:'byLetter',params:{letter}}"
                   v-for="letter of letters.split('')">
        {{ letter }}
      </router-link>
    </div>
    <pre>{{ ingredients }}</pre>
  </div>
</template>

<script setup>
import axiosClient from "../axiosClient.js";
import {onMounted, ref} from "vue";

const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const ingredients = ref([]);

onMounted(async () => {
  const {data} = await axiosClient.get('/list.php?i=list');
  console.log(data);
  ingredients.value = data.meals;
})

</script>