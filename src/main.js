import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
//引入Antd组件库
import Antd from "ant-design-vue"
//引入Antd组件库CSS文件
import "ant-design-vue/dist/antd.css"
//Vue使用Antd组件库
Vue.use(Antd)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
