<template>
    <div class="store-shelf">
        <shelf-title></shelf-title>
        <scroll :top='0' class="shelf-scroll-wrapper">
            <shelf-search></shelf-search>
            <shelf-list></shelf-list>
        </scroll>
        <shelf-footer></shelf-footer>
    </div>
</template>

<script>
//混入
import { storeShelfMixin } from '../../utils/mixin';
//请求数据方法
import { shelf } from '../../network/index';
//页面组件
import shelfTitle from '../../components/shelf/shelfTitle';
import scroll from '../../components/common/Scroll'; 
import shelfSearch from '../../components/shelf/shelfSearch';
import shelfList from '../../components/shelf/shelfList';
import shelfFooter from '../../components/shelf/shelfFooter';
export default {
    mixins:[storeShelfMixin],
    components: {
        shelfTitle,
        scroll,
        shelfSearch,
        shelfList,
        shelfFooter,
    },
    methods:{
         //获取书架的数据 放在mixins中  getShelfList()
    },
    mounted() {
        this.getShelfList();
    }
};
</script>

<style scoped lang='scss'>
@import '../../assets/style/global.scss';
.store-shelf {
    position: relative;
    z-index: 100;
    width: 100%;
    height: 100%;
    background-color: #fff;
    .shelf-scroll-wrapper {
        position: absolute;
        z-index: 101;
        top: 0;
        left:0;
    }
}
</style>
