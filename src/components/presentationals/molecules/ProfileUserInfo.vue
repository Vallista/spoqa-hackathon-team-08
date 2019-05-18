<template>
  <div class="user-info">
    <p class="name">{{ name }}</p>
    <p class="desc">{{ description }}</p>
  </div>
</template>

<script>
export default {
  name: 'ProfileUserInfo',
  props: {
    name: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.user-info {
  display: flex;
  flex-direction: column;

  .name {
    font-size: 15px;
  }

  .desc {
    font-size: 15px;
  }
}
</style>
