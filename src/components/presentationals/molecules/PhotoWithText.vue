<template>
  <div>
    <p>{{ text }}</p>
    <app-image class="image" :src="src"/>
  </div>
</template>

<script>
import AppImage from '../atoms/AppImage'

export default {
  name: 'PhotoWithText',
  props: {
    src: {
      type: String,
      required: true
    },
    text: {
      type: String,
      default: ''
    }
  },
  components: {
    AppImage
  }
}
</script>

<style lang="scss" scoped>
.image {
  width: 100%;
  height: 300px;
  background-size: contain;
}
</style>
