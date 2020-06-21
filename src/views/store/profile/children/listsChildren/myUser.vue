<template>
    <div>
        <top-title title="我的账户"></top-title>
        <div class="wrapper">
            <div class="leftTxt">
                <div class="txt">阅饼</div>
                <div class="num">0</div>
            </div>
            <img src="@/assets/img/profile/listschildren/yi.svg" class="icon">
            <div class="rightTxt leftTxt">
                <div class="txt">代金券</div>
                <div class="num">0</div>
            </div>
            <button>充值</button>
            <p class="reduce">
                阅饼和代金券都可以用于购买书籍。阅饼充值后，永久有效，代金券有有效期，过期后自动失效
            </p>
        </div>
        <div class="list">
            <div class="item">
                <span class="item-txt">充值记录</span>
                <img src="@/assets/img/profile/lists/toright.svg" class="item-icon">
            </div>

            <div class="item">
                <span class="item-txt">消费记录</span>
                <img src="@/assets/img/profile/lists/toright.svg" class="item-icon">
            </div>

            <div class="item">
                <span class="item-txt">打赏记录</span>
                <img src="@/assets/img/profile/lists/toright.svg" class="item-icon">
            </div>
        </div>
        <div class="mask"></div>
    </div>
</template>

<script>
import topTitle from '@/components/content/headbar';
export default {
    components:{
        topTitle,
    }
};
</script>

<style scoped>

.wrapper{
    width:100%;
    height: 300px;
    border-bottom: 5px solid #ccc;
    position: relative;
}
.leftTxt{
    width: 50px;
    height: 50px;
    text-align: center;
    position: absolute;
    top: 27%;
    left:30%;
}
.rightTxt{
    left:50%;
}
.txt{
    font-size: 12px;
    color: #999;
}
.num{
    font-size: 24px;
    margin-top: 10px;
}
.icon{
    position: absolute;
     top: 27%;
    left:40%;
    height: 50px;
}
button{
    width: 140px;
    height: 30px;
    border-radius: 10px;
    background-color: #f30;
    color: #fff;
    border:none;
    position: absolute;
    top: 60%;
    left: 28%;

}
.reduce{
    font-size: 12px;
    color: #999;
    width: 80%;
    position: absolute;
    bottom: 10%;
    left: 10%;
    line-height: 25px;
    height: 25px;
}
.list{
    width: 100%;
    box-sizing: border-box;
    padding-left: 15px;
    height: 153px;
    border-bottom: 5px solid #ccc;
}
.item{
    height: 50px;
    width: 95%;
    line-height: 50px;
    border-bottom: 1px solid #ccc;
    font-size: 14px;
    position: relative;
}
.item-icon{
    width: 20px;
    height: 20px;
    position: absolute;
    top: 15px;
    right: 3px;
}
.mask{
    position: absolute;
    left: 0;
    bottom: 0;
    z-index: 9;
    width: 100%;
    height: 100px;
    background: #fff;
}
</style>
