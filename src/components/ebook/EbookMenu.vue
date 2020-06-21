<template>
    <div>
        <transition name="slide-up">
            <div class="menu-wrapper" v-show="menuVisible">
                <div class="icon-wrapper">
                    <span class="icon-menu icon" @click="showSettings(3)"></span>
                </div>
                <div class="icon-wrapper" @click="showSettings(2)">
                    <span class="icon-progress icon"></span>
                </div>
                <div class="icon-wrapper" @click="showSettings(1)">
                    <span class="icon-bright icon"></span>
                </div>
                <div class="icon-wrapper">
                    <span class="icon-A icon" @click="showSettings(0)"></span>
                </div>
            </div>
         </transition>
        <setting-font></setting-font>
        <setting-font-family-option></setting-font-family-option>
        <setting-theme></setting-theme>
        <setting-progress></setting-progress>
        <catalog-slide></catalog-slide>
    </div>
</template>

<script>
import { eBookMixin } from "../../utils/mixin";

import settingFont from './setting/settingFont';
import settingFontFamilyOption from './setting/settingFontFamilyOption';
import settingTheme from './setting/settingTheme';
import settingProgress from './setting/settingProgress';
import catalogSlide from './setting/catalogSlide';
export default {
   //直接使用minxins属性混入eBookMixin，较少重复代码
    mixins:[eBookMixin],
    components:{
        settingFont,
        settingFontFamilyOption,
        settingTheme,
        settingProgress,
        catalogSlide,
    },
    methods:{
        showSettings(key) {
            this.setFontFamilyVisible(false);
            this.setSettingVisible(key);
        }
    }
};
</script>

<style scoped lang='scss'>
@import '../../assets/style/global.scss';
.menu-wrapper {
     position: absolute;
        bottom: 0;
        left: 0;
        z-index: 200;
        width: 100%;
        height: px2rem(48);
        background-color: #fff;
        box-shadow: 0 px2rem(-8) px2rem(8) rgba(0,0,0,.15);
        display: flex;
    .icon-wrapper {
        flex: 1;
        text-align: center;
    }
}
</style>
