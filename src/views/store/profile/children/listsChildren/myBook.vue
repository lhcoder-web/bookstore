<template>
    <div>
        <top-title title="我的书籍"></top-title>
        <div class="wrapper">
            <img src="@/assets/img/mybook.jpg" alt="">
        </div>
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

.wrapper img {
    margin-top: 20px;
    width:100%;
    height: 100%;
}

</style>
