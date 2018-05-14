import Vue from 'vue';
import Router from 'vue-router';

// 用户相关页面
import user from './user';
// home
import home from './home';
// 已点菜单页面
import order from './order';
// 我的
import person from './person';
// 错误页面
import error from './error';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    ...user,
    ...home,
    ...order,
    ...person,
    // 404,500 错误页面
    ...error
  ]
});
