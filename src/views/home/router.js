// 懒加载路由
const Home = () => import('./index.vue')
export default {
  path: '/home', 
  name: 'home',
  component: Home,
  children: [
  ]
}
