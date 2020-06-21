<template>
    <div class="shelf-search-wrapper">
        <!--:class="{'search-top':ifInputClick}" 点击了input框后出现移动并且隐藏标题 -->
        <div class="shelf-search" :class="{'search-top':ifInputClick}">
            <div class="search-wrapper">
                <div class="icon-search-wrapper">
                    <span class="icon-search icon"></span>
                </div>
                 <div class="search-input-wrapper">
                    <input type="text" class="search-input" placeholder="搜索" 
                    @click="onSearchClick" @keyup.enter.exact="search" v-model="searchText">
                </div>
                <div class="icon-clear-wrapper" v-show="searchText !== ''" @click="clearSearchText">
                    <span class="icon-close-circle-fill"></span>
                </div>
            </div>
            <div class="cancel-btn-wrapper" v-show="ifInputClick" @click="onCancelClick"> 
                <span class="cancel-rext">取消</span>
            </div>
        </div>
        <transition name="hot-search-move">
        <!-- 点击了input显示tabs -->
        <div class="shelf-search-tab-wrapper" v-show="ifInputClick">
            <div class="shelf-search-tab-item" v-for="item in tabs" :key="item.id" @click="onTabClick(item.id)">
                <span class="shelf-search-tab-text" :class="{'is-selected':selectedTab === item.id}">{{ item.text }}</span>
            </div>
        </div> 
        </transition>
    </div>
</template>

<script>
import { storeShelfMixin } from '../../utils/mixin';
import { getBookShelf,saveBookShelf } from '../../utils/localStorage';
export default {
    mixins:[storeShelfMixin],
    data() {
        return {
            //是否点击了input 点击了就让取消按钮出现
            ifInputClick:false,
            //输入框输入内容
            searchText:'',
            tabs:[
                {
                    id:1,
                    text:'默认'
                },
                {
                    id:2,
                    text:'按进度'
                },
                {
                    id:3,
                    text:'按购买'
                },
            ],
            //表示被选中的tab项
            selectedTab:1
        } 
    },
    methods:{
        //input点击
        onSearchClick() {
            //点击input让取消按钮出现
            this.ifInputClick = true;
            //并且让input上移(class实现)，隐藏最上面的标题
            this.setShelfTitleVisible(false);
        },
        //取消按钮
        onCancelClick() {
            //点击取消按钮让按钮消失
            this.ifInputClick = false;
            //让标题栏在还原
             this.setShelfTitleVisible(true);
        },
        //点击x按钮清除input框里的内容
        clearSearchText() {
            this.searchText = '';
        },
        //点击tab颜色改变
        onTabClick(id) {
            this.selectedTab = id;
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
.shelf-search-wrapper {
    position: fixed;
    z-index: 105;
    width: 100%;
    height: px2rem(94);
    font-size: px2rem(16);
    background-color: #fff;
    box-shadow: 0 px2rem(2) px2rem(2) 0 rgba(0,0,0,.1);
    .shelf-search {
        position: absolute;
        top: px2rem(42);
        left: 0;
        width: 100%;
        height: px2rem(52);
        z-index: 105;
        display: flex;
        transition: top 0.3s linear;
        &.search-top {
            top: 0;
        }
        .search-wrapper {
            flex: 1;
            display: flex;
            margin: px2rem(8) 0 px2rem(8) px2rem(10);
            border:1px solid  #ccc;
            border-radius: px2rem(3);
            .icon-search-wrapper {
                flex: 0 0 px2rem(22);
                @include right;
                .icon-search {
                    font-size: px2rem(12);
                }
            }
            .search-input-wrapper {
                flex: 1;
                padding: 0 px2rem(10);
                box-sizing: border-box;
                @include center;
                .search-input {
                    width: 100%;
                    font-size: px2rem(14);
                    border: none;
                    color: #333;
                    &:focus {
                        outline: none;
                    }
                    &::-webkit-input-placeholder {
                        font-size: px2rem(14);
                        color: #ccc;
                    }
                }
            }
            .icon-clear-wrapper {
                flex: 0 0 px2rem(24);
                @include left;
                .icon-close-circle-fill {
                    font-size: px2rem(14);
                    color: #ccc;
                }
            }
        }
        .cancel-btn-wrapper {
            width: px2rem(50);
            height: px2rem(52);
            line-height:px2rem(52);;
            text-align: center;
            .cancel-rext {
                color:cornflowerblue;
            }
        }
    }
    .shelf-search-tab-wrapper {
        position: relative;
        top: px2rem(52);
        left: 0;
        z-index: 105;
        display: flex;
        width: 100%;
        height: px2rem(42);
        .shelf-search-tab-item {
            flex: 1;
            @include center;
            .shelf-search-tab-text {
                font-size: px2rem(12);
                color: #999;
            }
            .is-selected {
                color: rgb(74, 171, 255);

            }
        }
    }
}
</style>
