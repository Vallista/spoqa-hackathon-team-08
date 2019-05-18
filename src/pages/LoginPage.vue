<template>
  <div class="login">
    <app-title-text title="로그인"/>
    <login-box/>
    <div class="signup">
      <span class="signup-text">아직 계정이 없으신가요?</span>
      <app-text-button text="회원가입" :callback="signup"/>
    </div>
  </div>
</template>

<script>
import AppTitleText from '../components/presentationals/atoms/AppTitleText'
import AppTextButton from '../components/presentationals/atoms/AppTextButton'
import LoginBox from '../components/containers/LoginBoxContainer'

export default {
  name: 'LoginPage',
  components: {
    LoginBox,
    AppTitleText,
    AppTextButton
  },
  methods: {
    signup() {
      this.$router.push('signup')
    }
  }
}
</script>

<style lang="scss" scoped>
.login {
  height: 100vh;
  background-color: rgb(76, 128, 241);

  .signup {
    display: flex;

    .signup-text {
      color: rgba(128, 128, 128, 0.8);
    }
  }
}
</style>
