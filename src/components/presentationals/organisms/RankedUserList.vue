<template>
  <div class="rank">
    <div class="my-rank">
      <div v-if="isNoLogin">
        <p>여기를 눌러 Login을 해주세요.</p>
      </div>
      <ranked-user-row v-else :rank="myRank.rank" :name="myRank.name" :post-count="myRank.count"/>
    </div>
    <div class="all-rank">
      <div v-if="isEmptyRank">
        <p>랭킹이 없습니다.</p>
      </div>
      <div v-else>
        <ranked-user-row
          v-for="(row, index) in ranks"
          :key="index"
          :rank="row.rank"
          :name="row.name"
          :post-count="row.count"
        />
      </div>
    </div>
  </div>
</template>

<script>
import RankedUserRow from '../molecules/RankedUserRow'

export default {
  name: 'RankedUserList',
  props: {
    ranks: {
      type: Array,
      required: true
    },
    myRank: {
      type: Object,
      required: true
    }
  },
  computed: {
    isNoLogin() {
      return !this.myRank
    },
    isEmptyRank() {
      return this.ranks.length == 0
    }
  },
  components: {
    RankedUserRow
  }
}
</script>

<style lang="scss" scoped>
.rank {
  .my-rank {
  }
  .all-rank {
  }
}
</style>
