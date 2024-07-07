<template>
  <div class="relative w-full h-full inset-0 z-[100]">
    <span
        class="fixed bg-gray-900 backdrop-blur-[2px] bg-opacity-30 w-full h-full inset-x-0 top-0 block lg:hidden"
        @click="close_navmenu_action()"
        :class="NavMenu == true ? 'w-full translate-x-0 transition-opacity' : 'hidden'"
      ></span>
    <nav
      :class="NavMenu == true ? 'translate-x-0 w-64' : 'translate-x-80'"
      class="p-3 fixed transition-all duration-500 ease-in-out h-screen bg-white/90 dark:bg-gray-800/90 border-l z-[1000] right-0 top-0"
    >
      <div class="h-full overflow-y-auto scrollbars">
        <!--logo-->
        <div class="mh-18 text-center py-5">
          <a href="#" class="relative">
            <h2
              class="text-2xl font-semibold text-gray-200 px-4 max-h-9 overflow-hidden hidden-compact"
            >
              <img
                class="inline-block w-20 h-auto ltr:mr-2 rtl:ml-2 -mt-1"
                src="@/assets/images/petman.png"
              />
            </h2>
          </a>
        </div>
  
        <!-- Sidebar menu -->
        <ul class="flex flex-col gap-1">
          <li>
            <router-link to="/" class="active">
              <!-- هنگام اکتیو ایتم -->
              <!-- text-white bg-gradient-to-r  from-green-400/70 to-green-500 via-primary/50 -->
              <button
                class="middle none font-fa font-bold center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-2 rounded-lg active:opacity-[0.85] active:bg-green-50/20 focus:bg-gray-100 focus:text-gray-500 text-gray-500 w-full flex justify-between items-center gap-4 px-4 capitalize"
                type="button"
              >
                <span class="pr-1">
                  <i class="fa-light fa-gauge text-[18px]"></i>
                </span>
                <p
                  class="block w-full text-base antialiased font-medium leading-relaxed text-right capitalize font-fa"
                >
                  پیشخوان
                </p>
              </button>
            </router-link>
          </li>
  
          <li>
            <router-link to="/help" class="active">
              <!-- هنگام اکتیو ایتم -->
              <!-- text-white bg-gradient-to-r  from-green-400/70 to-green-500 via-primary/50 -->
              <button
                class="middle none font-fa font-bold center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-2 rounded-lg active:opacity-[0.85] active:bg-green-50/20 focus:bg-gray-100 focus:text-gray-500 text-gray-500 w-full flex justify-between items-center gap-4 px-4 capitalize"
                type="button"
              >
                <span class="pr-1">
                  <i class="fa-light fa-dollar text-[18px]"></i>
                </span>
                <p
                  class="block w-full text-base antialiased font-medium leading-relaxed text-right capitalize font-fa"
                >
                  کمک های مالی
                </p>
              </button>
            </router-link>
          </li>
  
          <li>
            <button
              @click="openSubMenu(0)"
              class="middle none font-fa font-bold center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-2 rounded-lg text-gray-500 active:opacity-[0.85] active:bg-green-50/20 focus:bg-gray-100 focus:text-gray-500 w-full flex justify-between items-center gap-4 px-4 capitalize"
              type="button"
            >
              <span class="pr-1">
                <i class="fa-light fa-blog text-[18px] text-slate-500"></i>
              </span>
              <p
                class="block w-full text-base antialiased font-medium leading-relaxed text-right capitalize font-fa"
              >
                وبلاگ
              </p>
              <i
                :class="submenuIndex == 0 ? 'fa-chevron-down' : 'fa-chevron-left'"
                class="fa-light text-[15px] text-slate-500"
              ></i>
            </button>
            <!-- Dropdown menu -->
            <collapse-transition>
              <div v-if="submenuIndex == 0" class="z-10 px-1 font-fa">
                <ul
                  class="text-sm text-gray-700 dark:text-gray-400"
                  aria-labelledby="dropdownNavbarButton"
                >
                  <li>
                    <RouterLink to="/add-news">
                      <span
                        class="flex items-center justify-between w-full gap-4 px-4 py-2 text-xs font-bold text-gray-500 capitalize transition-all rounded-lg middle none font-fa center disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none bg-gradient-to-r"
                      >
                        <span class="pr-1">
                          <i
                            class="fa-light fa-draw-circle text-[12px] text-gray-500"
                          ></i>
                        </span>
                        <p
                          class="block w-full text-base antialiased font-medium leading-relaxed text-right capitalize font-fa"
                        >
                          افزودن نوشته جدید
                        </p>
                      </span>
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink to="/news">
                      <span
                        class="flex items-center justify-between w-full gap-4 px-4 py-2 text-xs font-bold text-gray-500 capitalize transition-all rounded-lg middle none font-fa center disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none bg-gradient-to-r"
                      >
                        <span class="pr-1">
                          <i
                            class="fa-light fa-draw-circle text-[12px] text-gray-500"
                          ></i>
                        </span>
                        <p
                          class="block w-full text-base antialiased font-medium leading-relaxed text-right capitalize font-fa"
                        >
                          همه نوشته ها
                        </p>
                      </span>
                    </RouterLink>
                  </li>
  
                  <li>
                    <RouterLink to="/add-category">
                      <span
                        class="flex items-center justify-between w-full gap-4 px-4 py-2 text-xs font-bold text-gray-500 capitalize transition-all rounded-lg middle none font-fa center disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none bg-gradient-to-r"
                      >
                        <span class="pr-1">
                          <i
                            class="fa-light fa-draw-circle text-[12px] text-gray-500"
                          ></i>
                        </span>
                        <p
                          class="block w-full text-base antialiased font-medium leading-relaxed text-right capitalize font-fa"
                        >
                          دسته بندی ها
                        </p>
                      </span>
                    </RouterLink>
                  </li>
                </ul>
              </div>
            </collapse-transition>
          </li>
  
          <li>
            <button
              @click="openSubMenu(1)"
              class="middle none font-fa font-bold center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-2 rounded-lg text-gray-500 active:opacity-[0.85] active:bg-green-50/20 focus:bg-gray-100 focus:text-gray-500 w-full flex justify-between items-center gap-4 px-4 capitalize"
              type="button"
            >
              <span class="pr-1">
                <i class="fa-light fa-page text-[18px] text-slate-500"></i>
              </span>
              <p
                class="block w-full text-base antialiased font-medium leading-relaxed text-right capitalize font-fa"
              >
                صفحات
              </p>
              <i
                :class="submenuIndex == 1 ? 'fa-chevron-down' : 'fa-chevron-left'"
                class="fa-light text-[15px] text-slate-500"
              ></i>
            </button>
            <!-- Dropdown menu -->
            <collapse-transition>
              <div v-if="submenuIndex == 1" class="z-10 px-1 font-fa">
                <ul
                  class="text-sm text-gray-700 dark:text-gray-400"
                  aria-labelledby="dropdownNavbarButton"
                >
                  <li>
                    <RouterLink to="/add-page">
                      <span
                        class="flex items-center justify-between w-full gap-4 px-4 py-2 text-xs font-bold text-gray-500 capitalize transition-all rounded-lg middle none font-fa center disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none bg-gradient-to-r"
                      >
                        <span class="pr-1">
                          <i
                            class="fa-light fa-draw-circle text-[12px] text-gray-500"
                          ></i>
                        </span>
                        <p
                          class="block w-full text-base antialiased font-medium leading-relaxed text-right capitalize font-fa"
                        >
                          افزودن صفحه جدید
                        </p>
                      </span>
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink to="/pages">
                      <span
                        class="flex items-center justify-between w-full gap-4 px-4 py-2 text-xs font-bold text-gray-500 capitalize transition-all rounded-lg middle none font-fa center disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none bg-gradient-to-r"
                      >
                        <span class="pr-1">
                          <i
                            class="fa-light fa-draw-circle text-[12px] text-gray-500"
                          ></i>
                        </span>
                        <p
                          class="block w-full text-base antialiased font-medium leading-relaxed text-right capitalize font-fa"
                        >
                          همه صفحات
                        </p>
                      </span>
                    </RouterLink>
                  </li>
                </ul>
              </div>
            </collapse-transition>
          </li>

          <li>
            <button
              @click="openSubMenu(12)"
              class="middle none font-fa font-bold center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-2 rounded-lg text-gray-500 active:opacity-[0.85] active:bg-green-50/20 focus:bg-gray-100 focus:text-gray-500 w-full flex justify-between items-center gap-4 px-4 capitalize"
              type="button"
            >
              <span class="pr-1">
                <i class="fa-light fa-video text-[18px] text-slate-500"></i>
              </span>
              <p
                class="block w-full text-base antialiased font-medium leading-relaxed text-right capitalize font-fa"
              >
                مستندات حمایت
              </p>
              <i
                :class="submenuIndex == 12 ? 'fa-chevron-down' : 'fa-chevron-left'"
                class="fa-light text-[15px] text-slate-500"
              ></i>
            </button>
            <!-- Dropdown menu -->
            <collapse-transition>
              <div v-if="submenuIndex == 12" class="z-10 px-1 font-fa">
                <ul
                  class="text-sm text-gray-700 dark:text-gray-400"
                  aria-labelledby="dropdownNavbarButton"
                >
                  <li>
                    <RouterLink to="/add-mostanad">
                      <span
                        class="flex items-center justify-between w-full gap-4 px-4 py-2 text-xs font-bold text-gray-500 capitalize transition-all rounded-lg middle none font-fa center disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none bg-gradient-to-r"
                      >
                        <span class="pr-1">
                          <i
                            class="fa-light fa-draw-circle text-[12px] text-gray-500"
                          ></i>
                        </span>
                        <p
                          class="block w-full text-base antialiased font-medium leading-relaxed text-right capitalize font-fa"
                        >
                          افزودن مستند جدید
                        </p>
                      </span>
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink to="/mostanadat">
                      <span
                        class="flex items-center justify-between w-full gap-4 px-4 py-2 text-xs font-bold text-gray-500 capitalize transition-all rounded-lg middle none font-fa center disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none bg-gradient-to-r"
                      >
                        <span class="pr-1">
                          <i
                            class="fa-light fa-draw-circle text-[12px] text-gray-500"
                          ></i>
                        </span>
                        <p
                          class="block w-full text-base antialiased font-medium leading-relaxed text-right capitalize font-fa"
                        >
                          همه مستندات
                        </p>
                      </span>
                    </RouterLink>
                  </li>
                </ul>
              </div>
            </collapse-transition>
          </li>
  
          <li>
            <button
              @click="openSubMenu(2)"
              class="middle none font-fa font-bold center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-2 rounded-lg text-gray-500 active:opacity-[0.85] active:bg-green-50/20 focus:bg-gray-100 focus:text-gray-500 w-full flex justify-between items-center gap-4 px-4 capitalize"
              type="button"
            >
              <span class="pr-1">
                <i
                  class="fa-light fa-handshake-angle text-[18px] text-slate-500"
                ></i>
              </span>
              <p
                class="block w-full text-base antialiased font-medium leading-relaxed text-right capitalize font-fa"
              >
                قرارهای مهربانی
              </p>
              <i
                :class="submenuIndex == 2 ? 'fa-chevron-down' : 'fa-chevron-left'"
                class="fa-light text-[15px] text-slate-500"
              ></i>
            </button>
            <!-- Dropdown menu -->
            <collapse-transition>
              <div v-if="submenuIndex == 2" class="z-10 px-1 font-fa">
                <ul
                  class="text-sm text-gray-700 dark:text-gray-400"
                  aria-labelledby="dropdownNavbarButton"
                >
                  <li>
                    <RouterLink to="/add-garar">
                      <span
                        class="flex items-center justify-between w-full gap-4 px-4 py-2 text-xs font-bold text-gray-500 capitalize transition-all rounded-lg middle none font-fa center disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none bg-gradient-to-r"
                      >
                        <span class="pr-1">
                          <i
                            class="fa-light fa-draw-circle text-[12px] text-gray-500"
                          ></i>
                        </span>
                        <p
                          class="block w-full text-base antialiased font-medium leading-relaxed text-right capitalize font-fa"
                        >
                          افزودن قرار جدید
                        </p>
                      </span>
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink to="/gararha">
                      <span
                        class="flex items-center justify-between w-full gap-4 px-4 py-2 text-xs font-bold text-gray-500 capitalize transition-all rounded-lg middle none font-fa center disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none bg-gradient-to-r"
                      >
                        <span class="pr-1">
                          <i
                            class="fa-light fa-draw-circle text-[12px] text-gray-500"
                          ></i>
                        </span>
                        <p
                          class="block w-full text-base antialiased font-medium leading-relaxed text-right capitalize font-fa"
                        >
                          همه قرارها
                        </p>
                      </span>
                    </RouterLink>
                  </li>
                </ul>
              </div>
            </collapse-transition>
          </li>
  
          <li>
            <button
              @click="openSubMenu(3)"
              class="middle none font-fa font-bold center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-2 rounded-lg text-gray-500 active:opacity-[0.85] active:bg-green-50/20 focus:bg-gray-100 focus:text-gray-500 w-full flex justify-between items-center gap-4 px-4 capitalize"
              type="button"
            >
              <span class="pr-1">
                <i
                  class="fa-light fa-people-group text-[18px] text-slate-500"
                ></i>
              </span>
              <p
                class="block w-full text-base antialiased font-medium leading-relaxed text-right capitalize font-fa"
              >
                حامیان
              </p>
              <i
                :class="submenuIndex == 3 ? 'fa-chevron-down' : 'fa-chevron-left'"
                class="fa-light text-[15px] text-slate-500"
              ></i>
            </button>
            <!-- Dropdown menu -->
            <collapse-transition>
              <div v-if="submenuIndex == 3" class="z-10 px-1 font-fa">
                <ul
                  class="text-sm text-gray-700 dark:text-gray-400"
                  aria-labelledby="dropdownNavbarButton"
                >
                  <li>
                    <RouterLink to="/add-hami">
                      <span
                        class="flex items-center justify-between w-full gap-4 px-4 py-2 text-xs font-bold text-gray-500 capitalize transition-all rounded-lg middle none font-fa center disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none bg-gradient-to-r"
                      >
                        <span class="pr-1">
                          <i
                            class="fa-light fa-draw-circle text-[12px] text-gray-500"
                          ></i>
                        </span>
                        <p
                          class="block w-full text-base antialiased font-medium leading-relaxed text-right capitalize font-fa"
                        >
                          اضافه کردن حامی جدید
                        </p>
                      </span>
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink to="/hamian">
                      <span
                        class="flex items-center justify-between w-full gap-4 px-4 py-2 text-xs font-bold text-gray-500 capitalize transition-all rounded-lg middle none font-fa center disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none bg-gradient-to-r"
                      >
                        <span class="pr-1">
                          <i
                            class="fa-light fa-draw-circle text-[12px] text-gray-500"
                          ></i>
                        </span>
                        <p
                          class="block w-full text-base antialiased font-medium leading-relaxed text-right capitalize font-fa"
                        >
                          همه حامیان
                        </p>
                      </span>
                    </RouterLink>
                  </li>
                </ul>
              </div>
            </collapse-transition>
          </li>
  
          <li>
            <button
              @click="openSubMenu(11)"
              class="middle none font-fa font-bold center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-2 rounded-lg text-gray-500 active:opacity-[0.85] active:bg-green-50/20 focus:bg-gray-100 focus:text-gray-500 w-full flex justify-between items-center gap-4 px-4 capitalize"
              type="button"
            >
              <span class="pr-1">
                <i class="fa-light fa-users text-[18px] text-slate-500"></i>
              </span>
              <p
                class="block w-full text-base antialiased font-medium leading-relaxed text-right capitalize font-fa"
              >
                کاربران
              </p>
              <i
                :class="
                  submenuIndex == 11 ? 'fa-chevron-down' : 'fa-chevron-left'
                "
                class="fa-light text-[15px] text-slate-500"
              ></i>
            </button>
            <!-- Dropdown menu -->
            <collapse-transition>
              <div v-if="submenuIndex == 11" class="z-10 px-1 font-fa">
                <ul
                  class="text-sm text-gray-700 dark:text-gray-400"
                  aria-labelledby="dropdownNavbarButton"
                >
                  <li>
                    <RouterLink to="/add-user">
                      <span
                        class="flex items-center justify-between w-full gap-4 px-4 py-2 text-xs font-bold text-gray-500 capitalize transition-all rounded-lg middle none font-fa center disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none bg-gradient-to-r"
                      >
                        <span class="pr-1">
                          <i
                            class="fa-light fa-draw-circle text-[12px] text-gray-500"
                          ></i>
                        </span>
                        <p
                          class="block w-full text-base antialiased font-medium leading-relaxed text-right capitalize font-fa"
                        >
                          افزودن کاربر جدید
                        </p>
                      </span>
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink to="/users">
                      <span
                        class="flex items-center justify-between w-full gap-4 px-4 py-2 text-xs font-bold text-gray-500 capitalize transition-all rounded-lg middle none font-fa center disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none bg-gradient-to-r"
                      >
                        <span class="pr-1">
                          <i
                            class="fa-light fa-draw-circle text-[12px] text-gray-500"
                          ></i>
                        </span>
                        <p
                          class="block w-full text-base antialiased font-medium leading-relaxed text-right capitalize font-fa"
                        >
                          همه کاربران
                        </p>
                      </span>
                    </RouterLink>
                  </li>

                </ul>
              </div>
            </collapse-transition>
          </li>
  
          <li>
            <router-link to="/theme/">
              <button
                class="middle none font-fa font-bold center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-2 rounded-lg text-gray-500 active:opacity-[0.85] active:bg-green-50/20 focus:bg-gray-100 focus:text-gray-500 w-full flex justify-between items-center gap-4 px-4 capitalize"
                type="button"
              >
                <span class="pr-1">
                  <i
                    class="fa-light fa-layer-group text-[18px] text-slate-500"
                  ></i>
                </span>
                <p
                  class="block w-full text-base antialiased font-medium leading-relaxed text-right capitalize font-fa"
                >
                  قالب سایت
                </p>
              </button>
            </router-link>
          </li>
  
          <li>
            <router-link to="/setting/">
              <button
                class="middle none font-fa font-bold center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-2 rounded-lg text-gray-500 active:opacity-[0.85] active:bg-green-50/20 focus:bg-gray-100 focus:text-gray-500 w-full flex justify-between items-center gap-4 px-4 capitalize"
                type="button"
              >
                <span class="pr-1">
                  <i class="fa-light fa-gear text-[18px] text-slate-500"></i>
                </span>
                <p
                  class="block w-full text-base antialiased font-medium leading-relaxed text-right capitalize font-fa"
                >
                  تنظیمات سایت
                </p>
              </button>
            </router-link>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script setup>
import {ref} from 'vue'
const props = defineProps(["NavMenu"]);
const emit = defineEmits(["close_navmenu_action"]);
const submenuIndex = ref(null);

const openSubMenu = (index) => {
  if (submenuIndex.value == index) {
    submenuIndex.value = null;
  } else {
    submenuIndex.value = index;
  }
};

const close_navmenu_action = () => {
  emit("close_navmenu_action");
};
</script>
