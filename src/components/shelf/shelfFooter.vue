<template>
<div>
<!-- 编辑模式时出现 -->
    <div class="shelf-footer" v-show="isEditMode">
        <div class="shelf-footer-tab-wrapper" v-for="item in tabs" :key="item.index" @click="onTabClick(item)">
            <div class="shelf-footer-tab" :class="{'is-selected':isSelected}">
                <div class="icon-private tab-icon"  v-show="item.index===1"></div>
                <div class="icon-download tab-icon" v-show="item.index===2"></div>
                <div class="icon-download-remove tab-icon"  v-show="item.index===3"></div>
                <div class="icon-shelf tab-icon"  v-show="item.index===4"></div>
                <div class="tab-text"> {{label(item)}} </div>
            </div>
        </div>
    </div>
    <toast ref="toast"></toast>
</div>
</template>

<script>
import { storeShelfMixin } from '../../utils/mixin';
import { saveBookShelf, removeLocalStorage } from '../../utils/localStorage';
import { download } from '../../network/index';
import { removeLocalForage } from '../../utils/localForage';
import toast from '../common/Toast';
export default {
    mixins:[storeShelfMixin],
    components:{
        toast,
    },
    data() {
        return {
            tabs:[
                {
                    index:1,
                    label1:'标记书本',
                    label2:'取消标记',
                },
                 {
                    index:2,
                    label:'离线下载'
                },
                 {
                    index:3,
                    label:'清除缓存'
                },
                 {
                    index:4,
                    label:'移除书架'
                }
            ],
            //接收popup对象
            popupMenu:null,
        }
    },
    computed:{
        //有选中图书时的样式
        isSelected() {
            return this.shelfSelected && this.shelfSelected.length > 0;
        },
        //判断书本是否被标记为喜欢
        isPrivate() {
            if (!this.isSelected) {
                return false
            } else {
                //传递的数据里有private属性 判断选中的图书是否又被标记为喜欢
                return this.shelfSelected.every(item => item.private)
            }
        },
        //判断书本是否缓存
        isDownload() {
            if (!this.isSelected) {
                return false
            } else {
                //传递的数据里有cache属性 判断选中的图书是否缓存
                return this.shelfSelected.every(item => item.cache)
            }
        },
    },
    methods:{
        //展示toast
        showToast(text) {
            this.$refs.toast.updateText(text);
            this.$refs.toast.show(text);
        },
        //下载选中的图书
        downloadSelectedBook() {
            for(let i = 0; i < this.shelfSelected.length; i++) {
                this.downloadBook(this.shelfSelected[i]).then(book=> {
                    book.cache = true;
                })
            }
        },
        downloadBook(book) {
             let text= '';
             let num = 0;
                return new Promise((resolve,reject)=> {
                    download(book,(res)=> {
                    },ProgressEvent=> {
                         //获取toast对象 并使用toast
                        this.showToast(text);
                        this.$refs.toast.continueShow();//让toast持续显示
                        // console.log(ProgressEvent)// 里面包含了进度数据
                        // const progress = Math.floor(ProgressEvent.loaded / ProgressEvent.total *100) +'%';
                        const timeId = setInterval(()=> {
                            num++;
                            text = '正在下载' + book.fileName + '.epub    ' + num  + '%';
                            this.$refs.toast.updateText(text);
                             if (num > 100) {
                                num = 100;
                                clearInterval(timeId);
                                this.$refs.toast.hide();
                            }
                        },100)
                    })
                })
        },
        //设置删除缓存的逻辑
        //删除缓存图书
        deleteSelected() {
            Promise.all(this.shelfSelected.map(book => this.deleteBook(book)))
            .then(book=> {
                book.map(book=> book.cache=false);
                this.hidePopup();
                //将编辑模式也隐藏
                this.setIsEditMode(false);
                //tabbar显示
                this.setTabbarVisible(true);
                //把数据存储到localStroage中
                saveBookShelf(this.shelfList);
                this.showToast('清除缓存成功');
            })
        },
        deleteBook(book) {
            return new Promise((resolve,reject)=> {
                //从localStroage中删除
                removeLocalStorage(`${book.categoryText}/${book.fileName}-info`);
                //从indexDB中删除
                removeLocalForage(book.fileName);
                //删除完后回调
                resolve(book);
            })
        },
        //隐藏popup
        hidePopup() {
            //直接调用popup对象的hide方法
            this.popupMenu.hide()
        },
        //设置为标记喜欢
        setPrivate() {
            //如果选中的图书全部被标记了喜欢。就取消 如果有一个没有被标记，就标记为喜欢
            let isPrivate = null;
            if (this.isPrivate) {
                isPrivate = false
            } else {
                isPrivate = true
            }
            this.shelfSelected.forEach(book => {
                book.private = isPrivate
            })
            //修改完后隐藏popup组件
            this.hidePopup();
            //将编辑模式也隐藏
            this.setIsEditMode(false);
            //tabbar显示
            this.setTabbarVisible(true);
            //把数据存储到localStroage中
            saveBookShelf(this.shelfList);
            if (isPrivate) {
                this.showToast('添加标记成功')
            } else {
                this.showToast('取消标记成功')
            }
        },
        //设置下载逻辑
        setDownload() {
          //传入到这里的this.isDownload都是false
            this.shelfSelected.forEach(book => {
                book.cache = true;
            })
            //下载选中的图书
            this.downloadSelectedBook();
            //修改完后隐藏popup组件
            this.hidePopup();
            //将编辑模式也隐藏
            this.setIsEditMode(false);
             //tabbar显示
            this.setTabbarVisible(true);
            //把数据存储到localStroage中
            saveBookShelf(this.shelfList);
        },
        //设置移除书架逻辑
        setRemoveShelf() {
            this.shelfSelected.forEach(selected=> {
                //将list中跟selected选中的相同的删除 然后跟新
                this.setShelfList(this.shelfList.filter(item => item !== selected))
            })
            this.setShelfSelected([]);
            //修改完后隐藏popup组件
            this.hidePopup();
            //将编辑模式也隐藏
            this.setIsEditMode(false);
             //tabbar显示
            this.setTabbarVisible(true);
            //把数据存储到localStroage中
            saveBookShelf(this.shelfList);
            this.showToast('移除成功');
        },
        //如果被标记了就将第一个按钮的文字修改为取消取消标记 反之
        label(item) {
            if (item.index === 1) {
                return this.isPrivate ? item.label2 :item.label1
            } else {
                return item.label;
            }
        },
        //定义标记书本的popup 即点击了第一个标记书本
        showPrivate() {
             this.popupMenu = this.popup({
                   title:"将书本标记为为喜欢或取消标记",
                   btn:[
                       {
                           text:'开启',
                           click:()=> {
                               this.setPrivate()
                           }
                       },
                       {
                           text:'取消',
                           click:()=> {
                               //点击取消隐藏
                               this.hidePopup()
                           }
                       },
                   ]
               }).show()
        },
        //缓存按钮
        showDownload() {
            //如果下载过就不弹出popup框 直接提示用户已经下载过
            if (this.isDownload) {
                   this.popupMenu = this.popup({
                   title:"您选择的书籍已经缓存过，请不要重复下载",
                   btn:[
                       {
                           text:'确定',
                           click:()=> {
                                this.hidePopup();
                           }
                       } 
                   ]
               }).show()
               
            } else {
                 this.popupMenu = this.popup({
                   title:"将书本缓存到本地",
                   btn:[
                       {
                           text:'确定',
                           click:()=> {
                               this.setDownload();
                                 //让选中清空
                               this.clearSelected();
                           }
                       },
                       {
                           text:'取消',
                           click:()=> {
                               //点击取消隐藏
                               this.hidePopup()
                           }
                       },
                   ]
               }).show()
            }
            
        },
        // 删除缓存的图书 
        showDeleteSelevted() {
             //如果下载过就弹出popup框进行删除 没下载就提示用户下载
            if (!this.isDownload) {
                   this.popupMenu = this.popup({
                   title:"您选择的图书还未进行缓存，请先缓存",
                   btn:[
                       {
                           text:'确定',
                           click:()=> {
                                this.hidePopup();
                           }
                       } 
                   ]
               }).show()
               
            } else {
                 this.popupMenu = this.popup({
                   title:"清除选择的缓存图书",
                   btn:[
                       {
                           text:'确定',
                           click:()=> {
                               this.deleteSelected();
                                 //让选中清空
                               this.clearSelected();
                           }
                       },
                       {
                           text:'取消',
                           click:()=> {
                               //点击取消隐藏
                               this.hidePopup()
                           }
                       },
                   ]
               }).show()
            }
            
        },
        //移除书架
        showRemoveShelf() {
             this.popupMenu = this.popup({
                   title:"是否将选择的书籍移除书架",
                   btn:[
                       {
                           text:'确定',
                           type:'danger',
                           click:()=> {
                               this.setRemoveShelf();
                               //让选中清空
                               this.clearSelected();
                           }
                       },
                       {
                           text:'取消',
                           click:()=> {
                               //点击取消隐藏
                               this.hidePopup()
                           }
                       },
                   ]
               }).show()
        },
        //点击事件
        onTabClick(item) {
            if (this.isSelected) {
                switch (item.index) {
                    case 1:
                        this.showPrivate()
                        break;
                    case 2:
                        this.showDownload();
                        break;
                    case 3:
                        this.showDeleteSelevted();
                        break;
                    case 4:
                        this.showRemoveShelf();
                        break;
                }
            }
            
        }
    }
};
</script>

<style scoped lang="scss">
@import '../../assets/style/global.scss';
.shelf-footer {
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 120;
    width: 100%;
    height: px2rem(48);
    background-color: #fff;
    box-shadow: 0 px2rem(-2) px2rem(4) rgba(0,0,0,.1);
    display: flex;
    .shelf-footer-tab-wrapper {
        flex: 1;
        width: 25%;
        height: 100%;
        .shelf-footer-tab {
            width: 100%;
            height: 100%;
              opacity: 0.5;
            @include columnCenter;
            &.is-selected {
                opacity:1;
            }
            .tab-icon {
                font-size: px2rem(20);
                color: #666;
            }
            .tab-text {
                margin-top: px2rem(5);
                font-size: px2rem(12);
                color: #666;
            }
        }
    }
}
</style>
