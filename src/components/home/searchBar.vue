<template>
   <div>
        <div class="search-bar" :class="{'hide-title':!titleVisible}">
            <transition name="title-move">
                <div class="search-bar-title-wrapper" v-show="titleVisible">
                    <div class="title-text-wrapper">
                        <span class="title-text title">书城</span>
                    </div>
                    <div class="title-icon-shake-wrapper" @click="showFlapCard">
                        <span class="icon-shake icon"></span>
                    </div>
                </div>
            </transition>
            <div class="title-icon-back-wrapper" :class="{'hide-title':!titleVisible}" @click="back">
                <span class="icon-back icon"></span>
            </div>
            <div class="search-bar-input-wrapper" :class="{'hide-title':!titleVisible}"> 
                <!-- 站位符  当input向上移动时，让这个站位符的宽度变大（整个外层用flex布局） -->
                <div class="serach-bar-blank" :class="{'hide-title':!titleVisible}"></div>
                <div class="search-bar-input">
                    <span class="icon-search icon"></span>
                    <input type="text" placeholder="计算机科学和软件工程" v-model="searchText"
                    @click="showHotSearch" @keyup.enter.exact="search">
                </div>
            </div>
        </div>
        <hot-search-list v-show="hotSearchVisible" ref="hotSearch"></hot-search-list>
   </div>
</template>

<script>
import { storeHomeMixin } from '../../utils/mixin';

import hotSearchList from './hotSearchList';

export default {
    mixins:[storeHomeMixin],
    components:{
        hotSearchList,
    },
    data() {
        return {
            searchText:"",
            //是否隐藏标题
            titleVisible:true,
            //搜索界面显示隐藏
            hotSearchVisible:false
        }
    },
    watch:{
        offsetY(offsetY) {
            if(offsetY > 0) {
                this.hideTitle();
            } else {
                this.showTitle();
            }
        }
    },
    methods:{
        //隐藏显示搜索页面
        hideHotSearch() {
            this.hotSearchVisible = false;
            //搜索页面和标题是互斥的 所以在这里直接写
            if(this.offsetY > 0 ) {
                //如果此时没有滚动才将标题显示
                this.hideTitle();
            } else {
                this.showTitle();
            }
        },
        showHotSearch() {
            this.hideTitle();
            this.hotSearchVisible = true;
            //每次进入搜索页面都回到顶部 当dom显示后在回到顶部
            //this.nextTick(callback)：当数据或dom发生变化，更新后执行的回调。
            this.$nextTick(()=> {
                 this.$refs.hotSearch.reset();
            })
        },
        //隐藏显示标题
        hideTitle() {
            this.titleVisible = false;
        },
        showTitle() {
            this.titleVisible = true;
        },
        //返回按钮
        back() {
            //如果点击返回时 搜索页面是出现的就隐藏搜索页面 如果搜索页面是隐藏的，就返回到书架
            if (this.hotSearchVisible) {
                 //点击返回让 搜索页隐藏 标题出现
                this.hideHotSearch();
            } else {
                this.$router.push('/store/shelf');
                 this.setTabbarActive('/shelf');
            }
           
        },
        //推荐页面出现
        showFlapCard() {
            this.setFlapCardVisible(true);
            //tabbar隐藏
            this.setTabbarVisible(false);
        },
        //搜索
        search() {
           this.$router.push({
               //通过动态路由把当前搜索关键字传递
               path:'/store/list',
               query:{
                   keyword: this.searchText
               }
           })
        }
    }
  
};
</script>

<style scoped lang="scss">
@import '../../assets/style/global.scss';
.search-bar {
    position: relative;
    width: 100%;
    height: px2rem(94);
    z-index: 150;
    box-shadow: 0 2px 2px 0 rgba(0,0,0,0.1);
    &.hide-title {
       height:px2rem(52);
    }
    .search-bar-title-wrapper {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: px2rem(42);
        .title-text-wrapper {
            width: 100%;
            height: px2rem(42);
            @include center;
        }
        .title-icon-shake-wrapper {
            position: absolute;
            right: px2rem(15);
            top: 0;
            height:px2rem(42);
            @include center;
        }
    }
    .title-icon-back-wrapper {
        z-index: 200;
        position: absolute;
        left: px2rem(15);
        top: 0;
        height:px2rem(42);
         transition: height 0.2s linear;
        @include center;
        &.hide-title {
            height: px2rem(52);
        }
    }
    .search-bar-input-wrapper {
        position: absolute;
        top: px2rem(42);
        left: 0;
        width: 100%;
        height: px2rem(52);
        padding: px2rem(10);
        box-sizing: border-box;
        transition: top 0.2s linear;
        display: flex;
        &.hide-title {
            top: 0;
        }
        .serach-bar-blank {
            flex: 0 0 0;
            width: 0;
            transition: all 0.2s linear;
            &.hide-title {
                flex: 0 0 px2rem(31);
                width: px2rem(31);
            }
        }
        .search-bar-input {
            flex: 1;
            width: 100%;
            background-color: #f4f4f4;
            border-radius: px2rem(20);
            padding: px2rem(5) px2rem(15);
            box-sizing: border-box;
            border: 1px solid #eee;
            @include left;
            .icon-search {
                color: #999;
            }
            input {
                width: 100%;
                height: px2rem(22);
                border:none;
                background-color: transparent;
                margin-left: px2rem(12);
                color: #666;
                font-size: px2rem(12);
                &:focus {
                    outline: none;
                }
                &::-webkit-input-placeholder {
                    color: #ccc;
                }
            }
        }
    }
}
</style>
