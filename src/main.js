import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vant from 'vant'
// 加载全局样式
import './styles/index.less'
// 加载vant组件库样式
import 'vant/lib/index.css'
// 自动设置rem基准值(html字体大小)
import 'amfe-flexible'
Vue.use(Vant)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
