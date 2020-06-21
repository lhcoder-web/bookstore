<template>
    <div class="ebook-slide-contents">
       <div class="slide-contents-search-wrapper">
           <div class="slid-contents-search-input-wrapper">
               <div class="slide-contents-search-icon">
                   <span class="icon-search"></span>
               </div>
               <input type="text" class="slid-contents-search-input" placeholder="搜索全书内容" 
                v-model="searchText" @click="showCancel" @keyup.enter="search">
           </div>
            <div class="slide-contents-search-cancel" @click="hideCancel" v-show="cancleVisible">取消</div>
       </div>
       <div class="slide-contents-book-wrapper" v-show="!cancleVisible">
           <div class="slide-contents-book-img-wrapper">
               <img :src="cover" class="slide-contents-book-img">
           </div>
           <div class="slide-contents-book-info-wrapper">
               <div class="slide-contents-book-title">{{ metadata ? metadata.title : "" }}</div>
                <div class="slide-contents-book-author">{{ metadata ? metadata.creator : ""}}</div>
           </div>
           <div class="slide-contents-book-progress-wrapper">
                <div class="slide-contents-book-progress">
                    <span class="progress">{{ progress + '%' }}</span>
                    <span class="progress-text">已读</span>
                </div>
                <div class="slide-contens-book-time">已读{{ getReadTimeText() }}分钟</div>
           </div>
       </div>
       <Scroll :top="156" :bottom="48" v-show="!cancleVisible" class="scroll">
            <div class="slide-contents-item" v-for="(item,index) in navigation" :key="index">
                <span class="slide-contents-item-label" 
                :style="contentItemStyle(item)"
                :class="{selected:index === section}"
                @click="displayNavigation(item.href)">{{item.label}}</span>
                <span class="slide-contents-item-page"></span>
            </div>
       </Scroll>
       <Scroll class="slide-search-list" :top="66" :bottom="48" v-show="cancleVisible">
           <div class="slide-search-item" v-for="(item,index) in searchList" :key="index" @click="displaySearchItem(item.cfi)" v-html="item.excerpt"></div>
       </Scroll>
       
    </div>
</template>

<script>
import { eBookMixin } from '../../../../utils/mixin';
//导入滑动组件类似于(better-scroll) 需要制定需要进度条滑动位置top.bottom
import Scroll from '../../../common/Scroll';
export default {
    mixins:[eBookMixin],
    data() {
        return {
            //取消按钮是否隐藏显示
            cancleVisible:false,
            //搜索的文字
            searchText:"",
            //搜索的结果
            searchList:null,
        }
    },
    methods:{
        displayNavigation(href) {
            this.display(href,()=> {
                 //目录跳转后隐藏目录栏
                this.hideTitleAndMenu();
            })
        },
        hideCancel() {
            this.cancleVisible = false;
            this.searchText = '';
            this.searchList = null;
        },
        showCancel() {
             this.cancleVisible = true;
        },
        //二级目录缩进
        contentItemStyle(item) {
            return {
                marginLeft : item.level * 15 + 'px',
            }
        },
        //输入关键字进行全文搜索方法
        doSearch(q) {
            return Promise.all(
            this.currentBook.spine.spineItems.map(
                item=> item.load(this.currentBook.load.bind(this.currentBook))
                .then(item.find.bind(item,q)).finally(item.unload.bind(item))))
            .then(results=> Promise.resolve([].concat.apply([],results)))
        },
        //输入关键字全文搜索
        search() {
        //    console.log(this.searchText.length)
            //非空判断
            if(this.searchText && this.searchText.length > 0) {
                this.doSearch(this.searchText).then(res=> {
                    this.searchList = res;
                    //关键字高亮显示
                    this.searchList.map(item => {
                        item.excerpt = item.excerpt.replace(this.searchText,`<span class="content-search-text">${this.searchText}</span>`)
                        return item;
                    })
                })
            }
 
        },
        //点击全文搜索的内容 跳转内容
        displaySearchItem(cfi) {
            this.display(cfi,()=> {
                //隐藏菜单栏
                this.hideTitleAndMenu();
                //高亮显示关键字
                this.currentBook.rendition.annotations.highlight(cfi);
            })
        }
    },
    components:{
        Scroll,
    },    
    
};
</script>

<style scoped lang="scss">
@import '../../../../assets/style/global.scss';
.ebook-slide-contents {
    font-size: 0;
    width: 100%;
    .slide-contents-search-wrapper {
        display: flex;
        width: 100%;
        height: px2rem(36);
        margin: px2rem(20) 0 px2rem(10) 0;
        padding: 0 px2rem(15);
        box-sizing: border-box;
        .slid-contents-search-input-wrapper {
            flex: 1;
            border:1px solid rgba($color: #000000, $alpha: 0.1);
            @include center;
            .slide-contents-search-icon {
                flex: 0 0 px2rem(28);
                font-size: px2rem(12);
                @include center;
            }
            .slid-contents-search-input {
               flex: 1;
               width: 100%;
               height: px2rem(32);
               font-size: px2rem(14);
               background-color: transparent;
               border:none;
               &:focus {
                   outline: none;
               }
            }
        }
    }
    .slide-contents-book-wrapper {
        display: flex;
        width: 100%;
        height: px2rem(90);
        padding: px2rem(10) px2rem(15) px2rem(20) px2rem(15);
        box-sizing: border-box;
        .slide-contents-book-img-wrapper {
            flex:0 0 px2rem(45);
            .slide-contents-book-img {
                width: px2rem(45);
                height: px2rem(60);
            }
        }
        .slide-contents-book-info-wrapper {
            flex: 1;
            padding: 0 px2rem(10);
            box-sizing: border-box;
            .slide-contents-book-title {
                font-size: px2rem(14);
                width: px2rem(153);
                line-height: px2rem(22);
                display: -webkit-box;
                -webkit-box-orient: vertical;
                -webkit-line-clamp: 2;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
                word-break: break-all;
            }
            .slide-contents-book-author {
                font-size: px2rem(12);
                width: px2rem(153);
                margin-top: px2rem(5);
                @include ellipsis;
            }
        }
        .slide-contents-book-progress-wrapper {
            flex: 0 0 px2rem(70);
            .slide-contents-book-progress {
                .progress {
                    font-size: px2rem(14);
                }
                .progress-text {
                    font-size: px2rem(12);
                }
            }
            .slide-contens-book-time {
                font-size: px2rem(12);
                margin-top: px2rem(5);
            }
        }
    }
    .slide-contents-search-cancel {
         flex: 0 0 px2rem(50);
                font-size: px2rem(14);
                @include right;
    }
    .scroll {
        padding: 0 px2rem(15);
        box-sizing: border-box;
        .slide-contents-item {
            display: flex;
            padding: px2rem(20) 0;
            box-sizing: border-box;
        .slide-contents-item-label{
            font-size: px2rem(14);
            line-height: px2rem(16);
            flex: 1;
            @include ellipsis;
        }
        }
    }
    .slide-search-list {
        width: 100%;
        padding: 0 px2rem(15);
        box-sizing: border-box;
        .slide-search-item {
            font-size: px2rem(14);
            line-height: px2rem(16);
            padding: px2rem(20) 0;
            box-sizing: border-box;
        }
    }
    
}
</style>
