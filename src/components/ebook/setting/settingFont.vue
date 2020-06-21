<template>
 <transition name="slide-up">
        <!-- 设置字体项 -->
        <div class="setting-wrapper" v-show="menuVisible && settingVisible === 0">
            <div class="setting-font-size">
                <div class="leftA">A</div>
                <!-- 吧字体大小发送给read组件 让read组件操作图书字体 -->
                <div class="select" v-for="(item,index) in fontlists" :key="index"
                @click="setFontSize(item)">
                <!-- 一条横线一个圆圈一条横向 -->
                    <div class="line"></div>
                    <div class="point-wrapper">
                        <div v-show="fontdefault === item" class="point">
                            <div class="small-point"></div>
                        </div>
                    </div>
                    <div class="line"></div>
                </div>
                <div class="rightA">A</div>
            </div>
            <div class="setting-font-family" @click="showFontFamilyOption">
                <div class="setting-font-family-text-wrapper">
                    <span class="set-fontFamily">{{ fontFamilyDefault }}</span>
                </div>
                <div class="icon-wrapper">
                    <span class="icon-forward"></span>
                </div>
            </div>
        </div>
 </transition>
</template>

<script>
import { eBookMixin } from '../../../utils/mixin'
import { saveFontSize } from '../../../utils/localStorage'
export default {
    mixins:[eBookMixin],
    data() {
        return {
            fontlists:["12px","14px","16px","18px","20px","22px","24px",],
        }
    },
    methods:{
        setFontSize(item) {
            //默认字号该更为设置字号
            this.setFontdefault(item);
            //通过vuex中的currentBook设置字号
            this.currentBook.rendition.themes.fontSize(item);
            saveFontSize(this.fileName,item);
        },
        //是否显示字体设置弹出的面板
        showFontFamilyOption() {
            this.setFontFamilyVisible(true);
            this.setSettingVisible(-1)
        }
    }
};
</script>

<style scoped lang="scss">
@import '../../../assets/style/global.scss';
/* 设置字体 */
.setting-wrapper{
    z-index: 190;
    height: px2rem(90);
    width:100%;
    position: absolute;
    background-color: #fff;
    bottom:46px;
    left: 0;
    box-shadow: 0 -8px 8px rgba(0, 0, 0,.15);
    display: flex;
    flex-direction: column;
}
.setting-font-size{
    flex: 2;
    display: flex;
    height: 60px;
    line-height: 60px;
    text-align: center;
}
.leftA{
    font-size: 12px;
    width: 40px;
}
.rightA{
    font-size: 24px;
    width: 40px;
}
.select{
    flex: 1;
    display: flex;
    align-items: center;
}
/* 去掉最左边和最右边的两个线 */
.line{
    flex: 1;
    height: 0;
    border-top: 1px solid #ccc;
}
.point-wrapper{
    width: 0;
    height: 7px;
    border-left:1px solid #ccc;
    position: relative;
}
.point{
    position: absolute;
    top: -7px;
    left:-10px;
    width: 20px;
    height: 20px;
    background-color: #fff;
    border:2px solid rgba(0, 0,0,0.3);
    border-radius: 50%;
}
.small-point{
    position: absolute;
    top: 6px;
    left:7px;
    width: 7px;
    height: 7px;
    background-color: #000;
     border-radius: 50%;
}
.setting-font-family {
    flex: 1;
    font-size: px2rem(14);
    @include center;
    text-align: center;
    justify-content: center;
}
.setting-font-family-text-wrapper {
    @include center;
}
.icon-wrapper {
    @include center;
}

</style>