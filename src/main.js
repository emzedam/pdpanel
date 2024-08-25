import './assets/css/main.css'
import './assets/fonts/icons.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from "./router";
import VueCookies from 'vue3-cookies'
import { useCookies } from "vue3-cookies";
import axios from '@/axios'
import store from './store/index.js'
import Default from '@/layouts/Default.vue'
import Auth from '@/layouts/Auth.vue'
import CollapseTransition from "@/components/CollapseTransition.vue";
import Vue3PersianDatetimePicker from 'vue3-persian-datetime-picker'

import persionToEnglish from '../plugins/persionToEnglish.js'
import CKEditor from '@ckeditor/ckeditor5-vue';




// import Echo from 'laravel-echo';
// import Pusher from 'pusher-js';

// window.Pusher = Pusher;

// window.Echo = new Echo({
//     broadcaster: "pusher",
//     key: '565163eab3b900a7ff53',
//     cluster: 'mt1',
//     encrypted: true,
// });
    
    
const { cookies } = useCookies();
const app = createApp(App)

// app.provide('$echo', echo);
app.use(CKEditor);
app.config.globalProperties.globalUrl = 'https://apiblog.petoman.com/'

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
