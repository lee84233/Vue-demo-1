<template>
  <div class="login-page">
    <div class="weui-cells weui-cells_form">
      <div class="weui-cell" :class="{'weui-cell_warn': errors.has('phone')}">
        <div class="weui-cell__hd"><label class="weui-label">手机号</label></div>
        <div class="weui-cell__bd">
          <input class="weui-input" type="number" name="phone" placeholder="请输入手机号" v-model="phone" v-validate="{required:true,regex:/^(0|86|17951)?(13[0-9]|15[012356789]|17[678]|18[0-9]|14[57])[0-9]{8}$/}">
        </div>
        <div class="weui-cell__ft">
          <i class="weui-icon-warn"></i>
        </div>
      </div>
      <div class="weui-cell" :class="{'weui-cell_warn': errors.has('psw')}">
        <div class="weui-cell__hd"><label class="weui-label">密码</label></div>
        <div class="weui-cell__bd">
          <input class="weui-input" name="psw" type="password" placeholder="随意输入密码" v-model="psw" v-validate="{required:true}">
        </div>
        <div class="weui-cell__ft">
          <i class="weui-icon-warn"></i>
        </div>
      </div>
    </div>
    <p class="weui-cells__tips" v-show="errors.any()">{{ errors.all()[0] }}</p>
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
import common from '@/assets/utils/common'
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
