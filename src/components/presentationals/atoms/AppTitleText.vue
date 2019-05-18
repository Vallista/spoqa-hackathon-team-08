<template>
  <h1 class="title">{{ title }}</h1>
</template>

<script>
export default {
  name: 'AppTitleText',
  props: {
    title: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.title {
  color: rgb(255, 255, 255);
}
</style>
