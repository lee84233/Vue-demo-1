// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
// router
import router from './router/index';
// Vue
import store from './store/index';
// i18n
import i18n from '@/assets/lang/index';
// 表单验证
import('@/assets/utils/validation');

Vue.config.productionTip = false;

// 路由导航守卫
router.beforeEach((to, from, next) => {
  // 设置页面 title
  if (to.meta.title) {
    document.title = to.meta.title;
  } else {
    document.title = 'my-menu';
  }
  // 设置页面权限
  if (to.meta.requiresAuth === true) {
    if (store.state.token) {
      next();
    } else {
      next({path: '/404'});
    }
  } else {
    next();
  }
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  i18n,
  template: '<App/>',
  components: {App}
});
