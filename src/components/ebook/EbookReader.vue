<template>
    <div class="ebook-reader">
        <div id="read"></div>
        <div class="ebook-reader-mask" 
        @click="onMaskClick" 
        @touchmove='move'
        @touchend='moveEnd'
        @touchstart='initTurnPage'></div>
    </div>
</template>

<script>
import { getLocalForage } from '../../utils/localForage';

import Epub from 'epubjs'
global.ePub = Epub
//引入mixins 
import { eBookMixin } from "../../utils/mixin";
import { getFontFamily, saveFontFamily,saveFontSize,getFontSize,saveThemes,getThemes,getLocation} from '../../utils/localStorage'
export default {
    //直接使用minxins属性引入eBookMixin，较少重复代码
    mixins:[eBookMixin],
    mounted() {
        //mounted钩子要写在data和methods前面
        //把 | 转换成 / 又因为加入了mapActions 并且放在了 mixins中 所以直接this.方法调用,不用再this.$store.dispatch
        // this.$store.dispatch('setFileName',this.$route.params.fileName.split('|').join('/'))
        const books = this.$route.params.fileName.split('|');//获取books字符串
        const fileName = books[1];;
        //还是获取书名 通过书名取出存储在indexDB中的 blod对象 传递给this.initEpub
        getLocalForage(fileName,(err,blod)=> {
            if (!err && blod) {
                console.log('找到离线电子书');
                this.setFileName(books.join('/')).then(()=> {
                    this.initEpub(blod)
                })
            } else {
                console.log('在线获取电子书');
                 this.setFileName(books.join('/'))
                    .then(()=> {
                        //这里使用的是传入路劲url
                        const url = process.env.VUE_APP_EPUB_URL + '/' + this.fileName + '.epub';
                        this.initEpub(url);
                })
            }
        })
       
    },
     methods:{
         //创建book对象
        initEpub(url) {
            // Epub允许传入电子书的url路劲或者 blod对象(存储在indexDB中) 因为要实现离线阅读 所以会传入blod
        // const url = "http://192.168.100.2:8081/epub/Laws/2015_Book_ProtectingTheRightsOfPeopleWit.epub";
            // const url = process.env.VUE_APP_RES_URL + '/epub/' + this.fileName + '.epub';
            this.book = new Epub(url);
            this.setCurrentBook(this.book);
            this.initRendition();
            // this.initTurnPage();
            //解析图书信息(封面、作者等等)
            this.parseBook();
            this.book.ready.then(()=> {
                //分页
                return this.book.locations.generate(750 * (window.innerWidth / 375)
                * (getFontSize(this.fileName) / 16))
            }).then(locations=> {
               //图书加载完毕 
               this.setBookAvailable(true);
               //当分页完成 刷新progress
               this.refreshLocation();
            })
        },
        //初始化rendition对象 并设置好退出前保存的配置
        initRendition() {
            this.rendition = this.book.renderTo('read',{
                width:innerWidth,
                height:innerHeight,
                methods:'default',//支持微信模式设置的属性
                //滑动阅读模式 移动端 不支持微信模式
                //flow:'scrolled'
            })
            const location = getLocation(this.fileName);
            //两个rendition.display会覆盖
            this.display(location,()=> {
                //设置退出前的字体/字号/主题
                this.initFontFamily();
                this.initFontSize();
                this.initTheme();
                this.initGlobalStyle();
            })         
            //epub提供的钩子函数 this.rendition.hooks.content.register 阅读器渲染完毕时调用
            this.rendition.hooks.content.register(contents => {//contents：管理资源
            //添加自己的样式文件  传入的参数是url  所以将样式文件放到 nginx 上
            //process.env.VUE_APP_RES_URL 将 url 配置的放在了env.development中
                contents.addStylesheet(`${process.env.VUE_APP_RES_URL}/fonts/cabin.css`);
                contents.addStylesheet(`${process.env.VUE_APP_RES_URL}/fonts/daysOne.css`);
                contents.addStylesheet(`${process.env.VUE_APP_RES_URL}/fonts/montserrat.css`);
                contents.addStylesheet(`${process.env.VUE_APP_RES_URL}/fonts/tangerine.css`);
            })
        },
         //解析图书信息(封面、作者等等)
        parseBook() {
            //封面
            this.book.loaded.cover.then(cover=> {
                //此方法会将cover图片传入 返回一个图片链接
                this.book.archive.createUrl(cover).then(url => {
                    //设置到vuex中
                    this.setCover(url);
                })
            })
            //出版信息
            this.book.loaded.metadata.then(metadata=> {
                this.setMetadata(metadata);
            })
            //目录
            this.book.loaded.navigation.then(nav=> {
                // console.log(nav.toc);
                const navItem = this.flatten(nav.toc);
                //将每个标题是几级目录拆分清楚
                function find(item,level=0) {
                    if(!item.parent) {
                        return level;
                    }else {
                       return find(navItem.filter(parentItem=> parentItem.id === item.parent)[0],
                        ++level)
                    }
                }
                navItem.forEach(item=> {
                    item.level = find(item)
                })
                // console.log(navItem)
                this.setNavigation(navItem);
            })
        },
        //将多维的复杂数组结构变成一维的数组结构
        flatten(arr) {
            // [].concat(item,...item.subitems)通过结构然后将每一项合并到[]空数组中//
            // 又因为item.subitems中还包含数组,所以采用递归的方式 重复调用
            return [].concat(...arr.map( item=> 
                [].concat(item,...this.flatten(item.subitems))
            ))
        },
         //设置退出前的字体
        initFontFamily() {
                let font = getFontFamily(this.fileName);
                if(!font) {//如果是第一次进入 还没有保存字体值 就先保存默认值（'Dafault'）
                    saveFontFamily(this.fileName,this.fontFamilyDefault);
                }else {//如果可以获取到 就直接设置字体为上一次保存的字体
                    this.book.rendition.themes.font(font);
                    //在把默认字体修改成当前字体
                    this.setFontFamilyDefault(font);
                }
        },
         //设置退出前的字号
        initFontSize() {
            let fontSize = getFontSize(this.fileName);
            if(!fontSize) {
                saveFontSize(this.fileName,this.fontdefault);
            }else {
                this.book.rendition.themes.fontSize(fontSize);
                this.setFontdefault(fontSize);
            }
        },
        //设置退出前的主题
        initTheme() {
            let themes = getThemes(this.fileName);
            if(!themes) {
                saveThemes(this.fileName,this.themeDefault);
            }else {
                // this.book.rendition.themes.select(themes);
                this.setThemeDefault(themes);
            }
            //注册主题 themeslists在mixins中
           this.themeslists.forEach(theme => {
                this.rendition.themes.register(theme.name,theme.style)
           })
           this.rendition.themes.select(this.themeDefault);
        },
        //翻页
        prevPage() {
            if(this.rendition) {
                this.rendition.prev().then(()=> {
                    this.refreshLocation()
                })
            }
        },
        nextPage() {
            if(this.rendition) {
                this.rendition.next().then(()=> {
                    this.refreshLocation()
                })
            }
        },
        //菜单栏和标题栏显示隐藏
        toggleTitleAndMenu() {
        //    this.$store.dispatch('setMenuVisible',!this.menuVisible);
        //因为引入了mapActions 所以可以直接通过this调用,最后混入到了mixin中
            this.setMenuVisible(!this.menuVisible);
            if(!this.menuVisible) {
                this.setSettingVisible(-1);
                this.setFontFamilyVisible(false);
            }
        },
        onMaskClick(e) {
            const width = innerWidth;
            const offsetX = e.offsetX;
            if(offsetX > 0 && offsetX < width * 0.3) {
                this.prevPage();
                this.hideTitleAndMenu();
            } else if(offsetX > 0 && offsetX > width * 0.7) {
                this.nextPage();
                this.hideTitleAndMenu();
            } else {
                this.toggleTitleAndMenu();
            }
        },
        move(e) {
            let Y = 0;
            if(!this.firstOffsetY) {
                this.firstOffsetY = e.changedTouches[0].clientY;
            }else {
                Y = e.changedTouches[0].clientY - this.firstOffsetY;
                this.setOffsetY(Y); 
            }
            e.preventDefault();
            e.stopPropagation();
        },
        moveEnd(e) {
            //如果移动的Y小于20 就认定为翻页 否则就是上拉添加标签
            if (this.offsetY < 20) {
                 const OffsetX =  event.changedTouches[0].clientX - this.startX;
            // console.log(this.offsetY)
                // 向左向右滑动翻页 
                if(OffsetX > 40) {
                    this.prevPage();
                    //翻页是隐藏菜单栏和辩题栏
                    this.hideTitleAndMenu();
                }else if(OffsetX < -40) {
                    this.nextPage();
                    this.hideTitleAndMenu();
                }
                // event.preventDefault();
                event.stopPropagation();
            } else {  
              //松手了就让偏移量为0
                this.setOffsetY(0);
                this.firstOffsetY = null;
            }
           
        },
         //翻页滑动
        initTurnPage(event) {
            this.startX =  event.changedTouches? event.changedTouches[0].clientX : "";
        },
    },
    
};
</script>

<style scoped lang="scss">
@import '../../assets/style/global.scss';
.ebook-reader {
    width: 100%;
    height: 100%;
    overflow: hidden;
    .ebook-reader-mask {
        position: absolute;
        top: 0;
        left:0;
        width: 100%;
        height: 100%;
        z-index: 150;
        background-color: transparent;
    }
}
</style>





