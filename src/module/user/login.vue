<template>
  <div class="login-page">
    <div class="weui-cells weui-cells_form">
      <div class="weui-cell" :class="{'weui-cell_warn': $v.form.phone.$error}">
        <div class="weui-cell__hd"><label class="weui-label">手机号</label></div>
        <div class="weui-cell__bd">
          <input class="weui-input" type="number" name="phone" placeholder="请输入手机号" v-model.trim="form.phone" @blur="$v.form.phone.$touch()">
        </div>
        <div class="weui-cell__ft">
          <i class="weui-icon-warn"></i>
        </div>
      </div>
      <div class="weui-cell" :class="{'weui-cell_warn': $v.form.psw.$error}">
        <div class="weui-cell__hd"><label class="weui-label">密码</label></div>
        <div class="weui-cell__bd">
          <input class="weui-input" name="psw" type="password" placeholder="随意输入密码" v-model.trim="form.psw" @blur="$v.form.psw.$touch()">
        </div>
        <div class="weui-cell__ft">
          <i class="weui-icon-warn"></i>
        </div>
      </div>
    </div>
    <!-- 登录 -->
    <div class="weui-btn-area">
      <a class="weui-btn weui-btn_primary" href="javascript:" @click="login">登 录</a>
      <a class="weui-btn weui-btn_primary" href="javascript:" @click="register">注 册</a>
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
import {required, minLength} from 'vuelidate/lib/validators';
import common from '@/assets/utils/common';
import {register, login} from './api';
export default {
  name: 'login',
  mounted() {
    $('body').addClass('bg-grey'); // eslint-disable-line
  },
  data() {
    return {
      form: {
        phone: '',
        psw: ''
      }
    };
  },
  validations: {
    form: {
      phone: {
        required,
        minLength: minLength(11),
        isPhone: (val) => common.isPhone(val)
      },
      psw: {
        required,
        minLength: minLength(6)
      }
    }
  },
  methods: {
    login() {
      this.$v.form.$touch();
      if (!this.$v.form.$error) {
        login({
          phone: this.form.phone,
          password: this.form.psw
        }).then((response) => {
          /* eslint-disable */
          if (response.state === 200) {
            this.$store.commit('setToken', response.data.token);
            if (this.$store.state.lang !== response.data.language) {
              this.$i18n.locale = response.data.language;
              this.$store.commit('setLang', response.data.language);
            }
            this.$router.push('/home');
          } else {
            layer.msg(response.msg);
          }
        });
      }
    },
    register() {
      this.$v.form.$touch();
      if (!this.$v.form.$error) {
        register({
          phone: this.form.phone,
          password: this.form.psw
        }).then((response) => {
          /* eslint-disable */
          if (response.state === 200) {
            layer.msg('注册成功');
          } else {
            layer.msg(response.msg);
          }
        });
      }
    }
  },
  destroyed() {
    $('body').removeClass('bg-grey'); // eslint-disable-line
  }
};
</script>

<style lang="scss">
@import '../../assets/styles/app';
</style>
