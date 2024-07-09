import './assets/css/main.css'
import './assets/fonts/icons.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from "./router";
import VueCookies from 'vue3-cookies'
import { useCookies } from "vue3-cookies";
const { cookies } = useCookies();
import axios from '@/axios'
import store from './store/index.js'
import Default from '@/layouts/Default.vue'
import Auth from '@/layouts/Auth.vue'
import CollapseTransition from "@/components/CollapseTransition.vue";
import Vue3PersianDatetimePicker from 'vue3-persian-datetime-picker'
import { QuillEditor } from "@vueup/vue-quill";
import "@/assets/css/vue-quill.snow.css";
import persionToEnglish from '../plugins/persionToEnglish.js'


import Echo from 'laravel-echo';
import Pusher from 'pusher-js';

const echo = new Echo({
    broadcaster: 'pusher',
    key: '87543cca355daa4c6d73',
    cluster: 'mt1',
    encrypted: true,
    authEndpoint: 'https://apiblog.petoman.com/broadcasting/auth',  // تنظیم مسیر صحیح احراز هویت
    auth: {
        headers: {
            Authorization: `Bearer ${cookies.get("_token")}` // اگر نیاز به توکن احراز هویت دارید
        }
    }
});


const app = createApp(App)

app.provide('$echo', echo);
app.config.globalProperties.globalUrl = 'https://hamiapi.petoman.com/'


app.component('QuillEditor', QuillEditor)
app.component("CollapseTransition", CollapseTransition);
app.component("default-layout", Default);
app.component("auth-layout", Auth);
app.component('DatePicker', Vue3PersianDatetimePicker)
app.use(persionToEnglish)
app.use(router);
app.provide('$axios' , axios);
app.use(store);

app.use(VueCookies);

app.mount('#app')
