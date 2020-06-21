export default {
    //book模块
    fileName : state => state.book.fileName,
    menuVisible: state => state.book.menuVisible,
    titleVisible: state => state.book.titleVisible,
    settingVisible: state => state.book.settingVisible,
    fontdefault: state => state.book.fontdefault,
    currentBook: state=> state.book.currentBook,
    fontFamilyDefault: state => state.book.fontFamilyDefault,
    fontFamilyVisible: state => state.book.fontFamilyVisible,
    themeDefault: state => state.book.themeDefault,
    bookAvailable: state => state.book.bookAvailable,
    progress: state => state.book.progress,
    section: state => state.book.section,
    cover: state => state.book.cover,
    metadata: state => state.book.metadata,
    navigation: state => state.book.navigation,
    offsetY: state => state.book.offsetY,
    isBookmark: state => state.book.isBookmark,
    bookmarkText: state => state.book.bookmarkText,

    //store模块
    hotSearchOffsetY: state => state.store.hotSearchOffsetY,
    flapCardVisible: state => state.store.flapCardVisible,
    isEditMode: state => state.store.isEditMode,
    shelfList: state => state.store.shelfList,
    shelfTitleVisible: state => state.store.shelfTitleVisible,
    shelfSelected:state => state.store.shelfSelected,
  


    //user模块
    tabbarActive:state => state.user.tabbarActive,
    tabbarVisible:state => state.user.tabbarVisible,
    currentUser:state => state.user.currentUser,

}