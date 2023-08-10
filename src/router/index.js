import { createRouter, createWebHistory } from 'vue-router'

// 设置路由重定向
const defaultRoutes = [
  {
    path: '/',
    redirect: '/home' 
  },
]

// 动态导入路由
const files = require.context('@/views', true, /router\.js$/);
const routes = files.keys().map(key => {
  const page = require('@/views' + key.replace('.', ''));
  return page.default;
})

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes:[...defaultRoutes,...routes]
})

export default router
