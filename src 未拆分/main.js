// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// 引入vuex
import store from './store/index'

// 引入remjs文件
import "./assets/js/rem"

// 引入reset.css文件
import './assets/css/reset.css'
// 引入全局组件
import './common/index'
// 引入全局过滤器
import './filters/index'




/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  store
})
