<template>
  <div>
    <button class="button" @click="changeGrid"></button>
    <button class="button" @click="changeList"></button>

    <div class="grid" v-if="isGrid">
      <div class="column">
        <photo v-for="(post, index) in list" :key="index" :src="post.src"/>
      </div>
    </div>
    <div v-else>
      <div class="list" v-for="(post, index) in list" :key="index">
        <photo-with-text :src="post.src" :text="post.text"/>
      </div>
    </div>
  </div>
</template>

<script>
import Photo from '../molecules/Photo'
import PhotoWithText from '../molecules/PhotoWithText'

export default {
  name: 'PhotoGrid',
  props: {
    list: {
      type: Array,
      required: true
    }
  },
  components: {
    Photo,
    PhotoWithText
  },
  computed: {
    isGrid() {
      return this.mode === 'grid'
    },

    isList() {
      return this.mode === 'list'
    }
  },
  methods: {
    changeGrid() {
      this.mode = 'grid'
    },

    changeList() {
      this.mode = 'list'
    }
  },
  data() {
    return {
      mode: 'grid' // grid | list
    }
  }
}
</script>

<style lang="scss" scoped>
.button {
  width: 60px;
  height: 60px;
  background-color: red;
}

.grid {
  max-width: 960px;
  margin: 0 auto;

  .column {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-content: stretch;
    padding: 0;
    max-width: 980px;
  }
}

.list {
}
</style>
