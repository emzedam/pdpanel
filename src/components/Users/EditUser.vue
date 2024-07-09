<template>
    <div class="grid grid-cols-12 gap-3">
      <div class="col-span-9">
        <div class="mt-2 bg-white border border-gray-200 product-info rounded-xl">
          <div class="flex flex-col">
            <div class="overflow-x-auto">
              <div class="inline-block min-w-full">
                <div class="overflow-hidden">
                  <div class="flex items-center w-full p-4 border-b border-gray-200">
                    <i class="pl-2 text-2xl text-teal-500 fa-duotone fa-user-pen"></i
                    ><span>اطلاعات پایه</span>
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
                              <span>نام و نام خانوادگی</span>
                            </label>
                            <div class="flex mt-1 rounded-md">
                              <div
                                class="relative flex items-stretch flex-grow focus-within:z-10"
                              >
                                <div
                                  class="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none"
                                >
                                  <i
                                    class="fa-duotone fa-user text-indigo-500 h-5 w-5 flex leading-[1px] pr-1"
                                  ></i>
                                </div>
                                <input
                                  type="text"
                                  class="block w-full pr-10 border-gray-300 rounded-md focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                  placeholder="نام"
                                  v-model="userData.name"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
  
        <div class="mt-2 bg-white border border-gray-200 product-info rounded-xl">
          <div class="flex flex-col">
            <div class="overflow-x-auto">
              <div class="inline-block min-w-full">
                <div class="overflow-hidden">
                  <div class="flex items-center w-full p-4 border-b border-gray-200">
                    <i class="pl-2 text-2xl text-rose-500 fa-duotone fa-user-shield"></i
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
                              <span>نام کاربری</span>
                            </label>
                            <div class="flex mt-1 rounded-md">
                              <div
                                class="relative flex items-stretch flex-grow focus-within:z-10"
                              >
                                <div
                                  class="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none"
                                >
                                  <i
                                    class="fa-duotone fa-id-card text-indigo-500 h-5 w-5 flex leading-[1px] pr-1"
                                  ></i>
                                </div>
                                <input
                                  type="text"
                                  class="block w-full pr-10 border-gray-300 rounded-md focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                  placeholder="نام کاربری"
                                  v-model="userData.username"
                                />
                              </div>
                            </div>
                          </div>
                          <div class="relative col-span-4 sm:col-span-2">
                            <label
                              for="last-name"
                              class="flex pb-2 pr-1 text-sm font-medium text-gray-700"
                            >
                              <span>ایمیل</span>
                            </label>
                            <div class="flex mt-1 rounded-md">
                              <div
                                class="relative flex items-stretch flex-grow focus-within:z-10"
                              >
                                <div
                                  class="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none"
                                >
                                  <i
                                    class="fa-duotone fa-envelope text-indigo-500 h-5 w-5 flex leading-[1px] pr-1"
                                  ></i>
                                </div>
                                <input
                                  type="text"
                                  class="block w-full pr-10 border-gray-300 rounded-md focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                  placeholder="ایمیل"
                                  v-model="userData.email"
                                />
                              </div>
                            </div>
                          </div>
  
                          <div class="relative col-span-4 sm:col-span-2">
                            <label
                              for="last-name"
                              class="flex pb-2 pr-1 text-sm font-medium text-gray-700"
                            >
                              <span>شماره موبایل</span>
                            </label>
                            <div class="mt-1 input">
                              <div
                                class="relative flex items-stretch flex-grow focus-within:z-10"
                              >
                                <div
                                  class="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none"
                                >
                                  <i
                                    class="fa-duotone fa-mobile text-indigo-500 h-5 w-5 flex leading-[1px] pr-1"
                                  ></i>
                                </div>
                                <input
                                  type="number"
                                  class="block w-full pr-10 border-gray-300 rounded-md focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                  placeholder="شماره موبایل"
                                  v-model="userData.mobile"
                                />
  
                                <span class="inline-flex items-center mr-1">
                                  <div
                                    id="dropdownUsersButton"
                                    data-dropdown-toggle="dropdownUsers"
                                    data-dropdown-placement="bottom"
                                    class="flex items-center justify-center w-20 text-center border py-2.5 px-3 border-gray-300 rounded-md string required focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                    type="button"
                                  >
                                    <span class="pl-4 ltr"> +98 </span>
                                  </div>
  
                                  <div
                                    class="absolute inset-y-0 flex items-center pr-3 pointer-events-none left-1"
                                  >
                                    <img
                                      class="h-5 w-5 flex leading-[1px] pl-1"
                                      src="@/assets/flags/ir.svg"
                                    />
                                  </div>
                                </span>
                              </div>
                            </div>
                          </div>
  
                          <div class="relative col-span-4 sm:col-span-2">
                            <label
                              for="last-name"
                              class="flex pb-2 pr-1 text-sm font-medium text-gray-700"
                            >
                              <span>رمز عبور</span>
                            </label>
                            <div class="flex mt-1 rounded-md">
                              <div
                                class="relative flex items-stretch flex-grow focus-within:z-10"
                              >
                                <div
                                  class="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none"
                                >
                                  <i
                                    class="fa-duotone fa-user-lock text-indigo-500 h-5 w-5 flex leading-[1px] pr-1"
                                  ></i>
                                </div>
                                <input
                                  type="password"
                                  class="items-center block w-full pr-10 border-gray-300 rounded-md focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                  placeholder="رمز عبور"
                                  v-model="userData.password"
                                />
                                <div
                                  class="absolute inset-y-0 left-0 flex items-center justify-center pl-2 pr-2 cursor-pointer pointer-events-auto rounded-l-md"
                                >
                                  <i
                                    class="fa-duotone fa-eye text-indigo-500 h-5 w-5 flex leading-[1px] pl-1"
                                  ></i>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
      <div class="col-span-12 lg:col-span-3">
        <div class="mt-2 border border-gray-200 rounded-lg card">
          <div class="flex items-center w-full p-4 border-b border-gray-200">
            <i class="pl-2 text-2xl text-orange-500 fa-duotone fa-user"></i
            ><span>بروزرسانی اطلاعات کاربر</span>
          </div>
          <div class="block p-4">
            <button
              type="button"
              class="box-border relative z-0 inline-flex items-center justify-center w-full p-3 px-8 py-3 my-2 overflow-hidden font-medium text-white transition-all duration-300 bg-orange-500 rounded-md cursor-pointer group ease focus:outline-none"
              @click="edit_user()"
            >
              <span
                class="absolute bottom-0 right-0 w-8 h-20 -mb-8 -mr-5 transition-all duration-300 ease-out transform rotate-45 translate-x-1 bg-white opacity-10 group-hover:translate-x-0"
              ></span
              ><span
                class="absolute top-0 left-0 w-20 h-8 -mt-1 -ml-12 transition-all duration-300 ease-out transform -rotate-45 -translate-x-1 bg-white opacity-10 group-hover:translate-x-0"
              ></span
              ><span
                class="relative z-20 flex items-center justify-center w-full text-center"
                ><i class="pl-2 text-2xl text-white fa-duotone fa-arrow-up-from-bracket"></i
                ><span class="w-full">
                  {{ loading == true ? "در حال بروزرسانی ..." : "بروزرسانی کاربر" }}
                </span></span
              >
            </button>
          </div>
        </div>
      </div>
    </div>
</template>
  <script setup>
  import { ref, reactive, onMounted } from "vue";
  import { useStore } from "vuex";
  import { useRoute } from "vue-router";
  import Swal from 'sweetalert2'

  const route = useRoute();
  const store = useStore();
  const loading = ref(false);
  const user = ref(null);
  
  const userData = reactive({
    id: "",
    name: "",
    family: "",
    mobile: "",
    email: "",
    password: "",
    username: "",
  });
  
  onMounted(async () => {
    await get_user();
  });
  
  const get_user = async () => {
    const id = route.params.id;
    const result = await store.dispatch("get_user", { id: id });
    if (result.status == 200) {
      user.value = result.result;
      userData.id = user.value.id;
      userData.name = user.value.name;
      userData.mobile = user.value.mobile == null ? "" : user.value.mobile;
      userData.email = user.value.email == null ? "" : user.value.email;
      userData.username = user.value.username;
    }
  };
  
  const edit_user = async () => {
    if (validate_user_info() == true) {
      loading.value = true;

      // edit user
      const result = await store.dispatch("edit_user_account", {
        id: userData.id,
        name: userData.name,
        username: userData.username,
        email: userData.email,
        password: userData.password,
        mobile: userData.mobile
      });
  
      if (result.status == 200) {
        loading.value = false;
        showSwal("پیغام موفقیت آمیز" , `اطلاغات کاربر ${userData.name} بروزرسانی شد`, "success");
      } else {
        loading.value = false;
        showSwal("خطایی رخ داد" , result.message, "error");
      }
    }
  };
  
  const validate_user_info = () => {
    if (userData.name == "") {
      showSwal("خطایی رخ داد" , "نام نمیتونه خالی باشه", "error");
      return false;
    }else if (userData.username == "") {
      showSwal("خطایی رخ داد" , "نام کاربری نمیتواند خالی باشد", "error");
      return false;
    } else if (userData.mobile != "" && userData.mobile.toString().length != 10) {
      showSwal("خطایی رخ داد" , "شماره موبایل معتبر نیست", "error");
      return false;
    } else {
      return true;
    }
  };

  const showSwal = (title , text , icon) => {
    Swal.fire({
        title: title,
        text: text,
        icon: icon
    });
   }
  </script>
  
  <style>
  .vpd-next,
  .vpd-prev {
    width: 34px !important;
    text-align: center !important;
    display: flex !important;
    align-items: center !important;
    justify-content: center !important;
  }
  </style>
  