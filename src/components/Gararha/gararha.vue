<template>
  <div
    class="grid gap-4 mt-4 mb-4 font-medium lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 xs:grid-cols-1 font-fa"
  >
    <div class="col-span-1 row-span-1 p-6 border rounded-lg">
      <div class="flex items-start content-between justify-between">
        <div class="content-left">
          <span class="text-sm text-gray-500">همه قرار ها</span>
          <div class="flex items-center my-1">
            <h4 class="mb-0 ml-2 font-bold">{{ appointInformation.appointmentCount }}</h4>
          </div>
          <span class="text-xs text-gray-500">مجموع قرارهای ایجاد شده</span>
        </div>
        <span
          class="flex items-center justify-center w-8 h-8 p-2 text-hamian bg-hamian/10 rounded badge"
        >
          <i class="fa fa-handshake"></i>
        </span>
      </div>
    </div>
    <div class="col-span-1 row-span-1 p-6 border rounded-lg">
      <div class="flex items-start content-between justify-between">
        <div class="content-left">
          <span class="text-sm text-gray-500">تعداد پیش نویس</span>
          <div class="flex items-center my-1">
            <h4 class="mb-0 ml-2 font-bold">{{ appointInformation.draftsCount }}</h4>
          </div>
          <span class="text-xs text-gray-500"> مجموع پیش نویس ها </span>
        </div>
        <span
          class="flex items-center justify-center w-8 h-8 p-2 text-green-500 bg-green-100 rounded badge"
        >
          <i class="fa-light fa-save"></i>
        </span>
      </div>
    </div>
    <div class="col-span-1 row-span-1 p-6 border rounded-lg">
      <div class="flex items-start content-between justify-between">
        <div class="content-left">
          <span class="text-sm text-gray-500">تعداد قرار منتشر شده</span>
          <div class="flex items-center my-1">
            <h4 class="mb-0 ml-2 font-bold">{{ appointInformation.releasedCount }}</h4>
          </div>
          <span class="text-xs text-gray-500">مجموع قرارهای منتشر شده</span>
        </div>
        <span
          class="flex items-center justify-center w-8 h-8 p-2 text-red-500 bg-red-100 rounded badge"
        >
          <i class="fa-light fa-list"></i>
        </span>
      </div>
    </div>
  </div>
  <div class="w-full pb-6">
    <div class="overflow-hidden">
      <div class="gap-4 lg:grid lg:grid-cols-12">
        <dataset
          v-slot="{ ds }"
          :ds-data="appointInformation.appointmentList"
          :ds-sortby="sortBy"
          :ds-sort-as="{}"
          :ds-search-in="['title']"
          :ds-search-as="{}"
        >
          <div class="col-span-12 font-fa">
            <div
              class="mt-2 mb-6 bg-white border border-gray-200 garar-info rounded-xl"
            >
              <div
                class="relative px-6 py-6 pb-4 m-0 overflow-hidden text-gray-700 bg-transparent border-b shadow-none bg-clip-border border-b-gray-200"
              >
                <h6
                  class="flex items-center gap-1 text-xs antialiased font-semibold leading-normal text-gray-600 font-fa"
                >
                  <i
                    class="fa-light fa-grid-2 text-[20px] !w-5 !h-5 text-hamian ml-1"
                  ></i
                  >قرار ها
                </h6>
                <p
                  class="flex items-center gap-1 pt-2 text-xs antialiased font-normal leading-normal text-gray-600 font-fa"
                >
                  از این بخش می توانید قرار ها را مدیریت یا حذف نمایید
                </p>
              </div>

              <div class="py-8 border-b px-7 card-header">
                <div
                  class="grid lg:grid-cols-4 gap-4 md:grid-cols-2 sm:grid-cols-1 xs:grid-cols-1"
                >
                  <div class="w-full">
                    <RouterLink to="/add-garar">
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
                            class="pl-2 text-2xl text-white fa-light fa-plus"
                          ></i
                          ><span class="w-full">افزودن قرار جدید</span></span
                        >
                      </button>
                    </RouterLink>
                  </div>

                  <div class="hidden relative justify-end w-full">
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
                          class="pl-2 text-2xl text-gray-400 fa-light fa-file-import"
                        ></i
                        ><span class="w-full"> درون ریزی </span></span
                      >
                    </button>
                  </div>

                  <div class="w-full">
                    <export-excel
                      :data="appointInformation.appointmentList"
                      :fields="excelFields"
                      title="لیست قرار های مهربانی پت و من"
                      :name="`appointments.xls`"
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
                          class="pl-2 text-2xl text-gray-400 fa-light fa-file-export"
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
                                    قرار ها
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
                                        v-if="row.image != null"
                                        :src="`${globalUrl}/storage/appointments/${row.image}`"
                                          class="w-10 h-10 rounded-lg mx-auto ml-2"
                                        />

                                        <p
                                          class="text-sm font-regular text-gray-700 break-words"
                                        >
                                          {{ row.title }}
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
                                                      زمان :
                                                      <span
                                                        class="mr-1 font-medium"
                                                      >
                                                        <div
                                                          class="text-[15px] font-semibold"
                                                        >
                                                          <span
                                                            class="font-semibold"
                                                            v-if="
                                                              row.ended == 0
                                                            "
                                                          >
                                                            {{row.end_date}}</span
                                                          >
                                                          <span
                                                            class="font-semibold text-gray-500"
                                                            v-if="
                                                              row.gararDate == 1
                                                            "
                                                            >پایان یافته</span
                                                          >
                                                        </div>
                                                      </span>
                                                    </div>
                                                  </div>

                                                  <div
                                                    class="flex px-6 py-3 text-right border-b"
                                                  >
                                                    <div
                                                      class="flex items-center text-base font-semibold"
                                                    >
                                                      مکان :
                                                      <span
                                                        class="mr-1 font-medium"
                                                      >
                                                        {{
                                                          row.location
                                                        }}
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
                                                        class="mr-1 font-medium"
                                                      >
                                                        <div
                                                          class="text-[15px] font-semibold"
                                                        >
                                                          <span
                                                            class="font-semibold text-green-500"
                                                            v-if="
                                                              row.status ==
                                                              1
                                                            "
                                                            >منتشر شده</span
                                                          >
                                                          <span
                                                            class="font-semibold text-red-500"
                                                            v-if="
                                                              row.status ==
                                                              0
                                                            "
                                                            >پیش نویس</span
                                                          >
                                                        </div>
                                                      </span>
                                                    </div>
                                                  </div>

                                                  <div
                                                    class="flex px-6 py-3 text-right border-b"
                                                  >
                                                    <div
                                                      class="flex items-center text-base font-semibold"
                                                    >
                                                      نمایش در صفحه اصلی:
                                                      <span
                                                        class="mr-1 font-medium text-gray-400"
                                                      >
                                                        <div
                                                          class="flex items-center h-5 mx-auto justify-center"
                                                        >
                                                          <label
                                                            class="relative inline-flex items-center cursor-pointer"
                                                            ><input
                                                              type="checkbox"
                                                              :value="row.is_main"
                                                              :checked="row.is_main == 1 ? true : false"
                                                              @change="add_to_main(row , rowIndex)"
                                                              class="sr-only peer is_main_ref"
                                                            />
                                                            <div
                                                              class="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 peer-checked:after:left-[2px] after:right-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-hamian"
                                                            ></div>
                                                            <span
                                                              class="text-sm font-medium text-gray-900"
                                                            ></span>
                                                          </label>
                                                        </div>
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
                                                            @click="deleteAppointment(row.id)"
                                                            class="w-4 ml-4 transform cursor-pointer hover:text-gray-500 hover:scale-110"
                                                          >
                                                            <i
                                                              class="fa-light fa-trash-can text-[18px] !w-5 !h-5 font-normal"
                                                            ></i>
                                                          </div>
                                                          <RouterLink
                                                            :to="`/edit-garar/${row.id}`"
                                                          >
                                                            <div
                                                              class="w-4 ml-4 transform cursor-pointer hover:text-gray-500 hover:scale-110"
                                                            >
                                                              <i
                                                                class="fa-light fa-edit text-[18px] !w-5 !h-5 font-normal"
                                                              ></i>
                                                            </div>
                                                          </RouterLink>

                                                          <div>
                                                            <div
                                                              class="w-4 transform cursor-pointer hover:text-gray-500 hover:scale-110"
                                                            >
                                                              <i
                                                                v-if="row.status == 1"
                                                                @click="change_status(row , 0)"
                                                                class="fa-light fa-check text-[18px] !w-5 !h-5 text-green-500"
                                                              ></i>
                                                              <i
                                                                v-else
                                                                @click="change_status(row , 1)"
                                                                class="fa-light fa-close text-[18px] !w-5 !h-5 text-red-500"
                                                              ></i>
                                                            </div>
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
                                class="absolute w-4 h-4 -mt-2 text-hamian border-gray-300 right-4 top-1/2 focus:ring-hamian sm:right-6"
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
                                  class="absolute w-4 h-4 -mt-2 text-hamian border-gray-300 rounded right-4 top-1/2 focus:ring-hamian sm:right-6"
                                />
                              </td>

                              <td
                                class="relative px-6 py-2 font-bold text-center text-hamian border-l ltr text-[15px]"
                              >
                                {{ row.id }}
                              </td>

                              <td class="p-2 text-center mx-auto">
                                <img
                                  v-if="row.image != null"
                                  :src="`${globalUrl}/storage/appointments/${row.image}`"
                                  class="w-10 h-10 rounded-lg mx-auto"
                                />
                                <span v-else>-</span>
                              </td>

                              <td class="px-3 py-2 text-right">
                                <div class="text-[15px] font-semibold">
                                  {{ row.title }}
                                </div>
                              </td>

                              <td class="px-3 py-2 text-center">
                                <div class="text-[15px] font-semibold">
                                  <span
                                    class="font-semibold text-green-500"
                                    v-if="row.status == 1"
                                    >منتشر شده</span
                                  >
                                  <span
                                    class="font-semibold text-red-500"
                                    v-if="row.status == 0"
                                    >پیش نویس</span
                                  >
                                </div>
                              </td>

                              <td class="p-2 text-center text-[15px]">
                                {{ row.location }}
                              </td>

                              <td class="px-3 py-2 text-center">
                                <div class="text-[15px] font-semibold">
                                  <span
                                    class="font-semibold text-gray-500"
                                    v-if="row.ended == 0"
                                    >{{ row.end_date }}</span
                                  >
                                  <span
                                    class="font-semibold text-gray-400"
                                    v-if="row.ended == 1"
                                    >پایان یافته</span
                                  >
                                </div>
                              </td>

                              <td class="p-2 text-center">
                                <div
                                  class="flex items-center h-5 mx-auto justify-center"
                                >
                                  <label
                                    class="relative inline-flex items-center cursor-pointer"
                                    ><input
                                      type="checkbox"
                                      :value="row.is_main"
                                      :checked="row.is_main == 1 ? true : false"
                                      class="sr-only peer is_main_ref"
                                      @change="add_to_main(row , rowIndex)"
                                    />
                                    <div
                                      class="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 peer-checked:after:left-[2px] after:right-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-hamian"
                                    ></div>
                                    <span
                                      class="text-sm font-medium text-gray-900"
                                    ></span>
                                  </label>
                                </div>
                              </td>

                              <td
                                scope="col"
                                class="px-3 py-3 text-center border-l"
                              >
                                <div
                                  class="flex justify-center item-center gap-4 text-gray-400"
                                >
                                  <div
                                    @click="deleteAppointment(row.id)"
                                    class="w-4 transform cursor-pointer hover:text-gray-500 hover:scale-110"
                                  >
                                    <i
                                      class="fa-light fa-trash-can text-[18px] !w-5 !h-5"
                                    ></i>
                                  </div>

                                  <RouterLink :to="`/edit-garar/${row.id}`">
                                    <div
                                      class="w-4 transform cursor-pointer hover:text-gray-500 hover:scale-110"
                                    >
                                      <i
                                        class="fa-light fa-edit text-[18px] !w-5 !h-5"
                                      ></i>
                                    </div>
                                  </RouterLink>

                                  <div>
                                    <div
                                      class="w-4 transform cursor-pointer hover:text-gray-500 hover:scale-110"
                                    >
                                      <i
                                        v-if="row.status == 1"
                                        @click="change_status(row , 0)"
                                        class="fa-light fa-check text-[18px] !w-5 !h-5 text-green-500"
                                      ></i>
                                      <i
                                        v-else
                                        @click="change_status(row , 1)"
                                        class="fa-light fa-close text-[18px] !w-5 !h-5 text-red-500"
                                      ></i>
                                    </div>
                                  </div>
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
    </div>
  </div>
</template>

<script>
import Swal from 'sweetalert2'
import ExportExcel from "@/components/DataTable/ExportExcel.vue";
import garars from "@/assets/garars.json";
import Dataset from "@/components/DataTable/Dataset.vue";
import DatasetInfo from "@/components/DataTable/DatasetInfo.vue";
import DatasetItem from "@/components/DataTable/DatasetItem.vue";
import DatasetPager from "@/components/DataTable/DatasetPager.vue";
import DatasetSearch from "@/components/DataTable/DatasetSearch.vue";
import DatasetShow from "@/components/DataTable/DatasetShow.vue";
import DataAction from "@/components/DataTable/DataAction.vue";
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
    DataAction,
  },
  emits: ["removeAppointmentList" , "changeList"],
  props: {
    appointInformation: {
      required: true,
      type: [Array , Object]
    }
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
      gararsList: garars,
      filteredContainer: [],
      cols: [
        {
          name: "شناسه",
          field: "gararId",
          size: "w-10",
          center: "justify-center",
        },
        {
          name: "تصویر",
          field: "gararImage",
          size: "w-auto",
          center: "justify-center",
        },
        {
          name: "عنوان",
          field: "gararName",
          size: "w-auto",
          center: "justify-start",
        },
        {
          name: "وضعیت",
          field: "gararStatus",
          size: "w-auto",
          center: "justify-center",
        },

        {
          name: "مکان",
          field: "gararLevel",
          size: "w-auto",
          center: "justify-center",
        },
        {
          name: "زمان",
          field: "gararFeatured",
          size: "w-auto",
          center: "justify-center",
        },
        {
          name: "نمایش در صفحه اصلی",
          field: "gararCommission",
          size: "w-auto",
          center: "justify-center",
        },
        {
          name: "عملیات",
          field: "gararAction",
          size: "w-auto",
          center: "justify-center",
        },
      ],
      excelFields: {
          "شناسه": "id",
          "عنوان": "title",
          "وضعیت": {
            field: "status",
            callback: (value) => {
              if (value == 1) {
                return "منتشر شده";
              } else {
                return "پیش نویس نشده";
              }
            },
          },
          "زمان": "end_date",
          "مکان": "location"
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
    async add_to_main(row , index){
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
          if(row.is_main == 1) {
            state = 0
          }else {
            state = 1
          }
          const result = await this.$store.dispatch("appoint_is_main_status" , {id:row.id , state: state})
          if(result.status == 200){
            row.is_main = state
            this.$emit("changeList" , result.result)
            this.showSwal("پیغام موفقیت آمیز" , result.message , "success")
          }else {
            this.showSwal("خطایی رخ داد" , result.message , "error")
          }
        }else {
          if(row.is_main == 1){
            document.getElementsByClassName("is_main_ref")[index].checked = true
          }else {
            document.getElementsByClassName("is_main_ref")[index].checked = false
          }
        }
      })
    },
    showSwal(title , text , icon) {
      Swal.fire({
        title: title,
        text: text,
        icon: icon
      });
    },
    async change_status(row , status) {
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
          const result = await this.$store.dispatch("change_appointment_status" , {id:row.id , status: status})
          if(result.status == 200){
            row.status = status
            this.showSwal("پیغام موفقیت آمیز" , result.message , "success")
          }else {
            this.showSwal("خطایی رخ داد" , result.message , "error")
          }
        }
      })
    },
    async deleteAppointment(id) {
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
          const result = await this.$store.dispatch("delete_appointment" , {id: id})
          if(result.status == 200){
            this.showSwal("پیغام موفقیت آمیز" , result.message , "success")
            this.$emit("removeAppointmentList" , {ids: [id]})
          }else {
            this.showSwal("پیغام خطا" , result.message , "error")
          }
        }
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
              const result = await this.$store.dispatch("delete_list_of_appointments" , {ids: this.deletableIds})
              if(result.status == 200){
                this.showSwal("پیغام موفقیت آمیز" , result.message , "success")
                this.$emit("removeAppointmentList" , {ids: result.result})
              }else {
                this.showSwal("پیغام خطا" , result.message , "error")
              }
            }
          });
        }else{
          this.showSwal("پیغام خطا" , "لطفا اقدام مد نظر خود را انتخاب کنید" , "error")
        }
      }else {
        this.showSwal("پیغام خطا" , "لطفا  آیتمی را جهت حدف انتخاب کنید" , "error")
      }
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
