/*
 * 国际化
 * @Author: Bruce.Lee
 * @Date: 2018-03-02 22:24:47
 * @Last Modified by: Bruce.Lee
 * @Last Modified time: 2018-05-14 15:15:29
 */

import Vue from 'vue';
import VueI18n from 'vue-i18n';
import store from '@/store/index';
// 语言包
import zh from './zh'; // 中文
import en from './en'; // 英文

Vue.use(VueI18n);

export default new VueI18n({
  // this.$i18n.localse = 'en' // 通过切换locale的值实现语言切换
  locale: store.state.lang,
  messages: {
    zh,
    en
  }
});
