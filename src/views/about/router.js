// 懒加载路由
const Home = () => import('./index.vue')
export default {
  path: '/about', 
  name: 'about',
  component: Home,
  children: [
  ]
}
