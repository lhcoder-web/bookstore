<template>
<transition name="slide-up">
    <div class="setting-wrapper" v-show="menuVisible && settingVisible === 1">
            <div class="setting-theme-item" v-for="(item,index) in themeslists" :key="index">
                <div class="view" :style="{background:item.style.body.background}" :class="{boxActive:themeDefault === item.name}" @click="setTheme(item.name)"></div>
                <div class="text" :class="{active:themeDefault === item.name}">{{item.name}}</div>
            </div>
    </div>
</transition>
</template>

<script>
import { eBookMixin }  from '../../../utils/mixin';
import { saveThemes } from '../../../utils/localStorage';
export default {
    mixins:[eBookMixin],//themeLists混入在mixins中
 methods:{
     setTheme(themeName) {
        saveThemes(this.fileName,themeName);
        this.setThemeDefault(themeName).then(()=> {
            this.currentBook.rendition.themes.select(this.themeDefault);
       });
       //混入在mixins中的methods中
        //在全局样式生效时现将上一次的样式清除
        this.removeAllCss();
        this.initGlobalStyle(themeName);
     },
 },
};
</script>

<style scoped lang="scss">
@import '../../../assets/style/global.scss';
.setting-wrapper{
    height: px2rem(90);
    width:100%;
    position: absolute;
    background-color: #fff;
    bottom:46px;
    left: 0;
    box-shadow: 0 -8px 8px rgba(0, 0, 0,.15);
    display: flex;
    z-index: 190;
}
.setting-theme-item{
    flex: 1;
    text-align: center;
    display: flex;
    flex-direction: column;
    padding: 2px;
    box-sizing: border-box;
}
.view{
    flex:1;
}
.text{
   line-height: 25px;
    height: 25px;
    font-size: 14px;
    color: #ccc;
}
/* 选中的样式 */
.active{
    color: #333;
}
.boxActive {
    box-shadow: 0 px2rem(4) px2rem(6) rgba(0,0,0,.1);
}
</style>
