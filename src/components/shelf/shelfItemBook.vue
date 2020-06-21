<template>
    <div class="shelf-item-book">
        <img :src="data.cover">
    </div>
</template>

<script>
export default {
    props: {
        data:Object
    },
};
</script>

<style scoped lang='scss'>
@import '../../assets/style/global.scss';
.shelf-item-book {
    width: 100%;
    height: 100%;
    img {
        width: 100%;
        height: 100%;
    }
}
</style>
