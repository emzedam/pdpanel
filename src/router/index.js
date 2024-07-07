import store from '@/store/index.js'
import { useCookies } from "vue3-cookies";
import HTTP from '@/axios/index.js'
import { createRouter, createWebHistory } from 'vue-router'
// auth
import Login from "../views/Auth/Login.vue";

import HomeView from '../views/HomeView.vue'
import SettingView from '../views/SettingView.vue'
import ThemeView from '../views/ThemeView.vue'
import HelpDetailView from '../views/HelpDetailView.vue'
import Help from '../views/HelpView.vue'
// قرارها
import AddGarar from '../views/Gararha/AddGararView.vue'
import EditGarar from '../views/Gararha/EditGararView.vue'
import Gararha from '../views/Gararha/GararhaView.vue'
// حامیان
import Hamian from '../views/Hamian/HamianView.vue'
import AddHamian from '../views/Hamian/AddHamiView.vue'
import EditHamian from '../views/Hamian/EditHamiView.vue'
// صفحات
import AddPage from '../views/Pages/AddPageView.vue'
import EditPage from '../views/Pages/EditPageView.vue'
import Pages from '../views/Pages/PagesView.vue'
// اخبار
import AddNews from '../views/News/AddNewsView.vue'
import EditNews from '../views/News/EditNewsView.vue'
import News from '../views/News/NewsView.vue'
// مستندات
import AddMostanad from '../views/Mostanad/AddMostanad.vue'
import EditMostanad from '../views/Mostanad/EditMostanad.vue'
import Mostanadat from '../views/Mostanad/Mostanadat.vue'
// کاربران
import AddUser from '../views/Users/AddUserView.vue'
import ProfileView from '../views/Users/ProfileView.vue'
import UsersView from '../views/Users/UsersView.vue'

// دسته بندی ها
import AddCategory from '../views/Category/Add.vue'
import EditCategory from '../views/Category/Edit.vue'

// not found page
import NotFound from "@/views/NotFound/Index.vue";

const { cookies } = useCookies();
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/login",
      name: "login",
      component: Login,
      meta: {
        layout: 'auth',
        guestAuth: true
      }
    },
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: { requiresAuth: true }
    },{
      path: '/setting',
      name: 'setting',
      component:SettingView,
      meta: { requiresAuth: true }
    }, {
      path: '/theme',
      name: 'theme',
      component:ThemeView,
      meta: { requiresAuth: true }
    }, {
      path: '/help',
      name: 'help',
      component:Help,
      meta: { requiresAuth: true }
    }, {
      path: '/detail/:id',
      name: 'detail',
      component:HelpDetailView,
      meta: { requiresAuth: true }
    }, {
      path: '/add-garar',
      name: 'AddGarar',
      component: AddGarar,
      meta: { requiresAuth: true }
    }, {
      path: '/edit-garar/:id',
      name: 'EditGarar',
      component:EditGarar,
      meta: { requiresAuth: true }
    }, {
      path: '/gararha',
      name: 'Gararha',
      component:Gararha,
      meta: { requiresAuth: true }
    }, {
      path: '/hamian',
      name: 'Hamian',
      component:Hamian,
      meta: { requiresAuth: true }
    }, {
      path: '/add-hami',
      name: 'AddHamian',
      component:AddHamian,
      meta: { requiresAuth: true }
    }, {
      path: '/edit-hami/:id',
      name: 'EditHamian',
      component:EditHamian,
      meta: { requiresAuth: true }
    }, {
      path: '/add-page',
      name: 'AddPage',
      component:AddPage,
      meta: { requiresAuth: true }
    }, {
      path: '/edit-page/:id',
      name: 'EditPage',
      component:EditPage,
      meta: { requiresAuth: true }
    }, {
      path: '/pages',
      name: 'Pages',
      component:Pages,
      meta: { requiresAuth: true }
    }, {
      path: '/add-news',
      name: 'AddNews',
      component:AddNews,
      meta: { requiresAuth: true }
    }, {
      path: '/edit-news/:id',
      name: 'EditNews',
      component:EditNews,
      meta: { requiresAuth: true }
    }, {
      path: '/add-mostanad',
      name: 'AddMostanad',
      component:AddMostanad,
      meta: { requiresAuth: true }
    }, {
      path: '/edit-mostanad/:id',
      name: 'EditMostanad',
      component:EditMostanad,
      meta: { requiresAuth: true }
    }, {
      path: '/mostanadat',
      name: 'Mostanadat',
      component:Mostanadat,
      meta: { requiresAuth: true }
    }, {
      path: '/add-category',
      name: 'AddCategory',
      component:AddCategory,
      meta: { requiresAuth: true }
    }, {
      path: '/edit-category/:id',
      name: 'EditCategory',
      component:EditCategory,
      meta: { requiresAuth: true }
    }, {
      path: '/news',
      name: 'News',
      component:News,
      meta: { requiresAuth: true }
    }, {
      path: '/add-user',
      name: 'AddUser',
      component:AddUser,
      meta: { requiresAuth: true }
    }, {
      path: '/profile/:id',
      name: 'Profile',
      component:ProfileView,
      meta: { requiresAuth: true }
    }, {
      path: '/users',
      name: 'Users',
      component:UsersView,
      meta: { requiresAuth: true }
    },{
      path: "/:notFound",
      name: 'Notfound',
      component: NotFound,
      meta: {
        layout: 'auth'
      }
    },
  ]
})


router.beforeEach(async (to, from) => {
  
  if (cookies.get('_token') != undefined) {
    const { data } = await HTTP.get('/admin/auth/admin', {
        headers: { Authorization: "Bearer " + cookies.get('_token') }
    }).catch((error) => {
      if(error.response.status == 401){
        return { name: 'login' }
      }
    })

   
    if (data) {
      if (Object.keys(data).length != 0) {
        await store.commit('set_admin_token', data.admin)
      }
    }
    
    
  }


  // See if any of the matched routes has meta "requiresAuth"
  if (to.meta.requiresAuth && store.getters.get_authadmin == null) {
    return { name: 'login' }
  }else if(to.meta.guestAuth && store.getters.get_authadmin != null){
    return { name: 'home' }
  }

 
});

export default router
