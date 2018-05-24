import VueRouter from 'vue-router'
import routes from './routes'

import {
  getUserInfo
} from '../assets/util/ta'

// 返回上一级页面的浏览位置
const scrollBehavior = (to, from, savedPosition) => {
  if (savedPosition) {
    return savedPosition;
  } else {
    return {
      x: 0,
      y: 0
    };
  }
};

const router = new VueRouter({
  base: '/',
  mode: 'hash',
  routes,
  scrollBehavior
});


//  判断是否需要登录权限 以及是否登录
router.beforeEach((to, from, next) => {
  let user = getUserInfo()
  if (to.matched.some(res => res.meta.requireAuth)) {
    // 判断是否需要登录权限
    if (user) {
      // 判断是否登录
      next();
    } else {
      alert('登录状态过期,请重新登录!!')
      // 没登录则跳转到登录界面
      next({
        path: '/home',
        query: {
          redirect: to.fullPath
        }
      });
    }
  } else {
    next();
  }
});

export default router