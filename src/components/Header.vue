<template>
  <header>
    <!-- Navbar -->
    <nav 
      v-if="authadmin != null"
      :class="NavMenu == true ? 'lg:mr-72 mr-0' : 'lg:mr-0 mr-0'"
      class="z-50 fixed flex flex-row flex-nowrap items-center justify-between mt-0 py-2 start-0 end-0 px-6 backdrop-blur bg-white/80 supports-backdrop-blur:bg-white/40 dark:bg-gray-800/80 border-b transition-all duration-500 ease-in-out ms-0"
      id="desktop-menu"
    >
      <!-- sidenav button-->
      <button
        type="button"
        class="inline-flex items-center justify-center text-gray-800 hover:text-gray-600 dark:text-gray-300 dark:hover:text-gray-200 focus:outline-none focus:ring-0"
        @click="open_navmenu_action()"
      >
        <span class="sr-only">Mobile menu</span>

        <i
          class="text-2xl"
          :class="
            NavMenu == false
              ? 'fa-light fa-bars-staggered'
              : '  fa-light fa-bars'
          "
        ></i>
      </button>

      <!-- Search -->


      <!-- menu -->
      <ul class="flex ltr:ml-auto rtl:mr-auto mt-2 font-fas">
        <!-- Customizer (Only for demo purpose) -->
        <li class="relative">
          <a
            href="https://blog.petoman.com"
            target="_blank"
            class="py-3 px-4 flex text-sm rounded-full focus:outline-none"
          >
            <span class="sr-only">link</span>
            <i class="text-2xl fa-light fa-globe"></i>
          </a>
        </li>

        <li class="relative">
          <router-link
            to="/add-posts"
            title="افزودن سریع نوشته"
            class="py-3 px-4 flex text-sm rounded-full focus:outline-none"
          >
            <span class="sr-only">add post</span>
            <i class="text-2xl fa-light fa-plus"></i>
          </router-link>
        </li>

        <!-- messages -->
        <li class="relative">
          <a
            href="javascript:;"
            class="py-3 px-4 flex text-sm rounded-full focus:outline-none"
            id="messages"
            @click="peyamha = !peyamha"
          >
            <div class="relative inline-block">
              <i class="text-2xl fa-light fa-bell"></i>
              <span
                class="flex justify-center absolute -top-2 ltr:-right-1 rtl:-left-1 text-center bg-orange-500 px-1 text-white rounded-full text-xs"
                ><span class="align-self-center">{{ default_notifications.length + notifications.length }}</span></span
              >
            </div>
          </a>

          <div
            v-if="peyamha"
            @click="peyamha = false"
            class="w-72 origin-top-right absolute ltr:-right-36 md:ltr:right-0 rtl:-left-36 md:rtl:left-0 rounded-b-xl top-full z-50 py-0.5 ltr:text-left rtl:text-right bg-white/80 backdrop-blur-sm mt-2 dark:bg-gray-800/70 border dark:border-gray-700"
          >
            <div
              class="p-3 font-normal border-b border-gray-200 dark:border-gray-700"
            >
              <div class="relative">
                <div class="font-bold">پیام ها</div>
              </div>
            </div>
            <div
              
              class="max-h-60 overflow-y-auto scrollbars scrollbar-thin scrollbar-track-white scrollbar-thumb-slate-200"
            >
              <div v-if="notifications.length != 0">
                <router-link :to="`/users/post/${notification.post_id}`" v-for="(notification , index) in notifications" :key="index">
                  <div
                    class="flex flex-wrap flex-row items-center border-b border-gray-200 dark:border-gray-700 dark:bg-gray-900 dark:bg-opacity-80 dark:hover:bg-opacity-20 py-2 hover:bg-gray-100 bg-gray-100"
                  >
                    <div class="flex-shrink max-w-full px-2 w-1/4 text-center">
                      <div class="relative">
                        <img
                          v-if="notification.profile == null"
                          src="/useravatar.webp"
                          class="h-12 w-12 rounded-full mx-auto"
                          alt="Daniel Esteban"
                        />
                        <img
                          v-else
                          :src="`${globalUrl}/storage/avatars/${notification.profile}`"
                          class="h-10 w-10 rounded-full mx-auto"
                          alt="Daniel Esteban"
                        />
                      </div>
                    </div>
                    <div class="flex-shrink max-w-full px-2 w-3/4">
                      <div class="text-sm font-bold">{{ notification.name }} </div>
                      <div class="text-gray-500 text-xs mt-1 truncate">
                        {{ notification.post_title }}
                      </div>
                      <div class="text-gray-500 text-xs mt-1">چند لحظه پیش</div>
                    </div>
                  </div>
                </router-link>
              </div>
              <div v-if="default_notifications.length != 0">
                <router-link :to="`/users/post/${notification.post_id}`" v-for="(notification , index) in default_notifications" :key="index">
                  <div
                    class="flex flex-wrap flex-row items-center border-b border-gray-200 dark:border-gray-700 dark:bg-gray-900 dark:bg-opacity-80 dark:hover:bg-opacity-20 py-2 hover:bg-gray-100 bg-gray-100"
                  >
                    <div class="flex-shrink max-w-full px-2 w-1/4 text-center">
                      <div class="relative">
                        <img
                          v-if="notification.profile == null"
                          src="/useravatar.webp"
                          class="h-12 w-12 rounded-full mx-auto"
                          alt="Daniel Esteban"
                        />
                        <img
                          v-else
                          :src="`${globalUrl}/storage/avatars/${notification.profile}`"
                          class="h-10 w-10 rounded-full mx-auto"
                          alt="Daniel Esteban"
                        />
                      </div>
                    </div>
                    <div class="flex-shrink max-w-full px-2 w-3/4">
                      <div class="text-sm font-bold">{{ notification.name }} </div>
                      <div class="text-gray-500 text-xs mt-1 truncate">
                        {{ notification.title }}
                      </div>
                      <div class="text-gray-500 text-xs mt-1">{{ notification.date }}</div>
                    </div>
                  </div>
                </router-link>
              </div>
              <div v-else>
                <p class="text-xs text-center py-5 text-gray-500">در حال حاظر اعلان جدیدی وجود ندارد</p>
              </div>
            </div>

            <div class="p-3 text-center font-normal">
              <router-link  to="/notifications" class="hover:underline">مشاهده همه پیام ها</router-link>
            </div>
          </div>
        </li>

        <!-- profile -->
        <li class="relative">
          <a
            href="javascript:;"
            class="px-3 flex text-sm rounded-full focus:outline-none"
            id="user-menu-button"
            @click="profile = !profile"
          >
            <div class="relative">
              <img
                v-if="authadmin.profile == null"
                class="h-10 w-10 rounded-full border border-gray-700 bg-gray-700"
                src="@/assets/images/avatar.png"
                alt="avatar"
              />
              <img
                v-else
                class="h-10 w-10 rounded-full border border-gray-700 bg-gray-700"
                :src="`${globalUrl}/storage/admin/${authadmin.profile}`"
                alt="avatar"
              />
              <span
                title="online"
                class="flex justify-center absolute -bottom-0.5 ltr:right-1 rtl:left-1 text-center bg-green-500 border border-white w-3 h-3 rounded-full"
              ></span>
            </div>
          </a>
          <transition-group name="modal">
            <ul
              v-if="profile"
              @click="profile = false"
              class="origin-top-right absolute ltr:right-0 rtl:left-0 rounded-b-xl top-full z-50 py-0.5 ltr:text-left rtl:text-right bg-white backdrop-blur-sm dark:bg-gray-800 border dark:border-gray-700 w-80 mt-2 font-semibold"
            >
              <li class="relative">
                <div
                  class="py-5 px-6 flex-shrink max-w-full w-full flex justify-between"
                >
                  <div class="font-semibold flex flex-col">
                    <a
                      href="#"
                      class="text-gray-800 dark:text-gray-300 hover:text-cyan-500"
                      > {{authadmin.name }} {{authadmin.family }}</a
                    >

                    <span class="text-sm font-light text-gray-600"
                      >{{authadmin.role == 1 ? 'مدیر کل' : 'کاربر عادی' }}</span
                    >
                  </div>
                  <router-link
                    :to="`/admin/profile/${authadmin.id}`"
                    class="text-gray text-sm mt-1 text-cyan-500 font-semibold"
                    >مشاهده پروفایل</router-link>
                </div>
              </li>
              <li class="relative">
                <hr
                  class="border-t border-gray-100 dark:border-gray-700 my-0"
                />
              </li>
              <li class="relative">
                <router-link
                  class="flex items-center w-full py-4 px-6 clear-both whitespace-nowrap hover:text-cyan-500"
                  to="/setting"
                >
                  <i
                    class="inline ltr:mr-2 rtl:ml-2 w-4 h-4 bi bi-gear fa-light fa-wallet"
                  ></i>
                  <span>تنظیمات</span>
                </router-link>
              </li>
              <li class="relative">
                <hr
                  class="border-t border-gray-100 dark:border-gray-700 my-0"
                />
              </li>
              <li class="relative">
                <hr
                  class="border-t border-gray-100 dark:border-gray-700 my-0"
                />
              </li>
              <li class="relative">
                <router-link
                  class="flex items-center w-full py-4 px-6 clear-both whitespace-nowrap hover:text-cyan-500"
                  :to="`/admin/profile/${authadmin.id}`"
                >
                  <i class="inline ltr:mr-2 rtl:ml-2 fa-light fa-user"></i>
                  پروفایل
                </router-link>
              </li>
              <li class="relative">
                <hr
                  class="border-t border-gray-100 dark:border-gray-700 my-0"
                />
              </li>
              <li class="relative" @click="doLogout()">
                <a
                  class="flex items-center w-full py-4 px-6 clear-both whitespace-nowrap text-red-500"
                  href="javascript:void(0)"
                >
                  <i
                    class="inline ltr:mr-2 rtl:ml-2 w-4 h-4 bi bi-box-arrow-in-right fa-light fa-sign-out-alt"
                  ></i>
                  <span>خروج از حساب</span>
                </a>
              </li>
            </ul>
          </transition-group>
        </li>
      </ul>
    </nav>
    <!-- End Navbar -->
  </header>
</template>

<script setup>
    import {ref , onMounted , computed , inject , watch} from 'vue'
    import {useStore} from 'vuex'
    import {useRouter} from 'vue-router'
    import Swal from 'sweetalert2'

    const store = useStore()
    const props = defineProps(["NavMenu"]);
    const emit = defineEmits(["open_navmenu_action"]);
    const profile = ref(false)
    const peyamha = ref(false)
    const router = useRouter()
    const notifications = ref([])
    const default_notifications = ref([])

    const authadmin = computed(() => {
      return store.getters["get_authadmin"]
    })

    watch(() => authadmin.value , async (newVal , oldVal) => {
      if(newVal != null) {
        const result = await store.dispatch('getDefaultNotifications' , {
          state: "limit"
        })
        if(result.status == 200) {
          default_notifications.value = result.result
        }
      }
    })

    watch(() => store.getters["get_notifications"] , (newVal , oldVal) => {
      notifications.value = newVal

      const audio = new Audio('/sounds/notif-sound.mp3');
      audio.play();
    })

    

  
   
    const open_navmenu_action = () => {
      emit("open_navmenu_action");
    };

    const doLogout = () => {
      Swal.fire({
          title: "هشدار",
          text: "آیا از خروج حساب کاربری خود مطمعنید؟",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#9d2c48",
          cancelButtonColor: "#555",
          cancelButtonText: "خیر",
          confirmButtonText: "بله",
        }).then(async (result) => {
          if (result.isConfirmed) {
            const result = await store.dispatch("do_logout_admin")
            if(result.status == 200){
              window.location.href="/login"
            }else{
              showSwal("پیغام خطا" , result.message , "error")
            }
          }
        });
    }

    const showSwal = (title , text , icon) => {
      Swal.fire({
        title: title,
        text: text,
        icon: icon
      });
    }

    // const clear_notifications = () => {
    //   default_notifications.value = []
    //   store.commit("clear_notifications")
    // }
</script>
