<template>
  <div
    class="grid gap-4 mt-4 mb-4 font-medium lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 xs:grid-cols-1 font-fa"
  >
    <div class="col-span-1 row-span-1 p-6 border rounded-lg">
      <div class="flex items-start content-between justify-between">
        <div class="content-left">
          <span class="text-sm text-gray-500">تعداد کاربران</span>
          <div class="flex items-center my-1">
            <h4 class="mb-0 ml-2 font-bold">{{ usersInformation.allUsersCount }}</h4>
          </div>
          <span class="text-xs text-gray-500">مجموع کاربران فعال</span>
        </div>
        <span
          class="flex items-center justify-center w-8 h-8 p-2 text-hamian bg-hamian/10 rounded badge"
        >
          <i class="fa fa-users"></i>
        </span>
      </div>
    </div>
    <div class="col-span-1 row-span-1 p-6 border rounded-lg">
      <div class="flex items-start content-between justify-between">
        <div class="content-left">
          <span class="text-sm text-gray-500">مدیران</span>
          <div class="flex items-center my-1">
            <h4 class="mb-0 ml-2 font-bold">{{ usersInformation.directorGeneralCount }}</h4>
          </div>
          <span class="text-xs text-gray-500"> مجموع مدیران </span>
        </div>
        <span
          class="flex items-center justify-center w-8 h-8 p-2 text-green-500 bg-green-100 rounded badge"
        >
          <i class="fa-duotone fa-user-tie"></i>
        </span>
      </div>
    </div>
    <div class="col-span-1 row-span-1 p-6 border rounded-lg">
      <div class="flex items-start content-between justify-between">
        <div class="content-left">
          <span class="text-sm text-gray-500">کاربران عادی</span>
          <div class="flex items-center my-1">
            <h4 class="mb-0 ml-2 font-bold">{{ usersInformation.normalUsersCount }}</h4>
          </div>
          <span class="text-xs text-gray-500">مجموع کاربران عادی</span>
        </div>
        <span
          class="flex items-center justify-center w-8 h-8 p-2 text-red-500 bg-red-100 rounded badge"
        >
          <i class="fa-duotone fa-user"></i>
        </span>
      </div>
    </div>
  </div>
  <div class="w-full pb-6">
    <div class="overflow-hidden">
      <div class="gap-4 lg:grid lg:grid-cols-12">
        <dataset
          v-slot="{ ds }"
          :ds-data="usersInformation.usersList"
          :ds-sortby="sortBy"
          :ds-sort-as="{}"
          :ds-search-in="['username', 'name', 'family']"
          :ds-search-as="{}"
        >
          <div class="col-span-12 font-fa">
            <div
              class="mt-2 mb-6 bg-white border border-gray-200 user-info rounded-xl"
            >
              <div
                class="relative px-6 py-6 pb-4 m-0 overflow-hidden text-gray-700 bg-transparent border-b shadow-none bg-clip-border border-b-gray-200"
              >
                <h6
                  class="flex items-center gap-1 text-xs antialiased font-semibold leading-normal text-gray-600 font-fa"
                >
                  <i
                    class="fa-duotone fa-users text-[20px] !w-5 !h-5 text-hamian ml-1"
                  ></i
                  >کاربران
                </h6>
                <p
                  class="flex items-center gap-1 pt-2 text-xs antialiased font-normal leading-normal text-gray-600 font-fa"
                >
                  از این بخش می توانید کاربران را مدیریت یا حذف نمایید
                </p>
              </div>

              <div class="py-8 border-b px-7 card-header">
                <div
                  class="grid lg:grid-cols-4 gap-4 md:grid-cols-2 sm:grid-cols-1 xs:grid-cols-1"
                >
                  <div class="w-full">
                    <RouterLink to="/add-admin">
                      <button
                        class="box-border relative z-0 inline-flex items-center justify-end w-full p-2.5 overflow-hidden font-medium text-white transition-all duration-300 bg-hamian rounded-md cursor-pointer group ease focus:outline-none"
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
                            class="pl-2 text-2xl text-white fa-duotone fa-plus"
                          ></i
                          ><span class="w-full">ایجاد ادمین جدید</span></span
                        >
                      </button>
                    </RouterLink>
                  </div>

                  <div class="relative justify-end w-full hidden">
                    <button
                      class="box-border relative z-0 inline-flex items-center justify-center w-full p-2.5 overflow-hidden font-medium text-gray-400 transition-all duration-300 border rounded-md cursor-pointer group ease focus:outline-none"
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
                          class="pl-2 text-2xl text-gray-400 fa-duotone fa-file-import"
                        ></i
                        ><span class="w-full"> درون ریزی </span></span
                      >
                    </button>
                  </div>

                  <div class="w-full">
                    <export-excel
                    :data="usersInformation.usersList"
                    :fields="excelFields"
                    title="لیست کاربران حامیان پت و من"
                    :name="`users.xls`"
                      class="box-border relative z-0 flex w-full items-center justify-center p-2.5 overflow-hidden font-medium text-gray-400 transition-all duration-300 border rounded-md cursor-pointer group ease focus:outline-none"
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
                        ><span class="w-full"> برون بری</span></span
                      >
                    </export-excel>
                  </div>

                  <div></div>

                  <div class="w-full">
                    <div class="flex rounded-md hover:shadow-sm">
                      <div
                        class="relative flex items-stretch flex-grow focus-within:z-10"
                      >
                        <dataset-search
                          ds-search-placeholder="جستجو در لیست..."
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div
                class="grid gap-4 px-6 py-6 bg-stripes-purple xl:grid-cols-2 2xl:grid-cols-2 3xl:grid-cols-4 4xl:grid-cols-5 md:grid-cols-1 sm:grid-cols-1 xs:grid-cols-1"
              >
                <div class="relative flex w-full gap-4">
                  <dataset-show />

                  <data-action 
                  @bulkActionDelete="(value) => bulkActionDelete(value)"
                  />
                </div>
              </div>

              <div class="flex flex-col">
                <div class="overflow-hidden">
                  <div class="min-w-full align-middle">
                    <div class="flex flex-col lg:hidden">
                      <div class="overflow-hidden">
                        <div class="inline-block min-w-full align-middle">
                          <div class="relative overflow-hidden">
                            <div class="w-full table-auto">
                              <div>
                                <div
                                  class="text-sm leading-normal text-right text-gray-600 uppercase border-t border-gray-200"
                                >
                                  <div
                                    scope="col"
                                    class="px-6 py-3 font-semibold"
                                  >
                                    کاربران
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
                                    class="flex border-t border-gray-200 divide-gray-200 cursor-pointer items-center justify-between relative"
                                    v-on:click.prevent="
                                      openSubMobileTable(row.id)
                                    "
                                  >
                                    <div class="flex px-6 py-2 text-right">
                                      <div class="flex items-center">
                                        <img
                                          v-if="row.profile != null"
                                          :src="`${globalUrl}/storage/admin/${row.profile}`"
                                          class="w-10 h-10 rounded-lg mx-auto ml-2"
                                        />

                                        <p
                                          class="text-sm font-regular text-gray-700 break-words"
                                        >
                                          {{ row.name+' '+row.family }}
                                        </p>
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
                                            class="w-4 h-4 text-hamian transition-transform transform fa-solid"
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
                                        <div
                                          class="border-l border-r rounded-b-lg"
                                        >
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
                                                    class="flex px-6 py-3 text-right border-b"
                                                  >
                                                    <div
                                                      class="flex items-center text-base font-semibold"
                                                    >
                                                      شناسه :
                                                      <span
                                                        class="mr-1 font-medium text-hamian ltr"
                                                      >
                                                        #{{ row.id }}
                                                      </span>
                                                    </div>
                                                  </div>

                                                  <div
                                                    class="flex px-6 py-3 text-right border-b"
                                                  >
                                                    <div
                                                      class="flex items-center text-base font-semibold"
                                                    >
                                                      گروه کاربری :
                                                      <span
                                                        class="mr-1 font-medium text-hamian ltr"
                                                      >
                                                        {{ row.role == 1 ? 'مدیرکل' : 'کاربر عادی' }}
                                                      </span>
                                                    </div>
                                                  </div>

                                                  <div
                                                    class="flex px-6 py-3 text-right border-b"
                                                  >
                                                    <div
                                                      class="flex items-center text-base font-semibold"
                                                    >
                                                      وضعیت :
                                                      <span
                                                        class="mr-1 font-medium text-hamian ltr"
                                                      >
                                                        <span
                                                          class="font-semibold text-green-500"
                                                          v-if="
                                                            row.account_status == 1
                                                          "
                                                          >فعال</span
                                                        >
                                                        <span
                                                          class="font-semibold text-red-500"
                                                          v-if="
                                                            row.account_status == 0
                                                          "
                                                          >غیرفعال</span
                                                        >
                                                      </span>
                                                    </div>
                                                  </div>

                                                  <div
                                                    class="flex px-6 py-3 text-right"
                                                  >
                                                    <div
                                                      class="flex items-center text-base font-semibold"
                                                    >
                                                      <span class="mr-1">
                                                        <div
                                                            class="flex justify-center item-center"
                                                        >
                                                          <div
                                                            @click="deleteUser(row.id)"
                                                            class="w-4 ml-4 transform cursor-pointer hover:text-gray-500 hover:scale-110"
                                                          >
                                                            <i
                                                              class="fa-light fa-trash-can text-[18px] !w-5 !h-5 font-normal"
                                                            ></i>
                                                          </div>
                                                          <RouterLink
                                                            :to="`/admin/profile/${row.id}`"
                                                          >
                                                            <div
                                                              class="w-4 ml-4 transform cursor-pointer hover:text-gray-500 hover:scale-110"
                                                            >
                                                              <i
                                                                class="fa-light fa-edit text-[18px] !w-5 !h-5 font-normal"
                                                              ></i>
                                                            </div>
                                                          </RouterLink>

                                                          <div
                                                            class="w-4 ml-4 transform cursor-pointer hover:text-gray-500 hover:scale-110"
                                                          >
                                                            <i
                                                              class="fa-duotone fa-ban text-[18px] !w-5 !h-5 font-normal text-red-500"
                                                            ></i>
                                                          </div>
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
                              :class="th.size"
                              class="px-3 py-2 font-semibold text-center uppercase align-middle bg-transparent border-b border-collapse border-solid shadow-none d text-xxs tracking-none text-slate-700 opacity-70"
                            >
                              <div class="flex items-center" :class="th.center">
                                <span class="font-medium">{{ th.name }}</span>
                              </div>
                            </th>
                          </tr>
                        </thead>

                        <dataset-item
                          tag="tbody"
                          class="bg-white divide-gray-200 w-full"
                          name="fade"
                          is="transition-group"
                        >
                          <template #default="{ row, rowIndex }">
                            <tr class="border-b border-gray-200 divide-x">
                              <td
                                class="relative w-10 px-6 border-l sm:w-8 sm:px-8"
                              >
                                <!-- <div class="absolute inset-y-0 right-0 w-0.5 bg-green-600"></div> -->
                                <input
                                  type="checkbox"
                                  :value="row.id"
                                  v-model="deletableIds"
                                  class="absolute w-4 h-4 -mt-2 text-green-600 border-gray-300 rounded right-4 top-1/2 focus:ring-green-500 sm:right-6"
                                />
                              </td>

                              <td
                                class="relative px-6 py-2 font-bold text-center text-hamian border-l ltr text-[15px]"
                              >
                                {{ row.id }}
                              </td>

                              <td class="p-2 text-center mx-auto">
                                <img
                                  v-if="row.profile != null"
                                  :src="`${globalUrl}/storage/admin/${row.profile}`"
                                  class="w-10 h-10 rounded-lg mx-auto"
                                />
                                <span v-else>-</span>
                              </td>

                              <td class="px-3 py-2 text-right">
                                <div class="text-[15px] font-semibold">
                                  {{ row.name+' '+row.family }}
                                </div>
                              </td>

                              <td class="px-3 py-2 text-center">
                                <div class="text-[15px] font-semibold">
                                  <span
                                    class="font-semibold text-green-500"
                                    v-if="row.account_status == 1"
                                    >فعال</span
                                  >
                                  <span
                                    class="font-semibold text-red-500"
                                    v-if="row.account_status == 0"
                                    >غیرفعال</span
                                  >
                                </div>
                              </td>

                              <td class="p-2 text-center text-[15px]">
                                {{ row.role == 1 ? 'مدیرکل' : 'کاربر عادی' }}
                              </td>

                              <td
                                scope="col"
                                class="px-3 py-3 text-center border-l"
                              >
                                <div
                                  class="flex justify-center item-center gap-4"
                                >
                                  <div
                                    @click="deleteUser(row.id)"
                                    class="w-4 ml-4 transform cursor-pointer hover:text-gray-500 hover:scale-110"
                                  >
                                    <i
                                      class="fa-light fa-trash-can text-[18px] !w-5 !h-5 font-normal"
                                    ></i>
                                  </div>
                                  <RouterLink
                                    :to="`/admin/profile/${row.id}`"
                                  >
                                    <div
                                      class="w-4 ml-4 transform cursor-pointer hover:text-gray-500 hover:scale-110"
                                    >
                                      <i
                                        class="fa-light fa-edit text-[18px] !w-5 !h-5 font-normal"
                                      ></i>
                                    </div>
                                  </RouterLink>

                                  <div
                                   @click="change_account_status(row)"
                                  >
                                    <div
                                      class="w-4 transform cursor-pointer hover:text-gray-500 hover:scale-110"
                                    >
                                      <i
                                        v-if="row.account_status == 1"
                                        class="fa-duotone fa-ban text-[18px] !w-5 !h-5 text-red-500"
                                      ></i>
                                      <i
                                        v-else
                                        class="fa-duotone fa-check text-[18px] !w-5 !h-5 text-green-500"
                                      ></i>
                                    </div>
                                  </div>
                                </div>
                              </td>
                            </tr>
                          </template>
                        </dataset-item>
                      </table>

                      <div
                        class="flex items-center justify-center font-bold text-6xl w-full mt-6 hidden"
                      >
                        <i
                          class="fa-duotone fa-empty-set flex-wrap font-semi-bold text-gray-300"
                        ></i>
                        <p class="text-2xl font-semi-bold text-gray-300">
                          هیچ اطلاعاتی وجود ندارد
                        </p>
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
            </div>
          </div>
        </dataset>
      </div>
    </div>
  </div>
</template>




<script>
import Swal from 'sweetalert2'
import ExportExcel from "@/components/DataTable/ExportExcel.vue";
import Dataset from "@/components/DataTable/Dataset.vue";
import DatasetInfo from "@/components/DataTable/DatasetInfo.vue";
import DatasetItem from "@/components/DataTable/DatasetItem.vue";
import DatasetPager from "@/components/DataTable/DatasetPager.vue";
import DatasetSearch from "@/components/DataTable/DatasetSearch.vue";
import DatasetShow from "@/components/DataTable/DatasetShow.vue";
import DataAction from "@/components/DataTable/DataAction.vue";
import DatasetStatus from "@/components/DataTable/DatasetStatus.vue";
export default {
  props: {
    usersInformation: {
      required: true,
      type: [Array , Object]
    }
  },
  emits: ["removeUsersList"],
  components: {
    Dataset,
    DatasetInfo,
    DatasetItem,
    DatasetPager,
    DatasetSearch,
    DatasetShow,
    DatasetStatus,
    ExportExcel,
    DataAction,
  },
  data() {
    return {
      showModal: false,
      StockModal: false,
      OutStockModal: false,
      mobileSubmenuIndex: null,
      ShowDetailes: false,
      isOpenA: false,
      activeBtn: "",
      Addorder: false,
      Export: false,
      Status: false,
      Count: false,
      Expanded: null,
      Shipping: false,
      Discount: false,
      filteredContainer: [],
      cols: [
        {
          name: "شناسه",
          field: "userId",
          size: "w-10",
          center: "justify-center",
        },
        {
          name: "تصویر",
          field: "userImage",
          size: "w-auto",
          center: "justify-center",
        },
        {
          name: "نام کاربر",
          field: "userName",
          size: "w-auto",
          center: "justify-start",
        },
        {
          name: "وضعیت",
          field: "userStatus",
          size: "w-auto",
          center: "justify-center",
        },

        {
          name: "نقش کاربری",
          field: "userLevel",
          size: "w-auto",
          center: "justify-center",
        },

        {
          name: "عملیات",
          field: "userAction",
          size: "w-auto",
          center: "justify-center",
        },
      ],
      excelFields: {
          "شناسه": "id",
          " نام کاربر": {
            field: "name",
            callback: (value) => {
              return value
            },
          },
          " وضعیت": {
            field: "account_status",
            callback: (value) => {
              if(value == 0) {
                return "غیر فعال"
              }else {
                return "فعال"
              }
            },
          },
          "نقش کاربری": {
            field: "role",
            callback: (value) => {
              if(value == 1) {
                return "مدیر کل"
              }else {
                return "کاربر عادی"
              }
            },
          },
          " تاریخ ثبت": {
            field: "created_at",
            callback: (value) => {
              return `${value}`;
            },
          }
      },
      deletableIds: []
    };
  },
  methods: {
    openSubMobileTable(stateId) {
      if (stateId == this.mobileSubmenuIndex) this.mobileSubmenuIndex = null;
      else this.mobileSubmenuIndex = stateId;
    },
    click(event, i) {
      let toset;
      const sortEl = this.cols[i];

      if (!event.shiftKey) {
        this.cols.forEach((o) => {
          if (o.field !== sortEl.field) {
            o.sort = "";
          }
        });
      }
      if (!sortEl.sort) {
        toset = "asc";
      }
      if (sortEl.sort === "desc") {
        toset = event.shiftKey ? "" : "asc";
      }
      if (sortEl.sort === "asc") {
        toset = "desc";
      }
      sortEl.sort = toset;
    },
    showSwal(title , text , icon) {
      Swal.fire({
        title: title,
        text: text,
        icon: icon
      });
    },
    async bulkActionDelete(value){
      if(this.deletableIds.length != 0){
        if(value != ""){
          Swal.fire({
            title: "هشدار",
            text: "آیا از انجام این اقدام مطمعن هستید؟",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#9d2c48",
            cancelButtonColor: "#555",
            cancelButtonText: "خیر",
            confirmButtonText: "بله",
          }).then(async (result) => {
            if (result.isConfirmed) {
              const result = await this.$store.dispatch("delete_list_of_admins" , {ids: this.deletableIds})
              if(result.status == 200){
                this.showSwal("پیغام موفقیت آمیز" , result.message , "success")
                this.$emit("removeUsersList" , {ids: result.result})
              }else {
                this.showSwal("پیغام خطا" , result.message , "error")
              }
            }
          });
        }else{
          this.showSwal("پیغام خطا" , "لطفا اقدام مد نظر خود را انتخاب کنید" , "error")
        }
      }else {
        this.showSwal("پیغام خطا" , "لطفا صفحه ای را جهت حدف انتخاب کنید" , "error")
      }
    },
    async deleteUser(id) {
      Swal.fire({
        title: "هشدار",
        text: "آیا از انجام این اقدام مطمعن هستید؟",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#9d2c48",
        cancelButtonColor: "#555",
        cancelButtonText: "خیر",
        confirmButtonText: "بله",
      }).then(async (result) => {
        if (result.isConfirmed) {
          const result = await this.$store.dispatch("delete_admin" , {id: id})
          if(result.status == 200){
            this.showSwal("پیغام موفقیت آمیز" , result.message , "success")
            this.$emit("removeUsersList" , {ids: [id]})
          }else {
            this.showSwal("پیغام خطا" , result.message , "error")
          }
        }
      });
    },
    async change_account_status(row) {
      Swal.fire({
        title: "هشدار",
        text: "آیا از انجام این اقدام مطمعن هستید؟",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#9d2c48",
        cancelButtonColor: "#555",
        cancelButtonText: "خیر",
        confirmButtonText: "بله",
      }).then(async (result) => {
        if (result.isConfirmed) {
          let state = 0
          if(row.account_status == 1) {
            state = 0
          }else {
            state = 1
          }
          const result = await this.$store.dispatch("change_admin_account_status" , {id:row.id , state: state})
          if(result.status == 200){
            row.account_status = state
            this.showSwal("پیغام موفقیت آمیز" , result.message , "success")
          }else {
            this.showSwal("خطایی رخ داد" , result.message , "error")
          }
        }
      })
    }
  },
  computed: {
    sortBy() {
      return this.cols.reduce((acc, o) => {
        if (o.sort) {
          o.sort === "asc" ? acc.push(o.field) : acc.push("-" + o.field);
        }

        return acc;
      }, []);
    },
  },
};
</script>