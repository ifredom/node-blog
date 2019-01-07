export default [
  {
    path: 'basics/article/:page',
    name: '文章详情',
    component: r => require.ensure([], () => r(require('@/page/article/detail')), 'home')
  }

]
