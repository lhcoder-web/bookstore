//mixin混入 减少重复代码
import { mapGetters, mapActions } from 'vuex';
import { saveLocation,getReadTime, getBookmark } from './localStorage';
//获取localStroage中shelflist的数据
import { getBookShelf,saveBookShelf } from './localStorage';
//获取shelf数据方法
import { shelf } from '../network/index';
//阅读页面
export const eBookMixin = {
    //1.mapGetters
    computed:{
        ...mapGetters([
            'currentBook',
            'fileName',
            'menuVisible',
            'settingVisible',
            'fontdefault',
            'fontFamilyDefault',
            'fontFamilyVisible',
            'themeDefault',
            'bookAvailable',
            'progress',
            'section',
            'cover',
            'metadata',
            'navigation',
            'offsetY',
            'isBookmark',
            'bookmarkText',
    ]),
        getSectionName() {
            return this.section ? this.navigation[this.section].label : '';
        },
    },
    //2.mapActions
    methods:{
        ...mapActions([
            'setMenuVisible',
            'setFileName',
            'setSettingVisible',
            'setFontdefault',
            'setCurrentBook',
            'setFontFamilyDefault',
            'setFontFamilyVisible',
            'setThemeDefault',
            'setBookAvailable',
            'setProgress',
            'setSection',
            'setCover',
            'setMetadata',
            'setNavigation',
            'setOffsetY',
            'setIsBookmark',
            'setBookmarkText',
        ]),
         //根据主题设置全局的样式
        initGlobalStyle() {
            this.addCss(process.env.VUE_APP_RES_URL + '/theme/theme_' + this.themeDefault + '.css');
        },//添加初始化需要的方法
        addCss(href) {
            const link = document.createElement('link');
            link.setAttribute('href',href);
            link.setAttribute('rel','stylesheet')
            link.setAttribute('type','text/css')
            document.getElementsByTagName('head')[0].appendChild(link);
        },
        //清除单个样式
        removeCss(href) {
            const links = document.getElementsByTagName('link');
            links.forEach(item => {
                if(item && item.getAttribute('href') === href) {
                    item.parentNode.removeChild(item)
                }
            }) 
        },
        //清除dange 样式
        removeAllCss() {
            //因为混入在menthods 中所以调用方法要加this
            this.removeCss(process.env.VUE_APP_RES_URL + '/theme/theme_default.css');
            this.removeCss(process.env.VUE_APP_RES_URL + '/theme/theme_eye.css');
            this.removeCss(process.env.VUE_APP_RES_URL + '/theme/theme_night.css');
            this.removeCss(process.env.VUE_APP_RES_URL + '/theme/theme_gold.css');
        },
         //刷新章节的位置 调用的次数较多 放入mixins中
        refreshLocation() {
        //通过this.currentBook.rendition.currentLocation();获取当前的location对象。里面包含了当前进度条信息（不准确）
            const currentLocation = this.currentBook.rendition.currentLocation();
            const startCfi = currentLocation.start.cfi;
            if(currentLocation && startCfi) {
                 //通过this.currentBook.locations.percentageFromCfi(currentLocation.start.cfi)获取当前准确的进度信息
                const progress = this.currentBook.locations.percentageFromCfi(startCfi);
                saveLocation(this.fileName,startCfi);
                //获取章节信息 下一次载入时加载这个信息 progress同理
                this.setSection(currentLocation.start.index);
                //吧progress传入到mixin的progress中
                this.setProgress(Math.floor(progress * 100));
                //判断是不是标签页
                const bookmark = getBookmark(this.fileName);
                if(bookmark) {
                    //some方法 只要一个为true  返回true  检测存储的bookmark是否有当前的cfi
                    if(bookmark.some(item => item.cfi === startCfi)) {
                        this.setIsBookmark(true);
                    }else {
                        this.setIsBookmark(false);
                    }
                }else {
                    this.setIsBookmark(false);
                }
            }
           
        },
        //this.book.rendition.display用到的很多 所以放到这里进行简化
        display(target,callback) {
            if(target) {
                this.currentBook.rendition.display(target).then(()=> {
                    this.refreshLocation();
                    if(callback) callback();
                })
            }else {
                this.currentBook.rendition.display().then(()=> {
                    this.refreshLocation();
                    if(callback) callback();
                })
            }
        },
        //菜单栏和标题栏隐藏(翻页时隐藏)
        hideTitleAndMenu() {
            this.setMenuVisible(false);
            this.setSettingVisible(-1);
            this.setFontFamilyVisible(false);
        },
         //设置阅读时间
        getReadTimeText() {
            const readTime = getReadTime(this.fileName);
            if(!readTime) {
                return 0;
            }else {
                return Math.ceil(readTime / 60);
            }
        } 
    },
    //data 
    data() {
        return {
            //主题
            themeslists:[
         {
             name:"default",
             style:{
                 body:{
                   color:"#4c5059",
                   background: "#cecece",
                   'padding-top':'45px!important',
                   'padding-bottom':'20px!important',
                 }
             }
         },
          {
             name:"eye",
             style:{
                body:{
                   color:"#404c42",
                   background: "#a9c1a9",
                   'padding-top':'45px!important',
                   'padding-bottom':'20px!important',
                }
             }
         },
          {
             name:"night",
             style:{
                 body:{
                   color:"#cecece",
                   background: "#000",
                   'padding-top':'45px!important',
                   'padding-bottom':'20px!important',
                 }
             }
         },
          {
             name:"gold",
             style:{
                 body:{
                   color:"#5c5b56",
                   background: "#c6c2b6",
                   'padding-top':'45px!important',
                   'padding-bottom':'20px!important',
                 }
             }
         },
            ],
        }
    },
}

//用户页面
export const userMixin = {
    computed:{
        ...mapGetters([
            'tabbarActive',
            'tabbarVisible',
            'currentUser'
        ])
    },
    methods:{
        ...mapActions([
            'setTabbarVisible',
            'setTabbarActive',
            'setCurrentUser',
        ])
    }
}

//书城首页
export const storeHomeMixin = {
    computed:{
        ...mapGetters([
            'offsetY',
            'hotSearchOffsetY',
            'flapCardVisible',
        ])
    },
    methods:{
        ...mapActions([
            'setOffsetY',
            'setHotSearchOffsetY',
            'setFlapCardVisible',
            'setTabbarVisible',
            'setTabbarActive',
        ]),
        showBookDetail(book) {
            this.setTabbarVisible(false);
           this.$router.push({
               path:'/store/detail',
               query:{
                    fileName:book.fileName,
                    category:book.categoryText
               }
           })
        },
    }
}

//书架页面
export const storeShelfMixin = {
    computed:{
        ...mapGetters([
            'isEditMode',
            'shelfList',
            'shelfTitleVisible',
            'shelfSelected',
            'tabbarActive'
        ])
    },
    methods:{
        ...mapActions([
            'setIsEditMode',
            'setShelfList',
            'setShelfTitleVisible',
            'setShelfSelected',
            'setTabbarVisible',
            'setTabbarActive',
        ]),
        clearSelected() {
            //让选中的书本不再被选中
            this.setShelfSelected([]);
            this.shelfList.forEach(item=> {
               item.selected = false
            })
       },
       //获取书架的数据
       getShelfList() {
        //先从localStroage中获取数据
        let shelfList = getBookShelf();
        // console.log(shelfList)
        //如果不存在 就说明是第一次打开页面 进去请求数据
        if (!shelfList) {
            shelf().then(res=> {
                if (res.status === 200 && res.data && res.data.bookList) {
                    res.data.bookList.push({
                        id:-1,
                        type:3
                    })
                    //保存到localStroage中
                    saveBookShelf(res.data.bookList)
                    //把数据保存到shelfList中
                    this.setShelfList(res.data.bookList);
                    // console.log(res.data.bookList)
                }
            })
        } else {//如果存在 就将数据放在vuex中 避免每次进入页面都要请求数据
            this.setShelfList(shelfList)
        }
    }
    }
}
 