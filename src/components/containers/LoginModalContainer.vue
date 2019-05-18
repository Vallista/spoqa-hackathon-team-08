<template>
  <login-modal :cancel="cancel" :login="login"/>
</template>

<script>
import LoginModal from '../presentationals/organisms/LoginModal'

export default {
  name: 'LoginModalContainer',
  components: {
    LoginModal
  },
  methods: {
    cancel() {
      this.$store.commit('clearModal')
    },

    login() {
      this.$store.commit('clearModal')
      this.$router.push('login')
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
