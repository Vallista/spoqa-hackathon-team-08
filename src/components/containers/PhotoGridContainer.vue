<template>
  <photo-grid :list="list"/>
</template>

<script>
import PhotoGrid from '../presentationals/organisms/PhotoGrid'

export default {
  name: 'PhotoGridContainer',
  components: {
    PhotoGrid
  },
  data() {
    return {
      list: [
        {
          src:
            'https://file2.nocutnews.co.kr/newsroom/image/2018/01/15/20180115230912401661_0_600_400.jpg',
          text: 'hihihi'
        },
        {
          src: 'https://pbs.twimg.com/media/Dm8IvKNU0AA-BAE.jpg',
          text: '123123'
        },
        {
          src:
            'http://image.xportsnews.com/contents/images/upload/article/2018/0605/1528172997377012.jpg',
          text: '141414'
        },
        {
          src:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLgkM25GZyDeqAvKNS35_ejnhskbuBxFOb0w2J3U1KrK1vemld',
          text: '14141414'
        },
        {
          src: 'https://pbs.twimg.com/media/Dm8IvKNU0AA-BAE.jpg',
          text: '123123'
        },
        {
          src:
            'http://image.xportsnews.com/contents/images/upload/article/2018/0605/1528172997377012.jpg',
          text: '141414'
        },
        {
          src:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLgkM25GZyDeqAvKNS35_ejnhskbuBxFOb0w2J3U1KrK1vemld',
          text: '14141414'
        },
        {
          src: 'https://pbs.twimg.com/media/Dm8IvKNU0AA-BAE.jpg',
          text: '123123'
        },
        {
          src:
            'http://image.xportsnews.com/contents/images/upload/article/2018/0605/1528172997377012.jpg',
          text: '141414'
        },
        {
          src:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLgkM25GZyDeqAvKNS35_ejnhskbuBxFOb0w2J3U1KrK1vemld',
          text: '14141414'
        },
        {
          src: 'https://pbs.twimg.com/media/Dm8IvKNU0AA-BAE.jpg',
          text: '123123'
        },
        {
          src:
            'http://image.xportsnews.com/contents/images/upload/article/2018/0605/1528172997377012.jpg',
          text: '141414'
        },
        {
          src:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLgkM25GZyDeqAvKNS35_ejnhskbuBxFOb0w2J3U1KrK1vemld',
          text: '14141414'
        },
        {
          src: 'https://pbs.twimg.com/media/Dm8IvKNU0AA-BAE.jpg',
          text: '123123'
        },
        {
          src:
            'http://image.xportsnews.com/contents/images/upload/article/2018/0605/1528172997377012.jpg',
          text: '141414'
        },
        {
          src:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLgkM25GZyDeqAvKNS35_ejnhskbuBxFOb0w2J3U1KrK1vemld',
          text: '14141414'
        },
        {
          src: 'https://pbs.twimg.com/media/Dm8IvKNU0AA-BAE.jpg',
          text: '123123'
        },
        {
          src:
            'http://image.xportsnews.com/contents/images/upload/article/2018/0605/1528172997377012.jpg',
          text: '141414'
        },
        {
          src:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLgkM25GZyDeqAvKNS35_ejnhskbuBxFOb0w2J3U1KrK1vemld',
          text: '14141414'
        },
        {
          src: 'https://pbs.twimg.com/media/Dm8IvKNU0AA-BAE.jpg',
          text: '123123'
        },
        {
          src:
            'http://image.xportsnews.com/contents/images/upload/article/2018/0605/1528172997377012.jpg',
          text: '141414'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
