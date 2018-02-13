/**
 * 国际化
 * Author: Lee
 * Created: 2018-02-10
 */
import Vue from 'vue'
import VueI18n from 'vue-i18n'
import store from '@/store/index'
// 语言包
import zh from './zh' // 中文
import en from './en' // 英文

Vue.use(VueI18n)

export default new VueI18n({
  locale: store.state.lang,
  // this.$i18n.localse = 'en' // 通过切换locale的值实现语言切换
  messages: {
    zh,
    en
  }
})
