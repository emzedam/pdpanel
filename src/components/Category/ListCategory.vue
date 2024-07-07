<template>
    <dataset
      v-slot="{ ds }"
      :ds-data="categoryList.length != 0 ? categoryList : []"
      :ds-sortby="sortBy"
      :ds-sort-as="{}"
      :ds-search-in="['title']"
      :ds-search-as="{}"
    >
      <div class="lg:col-span-8 col-span-12 font-fa">
        <div class="mt-2 mb-6 bg-white border border-gray-200 product-info rounded-xl">
          <div
            class="relative px-6 py-6 pb-4 m-0 overflow-hidden text-gray-700 bg-transparent border-b shadow-none bg-clip-border border-b-gray-200"
          >
            <h6
              class="flex items-center gap-1 text-xs antialiased font-semibold leading-normal text-gray-600 font-fa"
            >
              <i class="fa-duotone fa-grid-2 text-[20px] !w-5 !h-5 text-hamian ml-1"></i
              >دسته بندی ها
            </h6>
            <p
              class="flex items-center gap-1 pt-2 text-xs antialiased font-normal leading-normal text-gray-600 font-fa"
            >
              از این بخش می توانید دسته بندی ها را مدیریت یا حذف نمایید
            </p>
          </div>
  
          <div
            class="grid gap-4 px-6 py-6 bg-stripes-purple lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 xs:grid-cols-1"
          >
            <div class="relative flex w-full gap-4">
              <dataset-show />
            </div>
  
            <div class="relative w-full lg:flex lg:justify-end">
              <!-- <div
                class="box-border relative z-0 flex lg:w-40 w-full items-center justify-center p-2.5 overflow-hidden font-medium text-red-500 transition-all duration-300 bg-red-100 rounded-md cursor-pointer group ease focus:outline-none"
                @click="remove_group_of_categories()"
              >
                <span
                  class="relative z-20 flex items-center justify-center w-full text-center"
                >
                  <i class="pl-2 text-2xl text-red-400 fa-duotone fa-trash"></i>
                  <span class="w-full"> حذف گروهی </span>
                </span>
              </div> -->
            </div>
  
            <dataset-search ds-search-placeholder="جستجو در لیست..." />
          </div>
  
          <div class="flex flex-col">
            <div class="table">
              <div class="min-w-full align-middle">
                <div class="flex flex-col lg:hidden">
                  <div class="overflow-hid">
                    <div class="inline-block min-w-full align-middle">
                      <div class="relative overflow-hi">
                        <div class="w-full table-auto min-w-max">
                          <div>
                            <div
                              class="text-sm leading-normal text-right text-gray-600 uppercase border-t border-gray-200"
                            >
                              <div scope="col" class="px-6 py-3 font-semibold">
                                دسته بندی ها
                              </div>
                            </div>
                          </div>
                          <dataset-item
                            tag="ul"
                            class="bg-white divide-gray-200 last:border-b"
                            name="fade"
                            is="transition-group"
                          >
                            <template
                              #default="{ row, rowIndex }"
                              v-if="categoryList.length != 0"
                            >
                              <li
                                class="flex border-t border-gray-200 divide-gray-200 cursor-pointer items-center justify-between"
                                v-on:click.prevent="openSubMobileTable(row.id)"
                              >
                                <div class="flex px-6 py-2 text-right whitespace-nowrap">
                                  <div class="pr-3">
                                    <div class="text-base font-semibold">
                                      {{ row.title }}
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
                                          'fa-minus': mobileSubmenuIndex == row.id,
                                          'fa-plus': mobileSubmenuIndex != row.id,
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
                                                    class="mr-1 font-medium text-indigo-500 ltr"
                                                  >
                                                    #{{ row.category_id }}
                                                  </span>
                                                </div>
                                              </div>
  
                                              <div
                                                class="flex px-6 py-3 text-right border-b whitespace-nowrap"
                                              >
                                                <div
                                                  class="flex items-center text-base font-semibold"
                                                >
                                                  نام دسته بندی:
                                                  <span
                                                    class="mr-1 font-medium text-gray-400"
                                                  >
                                                    {{ row.title }}</span
                                                  >
                                                </div>
                                              </div>
  
  
                                              <div
                                                class="flex px-6 py-3 text-right border-b whitespace-nowrap"
                                              >
                                                <div
                                                  class="flex items-center text-base font-semibold"
                                                >
                                                  نامک:
                                                  <span
                                                    class="mr-1 font-medium text-gray-400 relative overflow-hidden"
                                                  >
                                                    {{ row.slug }}</span
                                                  >
                                                </div>
                                              </div>
  
                                              <div
                                                class="flex px-6 py-3 text-right border-b whitespace-nowrap"
                                              >
                                                <div
                                                  class="flex items-center text-base font-semibold"
                                                >
                                                  تعداد اخبار:
                                                  <span
                                                    class="mr-1 font-medium text-gray-400"
                                                  >
                                                   1</span
                                                  >
                                                </div>
                                              </div>

  
                                              <div
                                                v-if="row.cat_image != null"
                                                class="flex px-6 py-3 text-right border-b whitespace-nowrap"
                                              >
                                                <div
                                                  class="flex items-center text-base font-semibold"
                                                >
                                                  تصویر:
                                                  <span
                                                    class="mr-1 font-medium text-gray-400"
                                                  >
                                                    <img
                                                      :src="`${globalUrl}/storage/category_images/${row.cat_image}`"
                                                      class="w-10 h-10 rounded-lg mx-auto"
                                                  /></span>
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
                                                        class="w-4 ml-4 transform cursor-pointer hover:text-gray-500 hover:scale-110"
                                                      >
                                                        <i
                                                          class="fa-thin fa-trash-can text-[18px] !w-5 !h-5 font-normal"
                                                        ></i>
                                                      </div>
                                                      <RouterLink
                                                        to="/Ecommerce/Products/EditCategory"
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
                                                        to="/Ecommerce/Products/ViewCategory"
                                                      >
                                                        <button
                                                          class="w-4 ml-4 transform cursor-pointer hover:text-gray-500 hover:scale-110"
                                                        >
                                                          <i
                                                            class="fa-solid fa-gear text-[18px] !w-5 !h-5 font-normal"
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
                            <template
                              #default="{ row, rowIndex }"
                              v-if="categoryList.length == 0"
                            >
                              داده ای یافت نشد
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
  
                <div class="relative hidden lg:block Desktop-Table">
                  <div class="w-full">
                    <header>
                      <ul
                        class="text-sm leading-normal text-right text-gray-600 uppercase border-t grid grid-cols-7"
                      >
                        <li
                          v-for="(th, index) in cols"
                          :key="th.field"
                          class="px-3 py-2 font-semibold text-center uppercase align-middle bg-transparent border-b border-collapse border-solid shadow-none d text-xxs tracking-none whitespace-nowrap text-slate-700 opacity-70 border-l last:border-l-0"
                        >
                          <div class="flex items-center" :class="th.center">
                            <span class="font-medium">{{ th.name }}</span>
                          </div>
                        </li>
                      </ul>
                    </header>
  
                    <dataset-item
                      tag="div"
                      class="bg-white divide-gray-200"
                      name="fade"
                      is="transition-group"
                    >
                      <template
                        #default="{ row, rowIndex }"
                        v-if="categoryList.length != 0"
                      >
                        <ul class="border-b border-gray-200 grid grid-cols-7">
                          <li
                            class="relative px-6 py-2 font-bold text-center text-hamian border-l ltr whitespace-nowrap items-center flex justify-center"
                          >
                            <i
                              v-if="row.childs.length == 0"
                              class="text-hamian fa fa-empty-set cursor-pointer"
                            ></i>
                            <i
                              v-else
                              v-on:click.prevent="openTable(row.id)"
                              class="fa cursor-pointer"
                              :class="{
                                'fa-minus text-2xl': openedChildIds.includes('cat-'+row.id),
                                'fa-plus text-2xl': !openedChildIds.includes('cat-'+row.id),
                              }"
                            ></i>
                          </li>
  
                          <li
                            class="px-6 py-2 text-center text-sm border-l items-center flex justify-center"
                          >
                            <div class="text-base font-semibold">
                              {{ row.title }}
                            </div>
                          </li>
  
                          <li
                            class="p-2 overflow-hidden relative text-center whitespace-nowrap border-l items-center flex justify-center text-xs text-gray-400"
                          >
                            {{ row.slug }}
                          </li>
                          <li
                            class="p-2 text-sm text-center whitespace-nowrap border-l items-center flex justify-center"
                          >
                            {{ row.parent_name }}
                          </li>
  
                          <li
                            class="p-2 text-center whitespace-nowrap border-l items-center flex justify-center"
                          >
                            1
                          </li>
  
                          <li
                            class="p-2 text-center whitespace-nowrap border-l items-center flex justify-center"
                          >
                            <img
                              v-if="row.cat_image != null"
                              :src="`${globalUrl}/storage/category_images/${row.cat_image}`"
                              class="w-10 h-10 rounded-lg mx-auto"
                            />
                            <p v-else>-</p>
                          </li>
  
                          <li
                            class="px-3 py-3 text-center border-l items-center flex justify-center"
                          >
                            <div class="flex justify-center item-center">
                              <div
                                @click="delete_one_of_cat(row.id)"
                                class="w-4 ml-4 transform cursor-pointer hover:text-gray-500 hover:scale-110"
                              >
                                <i
                                  class="fa-thin fa-trash-can text-[18px] !w-5 !h-5 text-red-500"
                                ></i>
                              </div>
  
                              <RouterLink
                                :to="`/edit-category/${row.id}`"
                              >
                                <div
                                  class="w-4 ml-4 transform cursor-pointer hover:text-gray-500 hover:scale-110"
                                >
                                  <i
                                    class="fa-thin fa-edit text-[18px] !w-5 !h-5 text-indigo-500"
                                  ></i>
                                </div>
                              </RouterLink>
  
                            </div>
                          </li>
                        </ul>
  
                        <div
                          v-if="row.childs.length != 0"
                          v-for="(child, index) in row.childs"
                          :key="index"
                          :class="`cat-${row.id}`"
                          class="hidden"
                        >
                          <div>
                            <div
                              class="border-b border-gray-200 grid grid-cols-7 SUB-MENU bg-gray-50"
                            >
                              <div
                                v-on:click.prevent="openTable(child.id)"
                                class="relative px-6 py-2 font-bold text-center text-hamian border-l ltr whitespace-nowrap items-center flex justify-center"
                              >
                                <i
                                  v-if="child.childs.length == 0"
                                  class="text-hamian fa fa-empty-set cursor-pointer"
                                ></i>
                                <i
                                  v-else
                                  class="fa cursor-pointer"
                                  :class="{
                                    'fa-minus text-2x': openedChildIds.includes('cat-'+child.id),
                                    'fa-plus text-2x': !openedChildIds.includes('cat-'+child.id),
                                  }"
                                ></i>
                              </div>
  
                              <div
                                class="px-6 text-sm py-2 text-center border-l items-center flex justify-center text-gray-500"
                              >
                                {{ child.title }}
                              </div>
  
                              <div
                                class="p-2 overflow-hidden text-xs relative text-center whitespace-nowrap border-l items-center flex justify-center text-gray-500"
                              >
                                {{ child.slug }}
                              </div>
                              <div
                                class="p-2 text-sm text-center whitespace-nowrap border-l items-center flex justify-center text-gray-500"
                              >
                                {{ child.parent_name }}
                              </div>
  
                              <div
                                class="p-2 text-center whitespace-nowrap border-l items-center flex justify-center text-gray-500"
                              >
                                1
                              </div>
  
                              <div
                                class="p-2 text-center whitespace-nowrap border-l items-center flex justify-center text-gray-500"
                              >
                                <img
                                  v-if="child.cat_image != null"
                                  :src="`${globalUrl}/storage/category_images/${child.cat_image}`"
                                  class="w-10 h-10 rounded-lg mx-auto"
                                />
                                <p v-else>
                                  <i class="fa fa-image cursor-pointer"></i>
                                </p>
                              </div>
  
                              <div
                                class="px-3 py-3 text-center border-l items-center flex justify-center text-gray-500"
                              >
                                <div class="flex justify-center item-center">
                                  <div
                                    @click="delete_one_of_cat(child.id)"
                                    class="w-4 ml-4 transform cursor-pointer hover:text-gray-500 hover:scale-110"
                                  >
                                    <i
                                      class="fa-thin fa-trash-can text-[18px] !w-5 !h-5 text-gray-500"
                                    ></i>
                                  </div>
  
                                  <RouterLink
                                    :to="`/edit-category/${child.id}`"
                                  >
                                    <div
                                      class="w-4 ml-4 transform cursor-pointer hover:text-gray-500 hover:scale-110"
                                    >
                                      <i
                                        class="fa-thin fa-edit text-[18px] !w-5 !h-5 text-gray-500"
                                      ></i>
                                    </div>
                                  </RouterLink>
  
                                </div>
                              </div>
                            </div>
                          </div>
  
                          <div
                            v-if="child.childs.length != 0"
                            class="hidden"
                            :class="`cat-${child.id}`"
                          >
                            <div
                              v-for="(subchild, index) in child.childs"
                              :key="index"
                              class="border-b border-gray-200 grid grid-cols-7 SUB-MENU bg-gray-100"
                            >
                              <li
                                class="relative px-6 py-2 font-bold text-center text-indigo-500 border-l ltr whitespace-nowrap items-center flex justify-center"
                              >
                                <i class="fa fa-empty-set text-hamian cursor-pointer"></i>
                              </li>
  
                              <li
                                class="px-6 text-sm py-2 text-center border-l items-center flex justify-center text-gray-500"
                              >
                                {{ subchild.title }}
                              </li>
  
                              <li
                                class="p-2 text-center text-xs whitespace-nowrap border-l items-center flex justify-center text-gray-500"
                              >
                                {{ subchild.slug }}
                              </li>
  
                              <li
                                class="p-2 text-sm text-center whitespace-nowrap border-l items-center flex justify-center text-gray-500"
                              >
                                {{ subchild.parent_name }}
                              </li>
  
                              <li
                                class="p-2 text-center whitespace-nowrap border-l items-center flex justify-center text-gray-500"
                              >
                                1
                              </li>
  
                              <li
                                class="p-2 text-center whitespace-nowrap border-l items-center flex justify-center text-gray-500"
                              >
                                <img
                                  v-if="subchild.cat_image != null"
                                  :src="`${globalUrl}/storage/category_images/${subchild.cat_image}`"
                                  class="w-10 h-10 rounded-lg mx-auto"
                                />
                                <p v-else><i class="fa fa-image cursor-pointer"></i></p>
                              </li>
  
                              <li
                                class="px-3 py-3 text-center border-l items-center flex justify-center text-gray-500"
                              >
                                <div class="flex justify-center item-center">
                                  <div
                                    @click="delete_one_of_cat(subchild.id)"
                                    class="w-4 ml-4 transform cursor-pointer hover:text-gray-500 hover:scale-110"
                                  >
                                    <i
                                      class="fa-thin fa-trash-can text-[18px] !w-5 !h-5 text-gray-500"
                                    ></i>
                                  </div>
  
                                  <RouterLink
                                    :to="`/edit-category/${subchild.id}`"
                                  >
                                    <div
                                      class="w-4 ml-4 transform cursor-pointer hover:text-gray-500 hover:scale-110"
                                    >
                                      <i
                                        class="fa-thin fa-edit text-[18px] !w-5 !h-5 text-gray-500"
                                      ></i>
                                    </div>
                                  </RouterLink>
                                </div>
                              </li>
                            </div>
                          </div>
                        </div>
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
  
  import { toast } from "vue3-toastify";
  import "vue3-toastify/dist/index.css";
  import Swal from 'sweetalert2'

  
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
    props: ["categoryList"],
    data() {
      return {
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
            name: "",
            field: "categoryId",
            size: "w-10",
            center: "justify-center",
          },
          {
            name: "نام دسته بندی",
            field: "categoryName",
            size: "w-10",
            center: "justify-center",
          },
          {
            name: "نامک",
            field: "categoryLink",
            size: "w-16",
            center: "justify-center",
          },
          {
            name: "دسته مادر",
            field: "categoryParent",
            size: "",
            center: "justify-center",
          },
          {
            name: "تعداد اخبار",
            field: "categoryNumber",
            size: "w-auto",
            center: "justify-center",
          },
          {
            name: "تصویر",
            field: "categoryCover",
            size: "w-16",
            center: "justify-center",
          },
          {
            name: "عملیات",
            field: "categoryAction",
            size: "w-20",
            center: "justify-center",
          },
        ],
        slectedItems: [],
        openedChildIds: [],
      };
    },
    methods: {
      openTable(id) {
        const classCollections = Array.from(document.getElementsByClassName('cat-'+id));
  
        if (this.openedChildIds.includes('cat-'+id)) {
          classCollections.forEach((val, index) => {
            val.classList.add("hidden");
          });
  
          const filteredItems = this.openedChildIds.filter((val, index) => {
            return val != 'cat-'+id;
          });
  
          this.openedChildIds = filteredItems;
        } else {
          classCollections.forEach((val, index) => {
            val.classList.remove("hidden");
          });
  
          this.openedChildIds = [...this.openedChildIds, 'cat-'+id];
        }
      },
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
      async remove_group_of_categories() {
        if (this.slectedItems.length != 0) {
          if (
            window.confirm(
              "با حذف هر دسته بندی محصولات شامل آن دسته همگی حذف خواهند شد ، آیا از ادامه این اقدام مطمعنید ؟"
            )
          ) {
            const do_delete = await this.$store.dispatch(
              "delete_group_of_category",
              this.slectedItems
            );
            if (do_delete.status == "success") {
              toast.success("دسته بندی مورد نظز با موقیت ذف شد", {
                autoClose: 3000,
                theme: "colored",
                transition: "flip",
                position: "bottom-right",
                rtl: true,
              });
  
              this.$emit("reload_category");
            }
          }
        } else {
          toast.error("لطفا دسته ای را جهت حذف انتخاب کنید", {
            autoClose: 3000,
            theme: "colored",
            transition: "flip",
            position: "bottom-right",
            rtl: true,
          });
        }
      },
      async delete_one_of_cat(id) {
        Swal.fire({
          title: "آیا مطمعن هستید؟",
          text: "با حذف هر دسته بندی ، دسته بندی های زیر گزینه با اخبار های شامل آن دسته همگی حذف خواهند شد ، آیا از ادامه این اقدام مطمعنید ؟",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#9d2c48",
          cancelButtonColor: "#555",
          cancelButtonText: "خیر",
          confirmButtonText: "بله",
        }).then(async (result) => {
          if (result.isConfirmed) {
            const deleteCat = await this.$store.dispatch("delete_cat", {
              id: id,
            });
            if (deleteCat.status == 200) {
              if (deleteCat.message == "success") {
                toast.success("دسته بندی مورد نظز با موقیت حدف شد", {
                  autoClose: 3000,
                  theme: "colored",
                  transition: "flip",
                  position: "bottom-right",
                  rtl: true,
                });
    
                this.$emit("reload_category");
              } else {
                toast.error("خطایی رخ داده !", {
                  autoClose: 3000,
                  theme: "colored",
                  transition: "flip",
                  position: "bottom-right",
                  rtl: true,
                });
              }
            }
          }
        });
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
  