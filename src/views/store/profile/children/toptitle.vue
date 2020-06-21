<template>
    <div class="header">
        <div v-if="islogin">
            <div class="pic">
            <img src="@/assets/img/profile/login.svg" alt="">
            </div>
            <span class="txt" @click="tologin">点击登录</span>
        </div>
        <div v-else>
            <div class="pic">
            <img src="@/assets/img/profile/mypic.jpg" alt="">
            </div>
            <span class="txt" @click="tologin">{{uname}}</span>
            <div class="pic-bottom">
                <div class="item">
                    <p>0</p>
                    <p>阅饼</p>
                </div>
                 <div class="item">
                    <p>0</p>
                    <p>代金券</p>
                </div>
                 <div class="item">
                    <p>0</p>
                    <p>花币</p>
                </div>
            </div>
        </div>
    </div>
        
</template>

<script>
import { userMixin } from '../../../../utils/mixin';
export default {
    mixins:[userMixin],
    props:{
        uname:String,
    },
    methods: {
        tologin() {
            //将tabbar隐藏
            this.setTabbarVisible(false);
            this.$router.push('/login');
        },
    },
    computed:{
        islogin() {
           return this.uname === null?true:false   
        }
    },
};
</script>

<style scoped>
.header{
    width: 100%;
    height: 130px;
    background-color: #eee;
    border-radius: 10px;
}
.pic{
    display: inline-block;
    width: 46px;
    height: 45px;
    border-radius: 50%;
    background-color: #fff;
    position: relative;
    top: 15px;
    left: 20px;
}
.pic img{
    width: 32px;
    position: absolute;
    top: 5px;
    left: 7px;
}
.txt{
    margin-left: 40px;
    font-weight: 600;
    font-size: 20px;
}
.pic-bottom{
    margin-top: 45px;
    display: flex;
    justify-content:space-around;
    text-align: center;
    font-size: 14px;
}
</style>
