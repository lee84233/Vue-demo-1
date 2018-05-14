export default [
  {
    path: '/person',
    component: (resolve) => require(['@/module/layout/index'], resolve),
    children: [
      {
        path: '/',
        redirect: 'index'
      },
      {
        path: 'index',
        name: 'personIndex',
        meta: {
          title: '个人中心',
          requiresAuth: true
        },
        component: (resolve) => require(['@/module/person/index'], resolve)
      }
    ]
  }
];
