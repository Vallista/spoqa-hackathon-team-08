<template>
  <div>
    <profile-container/>
    <photo-grid-container/>
  </div>
</template>

<script>
import ProfileContainer from '../components/containers/ProfileContainer'
import PhotoGridContainer from '../components/containers/PhotoGridContainer'

export default {
  name: 'UserPage',
  components: {
    ProfileContainer,
    PhotoGridContainer
  }
}
</script>

<style lang="scss" scoped>
</style>
