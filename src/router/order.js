export default [
  {
    path: '/',
    component: (resolve) => require(['@/module/layout/index'], resolve),
    children: [
      {
        path: 'order',
        name: 'order',
        meta: {
          title: '已点菜单',
          requiresAuth: false
        },
        component: (resolve) => require(['@/module/order/index'], resolve)
      }
    ]
  }
];
