<template>
    <div class="shelf-item" @click="onItemClick">
    <!-- compoennt组件判断出现添加书籍组件还是展示书籍组件 -->
        <component :is='item' :data='data'></component>
        <!-- isEditMode是否进入编辑模式变量 存放在mixins中 当点击了编辑按钮并且是书本才出现图标 -->
        <div class="icon-selected" :class="{'is-selected':data.selected}" v-show="isEditMode && data.type === 1"></div>
        <slot></slot>
        <!-- data.selected data中的属性 默认为false 当选中时改变样式 -->
    </div>
</template>

<script>
import { storeShelfMixin,storeHomeMixin } from '../../utils/mixin';
//pushDifferent 封装的方法 避免添加重复的值
import { pushDifferent } from '../../utils/store';

import shelfItemBook from './shelfItemBook';
import shelfItemAdd from './shelfItemAdd';

export default {
    mixins:[storeShelfMixin,storeHomeMixin],
    props:{
       data:Object
    },
    computed:{
        //判断情况看出现添加书籍组件还是展示书籍组件
        item() {
            return this.data.type === 1 ? this.book : this.add
        }
    },
    data() {
        return {
            //展示图书组件和添加图书组件
            book:shelfItemBook,
            add:shelfItemAdd
        }
    },
    methods:{
    //点击图书跳转阅读
        onItemClick() {
            //首先判断是否处于编辑模式 如果处于编辑模式时，点击使书被选中 不处于点击就直接跳转详情页
            if (this.isEditMode) {
                    //编辑模式下点击 使data中的selected属性为true
                    this.data.selected = !this.data.selected;
                    if (this.data.selected) {//如果选中就添加
                        //将选中的图书放入mixins中的shelfSelected中 pushDifferent避免重复添加封装的方法(放在utils/store.js中)
                        pushDifferent(this.shelfSelected,this.data);
                    } else {//再次点击取消选中就删除
                        this.setShelfSelected(this.shelfSelected.filter(item=> item.id !== this.data.id))
                    }
                  
            } else {
                  //为1 说明是图书 直接跳转详情
                if (this.data.type === 1) {
                    //跳转详情页方法，封装在storeHomeMixin混入中
                    this.showBookDetail(this.data)
                } else {//不为1说明是添加符号 跳转到书城
                    this.$router.push('/store/home');
                    this.setTabbarActive('/home');
                }  
            }
        },
    }

};
</script>

<style scoped lang='scss'>
@import '../../assets/style/global.scss';
.shelf-item {
    position: relative;
    width: 100%;
    height: 100%;
    box-shadow: px2rem(2) px2rem(2) px2rem(6) px2rem(2) rgba(200,200,200,0.3);
    .icon-selected {
        position: absolute;
        bottom: px2rem(2);
        right: px2rem(2);
        font-size: px2rem(18);
        color: rgba(0,0,0,.4);
    }
    .is-selected {
        color: rgb(74, 171, 255);
    }
    .sign {
        position: absolute;
        bottom:px2rem(5) ;
        right: px2rem(5);
        font-size: px2rem(20);
    }
}

</style>
