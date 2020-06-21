export default {
    state: {
        //book对象
        currentBook:null,
        //书名
        fileName:'',
        //菜单栏、标题栏显示隐藏
        menuVisible:false,
        //设置项的显示隐藏 -1:不显示 0:字号 1:主题 2：进度条 3：目录
        settingVisible:-1,
         //退出前的默认字号
        fontdefault:"16px",
        //默认字体
        fontFamilyDefault:'Default',
        //选择字体选项面板是否显示隐藏
        fontFamilyVisible:false,
        //默认主题
        themeDefault:'default',
        //图书是否被加载完毕
        bookAvailable:false,
        //图书阅读的进度
        progress:0,
        //分页的页数 用于上一章或下一章
        section:0,
        //图书封面图片
        cover:null,
        //图书出版信息
        metadata:null,
        //目录信息
        navigation:null,
        //下拉的偏移量
        offsetY:0,
        //是否为书签页
        isBookmark:null,
        //存储标签的内容
        bookmarkText:null,

    },
    mutations: {
        SET_CURRENTBOOK(state,currentBook) {
            state.currentBook = currentBook;
        },
        SET_FILE(state,fileName) {
            state.fileName = fileName;
        },
        SET_MENTVISIBLE(state,menuVisible) {
            state.menuVisible = menuVisible;
        },
        SET_SETTINGVISIBLE(state,settingVisible) {
            state.settingVisible = settingVisible;
        },
        SET_FONTDEFAULT(state,fontdefault) {
            state.fontdefault = fontdefault;
        },
        SET_FONTFAMILYDEFAULT(state,fontFamilyDefault) {
            state.fontFamilyDefault = fontFamilyDefault;
        },
        SET_FONTFAMILYVISIBLE(state,fontFamilyVisible) {
            state.fontFamilyVisible = fontFamilyVisible;
        },
        SET_THEMEDEFAULT(state,themeDefault) {
            state.themeDefault = themeDefault;
        },
        SET_BOOKAVAIABLE(state,bookAvailable) {
            state.bookAvailable = bookAvailable;
        },
        SET_PROGRESS(state,progress) {
            state.progress = progress;
        },
        SET_SECTION(state,section) {
            state.section = section;
        },
        SET_COVER(state,cover) {
            state.cover = cover;
        },
        SET_METADATA(state,metadata) {
            state.metadata = metadata;
        },
        SET_NAVIGATION(state,navigation) {
            state.navigation = navigation;
        },
        SET_OFFSETY(state,offsetY) {
            state.offsetY = offsetY;
        },
        SET_ISBOOKMARK(state,isBookmark) {
            state.isBookmark = isBookmark;
        },
        SET_BOOKMARKTEXT(state,bookmarkText) {
            state.bookmarkText = bookmarkText;
        },
    },
   
}

