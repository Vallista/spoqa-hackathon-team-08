<template>
  <div class="ranked-user-row">
    <div class="rank">
      <span>{{ rank }}</span>
    </div>
    <div class="name">
      <span>{{ name }}</span>
    </div>
    <div class="count">
      <span>{{ postCount }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RankedUserRow',
  props: {
    rank: {
      type: Number,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    postCount: {
      type: Number,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.ranked-user-row {
  display: flex;

  .rank {
  }

  .name {
  }

  .count {
  }
}
</style>
