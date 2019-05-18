<template>
  <profile :user="userInfo"/>
</template>

<script>
import Profile from '../presentationals/organisms/Profile'

export default {
  name: 'ProfileContainer',
  components: {
    Profile
  },
  data() {
    return {
      userInfo: {}
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
