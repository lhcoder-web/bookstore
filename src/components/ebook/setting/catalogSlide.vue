<template>
<transition name="fade-slide-right">
    <div class="slide-content-wrapper" v-show="menuVisible && settingVisible === 3">
        <div class="content">
            <!-- 当目录加载时显示动画 -->
            <div class="content-page-wrapper" v-if="bookAvailable">
                <div class="content-page">
                    <!-- is属性可以动态切换两个组件 -->
                    <component :is="currentTab === 1 ? content : ebookSlideBookmark"></component>
                </div>
                <div class="content-page-tab" >
                    <div class="content-page-tab-item" :class="{selected:currentTab === 1}" @click="selectTab(1)">目录</div>
                    <div class="content-page-tab-item" :class="{selected:currentTab === 2}" @click="selectTab(2)">书签</div>
                </div>
            </div>
            <div v-else class="content-empty">
                <ebook-loading></ebook-loading>    
            </div> 
            <!-- hideTitleAndMenu方法混入在mixins中 -->
        </div>
        <div class="content-bg" @click="hideTitleAndMenu"></div>
    </div>
</transition>
</template>

<script>
import { eBookMixin } from '../../../utils/mixin';

import content from './settingCatalog/content';
import ebookSlideBookmark from './settingCatalog/ebookSlideBookmark';
import ebookLoading from './settingCatalog/ebookLoading';

export default {
    mixins:[eBookMixin],
    data() {
        return {
            currentTab: 1,
            //通过component标签的 is属性引入的组件 可以直接在data中赋值为引入的组件，不用再components中注册
            content:content,
            ebookSlideBookmark:ebookSlideBookmark,
        }
    },
    methods:{
        selectTab(index) {
            this.currentTab = index;
        }
    },
    components:{
        ebookLoading,
    }
};
</script>

<style scoped lang="scss">
@import '../../../assets/style/global.scss';
.slide-content-wrapper {
     position: absolute;
        top: 0;
        left: 0;
        z-index: 300;
        display: flex;
        width: 100%;
        height: 100%;
    .content {
        flex:  0 0 85%;
        width: 85%;
        height: 100%;
        .content-page-wrapper {
           display: flex;
           width: 100%;
           height: 100%;
           flex-direction: column;
            .content-page {
                flex: 1;
                width: 100%;
                overflow: hidden;
            }
            .content-page-tab {
                flex: 0 0 px2rem(48);
                width: 100%;
                height: px2rem(48);
                display: flex;
                .content-page-tab-item {
                    font-size: px2rem(12);
                    flex: 1;
                    @include center;
                }
            }
        }
        .content-empty {
            width: 100%;
            height: 100%;
            @include center;
        }
    }
    .content-bg {
            flex:  0 0 15%;
            width: 15%;
            height: 100%;
        }
}
</style>
