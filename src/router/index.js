import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

const routes = [
  {
    path:'/',
    redirect:'/store'
  },
  {
    path:'/login',
    component:()=> import('../components/content/login.vue')
  },
  {
    path:'/register',
    component:()=> import('../components/content/register.vue')
  },
  {
    path:'/ebook',
    component:()=> import('../views/ebook/index.vue'),
    children:[
      {
        path:':fileName',
        component:()=> import('../components/ebook/EbookReader.vue')
      },
    ]
  },
  {
    path:'/store',
    component:()=> import('../views/store/index.vue'),
    redirect:'/store/shelf',
    children:[
      {
        path:'home',
        component:()=> import('../views/store/storeHome.vue')
      },
      {
        path:'list',
        component:()=> import('../views/store/StoreList.vue')
      },
      {
        path:'detail',
        component:()=> import('../views/store/StoreDetail.vue')
      },
      {
        path:'shelf',
        component:()=> import('../views/store/storeShelf.vue')
      },
      {
        path:'speaking',
        component:()=> import('../views/store/StoreSpeaking.vue')
      },
      {
        path:'vip',
        component:()=> import('../views/store/StoreVip.vue')
      },
      {
        path:'profile',
        component:()=> import('../views/store/profile/profile.vue')
      },
      {
        path:'myuser',
        component:()=> import('../views/store/profile/children/listsChildren/myUser.vue')
      },
      {
        path:"myvip/:uname",
        component:()=> import('../views/store/profile/children/listsChildren/myVip.vue')
      },
      {
        path:'ticket',
        component:()=> import('../views/store/profile/children/listsChildren/myTicket.vue')
      },
      {
        path:'book',
        component:()=> import('../views/store/profile/children/listsChildren/myBook.vue')
      },
      {
        path:'download',
        component:()=> import('../views/store/profile/children/listsChildren/myDownload.vue')
      },
      {
        path:'tips',
        component:()=> import('../views/store/profile/children/listsChildren/myTips.vue')
      },
    ]
  },
]

const router = new VueRouter({
  routes,
})

export default router
