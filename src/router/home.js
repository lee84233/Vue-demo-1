export default [
  {
    path: '/home',
    component: (resolve) => require(['@/module/layout/index'], resolve),
    children: [
      {
        path: '/',
        redirect: 'index'
      },
      {
        path: 'index',
        component: (resolve) => require(['@/module/foodType/index'], resolve),
        children: [
          {
            path: '/',
            redirect: 'chao'
          },
          {
            path: 'chao',
            name: 'chaocai',
            meta: {
              title: '炒菜系列',
              requiresAuth: false
            },
            component: (resolve) => require(['@/module/foodType/chao'], resolve)
          },
          {
            path: 'dun',
            name: 'duncai',
            meta: {
              title: '炖菜系列',
              requiresAuth: false
            },
            component: (resolve) => require(['@/module/foodType/dun'], resolve)
          },
          {
            path: 'tang',
            name: 'tangcai',
            meta: {
              title: '汤菜系列',
              requiresAuth: false
            },
            component: (resolve) => require(['@/module/foodType/tang'], resolve)
          }
        ]
      }
    ]
  }
];
