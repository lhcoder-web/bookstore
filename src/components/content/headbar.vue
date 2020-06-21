<template>
    <div class="login">
        <div class="icon-wrapper" @click="back"><span class="icon-back"></span></div>
        <div class="title">{{title}}</div>
        <div class=""></div>
    </div>
</template>

<script>
import { mapActions } from 'vuex';
export default {
    props:{
        title:String
    },
    methods:{
        ...mapActions(['setTabbarVisible']),
        back() {
            this.$router.go(-1);
            if (this.title !== 'sign in') {
              //tabbar显示
                this.setTabbarVisible(true);
            }
        }
    }
};
</script>

<style scoped lang="scss">
@import '../../assets/style/global.scss';
.login {
    width: 100%;
    height: px2rem(40);
    background-color: #fff;
    display: flex;
    font-size: px2rem(26);
    box-shadow: px2rem(0) px2rem(5) px2rem(5) rgba(0,0,0,.15);
    div {
        flex: 1;
    }
    .icon-wrapper {
        height: px2rem(40);
        line-height: px2rem(40);
    }
    .title {
        font-size: px2rem(16);
        font-weight: 700;
        @include center;
    }
}
</style>
