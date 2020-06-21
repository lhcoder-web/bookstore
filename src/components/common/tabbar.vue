<template>
    <div class="tabbar" v-if="tabbarVisible">
        <div :class="{colred:tabbarActive === '/shelf'}" class="tabbar-item-wrapper" @click="tojump('/shelf')">
            <img v-if="tabbarActive !== '/shelf'" src="../../assets/img/tabbar/shujia.svg" class="icon wh25">
            <img v-else src="../../assets/img/tabbar/active/shujia-active.svg" class="icon wh25">
            <span>书架</span>
        </div>
        <div id="/bookcity" :class="{colred:tabbarActive === '/home'}" class="tabbar-item-wrapper"  @click="tojump('/home')">
            <img  v-if="tabbarActive !== '/home'" src="../../assets/img/tabbar/booklib.svg" class="icon">
            <img  v-else src="../../assets/img/tabbar/active/booklib-active.svg" class="icon"> 
            <span>书城</span>
        </div>
        <div id="/vip" :class="{colred:tabbarActive === '/vip'}" class="tabbar-item-wrapper"  @click="tojump('/vip')">
            <img v-if="tabbarActive !=='/vip'" src="../../assets/img/fenlei.svg" class="icon">
            <img v-else src="../../assets/img/fenlei-active.svg" class="icon">
            <span>分类</span>
        </div>
        <div id="/profile" :class="{colred:tabbarActive === '/profile'}" class="tabbar-item-wrapper"  @click="tojump('/profile')">
            <img  v-if="tabbarActive!=='/profile'" src="../../assets/img/tabbar/wode.svg" class="icon">
            <img  v-else src="../../assets/img/tabbar/active/wode-active.svg" class="icon">
           <span>我的</span>
        </div>
    </div>
</template>

<script>
import { userMixin } from '../../utils/mixin';
export default {
    mixins:[userMixin],
    methods:{
        //路由跳转
        tojump(tabbar) {
            this.setTabbarActive(tabbar);
            this.$router.push('/store'+tabbar);
        }
    }
};
</script>

<style scoped lang="scss">
@import '../../assets/style/global.scss';
.tabbar {
    position: absolute;
    left: 0;
    bottom:0;
    z-index: 2000;
    background-color: #eee;
    width: 100%;
    height: px2rem(48);
    display: flex;
    .tabbar-item-wrapper {
        width: 100%;
        height: px2rem(48);
        flex: 1;
        font-size: px2rem(14);
        display: flex;
        flex-direction: column;
        span {
            margin-top: px2rem(5);
        }
        @include center;
        .icon{
            width: px2rme(20);
            height: px2rem(20);
        }
        .wh25 {
             width: px2rme(25);
            height: px2rem(25);
        }
    }
    .colred {
        color: #f00;
    }
}
</style>
