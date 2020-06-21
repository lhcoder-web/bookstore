<template>
    <div>
        <mt-header :title="title" fixed>
        <router-link to="/" slot="left">
            <mt-button @click="back" icon="back">返回</mt-button>
        </router-link>
</mt-header>
    </div>
   
</template>

<script>
import { Header } from 'mint-ui';
export default {
    props: {
        title:String
    },
    components:{
        Header,
    },
    methods:{
        back() {
            this.$router.back();
        }
    }
};
</script>

<style scoped>

</style>
