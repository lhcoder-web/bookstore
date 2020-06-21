<template>
<transition name="slide-up">
     <div class="setting-wrapper" v-show="menuVisible && settingVisible === 2">
      <div class="setting-progress">
            <div class="read-time-wrapper">
                <span class="read-time-text">已读{{ getReadTimeText() }}分钟</span>
                <span class="icon-forward"></span>
            </div>
            <div class="progress-wrapper">
                <div class="progress-icon-wrapper"  @click="prevSection()">
                    <span class="icon-back"></span>
                </div>
                <input class="progress" type="range"
                 max="100"
                 min="0"
                 step="1"
                 @input="onProgressInput($event.target.value)"
                 @change="onProgressChange($event.target.value)"
                 :value="progress"
                 :disabled="!bookAvailable"
                 ref="progress">
            <div class="progress-icon-wrapper" @click="nextSection()">
                 <span class="icon-forward"></span>
            </div>
        </div>
        <div class="text-wrapper">
          <span class="progress-section-text">{{getSectionName}}</span>
          <span class="progress-text">({{bookAvailable ? this.progress + '%' : 'book.loading'}})</span>
        </div>
      </div>
    </div>
</transition>
</template>

<script>
import { eBookMixin } from '../../../utils/mixin';
export default {
    mixins:[eBookMixin],
    methods:{
      //实现进度条两边颜色不同
      changeProgressColor(progress) {
        this.$refs.progress.style.backgroundSize = progress + '%';
      },
      //上一章
      prevSection() {
          if(this.section > 0 && this.bookAvailable) {
              this.setSection(this.section - 1).then(()=> {
                  this.displaySection();
              })
          }
      },
      //下一章
      nextSection() {
          //this.currentBook.spine章节信息  .length是总共的章节数
          if(this.section < this.currentBook.spine.length - 1 && this.bookAvailable) {
              this.setSection(this.section + 1).then(()=> {
                  this.displaySection();
              })
          }
      },
      //章节跳转的方法
      displaySection() {
          //通过book.section(section)获取 sectionInfo对象 对象里面的href就是跳转的页面
          const sectionInfo =  this.currentBook.section(this.section);
          //通过display(href)跳转
          if(sectionInfo && sectionInfo.href) {
              this.display(sectionInfo.href,()=> {
                  //通过上下章节调整内容时进度条两边颜色也改变
                  this.changeProgressColor(this.progress);
              })
          }
      },
      //根据进度调节内容
      onProgressChange(progress) {
        //把progress保存到vuex中
        this.setProgress(progress).then(()=> {
            this.displayProgress();
            this.changeProgressColor();
        })  
      },//在拖动进度条时让左右两边实时的改变颜色
      onProgressInput(progress) {
           //把progress保存到vuex中
           this.setProgress(progress).then(()=> {
               this.changeProgressColor(progress);
           })
           
      },
      //根据进度调节内容
      displayProgress() {
        const cfi = this.currentBook.locations.cfiFromPercentage(this.progress / 100)
        this.display(cfi);
      },
  },
  //钩子函数
  updated() {
      this.changeProgressColor(this.progress);
  },
};
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
  @import '../../../assets/style/global.scss';
  .setting-wrapper {
    position: absolute;
    bottom: px2rem(48);
    left: 0;
    z-index: 190;
    width: 100%;
    height: px2rem(90);
    box-shadow: 0 px2rem(-8) px2rem(8) rgba(0, 0, 0, .15);
    .setting-progress {
      position: relative;
      width: 100%;
      height: 100%;
      .read-time-wrapper {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: px2rem(40);
        @include center;
        font-size: px2rem(12);
      }
      .progress-wrapper {
        width: 100%;
        height: 100%;
        @include center;
        padding: 0 px2rem(15);
        box-sizing: border-box;
        .progress {
          flex: 1;
          width: 100%;
          -webkit-appearance: none;
          height: px2rem(2);
          background: -webkit-linear-gradient(#5d6268, #5d6268) no-repeat, #b4b5b7;
          background-size: 0 100%;
          margin: 0 px2rem(10);
          &:focus {
            outline: none;
          }
          &::-webkit-slider-thumb {
            -webkit-appearance: none;
            height: px2rem(20);
            width: px2rem(20);
            border-radius: 50%;
            background: #ceced0;
            box-shadow: 0 px2rem(4) px2rem(6) 0 rgba(0, 0, 0, .15);
            border: none;
          }
        }
        .progress-icon-wrapper {
          flex: 0 0 px2rem(22);
          font-size: px2rem(22);
          @include center;
        }
      }
      .text-wrapper {
        position: absolute;
        left: 0;
        bottom: px2rem(5);
        width: 100%;
        font-size: px2rem(12);
        text-align: center;
        padding: 0 px2rem(15);
        box-sizing: border-box;
        @include center;
        .progress-section-text {
          line-height: px2rem(15);
          @include ellipsis;
        }
      }
    }
  }
</style>

