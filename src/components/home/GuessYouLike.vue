<template>
  <div class="guess-you-like">
    <title-view label="猜你喜欢" btn="换一批" @onClick="change"></title-view>
    <div class="guess-you-like-list">
      <div class="guess-you-like-item" v-for="(item, index) in showData" :key="index" @click="showBookDetail(item)">
        <div class="img-wrapper">
          <img class="img" :src="item.cover">
        </div>
        <div class="content-wrapper">
          <div class="title title-big" ref="title">{{item.title}}</div>
          <div class="author sub-title" ref="author">{{item.author}}</div>
          <div class="result third-title" ref="result">{{resultText(item)}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import TitleView from './Title'
  import { realPx } from '@/utils/utils'
  import { storeHomeMixin } from '../../utils/mixin'

  export default {
    mixins: [storeHomeMixin],
    components: {
      TitleView
    },
    props: {
      data: Array
    },
    watch: {
      data(v) {
        this.total = v.length / 3
      }
    },
    computed: {
      width() {
        return window.innerWidth - realPx(20) - realPx(60) + 'px'
      },
      showData() {
        if (this.data) {
          return [
            this.data[this.index],
            this.data[this.index + this.total],
            this.data[this.index + this.total * 2]
          ]
        } else {
          return []
        }
      }
    },
    data() {
      return {
        index: 0,
        total: 0,
      }
    },
    methods: {
      change() {
        if (this.index + 1 >= this.total) {
          this.index = 0
        } else {
          this.index++
        }
      },
      resultText(item) {
        if (item && item.type && item.result) {
          switch (item.type) {
            case 1:
              return  `与${item.result}同作者`
            case 2:
              return `对${item.result}感兴趣的人也在读`
            case 3:
              return `阅读${item.result}的人，97%都在读`
          }
        }
      },
      resize() {
        this.$nextTick(() => {
          this.$refs.title.forEach(item => {
            item.style.width = this.width
          })
          this.$refs.author.forEach(item => {
            item.style.width = this.width
          })
          this.$refs.result.forEach(item => {
            item.style.width = this.width
          })
        })
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import '../../assets/style/global.scss';

  .guess-you-like {
    .guess-you-like-list {
      width: 100%;
      padding: 0 px2rem(10);
      box-sizing: border-box;
      .guess-you-like-item {
        display: flex;
        margin-top: px2rem(15);
        &:first-child {
          margin-top: px2rem(5);
        }
        .img-wrapper {
          flex: 0 0 20%;
          padding: px2rem(10) px2rem(10) px2rem(10) 0;
          box-sizing: border-box;
          .img {
            width: 100%;
          }
        }
        .content-wrapper {
          flex: 1;
          padding: px2rem(10) 0;
          box-sizing: border-box;
          .author {
            margin-top: px2rem(15);
          }
          .result {
            margin-top: px2rem(5);
          }
        }
      }
    }
  }
</style>
