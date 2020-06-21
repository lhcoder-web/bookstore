<template>
    <transition name="slide-down">
        <div class="title-wrapper" v-show="menuVisible">
            <div class="left">
                <span class="icon-back icon" @click="back"></span>
            </div>
            <div class="right">
                <div class="icon-wrapper icon">
                    <span class="icon-cart"></span>
                </div>
                <div class="icon-wrapper icon">
                    <span class="icon-person icon"></span>
                </div>
                <div class="icon-wrapper icon">
                    <span class="icon-more"></span>
                </div>
            </div>
        </div>
    </transition>
</template>

<script>
import { eBookMixin } from "../../utils/mixin";

export default {
    //直接使用minxins属性引入eBookMixin，较少重复代码
    mixins:[eBookMixin],
    methods:{
       back() {
           this.$router.go(-1);
       }
   }
};
</script>

<style scoped lang="scss">
@import '../../assets/style/global.scss';
.title-wrapper {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 200;
    width: 100%;
    height: px2rem(48);
    background-color: #fff;
    box-shadow: 0 px2rem(8) px2rem(8) rgba(0,0,0,.15);
    display: flex;
    .left{
        flex:  0 0 px2rem(60);
        @include center;
    }
    .right{
        flex: 1;
        display: flex;
        @include center;
        justify-content: flex-end;
        .icon-wrapper{
            flex: 0 0 px2rem(40);
        }
    }
}
</style>
