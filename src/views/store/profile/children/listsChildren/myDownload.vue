<template>
    <div>
        <top-title title="下载管理"></top-title>
        <div class="text">下载列表</div>
        <div class="wrapper" v-for="(item,index) in shelfList" :key="index">
            <div class="download-text"  v-if="item.cache">
               {{ item.fileName }}
            </div> 
        </div>
    </div>
</template>

<script>
import { storeShelfMixin } from '@/utils/mixin';
import topTitle from '@/components/content/headbar';
export default {
    mixins:[storeShelfMixin],
    components:{
        topTitle
    }
};
</script>

<style scoped>
.text {
    font-size:20px;
    font-weight: 700;
    width: 100%;
    height: 50px;
    text-align: center;
    line-height: 50px;
}
.wrapper {
    font-size: 16px;
    margin-top: 20px;
}
</style>
