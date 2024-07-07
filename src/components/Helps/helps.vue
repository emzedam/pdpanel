<template>
    <dataset
      v-slot="{ ds }"
      :ds-data="donations"
      :ds-sortby="sortBy"
      :ds-sort-as="{}"
      :ds-search-in="[
        'payment_price',
        'transaction_id',
        'ref_id',
      ]"
      :ds-search-as="{}"
    >
      <div class="mb-6 bg-white border border-gray-200 product-info rounded-xl">
        <div
          class="relative px-6 py-6 pb-4 m-0 overflow-hidden text-gray-700 bg-transparent border-b shadow-none bg-clip-border border-b-gray-200"
        >
          <h6
            class="flex items-center gap-1 text-xs antialiased font-semibold leading-normal text-gray-600 font-fa"
          >
            <i
              class="fa-duotone fa-credit-card text-[20px] !w-5 !h-5 text-hamian ml-1"
            ></i
            >
           کمک های مالی
          </h6>
  
          <p
            class="flex items-center gap-1 pt-2 text-xs antialiased font-normal leading-normal text-gray-600 font-fa"
          >
            از این بخش می توانید کمک های مالی را مدیریت یا حذف نمایید
          </p>
        </div>
  
        <div
          class="grid gap-4 px-6 py-6 bg-stripes-purple lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 xs:grid-cols-1"
        >
          <div class="flex gap-2">
            <dataset-show />
  
            <dataset-status @doFilterStatus="doFilter($event)" />
          </div>
  
          <export-excel
            :data="donations"
            :fields="excelFields"
            :title="`لیست تراکنش حمایت های مالی`"
            :name="`donations.xls`"
          >
            <div class="relative w-full h-full lg:flex lg:justify-end">
                <button
                  class="box-border relative z-0 flex items-center justify-center w-full p-2 overflow-hidden font-medium text-gray-500 transition-all duration-300 bg-gray-100 border rounded-md cursor-pointer lg:w-full group ease focus:outline-none"
                >
                  <span
                    class="absolute bottom-0 right-0 w-8 h-20 -mb-8 -mr-5 transition-all duration-300 ease-out transform rotate-45 translate-x-1 bg-white opacity-10 group-hover:translate-x-0"
                  ></span
                  ><span
                    class="absolute top-0 left-0 w-20 h-8 -mt-1 -ml-12 transition-all duration-300 ease-out transform -rotate-45 -translate-x-1 bg-white opacity-10 group-hover:translate-x-0"
                  ></span
                  ><span
                    class="relative z-20 flex items-center justify-center w-full text-center"
                    ><i class="pl-2 text-2xl text-gray-400 fa-thin fa-file-export"></i
                    ><span class="w-full text-gray-400">دریافت لیست</span></span
                  >
                </button>
              </div>
            </export-excel>
  
          <dataset-search ds-search-placeholder="جستجو در لیست..." />
        </div>
  
        <div class="flex flex-col">
          <div class="min-w-full align-middle">
            <div class="flex flex-col lg:hidden">
              <div class="inline-block min-w-full align-middle">
                <div class="relative overflow-hidden">
                  <div class="w-full table-auto min-w-max">
                    <div>
                      <div
                        class="text-sm leading-normal text-right text-gray-600 uppercase border-t border-gray-200"
                      >
                        <div scope="col" class="px-6 py-3 font-semibold">کمک های مالی</div>
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
                          <div class="flex px-6 py-2 text-right whitespace-nowrap">
                            <div class="w-8h-8 ml-2 avatar avatar-sm">
                              <img
                                :src="`${globalUrl}/storage/gateway_logo/${row.gateway.logo}`"
                                alt="Avatar"
                                class="rounded-full w-8 h-8"
                              />
                            </div>
  
                            <div class="pr-3 flex items-center">
                              <div class="text-sm font-semibold">
                                {{ row.gateway.name }}
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
                                    'fa-minus': mobileSubmenuIndex == row.id,
  
                                    'fa-plus': mobileSubmenuIndex != row.id,
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
                              <div class="border-l border-r rounded-b-lg">
                                <div class="pb-4">
                                  <div
                                    class="min-w-full overflow-x-auto is-scrollbar-hidden"
                                  >
                                    <div class="w-full text-left is-hoverable">
                                      <div class="border-b border-gray-200 divide-gray-200">
                                        <div
                                          class="flex px-6 py-3 text-right border-b whitespace-nowrap"
                                        >
                                          <div
                                            class="flex items-center text-sm font-semibold"
                                          >
                                            شناسه :
  
                                            <span
                                              class="mr-1 font-medium text-hamian ltr"
                                            >
                                              {{ row.transaction_id }}
                                            </span>
                                          </div>
                                        </div>
  
                                        <div
                                          class="flex px-6 py-3 text-right border-b whitespace-nowrap"
                                        >
                                          <div
                                            class="flex items-center text-sm font-semibold"
                                          >
                                            وضعیت:
  
                                            <span
                                              v-if="row.payment_status == 1"
                                              class="w-full py-2 badge bg-green-50 text-green-500"
                                              >پرداخت شده</span
                                            >
  
                                            <span
                                              v-else
                                              class="w-full py-2 badge bg-orange-50 text-orange-500"
                                              >پرداخت نشده</span
                                            >
                                          </div>
                                        </div>
  
                                        <div
                                          class="flex px-6 py-3 text-right border-b whitespace-nowrap"
                                        >
                                          <div
                                            class="flex items-center text-sm font-semibold"
                                          >
                                            تاریخ ایجاد:
  
                                            <span class="mr-1 font-medium text-gray-400">
                                              {{ row.created_at }}</span
                                            >
                                          </div>
                                        </div>
  
                                        <div
                                          class="flex px-6 py-3 text-right border-b whitespace-nowrap"
                                        >
                                          <div
                                            class="flex items-center text-sm font-semibold"
                                          >
                                            تاریخ پرداخت:
  
                                            <span class="mr-1 font-medium text-gray-400">{{
                                              row.created_at
                                            }}</span>
                                          </div>
                                        </div>
  
                                        <div
                                          class="flex px-6 py-3 text-right border-b whitespace-nowrap"
                                        >
                                          <div
                                            class="flex items-center text-sm font-semibold"
                                          >
                                            مجموع:
  
                                            <span class="mr-1 font-medium text-gray-400">
                                              {{ rial_separate(row.payment_price) }} ریال</span
                                            >
                                          </div>
                                        </div>
  
                                        <div
                                          class="flex px-6 py-3 text-right whitespace-nowrap"
                                        >
                                          <div
                                            class="flex items-center text-sm font-semibold"
                                          >
                                            <span class="mr-1">
                                              <div class="flex justify-center item-center">
                                                <div
                                                  class="w-4 ml-4 transform cursor-pointer hover:text-gray-500 hover:scale-110"
                                                >
                                                  <i
                                                    class="fa-thin fa-trash-can text-[18px] !w-5 !h-5 font-normal"
                                                  ></i>
                                                </div>
  
                                                <RouterLink to="/view-invoice">
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
                                      v-on:click.prevent="Expanded = false"
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
  
            <div class="hidden lg:block Desktop-Table  relative">
                <div class="overflow-x-auto scrollbar-thin scrollbar-track-gray-100 scrollbar-thumb-gray-400/40">
                    <table class="w-full " id="printMe">
                <thead>
                  <tr
                    class="text-sm leading-normal text-right text-gray-600 uppercase border border-gray-200 divide-x"
                  >
                    <th scope="col" class="relative w-10 px-6 border-l sm:w-8 sm:px-8">
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
                      <div
                        v-if="th.hasIcon == 'orderTrendUp'"
                        class="flex items-center justify-center"
                      >
                        <span>{{ th.name }}</span>
                        <i class="fa fa-arrow-trend-up"></i>
                      </div>
  
                      <div v-else class="flex items-center justify-center">
                        <i class="ml-1 gg-select" v-if="th.hasIcon != 'checkbox'"></i>
                        <span>{{ th.name }}</span>
                      </div>
                    </th>
                  </tr>
                </thead>
  
                <dataset-item
                  tag="tbody"
                  class="bg-white divide-gray-200 "
                  name="fade"
                  is="transition-group"
                >
                  <template #default="{ row, rowIndex }">
                    <tr class="border-b border-gray-200 divide-x">
                      <td class="relative w-10 px-6 border-l sm:w-8 sm:px-8">
                        <div class="absolute inset-y-0 right-0 w-0.5 bg-green-600"></div>
  
                        <input
                          type="checkbox"
                          class="absolute w-4 h-4 -mt-2 text-green-600 border-gray-300 rounded right-4 top-1/2 focus:ring-green-500 sm:right-6"
                        />
                      </td>
  
                     
                      <td
                        class="relative px-6 py-2 text-sm text-center text-hamian border-l ltr whitespace-nowrap"
                      >
                        <RouterLink :to="`/detail/${row.id}`">
                          {{ row.transaction_id }}
                        </RouterLink>
                      </td>
  
  
  
                      <td class="flex px-6 py-2 text-right whitespace-nowrap">
                            <div class="w-8 h-8 avatar avatar-sm me-2">
                              <img :src="`${globalUrl}/storage/gateway_logo/${row.gateway.logo}`" alt="Bank-Logo" class="rounded-full w-8 h-8" />
                            </div>
                            <div class="pr-1  flex items-center">
                              <RouterLink to="/view-client/">
                                <div class="font-semibold text-gray-500 text-sm">
                                  {{ row.gateway.name }}
                                </div>
                              </RouterLink>
  
                           
                            </div>
                          </td>
  
 
  
                      <td class="px-6 py-2  whitespace-nowrap text-center text-xs font-medium">
                        <div class="flex items-center justify-start">
                          <span
                            v-if="row.payment_status == 1"
                            class="w-full py-2 badge bg-green-50 text-green-500 rounded-lg"
                            >پرداخت شده</span
                          >
  
                          <span v-else class="w-full py-2 badge bg-red-50 text-red-500 rounded-lg"
                            > پرداخت نشده</span
                          >
                        </div>
                      </td>
  
                      <td class="px-6 py-2 text-center whitespace-nowrap text-sm">
                        {{ row.created_at }}
                      </td>
  
                      <td class="px-6 py-2 text-center whitespace-nowrap text-sm">
                        {{ rial_separate(row.payment_price) }} ریال
                      </td>
  
                      <td class="px-6 py-2 text-center whitespace-nowrap text-sm">
                        {{ row.ref_id }} 
                      </td>
                    </tr>
                  </template>
                </dataset-item>
              </table>
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
    </dataset>
  
 
</template>
  
<script>
import ExportExcel from "@/components/DataTable/ExportExcel.vue";
import Dataset from "@/components/DataTable/Dataset.vue";
import DatasetInfo from "@/components/DataTable/DatasetInfo.vue";
import DatasetItem from "@/components/DataTable/DatasetItem.vue";
import DatasetPager from "@/components/DataTable/DatasetPager.vue";
import DatasetSearch from "@/components/DataTable/DatasetSearch.vue";
import DatasetShow from "@/components/DataTable/DatasetShow.vue";
import DatasetStatus from "@/components/DataTable/DatasetStatus.vue";
  export default {
    components: {
      Dataset,
      DatasetInfo,
      DatasetItem,
      DatasetPager,
      DatasetSearch,
      DatasetShow,
      DatasetStatus,
      ExportExcel,
    },
  
    data() {
      return {
        mobileSubmenuIndex: null,
        ShowDetailes: false,
        isOpenA: false,
        Addorder: false,
        Export: false,
        Status: false,
        Count: false,
        Expanded: null,
        Discount: false,
        donationList: [],
        filteredCounts: {
          paiedCount: 0,
          unpaiedCount: 0,
          allCount: 0,
        },
        filteredContainer: [],
        cols: [
          {
            name: "شناسه پرداخت",
            field: "orderId",
            sort: "",
            hasIcon: "orderId",
          },
          {
            name: "درگاه پرداخت",
            field: "orderName",
            sort: "",
            hasIcon: "orderName",
          },
          {
            name: "وضعیت",
            field: "orderStatus",
            sort: "",
            hasIcon: "orderStatus",
          },
          {
            name: "تاریخ پرداخت",
            field: "orderDueDate",
            sort: "",
            hasIcon: "orderDueDate",
          },
          {
            name: "مبلغ پرداخت شده",
            field: "orderTotal",
            sort: "",
            hasIcon: "orderTotal",
          }, {
            name: "کد رهگیری",
            field: "orderPursant",
            sort: "",
            hasIcon: "orderPursant",
          },
          
        ],
        excelFields: {
          "شناسه پرداخت": "transaction_id",
          "درگاه پرداخت": "gateway.name",
          "تاریخ پرداخت": "created_at",
          " وضعیت": {
            field: "payment_status",
            callback: (value) => {
              if (value == 1) {
                return "پرداخت شده";
              } else {
                return "پرداخت نشده";
              }
            },
          },
          "مبلغ پرداخت شده": {
            field: "payment_price",
            callback: (value) => {
              return this.rial_separate(value) + " ریال";
            },
          },
          "کد رهگیری": "ref_id",
        },
      };
    },
    props: {
      donations: {
        required: true,
        type: [Object , Array]
      }
    },
    mounted() {
      this.donationList = this.donations;
      this.filteredContainer = this.donations;
  
      this.filterStart();
    },
  
    methods: {
      openSubMobileTable(stateId) {
        if (stateId == this.mobileSubmenuIndex) this.mobileSubmenuIndex = null;
        else this.mobileSubmenuIndex = stateId;
      },
      doFilter(type) {
        if (type == "paied") {
          this.filteredContainer = this.donations;
          const filterUsers = this.filteredContainer.filter((val, index) => {
            return val.payment_status == true;
          });
  
          this.donationList = filterUsers;
        } else if (type == "unpaied") {
          this.filteredContainer = this.donations;
          const filterUsers = this.filteredContainer.filter((val, index) => {
            return val.payment_status == false;
          });
  
          this.donationList = filterUsers;
        } else {
          this.donationList = this.donations;
        }
      },
      filterStart() {
        const filterUsers = this.donationList.filter((val, index) => {
          return val.isPayed == true;
        });
  
        if (filterUsers.length) this.filteredCounts.paiedCount = filterUsers.length;
  
        const unpaids = this.filteredContainer.filter((val, index) => {
          return val.isPayed == false;
        });
  
        if (unpaids.length) this.filteredCounts.unpaiedCount = unpaids.length;
  
        this.filteredCounts.allCount = this.donationList.length;
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
      rial_separate(Number) {
        Number += "";
        Number = Number.replace(",", "");
        let x = Number.split(".");
        let y = x[0];
        let z = x.length > 1 ? "." + x[1] : "";
        var rgx = /(\d+)(\d{3})/;
        while (rgx.test(y)) y = y.replace(rgx, "$1" + "," + "$2");
        return y + z;
      },
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
  