export default [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    name: 'login',
    meta: {
      title: '登录',
      requiresAuth: false
    },
    component: (resolve) => require(['@/module/user/login'], resolve)
  }
];
