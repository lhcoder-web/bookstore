<template>
  <div class="category">
    <div class="title-text-wrapper">分类</div>
    <div class="category-list">
      <div class="category-item-wrapper" v-for="(item, index) in data" :key="index" @click="showBookCategory(item)">
        <div class="category-item">
          <div class="content-wrapper">
            <div class="title title-medium">{{categoryText(item.category)}}</div>
            <div class="num sub-title-tiny">{{item.num + ' '}}本书</div>
          </div>
          <div class="img-wrapper">
            <div class="img-group">
              <img class="img" :src="item.img1">
              <img class="img2" :src="item.img2">
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import { categoryText, getCategoryName } from '@/utils/store'

  export default {
    props: {
      data: Array
    },
    methods: {
      showBookCategory(item) {
        // console.log(item)
        this.$router.push({
          path: '/store/list',
          query: {
            category: getCategoryName(item.category),
            categoryText: this.categoryText(item.category),
            num:item.num
          }
        })
      },
      categoryText(category) {
        
        return categoryText(category, this)
      },
      showBookList() {
        this.$router.push('/store/list')
      }
    }
  }
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
  @import "@/assets/style/global";

  .category {
    .title-text-wrapper {
      width: 100%;
      height: px2rem(48);
      background-color: #fff;
      text-align: center;
      font-size: px2rem(16);
      line-height: px2rem(48);
      box-shadow:0 px2rem(5) px2rem(5) rgba(0,0,0,.15);
      color: #666;
      font-weight: 700;
      position: fixed;
      top: 0;
      z-index: 2000;
    }
    .category-list {
      display: flex;
      flex-flow: row wrap;
      width: 100%;
      margin-top: px2rem(60);
      .category-item-wrapper {
        flex: 0 0 50%;
        width: 50%;
        padding: 0 px2rem(5) px2rem(10) px2rem(5);
        box-sizing: border-box;
        &:nth-child(odd) {
          padding-left: px2rem(10);
        }
        &:nth-child(even) {
          padding-right: px2rem(10);
        }
        .category-item {
          display: flex;
          width: 100%;
          background: #eee;
          .img-wrapper {
            flex: 0 0 50%;
            width: 50%;
            padding: px2rem(20) px2rem(10);
            box-sizing: border-box;
            .img-group {
              position: relative;
              width: 100%;
              height: px2rem(60);
              @include left;
              .img {
                position: absolute;
                left: 0;
                top: 0;
                z-index: 100;
                width: px2rem(45);
                height: px2rem(60);
              }
              .img2 {
                position: absolute;
                left: px2rem(30);
                top: px2rem(7.5);
                z-index: 99;
                width: px2rem(30);
                height: px2rem(45);
              }
            }
          }
          .content-wrapper {
            flex: 0 0 50%;
            width: 50%;
            @include columnCenter;
            .title {
              text-align: center;
            }
            .num {
              text-align: center;
              margin-top: px2rem(5);
            }
          }
        }
      }
    }
  }
</style>
