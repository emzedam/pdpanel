<template>

  <div class="root font-fa relative">

    <main class="relative">
        <div class="flex min-h-full">
            <div class="flex flex-1 flex-col justify-center py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
                <div class="mx-auto w-full max-w-sm lg:w-96">
                    <div>
                        <div
                            class="bg-hamian text-white font-bold text-2xl w-16 h-16 rounded-lg flex items-center justify-center animate-flash">
                            <i class="fa fa-user animate-shake hover:animate-shake animate-flash"></i>
                        </div>

                        <h2 class="mt-8 text-2xl font-bold tracking-tight text-gray-900">ورود به مدیریت حامیان پت
                        </h2>
                        <p class="mt-4 text-xs text-gray-600">

                            <a href="#" class="font-light text-gray-600 hover:text-gray-500 mt-4">
                                جهت ورود به مدیریت لطفا نام کاربری و پسورد را به درستی وارد نمایید</a>
                        </p>
                    </div>

                    <div class="mt-8">


                        <div class="mt-6">
                            <form @submit.prevent="do_admin_login()" class="space-y-6">



                              <p id="outlined_error_help"
                              v-if="error != ''"
                              class="mt-2 text-sm text-red-600 dark:text-red-400">
                              {{ error }}</p>

                                <div>
                                    <div class="relative">

                                        <input type="text"
                                            class="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 appearance-none dark:text-white dark:border-gray-500 border-gray-200 dark:focus:border-rgray-500 focus:outline-none focus:ring-0 focus:border-red-600 peer"
                                            v-model="data.username"
                                         />
                                        <div
                                            class="absolute inset-y-0 left-2 flex items-center pl-3 pointer-events-none">
                                            <i
                                                class="fa-duotone fa-user text-hamian h-5 w-5 flex leading-[1px] pr-1"></i>
                                        </div>
                                        <!-- <label for="outlined_error" class="absolute text-sm text-red-600 dark:text-red-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 start-1 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto w-2/4 py-1">شماره موبایل</label> -->
                                        <label 
                                            class="absolute text-sm text-gray-600 dark:text-gray-300 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 start-1 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto w-2/4 py-1">نام
                                            کاربری
                                        </label>

                                    </div>
                                    
                                </div>

                                <div>
                                    <div class="relative">

                                        <input type="password"
                                            class="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 appearance-none dark:text-white dark:border-gray-500 border-gray-200 dark:focus:border-rgray-500 focus:outline-none focus:ring-0 focus:border-red-600 peer"
                                            id="signup_password"
                                            v-model="data.password"
                                            />
                                        <div
                                            class="absolute inset-y-0 left-2 flex items-center pl-3 pointer-events-none">
                                            <i
                                                class="fa-duotone fa-lock text-hamian h-5 w-5 flex leading-[1px] pr-1"></i>
                                        </div>
                                        <!-- <label for="outlined_error" class="absolute text-sm text-red-600 dark:text-red-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 start-1 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto w-2/4 py-1">شماره موبایل</label> -->
                                        <label for="signup_password"
                                            class="absolute text-sm text-gray-600 dark:text-gray-300 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 start-1 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto w-2/4 py-1">رمز
                                            عبور

                                        </label>

                                    </div>
                                </div>






                                <div>
                                    <button type="submit"
                                       v-if="!isLoding"
                                        class="flex w-full justify-center rounded-md border border-transparent bg-hamian py-4 px-4 text-sm font-medium text-white shadow-sm hover:bg-hamian/90 focus:outline-none focus:ring-0 focus:ring-hamian focus:ring-offset-2">
                                        ورود به مدیریت</button>
                                    <button type="submit"
                                       v-if="isLoding"
                                            class="flex w-full justify-center rounded-md border border-transparent bg-hamian py-4 px-4 text-sm font-medium text-white shadow-sm hover:bg-hamian/90 focus:outline-none focus:ring-0 focus:ring-hamian focus:ring-offset-2">
                                          در حال ارسال ... </button>

                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div class="relative hidden  lg:flex lg:items-center lg:justify-center w-full h-screen bg-hamian/10">
                <p class="text-6xl font-bold text-orange-500">پت دانیم</p>
            </div>
        </div>
    </main>
</div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      error: "",
      isLoding: false,
      data: {
        username: "",
        password: "",
      },
    };
  },
  methods: {
    async do_admin_login() {
      this.isLoding = true;
      const send_data = await this.$store.dispatch("do_admin_login", this.data);
      if (send_data.status == "unauthorized") {
        this.isLoding = false;
        this.error = "هیچ کاربری با این اطلاعات در سیستم یافت نشد";
      } else if (send_data.status == "success") {
        this.isLoding = false;
        this.error = "";

        const token = send_data.access_token;

        this.$cookies.set("_token", token, {
          maxAge: 60 * 60 * 24,
        });

        await this.$store.dispatch("set_admin_token", token);

        return this.$router.push("/");
      }
    },
  },
};
</script>

<style lang="css"></style>
