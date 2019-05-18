<template>
  <label class="todo">
    <input type="checkbox" class="todo-item" name="todo-item" @click="clickTodo">
    <p class="todo-text">{{ text }}</p>
  </label>
</template>

<script>
export default {
  name: 'Todo',
  props: {
    text: {
      type: String,
      required: true
    },
    clickTodo: {
      type: Function,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.todo {
}
</style>

