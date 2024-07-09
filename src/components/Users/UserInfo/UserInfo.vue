<template>
  <div class="col-span-12 bg-white border rounded-lg lg:col-span-4 relative">
    <div
      class="clients be before:contents before:bg-indigo-500 before:h-28 before:w-full before:top-0 before:left-0 before:absolute before:z-auto before:rounded-t-lg before:shadow-md"
      data-tile="user"
    ></div>
    <div class="card z-auto relative">
      <div class="mt-4 card-body">
        <div class="user-avatar-section relative">
          <div class="flex flex-col items-center">
            <div class="avatar relative mt-4 mb-3">
              <img
                class="rounded-lg border-4 border-white img-fluid w-30 h-30 shadow object-cover"
                src="/5.png"
                alt="User avatar"
              />
            </div>

            <div class="text-center user-info">
              <h4 class="mb-2 text-sm">
                {{ userInfo.name }}
                <i class="fa-solid fa-badge-check mr-1 text-orange-500"></i>
              </h4>

              <span class="text-sm badge bg-label-secondary">
                کاربر عادی
              </span>
            </div>
          </div>
        </div>

        <div class="flex flex-wrap justify-around pt-3 pb-4 mt-3 border-bottom">
          <div class="flex items-start gap-2 mt-3 ml-2">
            <span
              class="flex items-center justify-center w-12 h-12 p-2 text-2xl rounded badge bg-label-primary"
            >
              <i class="fa-duotone text-sm  fa-list"></i>
            </span>

            <div>
              <small>تعداد نوشته ها</small>

              <p class="mb-0 font-semibold text-sm ">{{ userInfo.posts.length }} عدد</p>
            </div>
          </div>
        </div>

        <p class="px-2 mt-4 text-orange-500 small text-uppercase">
          <i class="fa fa-info bg-indigo-100"></i> <span>جزئیات کاربر</span>
        </p>

        <div class="info-container">
          <ul class="pt-4 list-unstyled">
            <li class="p-2 border-b border-t">
              <span class="ml-1 font-semibold">نام :</span>

              <span class="text-gray-700">{{ userInfo.name }}</span>
            </li>

            <li class="p-2 border-b border-t">
              <span class="ml-1 font-semibold">وضعیت:</span>

              <span class="badge bg-label-success" v-if="userInfo.status == 1"
                >فعال</span
              >
              <span class="badge bg-label-danger" v-if="userInfo.status == 0"
                >غیر فعال</span
              >
              <span class="badge bg-label-danger" v-if="userInfo.status == 2"
                >مسدود</span
              >
            </li>

            <li class="p-2">
              <span class="ml-1 font-semibold">شماره موبایل:</span>

              <span class="text-gray-700">{{ userInfo.mobile == null ? '-' : userInfo.mobile }}</span>
            </li>

            <li class="p-2">
              <span class="ml-1 font-semibold">ایمیل :</span>

              <span class="text-gray-700">{{ userInfo.email == null ? '-' : userInfo.email }}</span>
            </li>

            <li class="p-2 border-b border-t">
              <span class="ml-1 font-semibold">تعداد نوشته:</span>

              <span class="text-gray-700">{{ userInfo.posts.length }} عدد</span>
            </li>

            <!-- <li class="p-2">
              <span class="ml-1 font-semibold">کشور:</span>

              <span class="text-gray-700">ایران</span>
            </li>

            <li class="p-2 border-b border-t">
              <span class="ml-1 font-semibold">شهر:</span>

              <span class="text-gray-700">خوی</span>
            </li> -->
          </ul>

          <div class="flex justify-center p-2">
            <router-link
              :to="`/edit-user/${userInfo.id}`"
              id="show-modal"
              class="ripple w-full ml-3 text-center inline-block rounded bg-orange-500 px-6 py-2.5 text-sm font-medium uppercase leading-tight text-white shadow shadow-indigo-50 transition duration-150 ease-in-out hover:bg-indigo-700 focus:bg-indigo-700 focus:outline-none focus:ring-0 active:bg-indigo-800"
            >
              ویرایش
            </router-link>

            <button
              type="button"
              data-te-ripple-init
              data-te-ripple-color="light"
              @click="do_block_user_account()"
              class="ripple w-full ml-3 inline-block rounded bg-red-50 px-6 py-2.5 text-sm font-medium uppercase leading-tight text-red-600 shadow shadow-red-50 transition duration-150 ease-in-out hover:bg-red-100 focus:bg-red-100 focus:outline-none focus:ring-0 active:bg-red-100"
            >
              {{ userInfo.status != 2 ? "مسدود سازی" : "رفع مسدودیت حساب" }}
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Swal from 'sweetalert2'
export default {
  emit: ["openEditModal", "refresh_user"],
  props: ["userInfo"],
  methods: {
    async do_block_user_account() {
      if (this.userInfo.status == 0) {
        this.showSwal("خطایی رخ داد" , "این حساب غیر فعال هست", "error");
        return false;
      }
      if (this.userInfo.status == 1) {
        if (confirm(`آیا از مسدودسازی حساب ${this.userInfo.name} مطمعن هستید ؟`)) {
          const result = await this.$store.dispatch("do_block_user_account", {
            status: "block",
            id: this.userInfo.id,
          });
          if (result.status == 200) {
            this.showSwal(
              "پیغام موفقیت آمیز",
              `حساب کاربری ${this.userInfo.name} با موفقیت مسدود شد`,
              "success"
            );
            this.$emit("refresh_user");
          } else {
            this.showSwal("خطایی رخ داد" , "خطا در مسدودسازی حساب کاربر", "error");
          }
        }
      } else if (this.userInfo.status == 2) {
        if (confirm(`آیا از رفع مسدودیت حساب ${this.userInfo.name} مطمعن هستید ؟`)) {
          const result = await this.$store.dispatch("do_block_user_account", {
            status: "unblock",
            id: this.userInfo.id,
          });
          if (result.status == 200) {
            this.showSwal(
              "پیغام موفقیت آمیز",
              `حساب کاربری ${this.userInfo.name} با موفقیت رفع مسدودیت شد`,
              "success"
            );
            this.$emit("refresh_user");
          } else {
            this.showSwal("خطایی رخ داد" , "خطا در رفع مسدودیت حساب کاربر", "error");
          }
        }
      }
    },
    showSwal(title , text , icon){
      Swal.fire({
          title: title,
          text: text,
          icon: icon
      });
    },
  },
};
</script>
