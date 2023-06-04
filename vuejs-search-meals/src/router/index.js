// 导入 vue-router 模块中的 `createRouter` 和 `createWebHistory` 函数
import {createRouter,createWebHistory} from 'vue-router'
import Home from '../views/Home.vue'

// 定义了一个路由配置数组 routes
const routes = [
    {
        path: '/',
        name: 'Home',
        component:Home,
    },
];

// 用于创建路由实例和路由模式，并赋值给 router 变量
const router = createRouter({
    history: createWebHistory(),
    routes,
    });

// 设置为默认导出
export default router;