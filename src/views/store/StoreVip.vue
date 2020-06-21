<template>
    <div class="store-vip">
        <Scroll :top=48>
              <vip :data='categories' class="category"></vip>
       </Scroll>
       
    </div>
</template>

<script>
import { home } from '../../network/index';
import Scroll from '../../components/common/Scroll';

import vip from './vip/vip';
export default {
    components:{
        vip,
        Scroll
    },
    data() {
        return {
            categories:null,
        }
    },
    mounted() {
         home().then(res=> {
           if (res && res.status === 200) {
                //把分类数据分给了vip页面
                this.categories = res.data.categories;
           }
        })
    }
};
</script>

<style scoped>
.store-vip {
    width: 100%;
    height: 100%;
    background-color: #fff;
}

</style>

