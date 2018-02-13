<template>
  <div class="login-page">
    <div class="weui-cells weui-cells_form">
      <div class="weui-cell" :class="{'weui-cell_warn':!is_phone}">
        <div class="weui-cell__hd"><label class="weui-label">手机号</label></div>
        <div class="weui-cell__bd">
          <input class="weui-input" type="number" placeholder="请输入手机号" v-model="phone" @focus="phoneClick=true">
        </div>
        <div class="weui-cell__ft">
          <i class="weui-icon-warn"></i>
        </div>
      </div>
      <div class="weui-cell" :class="{'weui-cell_warn':!is_psw}">
        <div class="weui-cell__hd"><label class="weui-label">密码</label></div>
        <div class="weui-cell__bd">
          <input class="weui-input" type="password" placeholder="随意输入密码" v-model="psw" @focus="pswClick=true">
        </div>
        <div class="weui-cell__ft">
          <i class="weui-icon-warn"></i>
        </div>
      </div>
    </div>
    <!-- 登录 -->
    <div class="weui-btn-area">
      <a class="weui-btn weui-btn_primary" href="javascript:" @click="login">登 录</a>
    </div>
    <!-- 页脚 -->
    <div class="weui-msg__extra-area">
      <div class="weui-footer">
        <p class="weui-footer__links">
          <a href="javascript:void(0);" class="weui-footer__link">底部链接文本</a>
        </p>
        <p class="weui-footer__text">李小城(842337932@qq.com) 2018-02-12</p>
      </div>
    </div>
  </div>
</template>

<script>
import common from '../../assets/utils/common'
export default {
  name: 'login',
  mounted () {
    $('body').addClass('bg-grey')// eslint-disable-line
  },
  data () {
    return {
      phone: null,
      phoneClick: false,
      psw: '',
      pswClick: false
    }
  },
  computed: {
    is_phone () {
      if (!this.phoneClick) {
        return true
      }
      return common.is_phone(this.phone)
    },
    is_psw () {
      if (!this.pswClick) {
        return true
      }
      return this.psw ? true : false// eslint-disable-line
    }
  },
  methods: {
    login () {
      if (!(this.phoneClick && this.is_phone)) {
        layer.msg('请输入正确的手机号')// eslint-disable-line
        return false
      }
      if (!(this.pswClick && this.is_psw)) {
        layer.msg('可随意输入密码')// eslint-disable-line
        return false
      }
      this.$router.push('/home')
      this.$store.commit('setToken', 'f1354226df5b3d9505ed246ec8ef234468da99e2')
    }
  },
  destroyed () {
    $('body').removeClass('bg-grey')// eslint-disable-line
  }
}
</script>

<style lang="scss">
@import '../../assets/styles/app';
</style>
