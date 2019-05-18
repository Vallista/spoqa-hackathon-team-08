<template>
  <modal-frame>
    <p>asdasd</p>
    <div class="buttons">
      <button class="button" @click="cancel">취소</button>
      <button class="button" @click="login">로그인</button>
    </div>
  </modal-frame>
</template>

<script>
import ModalFrame from '../molecules/ModalFrame'

export default {
  name: 'LoginModal',
  props: {
    cancel: {
      type: Function,
      required: true
    },
    login: {
      type: Function,
      required: true
    }
  },
  components: {
    ModalFrame
  }
}
</script>

<style lang="scss" scoped>
.buttons {
  display: flex;

  .button {
    background-color: blue;
    padding: 25px;
    color: white;
  }
}
</style>
