<template>
  <!-- 搜索框 -->
  <div class="flex flex-col p-8 items-center justify-center">
    <input type="text" class="rounded border-2 border-gray-200 w-full"
           placeholder="Search for Meals"/>
  </div>
  <!-- 按字母排序并跳转到对应路由 -->
  <div class="flex justify-center gap-2 mt-2">
    <router-link :to="{name:'byLetter',params:{letter}}"
                 v-for="letter of letters.split('')">
      {{ letter }}
    </router-link>

  </div>
</template>

<script setup>
import store from "../store";
import {computed} from "vue";

const meals = computed(() => store.state.meals)
  const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

</script>