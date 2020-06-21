<template>
    <div class="signIn">
        <headbar title="sign in"></headbar>
        <h1>注册</h1>
        <p>Welcome to join us</p>
        <div class="touxiang">
            <img src="@/assets/img/profile/mypic.jpg" alt="">
        </div>
        <div class="toinput">
            <div class="box">
                 <label for="txt">
                  <img src="@/assets/img/login/youxiang.svg" alt="">
                  <input type="text" id="txt" placeholder="请输入手机号/邮箱" v-model="txt" @blur="tipstxt(txt)">
                  <div v-if="isshow1" class="dis">
                        <img src="@/assets/img/login/success.svg" v-if="istruetxt" class="success">
                        <img src="../../assets/img/login/error.svg" v-else class="err">
                        <div v-show="!istruetxt" class="tipsword">{{txtword}}</div>
                  </div>
              </label>
            </div>
            <label for="uname">
                 <img src="@/assets/img/tabbar/wode.svg" alt="">
                 <input type="text" id="uname" placeholder="请输入您的昵称" v-model="uname">
            </label>
            <div class="box">
                <label for="psd">
                  <img src="@/assets/img/login/mima.svg" alt="">
                  <input type="password" id="psd" placeholder="请输入您的密码" v-model="psd" @blur="tipspsd(psd)">
                  <div v-show="isshow2" class="dis">
                        <img src="@/assets/img/login/success.svg" v-if="istruepsd" class="success">
                        <img src="../../assets/img/login/error.svg" v-else class="err">
                        <div v-show="!istruepsd" class="tipsword">{{psdword}}</div>
                  </div>
              </label>
            </div>  
        </div>
        <div class="btns">
            <button class="loginbtn" @click="savemessage">保存</button>
           <p class="forget">登录前请保存</p>
           <button class="signbtn" @click="tologin" :disabled="able">登录</button>
        </div>
    </div>
</template>

<script>
import headbar from './headbar';

import { saveUser } from '../../utils/localStorage';
export default {
    components: {
        headbar,
    },
    methods:{
        tipstxt(value) {
            this.isshow1 = true;
            const telStr = /^[1](([3][0-9])|([4][5-9])|([5][0-3,5-9])|([6][5,6])|([7][0-8])|([8][0-9])|([9][1,8,9]))[0-9]{8}$/;
            if(value === null){
                this.txtword = "输入不能为空";
            }else{
                 if (!(telStr.test(value))) {
                     this.txtword = "输入格式错误"
                 }else{
                     this.istruetxt = true;
                 }
            }
        },
        tipspsd(value) {
             this.isshow2 = true;
            const telStr = /^(?=.*[a-zA-Z])(?=.*[0-9])[A-Za-z0-9]{8,18}$/;
              if(value === null){
                this.psdword = "输入不能为空";
            }else{
                 if (!(telStr.test(value))) {
                     this.psdword = "输入格式错误"
                 }else{
                     this.istruepsd = true;
                 }
            }
        },
        tologin() {
            this.$router.push('/login')
        },
        savemessage() {
           if(this.txt !== null && this.psd !== null){
                const txt = this.txt;
                const psd = this.psd;
                const uname = this.uname;
                const obj = {
                    txt,psd,uname
                }
                saveUser(obj);
                this.able = false;
            } 
        }
    },
    data() {
        return {
            istruetxt:false,
            istruepsd:false,
            txt:null,
            psd:null,
            txtword:"",
            psdword:"",
            isshow1:false,
            isshow2:false,
            able:true,
            uname:null,
        }
    }
};
</script>

<style scoped>
.signIn {
    width: 100%;
    height: 100%;
    background-color: #fff;
}
h1{
    color: #040404;
    text-align: center;
    font-family: Verdana;
    margin-top: 20px;
}
p{
    color:#cfa993;
     text-align: center;
    font-family: Verdana;
    margin:20px 0 22px 0;
    font-size: 16px;
}
.toinput{
    margin: 40px 0 0 68px;
    width: 240px;
}
input{
    margin-bottom: 30px;
    height: 30px;
}
img{
    margin: 5px 5px -6px 0;
    width: 26px;
}
.success{
    display: inline-block;
    margin-bottom: -5px;
    width: 20px;
    height: 20px;
}
.err{
    display: inline-block;
    margin-bottom: -5px;
    width: 20px;
    height: 20px;
}
.box{
    position: relative;
    width: 270px;
}
.tipsword{
    position: absolute;
    top:55px;
    left:75px;
    font-size: 12px;
    color: #f00;
}
.dis{
    display: inline-block;
}
.btns{
    text-align: center;
}
.loginbtn{
    background-color: #ff6632;
    width: 220px;
    height: 50px;
    border-radius: 10px;
    font-weight: 600;
    color: #fff;
    border:none;
}
.signbtn{
    background-color: #4668a5;
    width: 220px;
    height: 50px;
    border-radius: 10px;
    font-weight: 600;
    color: #fff;
     border:none;
}
.touxiang{
    margin: auto;
    width: 100px;
    height: 75px;
}
.touxiang img{
    width: 100px;
    height: 100px;
}
</style>
