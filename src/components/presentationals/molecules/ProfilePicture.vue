<template>
  <img class="image" :src="src">
</template>

<script>
export default {
  name: 'ProfilePicture',
  props: {
    src: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.image {
  width: 60px;
  height: 60px;
  background-color: purple;
  border-radius: 60px;
}
</style>
