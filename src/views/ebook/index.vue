<template>
    <div class="ebook" ref="ebook">
          <ebook-header></ebook-header>
        <ebook-reader></ebook-reader>
        <ebook-title></ebook-title>
        <ebook-menu></ebook-menu>
        <ebook-footer></ebook-footer>
      <ebook-bookmark></ebook-bookmark>
    </div>
</template>

<script>
//阅读器架构页面
import { getReadTime, saveReadTime } from '../../utils/localStorage';
import { eBookMixin } from '../../utils/mixin';

import ebookReader from '../../components/ebook/EbookReader';
import ebookTitle from '../../components/ebook/EbookTiele';
import ebookMenu from '../../components/ebook/EbookMenu';
import ebookBookmark from '../../components/ebook/setting/settingCatalog/ebookBookmark';
import ebookHeader from '../../components/ebook/EbookHeader';
import ebookFooter from '../../components/ebook/EbookFooter';
export default {
    mixins:[eBookMixin],
    components: {
        ebookReader,
        ebookTitle,
        ebookMenu,
        ebookBookmark,
        ebookHeader,
        ebookFooter,
    },
    methods:{
        //开始计算阅读时间
        startLoopReadTime() {
            let readTime = getReadTime(this.fileName);
            if(!readTime) {
                readTime = 0;
            }
            this.task = setInterval(()=> {
                readTime++;
                //每过30s 保存一下时间
                if(readTime % 30 === 0) {
                    saveReadTime(this.fileName,readTime);
                }                
            },1000)
        },
        //下拉
        move(v) {
            this.$refs.ebook.style.top = v + 'px';
        },
        //还原下拉
        restore() {
            this.$refs.ebook.style.top = 0;
            this.$refs.ebook.style.transition = 'all 0.2s linear';
            //当0.2s后直接把transition清空 不然会造成第二次下拉卡顿的情况
            setTimeout(()=> {
                this.$refs.ebook.style.transition = "";
            },200)
        }
    },
    watch:{
        offsetY(v) {    
            //当没有出现菜单栏时才允许下拉
            if(!this.menuVisible && this.bookAvailable)
            if(v > 0) {
                this.move(v)
            } else if(v === 0) {
                this.restore();
            }
        }
    },
    mounted() {
        this.startLoopReadTime();
    },
    beforeDestroy() {
        if(this.task) {
            clearInterval(this.task);
        }
    }
};
</script>

<style scoped lang="scss">
@import '../../assets/style/global.scss';
.ebook {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}
</style>
