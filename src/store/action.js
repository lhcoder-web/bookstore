//减少action方法调用的代码 使得组件可以直接通过this.方法(options)调用
export default {
     //在这里调用mutations中的方法  return 可以返回promise对象
    //book模块
    setFileName(context,fileName) {
        return context.commit('SET_FILE',fileName);
    },
    setMenuVisible(context,menuVisible) {
        return context.commit('SET_MENTVISIBLE',menuVisible);
    },
    setSettingVisible(context,settingVisible) {
        return context.commit('SET_SETTINGVISIBLE',settingVisible);
    },
    setFontdefault(context,fontdefault) {
        return context.commit('SET_FONTDEFAULT',fontdefault);
    },
    setCurrentBook(context,currentBook) {
        return context.commit('SET_CURRENTBOOK',currentBook);
    },
    setFontFamilyDefault(context,fontFamilyDefault) {
        return context.commit('SET_FONTFAMILYDEFAULT',fontFamilyDefault);
    },
    setFontFamilyVisible(context,fontFamilyVisible) {
        return context.commit('SET_FONTFAMILYVISIBLE',fontFamilyVisible);
    },
    setThemeDefault(context,themeDefault) {
        return context.commit('SET_THEMEDEFAULT',themeDefault);
    },
    setBookAvailable(context,bookAvailable) {
        return context.commit('SET_BOOKAVAIABLE',bookAvailable);
    },
    setProgress(context,progrsess) {
        return context.commit('SET_PROGRESS',progrsess);
    },
    setSection(context,section) {
        return context.commit('SET_SECTION',section);
    },
    setCover(context,cover) {
        return context.commit('SET_COVER',cover);
    },
    setMetadata(context,metadata) {
        return context.commit('SET_METADATA',metadata);
    },
    setNavigation(context,navigation) {
        return context.commit('SET_NAVIGATION',navigation);
    },
    setOffsetY(context,offsetY) {
        return context.commit('SET_OFFSETY',offsetY);
    },
    setIsBookmark(context,isBookmark) {
        return context.commit('SET_ISBOOKMARK',isBookmark);
    },
    setBookmarkText(context,bookmarkText) {
        return context.commit('SET_BOOKMARKTEXT',bookmarkText);
    },


    //store模块
    setHotSearchOffsetY(context,hotSearchOffsetY) {
        return context.commit('SET_HOTSEARCHOFFSETY',hotSearchOffsetY);
    },
    setFlapCardVisible(context,flapCardVisible) {
        return context.commit('SET_FLAPCARDVISIBLE',flapCardVisible);
    },
    setIsEditMode(context,isEditMode) {
        return context.commit('SET_ISEDITMODE',isEditMode);
    },
    setShelfList(context,shelfList) {
        return context.commit('SET_SHELFLIST',shelfList);
    },
    setShelfTitleVisible(context,shelfTitleVisible) {
        return context.commit('SET_SHELFTITLEVISIBLE',shelfTitleVisible);
    },
    setShelfSelected(context,shelfSelected) {
        return context.commit('SET_SHELFSELECTED',shelfSelected);
    },



    //user模块
    setTabbarVisible(context,tabbatVisible) {
        return context.commit('SET_TABBARVISIBLE',tabbatVisible);
    },
    setTabbarActive(context,tabbarActive) {
        return context.commit('SET_TABBARACTIVE',tabbarActive);
    },
    setCurrentUser(context,currentUser) {
        return context.commit('SET_CURRENTUSER',currentUser);
    },

}