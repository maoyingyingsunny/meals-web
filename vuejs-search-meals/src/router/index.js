// 导入 vue-router 模块中的 `createRouter` 和 `createWebHistory` 函数
import {createRouter, createWebHistory} from 'vue-router'
import Home from '../views/Home.vue'
import MealsByLetter from "../views/MealsByLetter.vue";
import MealsByName from "../views/MealsByName.vue";
import MealsByIngredient from "../views/MealsByIngredient.vue";
import DefaultLayout from "../components/DefaultLayout.vue";
import GuestLayout from "../components/GuestLayout.vue";
import MealDetails from "../views/MealDetails.vue";
import Ingredients from "../views/Ingredients.vue";

// 定义了一个路由配置数组 routes
const routes = [
  {
    path: '/',
    component: DefaultLayout,
    children: [
      {
        path: '/',
        name: 'Home',
        component: Home,
      },
      {
        path: '/by-name/:name?',
        name: 'byName',
        component: MealsByName,
      },
      {
        path: '/by-letter/:letter?',
        name: 'byLetter',
        component: MealsByLetter,
      },
      {
        path: '/ingredients',
        name: 'ingredients',
        component: Ingredients,
      },
      {
        path: '/by-ingredients/:ingredient',
        name: 'byIngredient',
        component: MealsByIngredient,
      },
      {
        path: '/meal/:id',
        name: 'mealDetails',
        component: MealDetails,
      }
    ]
  },
  {
    path: '/guest',
    component: GuestLayout,
  }

];

// 用于创建路由实例和路由模式，并赋值给 router 变量
const router = createRouter({
    history: createWebHistory(),
    routes,
    });

// 设置为默认导出
export default router;