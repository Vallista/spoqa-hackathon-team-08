<template>
  <div class="app-image" :style="{ backgroundImage: `url(${src})`}"></div>
</template>

<script>
export default {
  name: 'AppImage',
  props: {
    src: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.app-image {
  background-repeat: no-repeat;
  background-position: center;
}
</style>
