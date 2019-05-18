<template>
  <app-image class="image" :src="src"/>
</template>

<script>
import AppImage from '../atoms/AppImage'

export default {
  name: 'Photo',
  props: {
    src: {
      type: String
    }
  },
  components: {
    AppImage
  }
}
</script>

<style lang="scss" scoped>
.image {
  width: calc(100% / 3);
  padding-top: calc(100% / 3);
  background-size: cover;
}
</style>
