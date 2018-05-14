<template>
  <div class="person-index-page">
    <!-- 头像和个人信息 -->
    <div class="weui-cells">
      <div class="weui-cell">
        <div class="weui-cell__hd" style="position: relative;margin-right: 10px;">
          <img src="../../assets/images/head.jpg" style="width: 50px;display: block">
          <template v-if="FoodNum">
            <span class="weui-badge" style="position: absolute;top: -.4em;right: -.4em;">{{FoodNum}}</span>
          </template>
        </div>
        <div class="weui-cell__bd">
          <p>李小城</p>
          <p style="font-size: 13px;color: #888888;">背上行囊就是过客，何时放下包袱找回故乡。</p>
        </div>
      </div>
    </div>
    <!-- 每日菜单 -->
    <div class="weui-cells">
      <div class="weui-cell weui-cell_access">
        <div class="weui-cell__hd"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuCAMAAABgZ9sFAAAAVFBMVEXx8fHMzMzr6+vn5+fv7+/t7e3d3d2+vr7W1tbHx8eysrKdnZ3p6enk5OTR0dG7u7u3t7ejo6PY2Njh4eHf39/T09PExMSvr6+goKCqqqqnp6e4uLgcLY/OAAAAnklEQVRIx+3RSRLDIAxE0QYhAbGZPNu5/z0zrXHiqiz5W72FqhqtVuuXAl3iOV7iPV/iSsAqZa9BS7YOmMXnNNX4TWGxRMn3R6SxRNgy0bzXOW8EBO8SAClsPdB3psqlvG+Lw7ONXg/pTld52BjgSSkA3PV2OOemjIDcZQWgVvONw60q7sIpR38EnHPSMDQ4MjDjLPozhAkGrVbr/z0ANjAF4AcbXmYAAAAASUVORK5CYII=" alt="" style="width:20px;margin-right:5px;display:block"></div>
        <div class="weui-cell__bd">
          <p>每日菜单</p>
        </div>
        <div class="weui-cell__ft"></div>
      </div>
    </div>
    <!-- 语言 -->
    <div class="weui-cells">
      <div class="weui-cell weui-cell_access" @click="layerLanguage(true)">
        <div class="weui-cell__hd">
          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuCAMAAABgZ9sFAAAAVFBMVEXx8fHMzMzr6+vn5+fv7+/t7e3d3d2+vr7W1tbHx8eysrKdnZ3p6enk5OTR0dG7u7u3t7ejo6PY2Njh4eHf39/T09PExMSvr6+goKCqqqqnp6e4uLgcLY/OAAAAnklEQVRIx+3RSRLDIAxE0QYhAbGZPNu5/z0zrXHiqiz5W72FqhqtVuuXAl3iOV7iPV/iSsAqZa9BS7YOmMXnNNX4TWGxRMn3R6SxRNgy0bzXOW8EBO8SAClsPdB3psqlvG+Lw7ONXg/pTld52BjgSSkA3PV2OOemjIDcZQWgVvONw60q7sIpR38EnHPSMDQ4MjDjLPozhAkGrVbr/z0ANjAF4AcbXmYAAAAASUVORK5CYII=" alt="" style="width:20px;margin-right:5px;display:block"></div>
        <div class="weui-cell__bd">
          <span style="vertical-align: middle">多语言</span>
          <span class="weui-badge" style="margin-left: 5px;">New</span>
        </div>
        <div class="weui-cell__ft">仅tabbar实现</div>
      </div>
      <div class="weui-cell weui-cell_access">
        <div class="weui-cell__hd"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuCAMAAABgZ9sFAAAAVFBMVEXx8fHMzMzr6+vn5+fv7+/t7e3d3d2+vr7W1tbHx8eysrKdnZ3p6enk5OTR0dG7u7u3t7ejo6PY2Njh4eHf39/T09PExMSvr6+goKCqqqqnp6e4uLgcLY/OAAAAnklEQVRIx+3RSRLDIAxE0QYhAbGZPNu5/z0zrXHiqiz5W72FqhqtVuuXAl3iOV7iPV/iSsAqZa9BS7YOmMXnNNX4TWGxRMn3R6SxRNgy0bzXOW8EBO8SAClsPdB3psqlvG+Lw7ONXg/pTld52BjgSSkA3PV2OOemjIDcZQWgVvONw60q7sIpR38EnHPSMDQ4MjDjLPozhAkGrVbr/z0ANjAF4AcbXmYAAAAASUVORK5CYII=" alt="" style="width:20px;margin-right:5px;display:block"></div>
        <div class="weui-cell__bd">
          <p>帮助和反馈</p>
        </div>
        <div class="weui-cell__ft"></div>
      </div>
    </div>
    <div class="p-hor-lg m-top">
      <a href="javascript:;" class="weui-btn weui-btn_warn" @click="logout">退出登录</a>
    </div>
    <!-- 弹窗 -->
    <div class="weui-skin_android" v-show="layerLanguageShow">
      <div class="weui-mask" @click="layerLanguage(false)"></div>
      <div class="weui-actionsheet">
        <div class="weui-actionsheet__menu">
          <div class="weui-actionsheet__cell" v-for="lang in langs" :class="{'text-success':i18n===lang.val}" :key="lang.id" @click="switchLanguage(lang.val)">{{lang.text}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import api from './api';
import {mapGetters} from 'vuex';
export default {
  name: 'index',
  data() {
    return {
      langs: [
        {text: '中文', val: 'zh', id: 0},
        {text: '英文', val: 'en', id: 1}
      ],
      layerLanguageShow: false
    };
  },
  computed: {
    i18n() {
      return this.$i18n.locale;
    },
    ...mapGetters(['FoodNum'])
  },
  methods: {
    // 语言弹窗
    layerLanguage(state) {
      this.layerLanguageShow = state;
    },
    // 切换语言
    switchLanguage(val) {
      if (this.i18n !== val) {
        api
          .switchLanguage({
            lang: val
          })
          .then((response) => {
            // console.log(response)
            if (response.state === 200) {
              this.$store.commit('setLang', val);
              this.$i18n.locale = val;
              layer.msg('更改成功');
            } else {
              layer.msg(response.msg);
            }
          });
      }
      this.layerLanguage(false);
    },
    // 退出登录
    logout() {
      this.$store.commit('setToken', '');
      this.$router.push({path: '/'});
    }
  }
};
</script>

<style lang="scss">
.person-index-page {
  background-color: #f8f8f8;
}
</style>
