<template>
    <div class="ebook-bookmark" ref="bookmark">
        <div class="ebook-bookmark-text-wrapper">
            <div class="ebook-bookmark-down-wrapper">
                <span class="icon-down" ref="iconDown"></span>
            </div>
            <div class="ebook-bookmark-text">{{ text }}</div>
        </div>
        <div class="ebook-bookmark-icon-wrapper" :style="isFixed ? fixedStyle : {}">
            <bookmark-icon :color="color" width=15 height=35></bookmark-icon>
        </div>
    </div>
</template>

<script>
import { realPx } from '../../../../utils/utils';
import { eBookMixin } from '../../../../utils/mixin';
import { getBookmark,saveBookmark } from '../../../../utils/localStorage';

import bookmarkIcon from '../../../common/bookmarkIcon';
export default {
    mixins:[eBookMixin],
    data() {
        return {
            text:"下拉添加书签",
            color:'#fff',
            //当书签是标记后就让书签固定在页面上
            isFixed:false,
        }
    },
    components:{
        bookmarkIcon,
    },
    computed:{ 
        //第一阶段 到达标签的长度，开始吸顶
        height() {
            return realPx(35)
        },
        //第二阶段 到达临界值 text改变 颜色改变
        threshold() {
            return realPx(55)
        },
        //将书签固定在页面上
        fixedStyle() {
            return {
                position:'fixed',
                top:0,
                right: (window.innerWidth - this.$refs.bookmark.clientWidth) + 'px',
            }
        }
    },
    watch:{
        offsetY(v) {
            //这些情况下不可以下拉添加标签
            if(!this.bookAvailable || this.menuVisible || this.settingVisible >=0) {
                return 
            }
            if(v > this.height && v < this.threshold) {
               this.beforeThreshold(v);
                //进入临界之前
            } else if(v >= this.threshold) {
               this.afterThreshold(v);
               //进入临界之后
            } else if(v > 0 && v < this.height) {
                //在还未到达书签高度时 做还原操作
                this.beforeHeight();
            } else if(v === 0) {
                 //当松手为0时
                this.restore()
            }
        },
        isBookmark(v) {
             this.isFixed = v;
            if(v) {
                this.color = 'blue';
            } else {
                this.color = '#fff';
            }
            
        }
    },
    methods:{
        //添加书签
        addBookmark() {
            this.bookmark = getBookmark(this.fileName);
            if(!this.bookmark) {
                this.bookmark = [];
            }
            //通过cfi的拼接来完成书签的跳转
            const currentLocation = this.currentBook.rendition.currentLocation();
            const cfibase = currentLocation.start.cfi.replace(/!.*/,'');
            const cfistart = currentLocation.start.cfi.replace(/.*!/,'').replace(/\)$/,'');
            const cfiend = currentLocation.end.cfi.replace(/.*!/,'').replace(/\)$/,'');
            const cfirange = `${cfibase}!,${cfistart},${cfiend})`;
            this.currentBook.getRange(cfirange).then(range=> {
                // range就是此次书签文章的内容 /\s\s/g去掉空格 
                const text = range.toString().replace("/\s\s/g","");
                // console.log(text) //text就是所有的内容
                this.bookmark.push({
                    cfi:currentLocation.start.cfi,
                    text:text
                })
                //保存到localStorage中
                saveBookmark(this.fileName,this.bookmark);
                //保存到vuex中
                this.setBookmarkText(this.bookmark);
            })
        },
        removeBookmark() {
            const currentLocation = this.currentBook.rendition.currentLocation();
            const cfi = currentLocation.start.cfi;
            this.bookmark = getBookmark(this.fileName);
            if(this.bookmark) {
                //把当前标签删除并存储到localStorage中
                const bookmark = this.bookmark.filter(item=> item.cfi !== cfi);
                saveBookmark(this.fileName,bookmark);
                this.setBookmarkText(bookmark);
                //将当前页设置为非标签
                this.setIsBookmark(false);
            }
        },
        restore() {
             //当松手为0时 全部归位  跟200ms的过渡动画保持一致
            setTimeout(()=> {
                this.$refs.bookmark.style.top = -this.height + 'px';
                this.$refs.iconDown.style.transform = 'rotate(0deg)';
            },200)
            //判断是不是 fixed 如果是就将 当前页标记为书签页
            if(this.isFixed) {
                this.setIsBookmark(true);
                this.addBookmark();
            } else {
                this.setIsBookmark(false);
                this.removeBookmark();
            }
        },
         //在还未到达书签高度时 做还原操作
        beforeHeight() {
            //先判断当前页面是不是书签页 
            if(this.isBookmark) {
                //是书签页就把text改成删除
                this.text = '松手删除书签';
                this.color = '#00f';
                this.isFixed = true;
            } else {
                //不是书签页就把text改成添加
                this.text = '下拉添加书签';
                this.color = '#fff';
                this.isFixed = false;
            }
        },
        //进入临界之前
        beforeThreshold(v) {
            this.$refs.bookmark.style.top = -v + 'px';
            //还原操作 避免出错
            this.beforeHeight();
            //向上的图标在旋转回去
            if(this.$refs.iconDown.style.transform === 'rotate(180deg)') {
                this.$refs.iconDown.style.transform = '';
            }
        }, 
        //进入临界之后
        afterThreshold(v) {
            this.$refs.bookmark.style.top = -v + 'px';
            if(this.isBookmark) {
                this.text = '松手删除书签';
                this.color = '#fff';
                this.isFixed = false;
            } else {
                this.text = '松手添加书签';
                this.color = '#00f';
                this.isFixed = true;
            }
            //向下的图标旋转180deg rotate(180deg)
            if(this.$refs.iconDown.style.transform === '') {
                this.$refs.iconDown.style.transform = 'rotate(180deg)';
            }
        },
       
    }
};
</script>

<style scoped lang="scss">
@import '../../../../assets/style/global.scss';
.ebook-bookmark {
    position: absolute;
    top: px2rem(-35);
    left: 0;
    z-index: 200;
    width: 100%;
    height: px2rem(35);
    .ebook-bookmark-text-wrapper {
        position: absolute;
        right: px2rem(45);
        bottom: 0;
        display: flex;
        .ebook-bookmark-down-wrapper{
            font-size:px2rem(14);
            color: #fff;
            transition: all 0.2s linear;
            @include center;
        }
        .ebook-bookmark-text {
            font-size: px2rem(14);
            color: #fff;
        }

    }
    .ebook-bookmark-icon-wrapper {
        position: absolute;
        right: 0;
        bottom: 0;
        margin-right: px2rem(15);
    }
}

</style>
