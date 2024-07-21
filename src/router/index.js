import store from '@/store/index.js'
import { useCookies } from "vue3-cookies";
import HTTP from '@/axios/index.js'
import { createRouter, createWebHistory } from 'vue-router'
// auth
import Login from "../views/Auth/Login.vue";

import HomeView from '../views/HomeView.vue'
import SettingView from '../views/SettingView.vue'

// صفحات
import AddPage from '../views/Pages/AddPageView.vue'
import EditPage from '../views/Pages/EditPageView.vue'
import Pages from '../views/Pages/PagesView.vue'
// اخبار
import AddPosts from '../views/Posts/AddPostsView.vue'
import EditPosts from '../views/Posts/EditPostsView.vue'
import Posts from '../views/Posts/PostsView.vue'

// ادمین ها
import AddAdmin from '../views/Admins/AddUserView.vue'
import AdminProfileView from '../views/Admins/ProfileView.vue'
import AdminsView from '../views/Admins/UsersView.vue'

// کاربران
import Users from '../views/Users/users.vue'
import viewUser from '../views/Users/userView.vue'
import EditUser from '../views/Users/edit-user.vue'
import AddUser from '../views/Users/add-new-user.vue'

// دسته بندی ها
import AddCategory from '../views/Category/Add.vue'
import EditCategory from '../views/Category/Edit.vue'

// not found page
import NotFound from "@/views/NotFound/Index.vue";

// theme control
import ThemeControl from "@/views/Theme/index.vue";

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
      meta: { 
        requiresAuth: true,
       
      }
    }, {
      path: '/setting',
      name: 'setting',
      component: SettingView,
      meta: { 
        requiresAuth: true,
        requiresRole: 1
      }
    }, {
      path: '/theme-setting',
      name: 'theme',
      component: ThemeControl,
      meta: { 
        requiresAuth: true,
        requiresRole: 1
      }
    }, {
      path: '/add-page',
      name: 'AddPage',
      component: AddPage,
      meta: { 
        requiresAuth: true,
      }
    }, {
      path: '/edit-page/:id',
      name: 'EditPage',
      component:EditPage,
      meta: { 
        requiresAuth: true,
      }
    }, {
      path: '/pages',
      name: 'Pages',
      component:Pages,
      meta: { 
        requiresAuth: true,
       
      }
    }, {
      path: '/add-posts',
      name: 'AddPosts',
      component:AddPosts,
      meta: { 
        requiresAuth: true,
      }
    }, {
      path: '/edit-posts/:id',
      name: 'EditPosts',
      component:EditPosts,
      meta: { 
        requiresAuth: true,
       
      }
    }, {
      path: '/add-category',
      name: 'AddCategory',
      component:AddCategory,
      meta: { 
        requiresAuth: true,
      }
    }, {
      path: '/edit-category/:id',
      name: 'EditCategory',
      component:EditCategory,
      meta: { 
        requiresAuth: true,
      }
    }, {
      path: '/posts',
      name: 'Posts',
      component:Posts,
      meta: { 
        requiresAuth: true,
      }
    }, {
      path: '/add-admin',
      name: 'AddAdmin',
      component:AddAdmin,
      meta: { 
        requiresAuth: true,
        requiresRole: 1
      }
    }, {
      path: '/admin/profile/:id',
      name: 'Profile',
      component:AdminProfileView,
      meta: { 
        requiresAuth: true,
        requiresRole: 1
      }
    }, {
      path: '/admins',
      name: 'admins',
      component:AdminsView,
      meta: { 
        requiresAuth: true,
        requiresRole: 1
      }
    },,
    {
      path: '/users',
      name: 'Users',
      component:Users,
      meta: {
        requiresAuth: true,
        requiresRole: 1
      }
    },{
      path: '/add-user',
      name: 'AddUser',
      component:AddUser,
      meta: {
        requiresAuth: true,
        requiresRole: 1
      }
    }, {
      path: '/user/profile/:id',
      name: 'viewUser',
      component:viewUser,
      meta: { 
        requiresAuth: true,
        requiresRole: 1
      }
    }, {
      path: '/edit-user/:id',
      name: 'EditUser',
      component: EditUser,
      meta: { 
        requiresAuth: true,
        requiresRole: 1
      }
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


// authenticate admins
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

// check role and accessibility admins to routes
router.beforeEach((to, from, next) => {
  if(store.state.authadmin != null) {
    if(to.matched.some(record => record.meta.requiresRole)) {
      if (to.meta.requiresRole != 1) {

        
        next({ name: 'home' });

        
      }else {
        next();
      }
    }else {
      next();
    }
  }else {
    next();
  }
});




export default router
