import 'es6-promise/auto'; // 兼容库

import Vue from 'vue';
import VueRouter from 'vue-router';
import Vuex from 'vuex';
import App from '@/App';
import store from '@/vuex';
import router from '@/router';

// 工具
import FastClick from 'fastclick';
import VueLazyload from 'vue-lazyload';
import '@/assets/style/iconfont/iconfont.css';
import '@/components/installAllCompoent.js';
// import 'vue-material/dist/vue-material.min.css';


Vue.use(Vuex);
Vue.use(VueLazyload);

Vue.config.productionTip = true;

// 取消点击300ms延迟
FastClick.attach(document.body);

/* eslint-disable no-new */
new Vue({
  router,
  store,
  render (createElement) {
    return createElement(App);
  }
}).$mount('#app');
