<template>
  <div class="LoginBox">
    <app-input v-model="id" type="text" place-holder="아이디"/>
    <app-input v-model="password" type="password" place-holder="비밀번호"/>
    <app-button :callback="login" text="로그인" type="submit"/>
  </div>
</template>

<script>
import AppInput from '../atoms/AppInput'
import AppButton from '../atoms/AppButton'

export default {
  name: 'LoginBox',
  props: {
    login: {
      type: Function,
      required: true
    }
  },
  components: {
    AppInput,
    AppButton
  },
  watch: {
    id(value) {
      this.$emit('id', value)
    },
    password(value) {
      this.$emit('pw', value)
    }
  },
  data() {
    return {
      id: '',
      password: ''
    }
  }
}
</script>

<style lang="scss" scoped>
.LoginBox {
  display: flex;
  flex-direction: column;
}
</style>
