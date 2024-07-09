<template>
  <div class="mt-2 bg-white border border-gray-200 product-info rounded-xl">
    <div class="flex flex-col">
      <div class="inline-block min-w-full">
        <div class="flex items-center w-full p-4 border-b border-gray-200">
          <i class="pl-2 text-2xl text-indigo-500 fa-duotone fa-user-shield"></i
          ><span>اطلاعات دسترسی حساب</span>
        </div>
        <div class="w-full p-6 mx-auto mt-2">
          <div class="inline-block w-full input">
            <div class="relative rounded-md">
              <div class="grid grid-cols-4 gap-6">
                <div class="relative col-span-4 sm:col-span-2">
                  <label
                    for="last-name"
                    class="flex pb-2 pr-1 text-sm font-medium text-gray-700"
                  >
                    <span> رمز عبور</span>
                  </label>
                  <div class="flex mt-1 rounded-md">
                    <div class="relative flex items-stretch flex-grow focus-within:z-10">
                      <div
                        class="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none"
                      >
                        <i
                          class="fa-duotone fa-user-lock text-indigo-500 h-5 w-5 flex leading-[1px] pr-1"
                        ></i>
                      </div>
                      <input
                        :type="passwordFieldType"
                        v-model="password"
                        type="password"
                        class="items-center block w-full pr-10 border-gray-300 rounded-md focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        placeholder=" رمز عبور"
                      />
                      <div
                        class="absolute inset-y-0 left-0 flex items-center justify-center pl-2 pr-2 cursor-pointer pointer-events-auto rounded-l-md"
                      >
                        <div>
                          <i
                            @click="switchVisibility"
                            v-if="passwordFieldType == 'password'"
                            class="fa-duotone fa-eye text-indigo-500 h-1 pt-1 w-5 flex leading-[1px] pl-1"
                          ></i>
                          <!-- هنگام مخفی کردن پسورد ایکون زیر نمایش داده شود به صورت Toggle
                          --><i
                            @click="switchVisibility"
                            v-if="passwordFieldType == 'text'"
                            class="fa-duotone fa-eye-slash text-indigo-500 h-5 w-5 flex leading-[1px] pl-1"
                          ></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="relative col-span-4 sm:col-span-2">
                  <label
                    for="last-name"
                    class="flex pb-2 pr-1 text-sm font-medium text-gray-700"
                  >
                    <span>تکرار رمز عبور</span>
                  </label>
                  <div class="flex mt-1 rounded-md">
                    <div class="relative flex items-stretch flex-grow focus-within:z-10">
                      <div
                        class="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none"
                      >
                        <i
                          class="fa-duotone fa-user-lock text-indigo-500 h-5 w-5 flex leading-[1px] pr-1"
                        ></i>
                      </div>
                      <input
                        :type="repeatPasswordType"
                        v-model="repeat_password"
                        class="items-center block w-full pr-10 border-gray-300 rounded-md focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        placeholder="تکرار رمز عبور"
                      />
                      <div
                        class="absolute inset-y-0 left-0 flex items-center justify-center pl-2 pr-2 cursor-pointer pointer-events-auto rounded-l-md"
                      >
                        <div>
                          <i
                            @click="switchRepeatVisibility"
                            v-if="repeatPasswordType == 'password'"
                            class="fa-duotone fa-eye text-indigo-500 h-1 pt-1 w-5 flex leading-[1px] pl-1"
                          ></i>
                          <!-- هنگام مخفی کردن پسورد ایکون زیر نمایش داده شود به صورت Toggle -->
                          <i
                            @click="switchRepeatVisibility"
                            v-if="repeatPasswordType == 'text'"
                            class="fa-duotone fa-eye-slash text-indigo-500 h-5 w-5 flex leading-[1px] pl-1"
                          ></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="col-span-4">
                  <div>
                    <button
                      v-if="loading == false"
                      @click="change_user_password()"
                      class="ripple w-full ml-3 text-center inline-block rounded bg-indigo-500 px-6 py-2.5 text-sm font-medium uppercase leading-tight text-white shadow shadow-indigo-50 transition duration-150 ease-in-out hover:bg-indigo-700 focus:bg-indigo-700 focus:outline-none focus:ring-0 active:bg-indigo-800"
                    >
                      تغییر رمز عبور
                    </button>
                    <button
                      v-if="loading == true"
                      class="ripple w-full ml-3 text-center inline-block rounded bg-indigo-500 px-6 py-2.5 text-sm font-medium uppercase leading-tight text-white shadow shadow-indigo-50 transition duration-150 ease-in-out hover:bg-indigo-700 focus:bg-indigo-700 focus:outline-none focus:ring-0 active:bg-indigo-800"
                    >
                      در حال پردازش ...
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- class="mt-2 bg-white border border-gray-200 product-info rounded-xl lg:hidden block" -->
  <div class="mt-2 bg-white border border-gray-200 product-info rounded-xl hidden">
    <div class="flex flex-col">
      <div class="inline-block min-w-full">
        <div class="flex items-center w-full p-4 border-b border-gray-200">
          <i class="pl-2 text-2xl text-indigo-500 fa-duotone fa-history"></i
          ><span>سابقه‌ی فعالیت‌های امنیتی </span>
        </div>
        <div class="w-full mx-auto mt-2">
          <div class="inline-block w-full input">
            <div class="relative rounded-md">
              <div class="grid grid-cols-1">
                <template v-for="item in recents">
                  <li
                    class="flex items-center justify-between border-t border-gray-200 divide-gray-200 cursor-pointer"
                    v-on:click.prevent="RecentDevice = !RecentDevice"
                  >
                    <div class="flex px-6 py-2 text-right whitespace-nowrap">
                      <div class="pr-0">
                        <div class="text-base font-semibold flex items-center">
                          <i
                            class="ml-2 fa fa-shield-check text-xl text-orange-500"
                            v-if="item.hasIcon != 'checkbox'"
                          ></i
                          >{{ item.TypeActivities }}
                        </div>
                      </div>
                    </div>

                    <div class="px-6 py-3" scope="col">
                      <div class="flex justify-center cursor-pointer item-center">
                        <div
                          class="flex items-center justify-center w-4 font-extrabold transform hover:text-gray-500 hover:scale-110"
                        >
                          <i
                            :class="{
                              'fa-minus': RecentDevice,

                              'fa-plus': !RecentDevice,
                            }"
                            class="w-4 h-4 text-indigo-500 transition-transform transform fa-solid"
                            aria-hidden="true"
                          ></i>
                        </div>
                      </div>
                    </div>
                  </li>

                  <collapse-transition>
                    <div
                      v-if="RecentDevice"
                      class="border-transparent border-y border-b-slate-200"
                    >
                      <div colspan="100" class="p-0">
                        <div class="border-l border-r rounded-b-lg">
                          <div class="pb-4">
                            <div class="min-w-full overflow-x-auto is-scrollbar-hidden">
                              <div class="w-full text-left is-hoverable first:border-t">
                                <div class="border-b border-gray-200 divide-gray-200">
                                  <div
                                    class="flex px-6 py-3 text-right border-b whitespace-nowrap"
                                  >
                                    <div
                                      class="flex items-center text-base font-semibold"
                                    >
                                      کشور:

                                      <span
                                        class="mr-1 text-sm font-normal text-gray-700"
                                      >
                                        {{ item.Location }}</span
                                      >
                                    </div>
                                  </div>

                                  <div
                                    class="flex px-6 py-3 text-right border-b whitespace-nowrap"
                                  >
                                    <div
                                      class="flex items-center text-base font-semibold"
                                    >
                                      مدل دستگاه:

                                      <span
                                        class="mr-1 text-sm font-normal text-gray-700"
                                      >
                                        {{ item.DeviceModel }}</span
                                      >
                                    </div>
                                  </div>

                                  <div
                                    class="flex px-6 py-3 text-right border-b whitespace-nowrap"
                                  >
                                    <div
                                      class="flex items-center text-base font-semibold"
                                    >
                                      سیستم عامل:

                                      <span
                                        class="mr-1 text-sm font-normal text-gray-700"
                                      >
                                        {{ item.Os }}</span
                                      >
                                    </div>
                                  </div>

                                  <div
                                    class="flex px-6 py-3 text-right border-b whitespace-nowrap"
                                  >
                                    <div
                                      class="flex items-center text-base font-semibold"
                                    >
                                      مرورگر:

                                      <span
                                        class="mr-1 text-sm font-normal text-gray-700"
                                      >
                                        {{ item.Browser }}</span
                                      >
                                    </div>
                                  </div>

                                  <div
                                    class="flex px-6 py-3 text-right border-b whitespace-nowrap"
                                  >
                                    <div
                                      class="flex items-center text-base font-semibold"
                                    >
                                      آی پی:

                                      <a
                                        href="/mapbox"
                                        class="mr-1 text-sm font-normal text-blue-700"
                                      >
                                        {{ item.Ip }}</a
                                      >
                                    </div>
                                  </div>

                                  <div
                                    class="flex px-6 py-3 text-right border-b whitespace-nowrap"
                                  >
                                    <div
                                      class="flex items-center text-base font-semibold"
                                    >
                                      آخرین فعالیت:

                                      <span
                                        class="mr-1 text-sm font-normal text-gray-700"
                                      >
                                        {{ item.RecentActivities }}</span
                                      >
                                    </div>
                                  </div>

                                  <div
                                    class="flex px-6 py-3 text-right border-b whitespace-nowrap"
                                  >
                                    <div
                                      class="flex items-center text-base font-semibold"
                                    >
                                      ساعت:

                                      <span
                                        class="mr-1 text-sm font-normal text-gray-700"
                                      >
                                        {{ item.RecentTime }}</span
                                      >
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div class="mr-6 text-right">
                              <button
                                v-on:click.prevent="RecentDevice = false"
                                class="btn mt-2 h-8 rounded px-3 text-xs+ font-medium text-primary hover:bg-primary/20 focus:bg-primary/20 active:bg-primary/25"
                              >
                                بستن
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </collapse-transition>
                </template>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- class="RecentDevice Desktop mb-4 mt-4 hidden lg:block" -->
  <div class="RecentDevice Desktop mb-4 mt-4 hidden">
    <div class="table-responsive">
      <div class="border rounded-lg w-full">
        <div class="flex items-center w-full p-4 border-b border-gray-200">
          <i class="pl-2 text-2xl text-indigo-500 fa-duotone fa-history"></i
          ><span>سابقه‌ی فعالیت‌های امنیتی </span>
        </div>
        <div class="grid grid-cols-4 flex-row items-center text-right w-full p-4">
          <div class="text-truncate">مرورگر</div>
          <div class="text-truncate">دستگاه</div>
          <div class="text-truncate">مکان</div>
          <div class="text-truncate">تاریخ ورود</div>
        </div>

        <div
          class="grid grid-cols-4 flex-row items-center text-right w-full py-4 border-t p-4"
        >
          <div class="text-truncate flex items-center">
            <i class="fa-brands fa-windows text-blue-500 ti-xs ml-2"></i>
            <strong>کروم در ویندوز</strong>
          </div>
          <div class="text-truncate">آیفون 13 پرو</div>
          <div class="text-truncate">ایران</div>
          <div class="text-truncate">10 اردیبهشت 1402 ساعت 22:23</div>
        </div>
        <div
          class="grid grid-cols-4 flex-row items-center text-right w-full py-4 border-t p-4"
        >
          <div class="text-truncate flex items-center">
            <i class="fa-brands fa-apple text-gray-500 ti-xs ml-2"></i>
            <strong>کروم در مک</strong>
          </div>
          <div class="text-truncate">آیفون 13 پرو</div>
          <div class="text-truncate">ایران</div>
          <div class="text-truncate">10 اردیبهشت 1402 ساعت 22:23</div>
        </div>
        <div
          class="grid grid-cols-4 flex-row items-center text-right w-full py-4 border-t p-4"
        >
          <div class="text-truncate flex items-center">
            <i class="fa fa-mobile text-green-500 ti-xs ml-2"></i>
            <strong>کروم در آیفون</strong>
          </div>
          <div class="text-truncate">آیفون 13 پرو</div>
          <div class="text-truncate">ایران</div>
          <div class="text-truncate">10 اردیبهشت 1402 ساعت 22:23</div>
        </div>
        <div
          class="grid grid-cols-4 flex-row items-center text-right w-full py-4 border-t p-4"
        >
          <div class="text-truncate flex items-center">
            <i class="fa-brands fa-android text-pink-500 ti-xs ml-2"></i>
            <strong>کروم در ویندوز</strong>
          </div>
          <div class="text-truncate">آیفون 13 پرو</div>
          <div class="text-truncate">ایران</div>
          <div class="text-truncate">10 اردیبهشت 1402 ساعت 22:23</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import "vue3-toastify/dist/index.css";
import { useStore } from "vuex";
import Swal from 'sweetalert2'

export default {
  data() {
    return {
      password: "",
      repeat_password: "",
      passwordFieldType: "password",
      repeatPasswordType: "password",
      recents: [
        {
          id: 1,
          TypeActivities: "ورود به حساب کاربری",
          hasIcon: "windows",
          Color: "text-indigo-500",
          Browser: "Firefox 111.0",
          DeviceModel: "دسکتاپ",
          Os: "Windows 10 NT 10.0",
          Location: "ایران",
          RecentActivities: "2 فروردین 1402",
          RecentTime: "22:23:34",
          Ip: "2.144.233.14",
        },
        {
          id: 1,
          TypeActivities: "ورود به حساب کاربری",
          hasIcon: "windows",
          Color: "text-indigo-500",
          Browser: "Firefox 111.0",
          DeviceModel: "دسکتاپ",
          Os: "Windows 10 NT 10.0",
          Location: "ایران",
          RecentActivities: "2 فروردین 1402",
          RecentTime: "22:23:34",
          Ip: "2.144.233.14",
        },
        {
          id: 1,
          TypeActivities: "ورود به حساب کاربری",
          hasIcon: "windows",
          Color: "text-indigo-500",
          Browser: "Firefox 111.0",
          DeviceModel: "دسکتاپ",
          Os: "Windows 10 NT 10.0",
          Location: "ایران",
          RecentActivities: "2 فروردین 1402",
          RecentTime: "22:23:34",
          Ip: "2.144.233.14",
        },
      ],
      ShowDetailes: false,
      isOpenA: false,
      Export: false,
      Status: false,
      Expanded: null,
      MobileCountrySelect: false,
      RecentDevice: false,
      loading: false,
    };
  },
  methods: {
    switchVisibility() {
      this.passwordFieldType =
        this.passwordFieldType === "password" ? "text" : "password";
    },
    switchRepeatVisibility() {
      this.repeatPasswordType =
        this.repeatPasswordType === "password" ? "text" : "password";
    },
    showSwal(title , text , icon){
      Swal.fire({
          title: title,
          text: text,
          icon: icon
      });
    },
    async change_user_password() {
      if (this.password == "" || this.repeat_password == "") {
        this.showSwal("خطایی رخ داد" , "لطفا هر دو فیلد را تکمیل کنید", "error");
      } else if (this.password === this.repeat_password) {
        this.loading = true;
        const result = await this.$store.dispatch("change_user_password", {
          user_id: this.$route.params.id,
          password: this.password,
          repeat_password: this.repeat_password,
        });

        if (result.status == 200) {
          this.loading = false;
          this.password = "";
          this.repeat_password = "";

          this.showSwal("پیغام موفقیت آمیز" , result.message, "success");
        } else {
          this.loading = false;
          this.showSwal("خطایی رخ داد" , result.message, "error");
        }
      } else {
        this.showSwal("خطایی رخ داد" , "گذرواژه با تکرار گذرواژه تطابقت ندارد", "error");
      }
    },
  },
};
</script>
