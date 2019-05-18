<template>
  <div v-if="isNotEmpty">
    <component :is="modalList[nowModal]"/>
  </div>
</template>

<script>
import LoginModal from './LoginModalContainer'

export default {
  name: 'ModalContainer',
  computed: {
    nowModal() {
      return this.$store.getters.nowModal
    },
    isNotEmpty() {
      return this.$store.getters.nowModal !== 'none'
    }
  },
  data() {
    return {
      modalList: {
        login: LoginModal
      }
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
