<template>
    <div>
        <top-title title="提醒互动"></top-title>
        <div class="btn-wrapper">
            <div @click="active=true" :class="{active:active}">提醒</div>
            <div @click="active=false" :class="{active:!active}">互动</div>
        </div>
       
        <div class="content">
             <transition name="fade-slide-right">
            <img src="@/assets/img/mytips.png" v-show="active" alt="">
             </transition>
              <transition name="fade-slide-right">
            <img src="@/assets/img/mytips.png" v-show="!active" alt="">
                </transition>
        </div>
       
    </div>
</template>

<script>
import topTitle from '@/components/content/headbar';
export default {
    components:{
        topTitle,
    },
    data() {
        return {
            active:true
        }
    }
};
</script>

<style scoped lang="scss">
.btn-wrapper {
    display: flex;
    width: 100%;
    height: 50px;
    line-height: 50px;
    font-size: 14px;
}
.btn-wrapper div {
   flex: 1;
   text-align: center;
}
.active {
    color: #f00;
    border-bottom: 1px solid #f00;
}

.fade-slide-right-enter-active, .fade-slide-right-leave-active {
    transition: all 0.3s linear;
}



.fade-slide-right-enter-to, .fade-slide-right-leave {
    transform: translate3d(0,0,0);
    opacity: 1;
}
.fade-slide-right-enter, .fade-slide-right-leave-to {
    transform: translate3d(-100%,0,0);
    opacity: 0;
}
</style>
