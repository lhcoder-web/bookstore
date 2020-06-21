<template>
    <div class="login-wrapper">
        <div v-show="iserr" class="errmessage">{{errmessage}}</div>
        <headbar title='login'></headbar>
        <h1>登录</h1>
        <p>good to see you again </p>
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
            <button class="loginbtn" @click="checkmessage">登录</button>
           <p class="forget">Forget your password?</p>
           <button class="signbtn" @click="toregister">注册</button>
        </div>
        
    </div>
</template>

<script>
import headbar from './headbar';

import { getUser } from '../../utils/localStorage';
import { userMixin } from '../../utils/mixin';
export default {
    mixins:[userMixin],
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
        toregister() {
            this.$router.push('/register')
        },
        //核对输入是否正确
        checkmessage() {
            const UserList = getUser();
            if (!UserList) {
                this.errmessage = "用户不存在，请先注册";
                this.iserr = true;
                setTimeout(()=>{
                this.iserr = false;
                },2000)
            } else {
                //返回的数组
                const result = UserList.map(item => {
                    if (item.txt === this.txt) {
                        if (item.psd === this.psd) {
                            return item.uname
                        } else {
                            return 0
                        }
                    } else {
                        return 1
                    }
                    //result:0:输入的密码错误，请核对后输入' 1.'输入的用户不存在，请先注册'
                })
                if (result[0] === 1) {
                    this.errmessage = "用户不存在，请先注册";
                    this.iserr = true;
                    setTimeout(()=>{
                    this.iserr = false;
                    },2000)
                } else if (result[0] === 0){
                    this.errmessage = "密码输入错误，请核对后输入";
                    this.iserr = true;
                    setTimeout(()=>{
                    this.iserr = false;
                    },2000)
                }else{
                    //设置当前用户
                    this.setCurrentUser(result[0]);
                    // 输入正确跳转回我的页面
                    this.$router.push({
                        path:'/store/profile',
                        query:{
                            uname:result[0]
                        }
                    })
                    //tabbar显示
                    this.setTabbarVisible(true);
                }
            }  
        }
    },
    data() {
        return {
            //两个输入框所需要的判断
            istruetxt:false,
            istruepsd:false,
            isshow1:false,
            isshow2:false,
            //两个输入框的value值
            txt:null,
            psd:null,
            //正则验证的提示信息
            txtword:"",
            psdword:"",
            //登录错误信息和是否显示判断
            errmessage:'',
            iserr:false,
        }
    }
};
</script>

<style scoped>
.login-wrapper {
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
    font-size: 20px;
    color:#cfa993;
    text-align: center;
    font-family: Verdana;
    margin: 20px 0 20px 0;
}
.toinput{
    margin: 90px 0 0 68px;
    width: 240px;
}
input{
    margin-bottom: 65px;
    height: 30px;
    font-size: 14px;
    border: 1px solid #999;
    color: #333;
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
.errmessage{
    position: absolute;
    top: 45%;
    left: 25%;
    background-color: #777777;
    color: #fff;
    width: 200px;
    height: 30px;
    font-size: 14px;
    text-align: center;
    line-height: 30px;
    z-index: 200;
}
input:focus {
    outline: none;
}
input::-webkit-input-placeholder {
    font-size: 14px;
    color: #ccc;
}
</style>
