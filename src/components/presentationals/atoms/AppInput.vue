<template>
  <input
    class="input"
    v-bind:value="value"
    v-on:input="updateValue($event.target.value)"
    :type="type"
    :placeholder="placeHolder"
  >
</template>

<script>
export default {
  name: 'AppInput',
  props: {
    value: {
      type: String,
      required: true
    },
    type: {
      type: String,
      required: true
    },
    placeHolder: {
      type: String,
      required: true
    }
  },
  methods: {
    updateValue(value) {
      this.$emit('input', this.type === 'number' ? parseInt(value, 10) : value)
    }
  }
}
</script>

<style lang="scss" scoped>
.input {
}
</style>
