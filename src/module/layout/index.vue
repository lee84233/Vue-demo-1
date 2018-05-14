<template>
  <div class="page">
    <div class="page__bd" style="height: 100%;">
      <div class="weui-tab">
        <!-- main content -->
        <keep-alive>
          <router-view class="weui-tab__panel"></router-view>
        </keep-alive>
        <!-- tabbar -->
        <div class="weui-tabbar">
          <router-link class="weui-tabbar__item" v-for="(tab,index) in tabLists" :to="tab.url" active-class="weui-bar__item_on" :key="tab.id">
            <span style="display: inline-block;position: relative;">
              <img class="weui-tabbar__icon" :src="tab.img" alt="tab.text">
              <!-- <template v-if="tab.number">
                <span class="weui-badge" style="position: absolute;top: -2px;right: -13px;">{{tab.number}}</span>
              </template> -->
              <template v-if="index===1 && FoodNum>0">
                <span class="weui-badge" style="position: absolute;top: -2px;right: -13px;">{{FoodNum}}</span>
              </template>
            </span>
            <p class="weui-tabbar__label">{{$t(tab.text)}}</p>
          </router-link>
            <!-- <a href="javascript:;" class="weui-tabbar__item weui-bar__item_on">
                <img src="" alt="" class="weui-tabbar__icon">
                <p class="weui-tabbar__label">已点</p>
            </a>
            <a href="javascript:;" class="weui-tabbar__item">
                <span style="display: inline-block;position: relative;">
                    <img src="" alt="" class="weui-tabbar__icon">
                    <span class="weui-badge weui-badge_dot" style="position: absolute;top: 0;right: -6px;"></span>
                </span>
                <p class="weui-tabbar__label">发现</p>
            </a>
            <a href="javascript:;" class="weui-tabbar__item">
                <img src="" alt="" class="weui-tabbar__icon">
                <p class="weui-tabbar__label">我</p>
            </a> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex';

import homeImg from '@/assets/images/icon_tabbar.png';
export default {
  name: 'index',
  data() {
    return {
      tabLists: [
        {
          text: 'menu',
          img: homeImg,
          url: '/home',
          id: 0
        },
        {
          text: 'order',
          img: homeImg,
          url: '/order',
          number: 0,
          id: 1
        },
        {
          text: 'person',
          img: homeImg,
          url: '/person',
          id: 2
        }
      ]
    };
  },
  computed: {
    ...mapGetters(['FoodNum'])
  }
};
</script>

<style lang="scss">
@import '../../assets/styles/app';
@import '../../assets/styles/module';
</style>
