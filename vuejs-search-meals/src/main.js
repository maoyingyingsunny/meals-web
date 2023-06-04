import { createApp } from 'vue'
import router from "./router";
import store from "./store";
import './style.css'
import App from './App.vue'

createApp(App)
  .use(router)
  .use(store)
  .mount('#app')
  // 将应用程序实例挂载到具有 id 为 "app" 的 HTML元素上，使其成为应用程序的根DOM元素。