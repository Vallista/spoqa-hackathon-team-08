<template>
  <button class="button" @click="callback">{{text}}</button>
</template>

<script>
export default {
  name: 'AppTextButton',
  props: {
    text: {
      type: String,
      required: true
    },
    callback: {
      type: Function,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.button {
  cursor: pointer;
  color: rgb(255, 255, 255);
}
</style>
