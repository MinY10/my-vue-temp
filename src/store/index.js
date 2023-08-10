import { createStore } from 'vuex'

const modules = {}
const files = require.context('./', true, /index\.js$/);
files.keys().filter(key => {
  if (key === './index.js') return false;
  return true
}).map(key => {  
  // 获取名字
  const modulePath = key.replace('./modules/', '');
  const moduleName = modulePath.replace('/index.js', '');
  const module = require(`${key}`);

  modules[`${moduleName}`] = module.default;
})

const store = createStore({
  state: {

  },
  mutations: {

  },
  actions: {

  },
  getters: {

  },
  modules: modules
})

export default store
