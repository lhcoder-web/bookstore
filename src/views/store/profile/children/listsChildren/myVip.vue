<template>
<Scorll>
    <div class="myvip">
        <top-title title="我的包月VIP"></top-title>
        <img src="@/assets/img/profile/listschildren/kaivip.jpg" class="vipImg">
        <div class="user">
            <img src="@/assets/img/profile/mypic.jpg" class="userImg">
            <div class="userName">{{getusername}}
                <div class="tips">您还未开通包月vip</div>
            </div>
        </div>

        <div class="container">
            <div class="lists">
                <div class="item">
                    <div class="top-title">每月VIP套餐</div>
                    <div class="itemlists" v-for="(item,index) in viplists" :key="index"
                        :class="{active:currentIndex === index}" @click="beActive(index)">
                        <div class="left">
                            <div class="left-top">{{item.month}}</div>
                            <div class="left-bottom">{{item.bottom}}</div>
                        </div>
                        <div class="right">
                            <s>{{item.high}}</s>
                            <span class="price">{{item.low}}</span>
                            <button>开通</button>
                        </div>
                    </div>                   
                </div>

                <div class="last">
                     <div class="top-title">包月VIP特权</div>
                     <div class="imgOne">
                         <div class="imgbox">
                              <div class="imgItem">
                                  <img src="@/assets/img/profile/fuli.svg" alt="">
                              </div>
                              <div class="word">包月书库全免</div>
                         </div>
                         <div class="imgbox">
                              <div class="imgItem"><img src="@/assets/img/profile/fuli.svg" alt=""></div>
                              <div class="word">出版书籍8折</div>
                         </div>
                          <div class="imgbox">
                              <div class="imgItem"><img src="@/assets/img/profile/fuli.svg" alt=""></div>
                              <div class="word">杂志全免</div>
                         </div>
                          <div class="imgbox">
                              <div class="imgItem"><img src="@/assets/img/profile/fuli.svg" alt=""></div>
                              <div class="word">尊贵身份</div>
                         </div> 
                     </div>
                     <div class="imgOne">
                         <div class="imgbox">
                              <div class="imgItem"><img src="@/assets/img/profile/fuli.svg" alt=""></div>
                              <div class="word">赠送代金券</div>
                         </div>
                          <div class="imgbox">
                              <div class="imgItem"><img src="@/assets/img/profile/fuli.svg" alt=""></div>
                              <div class="word">赠送月票</div>
                         </div>
                          <div class="imgbox">
                              <div class="imgItem"><img src="@/assets/img/profile/fuli.svg" alt=""></div>
                              <div class="word">任务双倍经验</div>
                         </div>
                          <div class="imgbox">
                              <div class="imgItem"><img src="@/assets/img/profile/fuli.svg" alt=""></div>
                              <div class="word">漫画书籍8折</div>
                         </div>
                     </div>
                </div>
                <footer><img src="@/assets/img/myvip.jpg" class="footerImg"></footer>
            </div>
        </div>
    </div>
</Scorll>
</template>

<script>
import topTitle from '@/components/content/headbar';
import Scorll from '@/components/common/Scroll.vue';
export default {
   components:{
       topTitle,
       Scorll
   },
   data() {
       return {
           viplists:[
               {month:"连续包月",bottom:"自动续费，随时取消",high:"￥20",low:"￥15"},
               {month:"1个月",bottom:"开通一个月",high:"￥21",low:"￥20"},
               {month:"12个月",bottom:"立省￥142",high:"￥240",low:"￥98"},
               {month:"730天",bottom:"立省￥236",high:"￥432",low:"￥196"},
           ],
           currentIndex:0,
       }
   },
   computed:{
       getusername() {
           //路由params携带用户参数
           return  this.$route.params.uname === "null"? "请先登录" : this.$route.params.uname;
       } 
   },
    methods:{
       beActive(index) {
           this.currentIndex = index;
        }
    }
};
</script>

<style scoped>
.myvip{
    width:100%;
}
.vipImg{
    width: 100%;
}
.user{
    width: 100%;
    height: 70px;
    border-bottom: 5px solid #ccc;
    position: relative;
}
.userImg{
    margin: 8px 0 0 10px;
    width: 50px;
}
.userName{
  position: absolute;
  top: 20px;
  left:85px;
  font-size: 14px;
}
.tips{
    margin-top: 15px;
    font-size: 12px;
    color: #999;
}
.item{
    width: 100%;
    height: 300px;
    border-bottom: 5px solid #ccc;
}
.top-title{
    height: 60px;
    font-size: 18px;
    line-height: 60px;
    margin-left: 20px;
}
.itemlists{
    height: 60px;
    width: 100%;
    display: flex;
    justify-content: space-between;
}
.left{
    flex: 1;
    height: 60px;
    margin-left: 20px;
}
.left-top{
    height: 40px;
    font-size: 16px;
    line-height: 50px;
}
.left-bottom{
    height: 20px;
    font-size: 12px;
    color: #999;
    line-height: 20px;
}
.right{
    flex: 1;
    display: flex;
    justify-content: space-between;
    font-size: 14px;
    height: 60px;
    line-height: 60px;
}
.right s{
    color: #999;
}
.right .price{
    color: #fe8f15;
}
.right button{
    background-color: #ff8501;
    border: none;
    border-radius: 10px;
    height: 30px;
    color: #fff;
    margin: 12px 10px 0 0;
}
.active{
    background-color: #fee2d4;
}
/* 包月vip特权 */
.last{
    width: 100%;
    height: 228px;
    border-bottom: 5px solid #ccc;
}
.imgOne{
    width: 90%;
    height: 80px;
    margin-left: 20px;
    display: flex;
    justify-content: space-between;
    margin-bottom: 5px;
}
.imgItem{
    margin: 10px 0 3px 17px;
    width: 50px;
    height: 50px;
    border-radius: 50%; 
    position: relative;
}
.imgItem img{
    width:30px; 
    height: 30px;
    margin: 8px 0 0 3px;
}
.imgbox{
    width: 85px;
    height: 80px;
    text-align: center;
}
.word{
    font-size: 12px;
    color: #999;
}
footer{
    height: 300px;
    width: 100%;
    background-color: #f00;
}
.footerImg {
    width: 100%;
    margin-bottom:10px;
}
</style>
