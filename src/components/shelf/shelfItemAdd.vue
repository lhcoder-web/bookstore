<template>
    <div class="shelf-item-add">
       <span class="icon-add"></span>
    </div>
</template>

<script>
export default {

};
</script>

<style scoped lang="scss">
@import '../../assets/style/global.scss';
.shelf-item-add {
    width: 100%;
    height: 100%;
    border:1px solid #ccc;
    box-sizing: border-box;
    box-shadow: none;
    @include center;
    .icon-add {
        font-size: px2rem(40);
        color: #ccc;
    }
}

</style>
