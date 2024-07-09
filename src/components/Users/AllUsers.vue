<template>
  <div
    class="grid gap-4 mt-4 mb-4 font-medium lg:grid-cols-12 md:grid-cols-2 sm:grid-cols-1 xs:grid-cols-1 font-fa"
  >
    <div class="col-span-4 row-span-3 p-6 border rounded-lg">
      <div class="flex items-start content-between justify-between">
        <div class="content-left">
          <span class="text-sm text-gray-500">مجموع مشتریان</span>
          <div class="flex items-center my-1">
            <h4 class="mb-0 ml-2 font-bold p-2 text-green-500">
              {{ usersList.length }} عدد
            </h4>
            <!-- <span class="font-bold text-green-500">(+89%)</span> -->
          </div>
          <span class="text-sm text-gray-500"> تحلیل تا به امروز </span>
        </div>
        <span
          class="flex items-center justify-center w-8 h-8 p-2 text-indigo-500 bg-indigo-100 rounded badge"
        >
          <i class="fa-duotone fa-users"></i>
        </span>
      </div>
    </div>

    <div class="col-span-4 row-span-3 p-6 border rounded-lg">
      <div class="flex items-start content-between justify-between">
        <div class="content-left">
          <span class="text-sm text-gray-500"> تعداد کل سفارش</span>
          <div class="flex items-center my-1">
            <h4 class="mb-0 ml-2 font-bold p-2 text-green-500">0 عدد</h4>
            <!-- <span class="font-bold text-green-500">(+89%)</span> -->
          </div>
          <span class="text-sm text-gray-500"> تحلیل تا به امروز </span>
        </div>
        <span
          class="flex items-center justify-center w-8 h-8 p-2 text-indigo-500 bg-indigo-100 rounded badge"
        >
          <i class="fa-duotone fa-user-group"></i>
        </span>
      </div>
    </div>

    <div class="col-span-4 row-span-3 p-6 border rounded-lg">
      <div class="flex items-start content-between justify-between">
        <div class="content-left">
          <span class="text-sm text-gray-500"> میانگین ارزش کل سفارش ها </span>
          <div class="flex items-center my-1">
            <h4 class="mb-0 ml-2 font-bold p-2 badge bg-label-success text-sm">
              0
            </h4>
            <!-- <span class="font-bold text-green-500">(+89%)</span> -->
          </div>
          <span class="text-sm text-gray-500"> تحلیل تا به امروز </span>
        </div>
        <span
          class="flex items-center justify-center w-8 h-8 p-4 text-xs text-indigo-500 bg-indigo-100 rounded badge font-en"
        >
          AOD
        </span>
      </div>
    </div>

    <dataset
      v-slot="{ ds }"
      :ds-data="usersList"
      :ds-sortby="sortBy"
      :ds-sort-as="{}"
      :ds-search-in="['name']"
      :ds-search-as="{}"
    >
      <div class="col-span-12 font-fa">
        <div
          class="mt-6 mb-6 bg-white border border-gray-200 product-info rounded-xl"
        >
          <div
            class="relative px-6 py-6 pb-4 m-0 overflow-hidden text-gray-700 bg-transparent border-b shadow-none bg-clip-border border-b-gray-200"
          >
            <h6
              class="flex items-center gap-1 text-xs antialiased font-semibold leading-normal text-gray-600 font-fa"
            >
              <i
                class="fa-duotone fa-users text-[20px] !w-5 !h-5 text-teal-500 ml-1"
              ></i
              >کاربران
            </h6>
            <p
              class="flex items-center gap-1 pt-2 text-xs antialiased font-normal leading-normal text-gray-600 font-fa"
            >
              از این بخش می توانید کاربران سایت را مدیریت یا حذف نمایید
            </p>
          </div>

          <div
            class="grid gap-4 px-6 py-6 bg-stripes-purple lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 xs:grid-cols-1"
          >
            <div class="relative flex w-full gap-4">
              <dataset-show />
              <RouterLink
                to="/add-client"
                class="box-border relative z-0 flex items-center justify-center w-full p-2.5 overflow-hidden font-medium text-white transition-all duration-300 bg-orange-500 rounded-md cursor-pointer group ease focus:outline-none"
              >
                <span
                  class="absolute bottom-0 right-0 w-8 h-20 -mb-8 -mr-5 transition-all duration-300 ease-out transform rotate-45 translate-x-1 bg-white opacity-10 group-hover:translate-x-0"
                ></span
                ><span
                  class="absolute top-0 left-0 w-20 h-8 -mt-1 -ml-12 transition-all duration-300 ease-out transform -rotate-45 -translate-x-1 bg-white opacity-10 group-hover:translate-x-0"
                ></span
                ><span
                  class="relative z-20 flex items-center justify-center w-full text-center"
                  ><i
                    class="pl-2 text-2xl text-white fa-duotone fa-user-plus"
                  ></i
                  ><span class="w-full">ایجاد مشتری جدید</span></span
                >
              </RouterLink>
            </div>
            <!-- <dataset-client-status @doFilterStatus="doFilter($event)" /> -->

            <div class="relative w-full lg:flex lg:justify-end">
              <button
                v-on:click.prevent="Export = !Export"
                class="box-border relative z-0 flex lg:w-40 w-full items-center justify-center p-2.5 overflow-hidden font-medium text-gray-500 transition-all duration-300 bg-gray-100 rounded-md cursor-pointer group ease focus:outline-none"
              >
                <span
                  class="absolute bottom-0 right-0 w-8 h-20 -mb-8 -mr-5 transition-all duration-300 ease-out transform rotate-45 translate-x-1 bg-white opacity-10 group-hover:translate-x-0"
                ></span
                ><span
                  class="absolute top-0 left-0 w-20 h-8 -mt-1 -ml-12 transition-all duration-300 ease-out transform -rotate-45 -translate-x-1 bg-white opacity-10 group-hover:translate-x-0"
                ></span
                ><span
                  class="relative z-20 flex items-center justify-center w-full text-center"
                  ><i
                    class="pl-2 text-2xl text-gray-400 fa-duotone fa-file-export"
                  ></i
                  ><span class="w-full">انتخاب خروجی</span></span
                >
              </button>
              <div
                v-if="Export"
                class="absolute z-10 w-full mt-6 bg-white border rounded-lg top-6 lg:w-40"
              >
                <ul
                  class="h-20 p-3 overflow-y-auto text-sm text-gray-700"
                  aria-labelledby="dropdownSearchButton"
                >
                  <export-excel
                    :data="usersList"
                    :fields="excelFields"
                    :title="`لیست مشتریان پارس گیفت   `"
                    :name="`pgcustomers.xls`"
                  >
                    <li class="cursor-pointer">
                      <div
                        class="flex items-center w-full my-1 border rounded hover:bg-gray-100"
                      >
                        <input
                          id="checkbox-item-11"
                          type="hidden"
                          value=""
                          class="w-4 h-4 text-green-600 bg-gray-100 border-gray-300 rounded-lg"
                        /><label
                          for="checkbox-item-11"
                          class="flex items-center justify-center w-full py-2 mr-2 text-sm font-medium text-gray-500 rounded"
                          ><span
                            class="flex items-center w-full pr-2 text-right"
                            >اکسل</span
                          ><i
                            class="flex items-center pl-2 text-left text-green-500 fa-duotone fa-file-spreadsheet"
                          ></i>
                        </label>
                      </div>
                    </li>
                  </export-excel>
                </ul>
              </div>
            </div>

            <dataset-search ds-search-placeholder="جستجو در لیست..." />
          </div>

          <div class="flex flex-col">
            <div class="overflow-hidden">
              <div class="min-w-full align-middle">
                <div class="flex flex-col lg:hidden">
                  <div class="overflow-hidden">
                    <div class="inline-block min-w-full align-middle">
                      <div class="relative overflow-hidden">
                        <div class="w-full table-auto min-w-max">
                          <div>
                            <div
                              class="text-sm leading-normal text-right text-gray-600 uppercase border-t border-gray-200"
                            >
                              <div
                                scope="col"
                                class="flex items-center justify-between px-6 py-3 font-semibold"
                              >
                                <span>کاربران</span>
                                <span
                                  class="flex items-center p-1 text-red-500 border rounded cursor-pointer text-[12px] font-thin"
                                  ><i
                                    class="pl-1 font-thin text-red-500 fa fa-trash-can"
                                  ></i>
                                  <span> حذف همه</span>
                                </span>
                              </div>
                            </div>
                          </div>
                          <dataset-item
                            tag="ul"
                            class="bg-white divide-gray-200 last:border-b"
                            name="fade"
                            is="transition-group"
                          >
                            <template #default="{ row, rowIndex }">
                              <li
                                class="flex items-center justify-between border-t border-gray-200 divide-gray-200 cursor-pointer"
                                v-on:click.prevent="openSubMobileTable(row.id)"
                              >
                                <div
                                  class="flex px-6 py-2 text-right whitespace-nowrap"
                                >
                                  <div class="w-12 h-12 avatar avatar-sm me-2">
                                    <img
                                      src="/5.png"
                                      alt="Avatar"
                                      class="rounded-full"
                                    />
                                  </div>
                                  <div class="pr-3">
                                    <div class="text-base font-semibold">
                                      {{ row.name }}
                                    </div>

                                    <div class="font-normal text-gray-500">
                                      {{ row.email != null ? row.email : "-" }}
                                    </div>
                                  </div>
                                </div>

                                <div class="px-6 py-3" scope="col">
                                  <div
                                    class="flex justify-center cursor-pointer item-center"
                                  >
                                    <div
                                      class="flex items-center justify-center w-4 font-extrabold transform hover:text-gray-500 hover:scale-110"
                                    >
                                      <i
                                        :class="{
                                          'fa-minus':
                                            mobileSubmenuIndex == row.id,
                                          'fa-plus':
                                            mobileSubmenuIndex != row.id,
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
                                  v-show="mobileSubmenuIndex == row.id"
                                  class="border-transparent border-y border-b-slate-200"
                                >
                                  <div colspan="100" class="p-0">
                                    <div class="border-l border-r rounded-b-lg">
                                      <div class="pb-4">
                                        <div
                                          class="min-w-full overflow-x-auto is-scrollbar-hidden"
                                        >
                                          <div
                                            class="w-full text-left is-hoverable"
                                          >
                                            <div
                                              class="border-b border-gray-200 divide-gray-200"
                                            >
                                              <div
                                                class="flex px-6 py-3 text-right border-b whitespace-nowrap"
                                              >
                                                <div
                                                  class="flex items-center text-base font-semibold"
                                                >
                                                  شماره موبایل:
                                                  <span
                                                    class="mr-1 font-medium text-gray-400"
                                                  >
                                                    {{
                                                      row.mobile == null
                                                        ? "-"
                                                        : row.mobile
                                                    }}</span
                                                  >
                                                </div>
                                              </div>

                                              <div
                                                class="flex px-6 py-3 text-right border-b whitespace-nowrap"
                                              >
                                                <div
                                                  class="flex items-center text-base font-semibold"
                                                >
                                                  موبایل :
                                                  <span
                                                    class="mr-1 font-medium text-gray-400"
                                                  >
                                                    {{
                                                      row.email == null
                                                        ? "-"
                                                        : row.email
                                                    }}</span
                                                  >
                                                </div>
                                              </div>

                                              <div
                                                class="flex px-6 py-3 text-right border-b whitespace-nowrap"
                                              >
                                                <div
                                                  class="flex items-center text-base font-semibold"
                                                >
                                                  تاریخ عضویت:
                                                  <span
                                                    class="mr-1 font-medium text-gray-400"
                                                  >
                                                    {{ row.created_at }}</span
                                                  >
                                                </div>
                                              </div>

                                              <div
                                                class="flex px-6 py-3 text-right border-b whitespace-nowrap"
                                              >
                                                <div
                                                  class="flex items-center text-base font-semibold"
                                                >
                                                  تعداد پست ها:
                                                  <span
                                                    class="mr-1 font-medium text-gray-400"
                                                  >
                                                    {{ row.posts.length }}</span
                                                  >
                                                </div>
                                              </div>

                                              <div
                                                class="flex px-6 py-3 text-right whitespace-nowrap"
                                              >
                                                <div
                                                  class="flex items-center text-base font-semibold"
                                                >
                                                  <span class="mr-1">
                                                    <div
                                                      class="flex justify-center item-center"
                                                    >
                                                      <div
                                                        @click="
                                                          do_remove_user(row.id)
                                                        "
                                                        class="w-4 ml-4 transform cursor-pointer hover:text-gray-500 hover:scale-110"
                                                      >
                                                        <i
                                                          class="fa-thin fa-trash-can text-[18px] !w-5 !h-5 font-normal"
                                                        ></i>
                                                      </div>
                                                      <RouterLink
                                                        :to="`/edit-user/${row.id}`"
                                                      >
                                                        <div
                                                          class="w-4 ml-4 transform cursor-pointer hover:text-gray-500 hover:scale-110"
                                                        >
                                                          <i
                                                            class="fa-thin fa-edit text-[18px] !w-5 !h-5 font-normal"
                                                          ></i>
                                                        </div>
                                                      </RouterLink>

                                                      <RouterLink
                                                        :to="`/user/profile/${row.id}`"
                                                      >
                                                        <button
                                                          class="w-4 ml-4 transform cursor-pointer hover:text-gray-500 hover:scale-110"
                                                        >
                                                          <i
                                                            class="fa-solid fa-eye text-[18px] !w-5 !h-5 font-normal"
                                                          ></i>
                                                        </button>
                                                      </RouterLink>
                                                    </div>
                                                  </span>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                        <div class="mr-6 text-right">
                                          <button
                                            v-on:click.prevent="
                                              Expanded = false
                                            "
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
                          </dataset-item>
                        </div>

                        <nav
                          class="items-center justify-between block pt-4 pb-4 mx-4 lg:flex"
                          aria-label="Table navigation"
                        >
                          <dataset-info />
                          <dataset-pager />
                        </nav>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  class="relative hidden overflow-x-auto lg:block Desktop-Table"
                >
                  <table class="w-full">
                    <thead>
                      <tr
                        class="text-sm leading-normal text-right text-gray-600 uppercase border border-gray-200 divide-x"
                      >
                        <th
                          scope="col"
                          class="relative w-10 px-6 border-l sm:w-8 sm:px-8"
                        >
                          <input
                            type="checkbox"
                            class="absolute w-4 h-4 -mt-2 text-green-600 border-gray-300 right-4 top-1/2 focus:ring-green-500 sm:right-6"
                          />
                        </th>

                        <th
                          scope="col"
                          v-for="(th, index) in cols"
                          :key="th.field"
                          :class="['sort', th.sort]"
                          @click="click($event, index)"
                          class="px-3 py-2 font-semibold text-center uppercase align-middle bg-transparent border-b border-collapse border-solid shadow-none d text-xxs tracking-none whitespace-nowrap text-slate-700 opacity-70"
                        >
                          <div class="flex items-center justify-center">
                            <i
                              class="ml-1 gg-select"
                              v-if="th.hasIcon != 'checkbox'"
                            ></i>
                            <span>{{ th.name }}</span>
                          </div>
                        </th>
                      </tr>
                    </thead>

                    <dataset-item tag="tbody" class="bg-white divide-gray-200">
                      <template #default="{ row, rowIndex }">
                        <tr class="border-b border-gray-200 divide-x">
                          <th
                            scope="col"
                            class="relative w-10 px-6 border-l sm:w-8 sm:px-8"
                          >
                            <input
                              type="checkbox"
                              class="absolute w-4 h-4 -mt-2 text-green-600 border-gray-300 right-4 top-1/2 focus:ring-green-500 sm:right-6"
                            />
                          </th>
                          <td
                            class="flex px-6 py-2 text-right whitespace-nowrap"
                          >
                            <div class="w-12 h-12 avatar avatar-sm me-2">
                              <img
                                src="/5.png"
                                alt="Avatar"
                                class="rounded-full"
                              />
                            </div>
                            <div class="pr-3">
                              <RouterLink to="/client-view">
                                <div class="text-sm font-semibold">
                                  {{ row.name }}
                                </div>
                              </RouterLink>

                              <div class="text-sm font-normal text-gray-500">
                                {{ row.email != null ? row.email : "-" }}
                              </div>
                            </div>
                          </td>

                          <td
                            class="px-6 py-2 text-sm text-right whitespace-nowrap"
                          >
                            <div class="flex items-center justify-center">
                              {{ row.mobile == null ? "-" : row.mobile }}
                            </div>
                          </td>

                          <td
                            class="px-6 py-2 text-sm text-center whitespace-nowrap"
                          >
                            {{ row.created_at }}
                          </td>

                          <td class="px-6 py-2 text-center whitespace-nowrap">
                            <span
                              class="w-full py-2 px-2 text-xs rounded-lg text-green-500 bg-green-50"
                              v-if="row.status == 1"
                              >فعال <i class="fa fa-check"></i
                            ></span>
                            <span
                              class="w-full py-2 px-2 rounded-lg text-red-500 bg-red-50"
                              v-if="row.status == 0"
                              >غیر فعال
                            </span>
                            <span
                              class="w-full py-2 px-2 rounded-lg text-red-500 bg-red-50"
                              v-if="row.status == 2"
                              >مسدود
                            </span>
                          </td>

                          <td
                            class="px-6 py-2 text-sm text-center whitespace-nowrap"
                          >
                            {{ row.posts.length }} عدد
                          </td>

                          <td
                            scope="col"
                            class="px-3 py-3 text-center border-l"
                          >
                            <div class="flex justify-center item-center">
                              <div
                                @click="do_remove_user(row.id)"
                                class="w-4 ml-4 transform cursor-pointer hover:text-gray-500 hover:scale-110"
                              >
                                <i
                                  class="fa-thin fa-trash-can text-[18px] !w-5 !h-5 text-red-500"
                                ></i>
                              </div>

                              <RouterLink :to="`/edit-user/${row.id}`">
                                <div
                                  class="w-4 ml-4 transform cursor-pointer hover:text-gray-500 hover:scale-110"
                                >
                                  <i
                                    class="fa-thin fa-edit text-[18px] !w-5 !h-5 text-indigo-500"
                                  ></i>
                                </div>
                              </RouterLink>

                              <RouterLink
                                :to="`/user/profile/${row.id}`"
                                class="w-4 ml-4 transform cursor-pointer hover:text-gray-500 hover:scale-110"
                              >
                                <i
                                  class="fa-solid fa-eye text-[18px] !w-5 !h-5 text-green-500"
                                ></i>
                              </RouterLink>
                            </div>
                          </td>
                        </tr>
                      </template>
                    </dataset-item>
                  </table>

                  <nav
                    class="items-center justify-between block pt-4 pb-4 mx-4 lg:flex"
                    aria-label="Table navigation"
                  >
                    <dataset-info />
                    <dataset-pager />
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </dataset>
  </div>
</template>

<script>
import ExportExcel from "@/components/DataTable/ExportExcel.vue";
import Dataset from "@/components/DataTable/Dataset.vue";
import DatasetInfo from "@/components/DataTable/DatasetInfo.vue";
import DatasetItem from "@/components/DataTable/DatasetItem.vue";
import DatasetPager from "@/components/DataTable/DatasetPager.vue";
import DatasetSearch from "@/components/DataTable/DatasetSearch.vue";
import DatasetShow from "@/components/DataTable/DatasetShow.vue";
import DatasetClientStatus from "@/components/DataTable/DatasetClientStatus.vue";
import Swal from "sweetalert2";
export default {
  components: {
    Dataset,
    DatasetInfo,
    DatasetItem,
    DatasetPager,
    DatasetSearch,
    DatasetShow,
    DatasetClientStatus,
    ExportExcel,
  },

  data() {
    return {
      mobileSubmenuIndex: null,
      ShowDetailes: false,
      isOpenA: false,
      activeBtn: "",
      Addclient: false,
      Export: false,
      Status: false,
      Count: false,
      Expanded: null,
      Shipping: false,
      Discount: false,
      usersList: [],
      filteredCounts: {
        paiedCount: 0,
        unpaiedCount: 0,
        allCount: 0,
      },
      filteredContainer: [],
      cols: [
        {
          name: "نام کاربر",
          field: "clientName",
          sort: "",
          hasIcon: "clientName",
        },
        {
          name: "شماره موبایل",
          field: "clientMobile",
          sort: "",
          hasIcon: "clientMobile",
        },
        {
          name: "تاریخ عضویت",
          field: "clientSignUp",
          sort: "",
          hasIcon: "clientSignUp",
        },
        {
          name: "وضعیت ",
          field: "clientActive",
          sort: "",
          hasIcon: "clientActive",
        },

        {
          name: "تعداد پست ",
          field: "clientOrders",
          sort: "",
          hasIcon: "clientOrders",
        },

        {
          name: "عملیات",
          field: "clientAction",
          sort: "",
          hasIcon: "clientAction",
        },
      ],
      excelFields: {
        "نام و نام خانوادگی": "name",
        "نام کاربری": "username",
        ایمیل: {
          field: "email",
          callback: (value) => {
            if (value == null) {
              return "ایمیل ست نشده";
            } else {
              return value;
            }
          },
        },
        "شماره موبایل": "mobile",
        "تاریخ عضویت": "created_at",
        " وضعیت": {
          field: "status",
          callback: (value) => {
            if (value == 1) {
              return "فعال";
            } else {
              return "غیر فعال";
            }
          },
        },
        "تعداد پست ها": {
          field: "posts",
          callback: (value) => {
            return value.length + " عدد";
          },
        },
      },
    };
  },

  async mounted() {
    const clients = await this.$store.dispatch("get_users_list");
    if (clients.status == 200) {
      this.usersList = clients.result;
      this.filteredContainer = clients.result;
    }
  },

  methods: {
    async do_remove_user(id) {
      const user_id = id;
      if (
        confirm(
          "با حذف این کاربر تمامی اطلاعات او از سیستم حذف خواهد شد. آیا ادامه میدهید ؟"
        )
      ) {
        const result = await this.$store.dispatch("remove_user", {
          id: user_id,
        });
        if (result.status == 200) {
          this.showSwal(
            "پیغام موفقیت آمیز",
            "مشتری مورد نظر با موفقیت حذف شد",
            "success"
          );
          this.usersList = result.result;
          this.filteredContainer = result.result;
        } else {
          this.showSwal("خطایی رخ داد", "خطا در حذف مشتری !", "error");
        }
      }
    },
    showSwal(title, text, icon) {
      Swal.fire({
        title: title,
        text: text,
        icon: icon,
      });
    },
    openSubMobileTable(stateId) {
      if (stateId == this.mobileSubmenuIndex) this.mobileSubmenuIndex = null;
      else this.mobileSubmenuIndex = stateId;
    },
  },
};
</script>

<style>
.gg-select {
  box-sizing: border-box;
  position: relative;
  display: block;
  transform: scale(1);
  width: 22px;
  height: 22px;
}

.gg-select:after,
.gg-select:before {
  content: "";
  display: block;
  box-sizing: border-box;
  position: absolute;
  width: 8px;
  height: 8px;
  left: 7px;
  transform: rotate(-45deg);
}

.gg-select:before {
  border-left: 2px solid;
  border-bottom: 2px solid;
  bottom: 4px;
  opacity: 0.3;
}

.gg-select:after {
  border-right: 2px solid;
  border-top: 2px solid;
  top: 4px;
  opacity: 0.3;
}

th.sort {
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;
}

th.sort.asc .gg-select:after,
th.sort.desc .gg-select:before {
  opacity: 1;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 2s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.filteractive1 button {
  background: #818cf8;
  color: white;
  -webkit-transition: background-color 1000ms linear;
  -ms-transition: background-color 1000ms linear;
  transition: background-color 1000ms linear;
}

.filteractive2 button {
  background: #4ade80;
  color: white;
  -webkit-transition: background-color 1000ms linear;
  -ms-transition: background-color 1000ms linear;
  transition: background-color 1000ms linear;
}

.filteractive3 button {
  background: #f87171;
  color: white;
  -webkit-transition: background-color 1000ms linear;
  -ms-transition: background-color 1000ms linear;
  transition: background-color 1000ms linear;
}

.filterBtn button:hover {
  background: #ebebeb;
  color: rgb(100, 100, 100);
  -webkit-transition: background-color 1000ms linear;
  -ms-transition: background-color 1000ms linear;
  transition: background-color 1000ms linear;
}
</style>
