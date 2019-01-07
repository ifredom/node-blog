<template>
  <div class="page-login">
    <section class="container">
      <div class="ta-logo">
        <img class="ta-logo-img" src="../../assets/image/logo.jpg" alt="logo">
        <span class="mainName">Ifredom</span>
      </div>
      <div class="crl-input-row">
        <input type="text" id="uname" class="crl-input" v-model="loginRule.username" autocapitalize="off" auto-complete="off" placeholder="手机号/邮箱" />
        <label>username:</label>
      </div>
      <div class="crl-input-row">
        <input type="password" id="pwd" class="crl-input" v-model="loginRule.password" auto-complete="off" placeholder="密码" />
        <label>password:</label>
      </div>
      <div class="crl-input-row">
        <input type="button" class="crl-button" data-event-category="User" data-event-action="signin" @click="signin" tapmode="tap-active" value="Sign in" />
      </div>
      <div class="crl-text-row">
        <div class="text-forget" @click="forgetpassword">Forgot password?</div>
      </div>
      <div class="line"></div>
      <div class="crl-text-row">
        <div class="text-signup" @click="otherLogin">New here?Sign up</div>
      </div>
    </section>

  </div>
</template>

<script>
import { mapActions, mapMutations, mapState } from 'vuex';
import { ApiMockLogin } from '@/api';

export default {
  data() {
    return {
      logining: false,
      loginRule: {
        username: 'ifredom',
        password: '123456'
      }
    };
  },
  computed: {},
  methods: {
    ...mapActions(['set_login_state']),
    signin() {
      let params = {
        apiId: 'IFR.login',
        username: this.loginRule.username,
        password: this.loginRule.password
      };
      ApiMockLogin(params).then(res => {
        if (res.statusCode == 200) {
          this.set_login_state(true);
          // 存储token在storage中
          var opUser = res.data
          localStorage.setItem('token', res.data.token);
          window.sessionStorage.setItem('user', JSON.stringify(opUser));
          this.$store.commit('setOpUser', opUser);
          this.$router.push({ path: '/index' });
        } else {
          alert('登录失败');
        }
      });
    },
    otherLogin() {
      alert('其他登录方式，还未出生哦');
    },
    forgetpassword() {
      alert('忘记密码，等你来画');
    }
  }
};
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
.page-login {
  // background: url('../../assets/image/login/bg.jpg') top left;
  .container {
    width: 200px;
    height: 200px;
    border: 1px solid white;
    margin: 0 auto;
  }
}
</style>
