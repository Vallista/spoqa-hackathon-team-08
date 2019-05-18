<template>
  <button class="button" :type="type" @click="callback">{{ text }}</button>
</template>

<script>
export default {
  name: 'AppButton',
  props: {
    text: {
      type: String,
      required: true
    },
    type: {
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
  background-color: blue;
  padding: 25px;
  cursor: pointer;
}
</style>
