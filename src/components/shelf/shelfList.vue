<template>
    <div class="shelf-list">
        <!-- 移除书架时的动画效果 -->
    <transition-group name="list" tag="div" id="shelf-list">
        <div v-for="item in shelfList" :key="item.id" class="shelf-list-item-wrapper">
            <shelf-item :data='item' :style="{height:itemHeight}">
                <span class="icon-private sign" v-if="item.private"></span>
            </shelf-item>
            <div class="shelf-list-title-wrapper">
                <span class="shelf-list-title title-small">{{ item.title }}</span>
            </div>
        </div>
    </transition-group>
    </div>
</template>

<script>
import { storeShelfMixin } from '../../utils/mixin';
import { realPx } from '../../utils/utils';

import shelfItem from './shelfItem';
export default {
    mixins:[storeShelfMixin],
    components: {
        shelfItem,
    },
    computed:{
        itemHeight() {
            // return ((window.innerHeight - realPx(120)) / 3) / 350 * 250 +'px';
            return '120px'
        }
    }
};
</script>

<style scoped lang="scss">
@import '../../assets/style/global.scss';
.shelf-list {
    position: relative;
    top: px2rem(94);
    left: 0;
    z-index: 100;
    width: 100%;
    #shelf-list{
        display: flex;
        flex-flow: row wrap;
        width: 100%;
        padding: 0 px2rem(15);
        box-sizing: border-box;
        margin-bottom: px2rem(60);
        .shelf-list-item-wrapper {
        flex:  0 0 33.33%;
        width: 33.33%;
        padding: px2rem(15);
        box-sizing: border-box;
        &.list-leave-active {
            display: none;
        }
        //移除书架时的动画效果 
        &.list-move {
            transition: transform 1s;
        }
        .shelf-list-title {
        margin-top: px2rem(10);
        }
    }

    }
    
}

</style>
