<template>
<transition name="option-slide-up">
    <div class="ebook-popup-list" v-show="fontFamilyVisible">
        <div class="ebook-popup-title">
            <div class="title" @click="hide">
                <span class="icon-down2"></span>
            </div>
            <span class="title-text">设置字体</span>
        </div>
        <div class="ebook-popup-list-wrapper">
            <div class="ebook-popup-item" v-for="(item,index) in fontFamilyList" :key="index" 
            @click="setFontFamily(item.font)">
               <div class="item-text" :class="{selected:isselected(item.font)}">{{ item.font }}</div>
               <div class="item-icon" v-show="isselected(item.font)">
                   <span class="icon-check"></span>
               </div>
            </div>
        </div>
    </div>
</transition>
</template>

<script>
import { eBookMixin } from '../../../utils/mixin'
import { saveFontFamily } from '../../../utils/localStorage'
export default {
   mixins:[eBookMixin],
   data() {
       return {
           //字体
           fontFamilyList:[
               {font: 'Default'},
               {font: 'Cabin'},
               {font: 'Days One'},
               {font: 'Montserrat'},
               {font: 'Tangerine'},
           ]
       }
   },
   methods:{
       hide() {
            this.setFontFamilyVisible(false);
       },
       isselected(item) {
           return item === this.fontFamilyDefault;
       },
       setFontFamily(font) {
           //将默认字体设置成选择的字体
           this.setFontFamilyDefault(font);
           //将默认字体存储到storage中
            saveFontFamily(this.fileName,font);
           //通过currentBook对象渲染字体
           if(font === 'Default') {
               this.currentBook.rendition.themes.font('Times New Roman')
           }else {
                this.currentBook.rendition.themes.font(font)
           }    
       }
   }
};
</script>

<style scoped lang="scss">
@import '../../../assets/style/global.scss';
.ebook-popup-list {
    position: absolute;
    bottom: px2rem(48);
    left:0;
    width: 100%;
    box-shadow: 0 px2rem(-4) px2rem(6) rgba(0,0,0,.1);
    background-color: #fff;
    z-index: 190;
    .ebook-popup-title {
        position: relative;
        padding: px2rem(15);
        box-sizing: border-box;
        border-bottom: px2rem(1) solid #b8b9bb;
        text-align: center;
        @include center;
        .title {
            position: absolute;
            top: 0;
            left: px2rem(15);
            height: 100%;
            font-size: px2rem(16);
            font-weight: 700;
            @include center;
        }
        .title-text {
            font-size: px2rem(14);
            font-weight: 700;
        }
    }
    .ebook-popup-list-wrapper {
        .ebook-popup-item {
            display: flex;
            padding: px2rem(15);
            .item-text {
                font-size: px2rem(10);
                flex: 1;
                font-size: px2rem(16);
                text-align: left;
                &.selected {
                    color: #346cb9;
                    font-weight: 700;
                }
            }
            .item-icon {
                flex: 1;
                font-size: px2rem(14);
                text-align: right;
                font-weight: 700;
                color: #346cb9;
                 
            }
        }
    }
}
</style>
