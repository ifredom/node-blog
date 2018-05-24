/* only page components */
import App from '@/App';

import Basics from './basics'

const page404 = r => require.ensure([], () => r(require('@/components/err404/404')), '404');
const Login = r => require.ensure([], () => r(require('@/components/login/login')), 'login');
const Home = r => require.ensure([], () => r(require('@/page/home/home')), 'home');


const routes = [{
    name: '404页面',
    path: '*',
    component: page404
  },
  {
    name: '首页',
    path: '/',
    component: App,
    redirect: '/home',
    children: [{
        name: '登录',
        path: '/login',
        component: Login
      },
      {
        name: '主页',
        path: '/home',
        component: Home,
        meta: {
          keepAlive: true
        }
      },
      ...Basics
    ]
  }
];
export default routes