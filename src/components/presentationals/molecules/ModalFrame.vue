<template>
  <div class="container">
    <div class="layer">
      <div class="modal">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppModal'
}
</script>

<style lang="scss" scoped>
.container {
  position: relative;
  padding: 0;
  margin: 0;
  height: 0;
  width: 0;

  .layer {
    position: absolute;
    width: 100vw;
    left: 0;
    top: 0;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.6);
    z-index: 10;
    display: flex;
    justify-content: center;
    align-items: center;

    .modal {
      position: absolute;
      z-index: 15;

      background-color: rgb(255, 255, 255);
      border-radius: 25px;
      padding: 25px;
    }
  }
}
</style>
