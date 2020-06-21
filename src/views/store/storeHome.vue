<template>
    <div class="store-home">
       <search-bar></search-bar>
       <flap-card :data='random'></flap-card>
       <Scroll :top='scrollTop'  @onScroll='onScroll' ref="scroll">
          <div class="banner-wrapper">
              <!-- <img :src="banner" class="banner-img"> -->
              <swiper></swiper>
          </div>
            <guess-your-like :data='guessYouLike' class="mt20"></guess-your-like>
            <recommend :data='recommend' class="mt20"></recommend>
            <featured :data='featured' class="mt20"></featured>
            <div v-for="(item,index) in categoryList" :key="index" class="m-b-50">
                <categoryBook :data='item'></categoryBook>
            </div>
           <!-- <category :data='categories' class="mt20"></category> -->
       </Scroll>
    </div>
</template>

<script>
import swiper from '../../components/content/swiperitem';
import searchBar from '../../components/home/searchBar';
import flapCard from '../../components/home/flapCard';
import guessYourLike from '../../components/home/GuessYouLike';
import Recommend from '../../components/home/Recommend';
import featured from '../../components/home/Featured';
import categoryBook from '../../components/home/CategoryBook';
// import category from '../../components/home/Category';

import Scroll from '../../components/common/Scroll';

import { home } from '../../network/index';
import { storeHomeMixin } from '../../utils/mixin';
export default {
    mixins:[storeHomeMixin],
    components:{
      swiper,
      searchBar,
      Scroll,
      flapCard,
      guessYourLike,
      Recommend,
      featured,
      categoryBook,
    //   category,
    },
    methods:{
      //滚动组件发射的方法
      onScroll(offsetY) {
          this.setOffsetY(offsetY);
          if(offsetY > 0) {
              this.scrollTop = 52
          } else {
              this.scrollTop = 94
          }
          this.$refs.scroll.refresh();
      }
    },
    data() {
        return {
            scrollTop:94,
        //首页的所有请求的数据
            //推荐一本书的数据
            random:null,
            //首页图片
            // banner:'',
            //猜你喜欢
            guessYouLike:null,
            //热门推荐
            recommend:null,
            //精选
            featured:null,
            //列表分类
            categoryList:null,
            //分类 分给了vip页面
            // categories:null,
        }
    },
    mounted() {
        home().then(res=> {
           if (res && res.status === 200) {
               //随机一本书传递给 推荐页面
               this.random = res.data.random[Math.floor(Math.random() * res.data.random.length)]
            //首页的所有请求的数据
                //首页图片
                // this.banner = res.data.banner;
                this.guessYouLike = res.data.guessYouLike;
                this.recommend = res.data.recommend;
                this.featured = res.data.featured;
                this.categoryList = res.data.categoryList;
           }
        })
    }
};
</script>

<style scoped lang="scss">
@import '../../assets/style/global.scss';
.store-home {
    width: 100%;
    height: 100%;
    .banner-wrapper {
        width: 100%;
        height: px2rem(200);
        .banner-img {
            width: 100%;
            height: px2rem(200);
        }
    }
    .mt20 {
        margin-top: px2rem(20);
    }
    .m-b-50:last-child {
        margin-bottom: px2rem(60);
    }
}

</style>
