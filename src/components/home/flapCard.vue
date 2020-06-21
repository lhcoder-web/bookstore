<template>
    <div class="flap-card-wrapper" v-show="flapCardVisible">
        <div class="flpa-card-bg" v-show="!animationEnd">
            <div class="flap-card" v-for="(item,index) in flapCardList" :key="index" :style="{zIndex:item.zIndex}">
                <div class="flap-card-circle">
                    <div class="flap-card-semi-circle flap-card-semi-circle-left" :style="semiCircleStyle(item,'left')" ref="left"></div>
                    <div class="flap-card-semi-circle flap-card-semi-circle-right" :style="semiCircleStyle(item,'right')" ref="right"></div>
                </div>
            </div>
        </div>
        <div class="book-card" :class="{'animation': animationEnd}" v-show="animationEnd">
            <div class="book-card-wrapper">
                <div class="img-wrapper">
                    <img class="img" :src="data ? data.cover : ''">
                </div>
                <div class="content-wrapper">
                    <div class="content-title">{{data ? data.title : ''}}</div>
                    <div class="content-author sub-title-medium">{{data ? data.author : ''}}</div>
                    <div class="content-category">{{getCategoryName()}}</div>
                </div>
                <div class="read-btn" @click.stop="showBookDetail(data)">立即阅读</div>
            </div>
        </div>
        <div class="close-btn-wrapper" @click="close">
            <div class="icon-close"></div>
        </div>
    </div>
</template>

<script>
//推荐页面的动画效果 翻转卡片
import { storeHomeMixin } from '../../utils/mixin';
import { getCategoryName } from  '../../utils/store';
export default {
   mixins:[storeHomeMixin],
   props: {
       //home页面随机传递的一本书的信息
       data:Object,
   },
   methods:{
       //关闭推荐页面
       close() {
           this.setFlapCardVisible(false);
           this.stopAnimation();
           //显示tabbar
           this.setTabbarVisible(true);
       },
       //设置左右两个不同的样式
       semiCircleStyle(item,dir) {
           return {
               backgroundColor:`rgb(${item.r},${item.g},${item.b})`,
               backgroundSize:item.backgroundSize,
               backgroundImage:dir === 'left' ? item.imgLeft : item.imgRight,
           }
       },
       //旋转的方法
       rotate(index,type) {
           const item = this.flapCardList[index];
           let dom = null;
           //判断当前是左边还是右边旋转
           if (type === 'front') {
               dom = this.$refs.right[index];
           } else {
                dom = this.$refs.left[index];
           }
           //通过trasform实现旋转
           dom.style.transform = `rotateY(${item.rotateDegree}deg)`;
           dom.style.backgroundColor = `rgb(${item.r},${item._g},${item.b})`
       },
       //动画的方法
       flapCardRotate() {
               const front = this.flapCardList[this.front];
               const back = this.flapCardList[this.back];
               front.rotateDegree += 10;
               front._g -= 5;
               back.rotateDegree -= 10;
               back._g += 5;
               if (front.rotateDegree === 90) {
                   back.zIndex += 2;
               }
               this.rotate(this.front,'front');
               this.rotate(this.back,'back');
                if (front.rotateDegree === 180) {
                    //第一张旋转完毕 切换到下一章
                    this.next();
                }
       },
       next() {
           //所有的旋转都还原
            const front = this.flapCardList[this.front];
            const back = this.flapCardList[this.back];
            back.rotateDegree = 0;
            front.rotateDegree = 0;
            back._g = back.g;
            front._g = front.g;
            this.rotate(this.front,'front');
            this.rotate(this.back,'back');
            this.front++;
            this.back++;
            const len = this.flapCardList.length;
            if (this.front >= len) {
                this.front = 0;
            }
            if (this.back >= len) {
                this.back = 0;
            }
            //zIndex 
            //100 => 96
            //99 => 100
            //98 => 99
            //97 => 98
            //96 => 97
            this.flapCardList.forEach((item,index)=> {
                item.zIndex = 100 - ((index - this.front + len) % len)
            })
            this.prepare();
       },
       prepare() {
           const back = this.flapCardList[this.back];
           back.rotateDegree = 180;
           back._g = back.g - 5 * 18;
           this.rotate(1,'back');
       },
       reset() {
           this.front = 0;
           this.back = 1;
           this.flapCardList.forEach((item,index)=> {
               item.zIndex = 100 - index;
               item._g = item.g;
               item.rotateDegree = 0;
                this.rotate(index,'front');
                this.rotate(index,'back');
           })
       },
       //开始动画
       startFlapCardAnimation() {
           this.animationEnd = false;
            this.prepare();
               this.task = setInterval(()=> {
                    this.flapCardRotate()
                },this.animationSpeed)
                setTimeout(() => {
                    this.stopAnimation();
                    this.animationEnd = true;
                }, 2500);
       },
       stopAnimation() {
           if (this.task) {
               clearInterval(this.task)
           }
           this.reset();
       },
       getCategoryName() {
            if (this.data) {
                return this.data.category;
            } else {
                return '';
            }
       },
   },
   watch: {
       flapCardVisible(v) {
           if (v) {
               this.startFlapCardAnimation();
           }
       }
   },
   data() {
       return {
           //推荐的翻转卡片数据
            flapCardList : [
                {
                    r: 255,
                    g: 102,
                    _g: 102,
                    b: 159,
                    imgLeft: 'url(' + require('@/assets/images/gift-left.png') + ')',
                    imgRight: 'url(' + require('@/assets/images/gift-right.png') + ')',
                    backgroundSize: '50% 50%',
                    zIndex: 100,
                    rotateDegree: 0
                },
                {
                    r: 74,
                    g: 171,
                    _g: 171,
                    b: 255,
                    imgLeft: 'url(' + require('@/assets/images/compass-left.png') + ')',
                    imgRight: 'url(' + require('@/assets/images/compass-right.png') + ')',
                    backgroundSize: '50% 50%',
                    zIndex: 99,
                    rotateDegree: 0
                },
                {
                    r: 255,
                    g: 198,
                    _g: 198,
                    b: 102,
                    imgLeft: 'url(' + require('@/assets/images/star-left.png') + ')',
                    imgRight: 'url(' + require('@/assets/images/star-right.png') + ')',
                    backgroundSize: '50% 50%',
                    zIndex: 98,
                    rotateDegree: 0
                },
                {
                    r: 255,
                    g: 102,
                    _g: 102,
                    b: 159,
                    imgLeft: 'url(' + require('@/assets/images/heart-left.png') + ')',
                    imgRight: 'url(' + require('@/assets/images/heart-right.png') + ')',
                    backgroundSize: '50% 50%',
                    zIndex: 97,
                    rotateDegree: 0
                },
                {
                    r: 59,
                    g: 201,
                    _g: 201,
                    b: 22,
                    imgLeft: 'url(' + require('@/assets/images/crown-left.png') + ')',
                    imgRight: 'url(' + require('@/assets/images/crown-right.png') + ')',
                    backgroundSize: '50% 50%',
                    zIndex: 96,
                    rotateDegree: 0
                }
            ],
            front:0,
            back:1,
            //控制动画的速度
            animationSpeed:25,
            //当卡片动画结结束 推荐的书籍弹出
            animationEnd:false,
       }
   }
};
</script>

<style lang="scss" scoped rel='stylesheet/scss'>
@import '../../assets/style/global.scss';
.flap-card-wrapper {
    width: 100%;
    height: 100%;
    z-index: 1000;
    background-color: rgba(0,0,0,.6);
    @include center;
    @include absCenter;
    .flpa-card-bg {
        position: relative;
        width:px2rem(64);
        height: px2rem(64);
        border-radius: px2rem(5);
        background-color: #fff;
        .flap-card {
                width:px2rem(48);
                height: px2rem(48);
                @include absCenter;
            .flap-card-circle {
                display: flex;
                width: 100%;
                height: 100%;
                .flap-card-semi-circle {
                    flex: 0 0 50%;
                    width: 50%;
                    height: 100%;
                    background-color: #f00;
                    background-repeat: no-repeat;
                    // 当旋转到背面时隐藏
                    backface-visibility: hidden;
                }
                .flap-card-semi-circle-left {
                    border-radius: px2rem(24) 0 0 px2rem(24);
                    background-position: center right;
                    transform-origin: right;
                }
                .flap-card-semi-circle-right {
                    border-radius: 0 px2rem(24) px2rem(24) 0;
                    background-position: center left;
                    transform-origin: left;
                }
            }
        }
    }
     .book-card {
      position: relative;
      width: 65%;
      max-width: px2rem(400);
      box-sizing: border-box;
      border-radius: px2rem(15);
      background: white;
      &.animation {
        animation: scale 1s ease-in both;
        @keyframes scale {
          0% {
            transform: scale(0);
            opacity: 0;
          }
          100% {
            transform: scale(1);
            opacity: 1;
          }
        }
      }
      .book-card-wrapper {
        width: 100%;
        height: 100%;
        margin-bottom: px2rem(30);
        @include columnTop;
        .img-wrapper {
          width: 100%;
          margin-top: px2rem(20);
          @include center;
          .img {
            width: px2rem(90);
            height: px2rem(130);
          }
        }
        .content-wrapper {
          padding: 0 px2rem(20);
          margin-top: px2rem(20);
          .content-title {
            color: #333;
            font-weight: bold;
            font-size: px2rem(18);
            line-height: px2rem(20);
            max-height: px2rem(40);
            text-align: center;
            @include ellipsis2(2)
          }
          .content-author {
            margin-top: px2rem(10);
            text-align: center;
          }
          .content-category {
            color: #999;
            font-size: px2rem(14);
            margin-top: px2rem(10);
            text-align: center;
          }
        }
        .read-btn {
          position: absolute;
          bottom: 0;
          left: 0;
          z-index: 1100;
          width: 100%;
          border-radius: 0 0 px2rem(15) px2rem(15);
          padding: px2rem(15) 0;
          text-align: center;
          color: white;
          font-size: px2rem(14);
          background: blue;
        }
      }
    }
    .close-btn-wrapper {
        position: absolute;
        z-index: 1100;
        left: 0;
        bottom: px2rem(30);
        width: 100%;
        @include center;
        .icon-close {
            width: px2rem(45);
            height: px2rem(45);
            font-size: px2rem(25);
            border-radius: 50%;
            background-color: #333;
            color: #fff;
            @include center;
        }
    }
}
</style>
