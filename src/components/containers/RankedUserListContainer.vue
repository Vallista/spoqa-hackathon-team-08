<template>
  <ranked-user-list :ranks="ranks" :my-rank="myRank"/>
</template>

<script>
import RankedUserList from '../presentationals/organisms/RankedUserList'
export default {
  name: 'RankedUserListContainer',
  components: {
    RankedUserList
  },
  data() {
    return {
      myRank: {
        rank: 2,
        name: '양',
        count: 5
      },
      ranks: [
        {
          rank: 1,
          name: '영',
          count: 10
        },
        {
          rank: 2,
          name: '양',
          count: 5
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
