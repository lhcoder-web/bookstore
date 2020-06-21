<template>
    <transition name="fade">
        <div class="speak-window" v-if="isPlaying">
           <div class="text-wrapper"> {{ text }}</div>
        </div>
    </transition>
</template>

<script>
export default {
    props: {
        text:String,
        isPlaying:Boolean
    },
};
</script>

<style scoped lang='scss'>
.speak-window {
    width: 100%;
    height:100%;
    background-color: #fff;
    position: absolute;
    top: 0;
    z-index: 210;
    line-height: 50px;
    padding: 20px;
    .text-wrapper {
        width: 300px;
        height: 100%;
    }
}
</style>
