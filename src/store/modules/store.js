export default {
    state:{
        //搜索页面的偏移量
        hotSearchOffsetY:0,
        ////推荐页面的动画效果 翻转卡片是否显示
        flapCardVisible:false,
        //是否进入编辑模式
        isEditMode:false,
        //书架的列表书架
        shelfList:[],
        //书架图书选中的列表
        shelfSelected:[],
        //书架标题是否显示
        shelfTitleVisible:true,
        //当前是tabbar的那个按钮
        tabbarActive:'/shelf',
        //tabbar组件是否显示
        tabbarVisible:'true',
    },
    mutations:{
        SET_HOTSEARCHOFFSETY(state,offsetY) {
            state.hotSearchOffsetY = offsetY
        },
        SET_FLAPCARDVISIBLE(state,flapCardVisible) {
            state.flapCardVisible = flapCardVisible
        },


        SET_ISEDITMODE(state,isEditMode) {
            state.isEditMode = isEditMode
        },
        SET_SHELFLIST(state,shelfList) {
            state.shelfList = shelfList
        },
        SET_SHELFTITLEVISIBLE(state,shelfTitleVisible) {
            state.shelfTitleVisible = shelfTitleVisible
        },
        SET_SHELFSELECTED(state,shelfSelected) {
            state.shelfSelected = shelfSelected
        },
        SET_TABBARACTIVE(state,tabbarActive) {
            state.tabbarActive = tabbarActive
        },
        SET_TABBARVISIBLE(state,tabbarVisible) {
            state.tabbarVisible = tabbarVisible
        }
    },
}