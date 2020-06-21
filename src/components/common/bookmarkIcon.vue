<template>
    <div class="bookmark-icon" :style="style" ref="bookmarkIcon"></div>
</template>

<script>
import { px2rem } from '../../utils/utils';
export default {
    props:{
        width:String,
        height:String,
        color:String
    },
    computed:{
        //书签的颜色
        style() {
            if(this.color) {
                return {
                     borderColor: `${this.color} ${this.color} transparent ${this.color}`
                }
            }else {
                return {}
            }
        }
    },
    methods:{
        //跟新宽高
        refresh() {
            if(this.width && this.height) {
                this.$refs.bookmarkIcon.style.borderWidth = `${px2rem(this.height - 5)}rem 
                    ${px2rem(this.width / 2)}rem ${px2rem(5)}rem ${px2rem(this.width / 2)}rem`
            }
        }
    },
    mounted() {
        this.refresh();
    }
};
</script>

<style scoped lang='scss'>
@import '../../assets/style/global.scss';
.bookmark-icon {
    width: 0;
    height: 0;
    border-width: px2rem(50) px2rem(10) px2rem(10) px2rem(10);
    border-style: solid;
    border-color: #fff #fff transparent #fff;

}
</style>
