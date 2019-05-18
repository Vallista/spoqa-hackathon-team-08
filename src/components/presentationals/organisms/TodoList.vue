<template>
  <ul class="todo-list">
    <li v-for="(value, index) in list" class="todo-list-item" :key="index">
      <todo :text="value" :click-todo="clickTodo"/>
    </li>
  </ul>
</template>

<script>
import Todo from '../molecules/Todo'

export default {
  name: 'TodoList',
  components: {
    Todo
  },
  props: {
    list: {
      type: Array,
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
.todo-list {
  padding: 0;
  margin: 0;
}
</style>
