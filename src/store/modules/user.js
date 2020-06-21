export default {
    state:{
        //当前是tabbar的那个按钮
        tabbarActive:'/shelf',
        //tabbar组件是否显示
        tabbarVisible:true,
        //当前登录的用户
        currentUser:null,
    },
    mutations:{
        SET_TABBARACTIVE(state,tabbarActive) {
            state.tabbarActive = tabbarActive
        },
        SET_TABBARVISIBLE(state,tabbarVisible) {
            state.tabbarVisible = tabbarVisible
        },
        SET_CURRENTUSER(state,currentUser) {
            state.currentUser = currentUser
        },
    },
}