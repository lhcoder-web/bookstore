<template>
    <div class="lists">
        <div class="item" @click="toMyUser">
            <img class="icon" src="@/assets/img/tabbar/wode.svg" alt="">
            <div class="text">我的账户 <img src="@/assets/img/profile/lists/toright.svg" class="toRightIcon"> </div>
        </div>

         <div class="item" @click="toMyVip">
            <img src="@/assets/img/profile/lists/myvip.svg" class="icon">
            <div class="text">我的包月VIP <img src="@/assets/img/profile/lists/toright.svg" class="toRightIcon"> </div>
        </div>

         <div class="item" @click="tolist('ticket')">
              <img src="@/assets/img/profile/lists/myticket.svg" class="icon">
            <div class="text">我的卡卷 <img src="@/assets/img/profile/lists/toright.svg" class="toRightIcon"> </div>
        </div>

         <div class="item" @click="tolist('book')">
            <img src="@/assets/img/profile/lists/mybook.svg"  class="icon">
            <div class="text">我的书籍 <img src="@/assets/img/profile/lists/toright.svg" class="toRightIcon"> </div>
        </div>

         <div class="item" @click="tolist('download')">
              <img src="@/assets/img/profile/lists/mydownload.svg" class="icon">
            <div class="text">我的下载 <img src="@/assets/img/profile/lists/toright.svg" class="toRightIcon"> </div>
        </div>

         <div class="item" @click="tolist('tips')">
              <img src="@/assets/img/profile/lists/myremind.svg" class="icon">
            <div class="text">提醒互动 <img src="@/assets/img/profile/lists/toright.svg" class="toRightIcon"> </div>
        </div>
    </div>
</template>

<script>
import { userMixin } from '@/utils/mixin';
export default {
    mixins:[userMixin],
    methods:{
        toMyUser() {
            this.$router.push('myuser');
              //隐藏tabar
            this.setTabbarVisible(false);
        },
        toMyVip() {
            //路由跳转 携带用户名
            this.$router.push('myvip/'+ this.uname);
              //隐藏tabar
            this.setTabbarVisible(false);
        },
        tolist(type) {
            this.$router.push(type);
              //隐藏tabar
            this.setTabbarVisible(false);
        }
    },
    props:{
        uname:String
    },
};
</script>

<style scoped>
.item{
    width: 95%;
    height: 60px;
    display: flex;
    line-height: 60px;
    position: relative;
}
.icon{
   margin: 15px 20px 0 10px;
    width: 28px;
    height: 28px;
}
.text{
    font-size: 14px;
    flex: 1;
    border-bottom:1px solid #ccc;
}
.toRightIcon{
    width: 20px;
    height: 20px;
    position: absolute;
    top: 20px;
    right: -3px;
}
</style>
