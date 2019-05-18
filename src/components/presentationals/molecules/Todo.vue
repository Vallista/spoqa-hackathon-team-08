<template>
  <div class="todo">
    <label>
      <input type="checkbox" class="todo-item" name="todo-item">
      <p class="todo-text">{{ text }}</p>
    </label>
  </div>
</template>

<script>
export default {
  name: 'Todo',
  props: {
    props
  }
}
</script>

<style lang="scss" scoped>
</style>

