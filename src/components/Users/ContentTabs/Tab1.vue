<template>
  <dataset
    v-slot="{ ds }"
    :ds-data="postsList"
    :ds-sortby="sortBy"
    :ds-search-in="['id']"
  >
    <div class="col-span-12 font-fa">
      <div class="mt-6 mb-6 bg-white border border-gray-200 product-info rounded-xl">
        <div
          class="relative px-6 py-6 pb-4 m-0 overflow-hidden text-gray-700 bg-transparent border-b shadow-none bg-clip-border border-b-gray-200"
        >
          <h6
            class="flex items-center gap-1 text-xs antialiased font-semibold leading-normal text-gray-600 font-fa"
          >
            <i
              class="fa-duotone fa-cart-circle-check text-[20px] !w-5 !h-5 text-teal-500 ml-1"
            ></i
            >نوشته ها
          </h6>
          <p
            class="flex items-center gap-1 pt-2 text-xs antialiased font-normal leading-normal text-gray-600 font-fa"
          >
            از این بخش می توانید نوشته های مربوط به کاربر {{ userInfo.name }} را مدیریت
            یا حذف نمایید
          </p>
        </div>

        <div
          class="grid gap-4 px-6 py-6 bg-stripes-purple lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 xs:grid-cols-1"
        >
          <div class="relative flex w-full gap-4">
            <dataset-show />
          </div>
          <dataset-status @doFilterStatus="doFilter($event)" />

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
                ><i class="pl-2 text-2xl text-gray-400 fa-duotone fa-file-export"></i
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
                  :data="postsList"
                  :fields="excelFields"
                  :title="`لیست نوشته های ${userInfo.name} در پت دانیم`"
                  :name="`pdposts.xls`"
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
                        ><span class="flex items-center w-full pr-2 text-right">اکسل</span
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
                            <div scope="col" class="px-6 py-3 font-semibold">نوشته ها</div>
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
                              class="flex border-t border-gray-200 divide-gray-200 cursor-pointer items-centerjustify-between"
                              v-on:click.prevent="openSubMobileTable(row.id)"
                            >
                              <div class="px-6 py-3" scope="col">
                                <div
                                  class="flex justify-center cursor-pointer item-center"
                                >
                                  <div
                                    class="flex items-center justify-center w-4 font-extrabold transform hover:text-gray-500 hover:scale-110"
                                  >
                                    <i
                                      :class="{
                                        'fa-minus': mobileSubmenuIndex == row.id,
                                        'fa-plus': mobileSubmenuIndex != row.id,
                                      }"
                                      class="w-4 h-4 text-orange-500 transition-transform transform fa-solid"
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
                                          <div
                                            class="border-b border-gray-200 divide-gray-200"
                                          >
                                            <div
                                              class="flex px-6 py-3 text-right border-b whitespace-nowrap"
                                            >
                                              <div
                                                class="flex items-center text-base font-semibold"
                                              >
                                                شناسه :
                                                <span
                                                  class="mr-1 font-medium text-orange-500 ltr"
                                                >
                                                  {{ row.id }}
                                                </span>
                                              </div>
                                            </div>

                                            <div
                                              class="flex px-6 py-3 text-right border-b whitespace-nowrap"
                                            >
                                              <div
                                                class="flex items-center text-base font-semibold"
                                              >
                                                عنوان نوشته:
                                                <span
                                                  class="mr-1 font-medium text-gray-400"
                                                >
                                                  {{ row.title }}</span>
                                              </div>
                                            </div>

                                            <div
                                              class="flex px-6 py-3 text-right border-b whitespace-nowrap"
                                            >
                                              <div
                                                class="flex items-center text-base font-semibold"
                                              >
                                                وضعیت:
                                                <span
                                                  v-if="row.status == 0"
                                                  class="w-full py-2 mr-2 badge bg-label-warning"
                                                >در انتظار تایید</span>
                                                <span
                                                  v-if="row.status == 1"
                                                  class="w-full py-2 mr-2 badge bg-label-success"
                                                >منتشر شده</span>
                                                <span
                                                  v-if="row.status == 2"
                                                  class="w-full py-2 mr-2 badge bg-label-danger"
                                                >لغو شده</span>
                                              </div>
                                            </div>

                                            <div
                                              class="flex px-6 py-3 text-right border-b whitespace-nowrap"
                                            >
                                              <div
                                                class="flex items-center text-base font-semibold"
                                              >
                                                تاریخ ایجاد:
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
                                                مجموع بازدید:
                                                <span
                                                  class="mr-1 font-medium text-gray-400"
                                                >
                                                  {{ row.review_count }}
                                                  </span
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
                                                        remove_user_post(
                                                          row.id,
                                                          rowIndex
                                                        )
                                                      "
                                                      class="w-4 ml-4 transform cursor-pointer hover:text-gray-500 hover:scale-110"
                                                    >
                                                      <i
                                                        class="fa-thin fa-trash-can text-[18px] !w-5 !h-5 font-normal"
                                                      ></i>
                                                    </div>
                                                    <RouterLink to="/edit-invoice">
                                                      <div
                                                        class="w-4 ml-4 transform cursor-pointer hover:text-gray-500 hover:scale-110"
                                                      >
                                                        <i
                                                          class="fa-thin fa-edit text-[18px] !w-5 !h-5 font-normal"
                                                        ></i>
                                                      </div>
                                                    </RouterLink>

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
                class="relative hidden overflow-x-auto border-t lg:block Desktop-Table"
              >
                <table class="w-full" id="printMe">
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
                    class="bg-white divide-gray-200"
                    name="fade"
                    is="transition-group"
                  >
                    <template #default="{ row, rowIndex }">
                      <tr class="border-b border-gray-200 divide-x">
                        <td class="relative w-10 px-6 border-l sm:w-8 sm:px-8">
                          <input
                            type="checkbox"
                            class="absolute w-4 h-4 -mt-2 text-green-600 border-gray-300 rounded right-4 top-1/2 focus:ring-green-500 sm:right-6"
                          />
                        </td>

                        <td
                          class="relative px-6 py-2 font-bold text-right text-orange-500 border-l ltr whitespace-nowrap"
                        >
                          {{ "#" + row.id }}
                        </td>

                        <td class="px-6 py-2 text-sm  text-right whitespace-nowrap">
                          {{ row.title }}
                        </td>

                        <td class="px-6 py-2 text-right text-sm  whitespace-nowrap">
                          <div class="flex items-center justify-start">
                            <span
                              v-if="row.status == 0"
                              class="w-full py-2   text-orange-500"
                              >در انتظار تایید</span
                            >
                            <span
                              v-if="row.status == 1"
                              class="w-full py-2 text-green-500"
                              >منتشر شده</span
                            >
                            <span
                              v-if="row.status == 2"
                              class="w-full py-2 text-red-500"
                            >لغو شده</span>
                          </div>
                        </td>

                        <td class="px-6 py-2 text-sm  text-right whitespace-nowrap">
                          {{ row.created_at }}
                        </td>

                        <td class="px-6 py-2 text-sm  text-center whitespace-nowrap">
                          {{ row.review_count }} 
                        </td>

                        <td scope="col" class="px-3 py-3 text-center border-l">
                          <div class="flex justify-center item-center">
                            <div
                              @click="remove_user_post(row.id, rowIndex)"
                              class="w-4 ml-4 transform cursor-pointer hover:text-gray-500 hover:scale-110"
                            >
                              <i
                                class="fa-thin fa-trash-can text-[18px] !w-5 !h-5 text-red-500"
                              ></i>
                            </div>

                            <RouterLink
                              :to="`/users/post/${row.id}`"
                              class="w-4 ml-4 transform cursor-pointer hover:text-gray-500 hover:scale-110"
                            >
                              <i
                                class="fa-solid fa-eye text-[18px] !w-5 !h-5 text-pink-500"
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
</template>

<script>
import Tooltip from "@/components/Tooltip.vue";
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
    Tooltip,
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
      postsList: [],
      filteredCounts: {
        paiedCount: 0,
        unpaiedCount: 0,
        allCount: 0,
      },
      filteredContainer: [],
      cols: [
        {
          name: "شناسه",
          field: "postId",
          sort: "",
          hasIcon: "orderId",
        },
        {
          name: "عنون نوشته",
          field: "postId",
          sort: "",
          hasIcon: "orderId",
        },
        {
          name: "وضعیت",
          field: "orderStatus",
          sort: "",
          hasIcon: "orderStatus",
        },
        {
          name: "تاریخ ایجاد",
          field: "orderCreate",
          sort: "",
          hasIcon: "orderStatus",
        },
        {
          name: "مجموع بازدید",
          field: "orderTotal",
          sort: "",
          hasIcon: "orderTotal",
        },
        {
          name: "عملیات",
          field: "orderAction",
          sort: "",
          hasIcon: "orderAction",
        },
      ],
      excelFields: {
        "شناسه نوشته": {
          field: "id",
          callback: (value) => {
            return `#${value}`;
          },
        },
        "عنوان نوشته": "title",
        "تاریخ و ساعت ایجاد": "created_at",
        " وضعیت ": {
          field: "status",
          callback: (value) => {
            if (value == 0) {
              return "در انتظار تایید";
            } else if (value == 1) {
              return "منتشر شده";
            }
          },
        },
        "تعداد بازدید": {
          field: "review_count",
          callback: (value) => {
            return value + " عدد";
          },
        },
      },
    };
  },
  props: ["userInfo"],
  mounted() {
    this.postsList = this.userInfo.posts;
    this.filteredContainer = this.userInfo.posts;

    // this.filterStart();
  },
  methods: {
    async remove_user_post(postId, postIndex) {
      if (confirm("آیا از حذف این نوشته مطمعن هستید ؟")) {
        let res = await this.$store.dispatch("remove_user_post", { id: postId });
        if (res.message == "success") {
          this.showToast("نوشته مورد نظر با موفقیت حذف شد", "success");

          const posts = await this.$store.dispatch("get_posts_list");
          if (posts != null) {
            this.postsList = posts.data.result;
            this.filteredContainer = posts.data.result;

            // this.filterStart();
          }
        } else {
          this.showToast("خطا در حذف پست !", "error");
        }
      }
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
    openSubMobileTable(stateId) {
      if (stateId == this.mobileSubmenuIndex) this.mobileSubmenuIndex = null;
      else this.mobileSubmenuIndex = stateId;
    },
    doFilter(type) {
      console.log(type)
      if (type == 2) {
        const filterPosts = this.filteredContainer.filter((val, index) => {
          return val.status == 2;
        });

        this.postsList = filterPosts;
      } else if (type == 1) {
        const filterPosts = this.filteredContainer.filter((val, index) => {
          return val.status == 1;
        });

        this.postsList = filterPosts;
      } else {
        this.postsList = this.filteredContainer;
      }
    },
    filterStart() {
      const filterUsers = orders.filter((val, index) => {
        return val.isPayed == true;
      });

      if (filterUsers.length) this.filteredCounts.paiedCount = filterUsers.length;

      const unpaids = this.filteredContainer.filter((val, index) => {
        return val.isPayed == false;
      });

      if (unpaids.length) this.filteredCounts.unpaiedCount = unpaids.length;

      this.filteredCounts.allCount = orders.length;
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
