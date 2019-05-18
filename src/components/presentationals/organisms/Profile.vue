<template>
  <div class="profile">
    <profile-image :src="userPicture"/>
    <profile-user-info :name="userName" :description="userDesc"/>
  </div>
</template>

<script>
import ProfileImage from '../molecules/ProfilePicture'
import ProfileUserInfo from '../molecules/ProfileUserInfo'

export default {
  name: 'Profile',
  props: {
    user: {
      type: Object,
      required: true
    }
  },
  computed: {
    userPicture() {
      if (!this.user.picture) return ''
      return this.user.picture
    },

    userName() {
      if (!this.user.name) return '로그인 하셔야 합니다.'
      return this.user.name
    },

    userDesc() {
      if (!this.user.description) return '로그인을 하셔야 합니다.'
      return this.user.description
    }
  },
  components: {
    ProfileImage,
    ProfileUserInfo
  }
}
</script>

<style lang="scss" scoped>
.profile {
  display: flex;
}
</style>
