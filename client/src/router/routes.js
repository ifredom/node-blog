/* only page components */
import App from '@/App';

import Basics from './basics'

const routes = [{
    name: 'default',
    path: '',
    redirect: '/index'
  },
  {
    name: '预览',
    path: '/preview',
    component: r => require.ensure([], () => r(require('@/components/preview/preview')), 'preview')
  },
  {
    name: '登录',
    path: '/login',
    component: r => require.ensure([], () => r(require('@/components/login/login')), 'login')
  },
  {
    name: '首页',
    path: '/index',
    redirect: '/index/home',
    component: r => require.ensure([], () => r(require('@/page/index')), 'index'),
    children: [{
        name: '404',
        path: '404',
        component: r => require.ensure([], () => r(require('@/components/err404/404')), '404')
      },
      {
        name: '500',
        path: '500',
        component: r => require.ensure([], () => r(require('@/components/err404/404')), '500')
      },
      {
        path: 'home',
        name: '主页',
        component: r => require.ensure([], () => r(require('@/page/home/home')), 'home'),
        meta: {
          keepAlive: true
        }
      },
      ...Basics
    ],
    meta: {
      requiresAuth: false
    }
  }
];
export default routes