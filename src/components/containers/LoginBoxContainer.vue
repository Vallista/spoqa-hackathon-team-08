<template>
  <login-box :login="login" @id="inputId" @pw="inputPw"/>
</template>

<script>
import LoginBox from '../presentationals/organisms/LoginBox'

export default {
  name: 'LoginBoxContainer',
  components: {
    LoginBox
  },
  methods: {
    inputId(value) {
      this.editable.id = value
    },

    inputPw(value) {
      this.editable.pw = value
    },

    login() {
      //this.editable.id
      //this.editable.pw
    }
  },
  data() {
    return {
      editable: {
        id: '',
        pw: ''
      }
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
