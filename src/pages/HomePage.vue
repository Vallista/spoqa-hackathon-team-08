<template>
  <div class="page">
    <modal/>
    <todo-list/>
  </div>
</template>

<script>
import TodoList from '../components/containers/TodoListContainer'
import Modal from '../components/containers/ModalContainer'

export default {
  name: 'HomePage',
  components: {
    TodoList,
    Modal
  }
}
</script>

<style lang="scss" scoped>
.page {
  padding: 0;
  margin: 0;
}
</style>