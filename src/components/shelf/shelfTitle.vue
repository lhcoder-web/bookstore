<template>
<transition name="fade">
    <div class="shelf-title" v-show="shelfTitleVisible">
        <div class="shelf-title-text-wrapper">
            <span class="shelf-title-text">书架</span>
            <span class="shelf-title-sub-text">{{ isEditMode? selectedText : '' }}</span>
        </div>
        <div class="shelf-title-btn-wrapper shelf-title-left" @click="clearCache">
            <span class="shelf-title-btn-text">清除缓存</span>
        </div>
         <div class="shelf-title-btn-wrapper shelf-title-right" @click="onEditClick">
            <span class="shelf-title-btn-text">{{ isEditMode? '取消' : '编辑' }}</span>
        </div>
    </div>
</transition>
</template>

<script>
import { clearLocalForage } from '../../utils/localForage';
import { clearLocalStorage } from '../../utils/localStorage';

import { storeShelfMixin } from '../../utils/mixin';
export default {
    mixins:[storeShelfMixin],
    computed:{
        selectedText() {
            //如果没有选中图书的时候显示选择书籍  选中后显示选中的个数
            if (this.shelfSelected && this.shelfSelected.length > 0) {
                return `选择了${this.shelfSelected.length}本书`
            } else {
                return '选择书籍'
            }
            
        }
    },
    methods:{
        onEditClick() {
            //首先切换当前的编辑模式
            this.setIsEditMode(!this.isEditMode);
            //让书本不在被选中
            this.clearSelected();
            //编辑模式让tabbar隐藏
            if (this.isEditMode) {
                this.setTabbarVisible(false);
            } else {
                this.setTabbarVisible(true);
            }
        },
        //清除缓存
        clearCache() {
            //清空浏览器存储的数据
            clearLocalForage();
            clearLocalStorage();
            //清空书架数据
            this.setShelfList([]);
            this.setShelfSelected([]);
            //重新再获取数据getShelfList方法在mixins中
            this.getShelfList();
            this.toast({text:'清除缓存成功'}).show();
        },
    }
};
</script>

<style scoped lang='scss'>
@import '../../assets/style/global.scss';
.shelf-title {
    position: relative;
    width: 100%;
    height: px2rem(42);
    background-color: #fff;
    z-index: 200;
    .shelf-title-text-wrapper {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height:px2rem(42);
        @include columnCenter;
        .shelf-title-text {
            font-size: px2rem(16);
            line-height: px2rem(20);
            font-weight: 700;
            color: #333;
        }
        .shelf-title-sub-text {
            font-size: px2rem(10);
            color: #333;
        }
    }
    .shelf-title-btn-wrapper {
        position: absolute;
        top: 0;
        height: 100%;
        box-sizing: border-box;
        .shelf-title-btn-text {
            font-size: px2rem(14);
            color: #666;
        }
        &.shelf-title-left {
            left: 0;
            padding-left: px2rem(15);
        }
        &.shelf-title-right {
            right: 0;
            padding-right: px2rem(15);
        }
    }
}
</style>
