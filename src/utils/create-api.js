//create-api插件 可以直接通过js调用组件 在body下面生成这个组件 一般用于toast这种的弹窗提示组件
//要在main.js中导入
import createAPI from 'vue-create-api';
import Vue from 'vue';
//导入弹窗组件
import toast from '../components/common/Toast.vue';
//导入上弹提示组件
import popup from '../components/common/popup.vue';

Vue.use(createAPI);
//设置完成后直接通过 this.$createtoast({ $props:{text:"xxx"} }).show() 调用这个组件 将组件需要的props传入即可
//使用的toast组件需要有name属性
Vue.createAPI(toast,true);
Vue.createAPI(popup,true);

//减少代码 直接在全局mixins中引入这个方法 这样可以直接通过this.toast({text:'xxx'}).show()使用组件
Vue.mixin({
    methods:{
        toast(setting) {
            return  this.$createToast({
                        $props:setting
                    })
        },
        popup(setting) {
            return  this.$createPopup({
                        $props:setting
                    })
        }
    }
})

