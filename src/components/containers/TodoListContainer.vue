<template>
  <todo-list :list="todoList" :click-todo="clickTodo"/>
</template>

<script>
import TodoList from '../presentationals/organisms/TodoList'

export default {
  name: 'TodoListContainer',
  components: {
    TodoList
  },
  computed: {
    isLogin() {
      return this.$store.user === null
    }
  },
  methods: {
    clickTodo(e) {
      if (!this.isLogin) {
        this.$store.commit('changeModal', 'login')
        e.preventDefault()
      }
    }
  },
  data() {
    return {
      todoList: ['광화문에서 이순신 동상 앞에서 풍선껌 불기', '광화문에서 집가고싶다 소리 지르기']
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
