<template>
    <div class="popup" v-show="popupVisible">
        <transition name="fade">
            <div class="popup-bg" @click.stop.prevent="hide" v-show="popupVisible"></div>
        </transition>
        <transition name="slide-up">
            <div class="popup-wrapper" v-show="popupVisible">
                <div class="popup-title" v-if="title && title.length>0">{{ title }}</div>
                <div class="popup-btn" v-for="(item,index) in btn" :key="index" 
                @click="item.click" :class="{danger:item.type==='danger'}">{{ item.text }}</div>
                <!--  @click="item.click表示click的事件函数定在传递的item.click属性中 -->
            </div>
        </transition>
    </div>
</template>

<script>
export default {
    //上弹提示组件
    name:'popup',
    props: {
        title:String,
        btn:Array,
    },
    data() {
        return {
            popupVisible:false,
        }
    },
    methods: {
        show() {
            this.popupVisible = true;
        },
        hide() {
            this.popupVisible = false;
        }
    },
};
</script>

<style scoped lang="scss">
@import '../../assets/style/global.scss';
.popup {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 2000;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,.4);
    .popup-bg {
        width: 100%;
        height: 100%;
    }
    .popup-wrapper {
        position: fixed;
        left: 0;
        bottom: 0;
        z-index: 2000;
        width: 100%;
        background-color:#fff;
        .popup-title {
            width: 100%;
            height: px2rem(44);
            border-bottom:1px solid #eee;
            font-size: px2rem(12);
            line-height: px2rem(14);
            padding: px2rem(15);
            box-sizing: border-box;
            color: #999;
            @include center;
        }
        .popup-btn {
            width: 100%;
            height: px2rem(60);
            border-bottom:1px solid #eee;
            font-size: px2rem(16);
            font-weight: 700;
            color: #666;
            @include center;
        }
        .danger {
            color: rgb(255, 102, 159);
        }
    }
}

</style>
