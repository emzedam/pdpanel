<template>
    <form
      id="navbar"
      class="top-0 z-30 col-span-12 lg:col-span-12"
      @submit.prevent="category_edit()"
    >
      <div class="mt-2 border border-gray-200 rounded-lg">
        <div class="flex items-center w-full p-4 border-b border-gray-200">
          <i class="pl-2 text-2xl text-hamian fa-duotone fa-edit"></i>
          <span>ویرایش دسته بندی محصول</span>
        </div>
  
        <div class="p-4 tab-content sm:p-5">
          <div class="space-y-5">
            <div class="relative col-span-4 sm:col-span-2">
              <label
                for="last-name"
                class="flex pb-2 pr-1 text-sm font-medium text-gray-700"
              >
                <span>عنوان دسته</span>
                <i
                  class="fa-duotone fa-question-circle text-hamian flex leading-[1px] pr-1"
                ></i>
              </label>
              <div class="flex mt-1 rounded-md shadow-sm">
                <div class="relative flex items-stretch flex-grow focus-within:z-10">
                  <div
                    class="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none"
                  >
                    <i
                      class="fa-duotone fa-duotone fa-pen-to-square text-hamian h-5 w-5 flex leading-[1px] pr-1"
                    ></i>
                  </div>
                  <input
                    type="text"
                    v-model="data.title"
                    class="block w-full pr-10 border-gray-300 rounded-md focus:border-hamian focus:ring-hamian sm:text-sm"
                    placeholder="حداکثر 20 کاراکتر بنویسید"
                  />
                </div>
              </div>
              <p class="pt-2 text-xs text-gray-400">
                این چیزی است که وقتی این نوشته در نتایج جستجو نشان داده می شود، در خط اول
                ظاهر می شود.
              </p>
            </div>
  
            <div class="flex mt-2 rounded-md shadow-sm">
              <div class="relative items-stretch flex-grow focus-within:z-10">
                <button
                  type="button"
                  @click="categoryStatus = !categoryStatus"
                  class="text-gray-500 border border-gray-300 focus:ring-1 focus:outline-none focus:ring-hamian font-medium rounded-lg text-xs px-4 py-2.5 text-center inline-flex items-center w-full justify-between"
                >
                  <i
                    class="fa-duotone fa-list-tree text-hamian h-5 w-5 flex leading-[1px] text-[19px]"
                  ></i>
                  <span class="w-full pr-2 text-right">
                    {{ cat_name != null ? cat_name : "انتخاب دسته مادر" }}
                  </span>
                  <i
                    class="fa-duotone fa-angle-down text-[22px] ml-1 w-4 h-4 leading-[15px]"
                  ></i>
                </button>
                <div
                  class="z-10 w-full mt-2 bg-white border rounded-lg"
                  :class="!categoryStatus ? 'hidden' : ''"
                >
                  <ul
                    v-if="categoryList.length == 0"
                    class="h-40 p-3 overflow-y-auto text-sm text-gray-700"
                    aria-labelledby="dropdownSearchButton"
                  >
                    <li @click="setParentId(0, 'دسته به عنوان مادر')">
                      <div
                        class="flex items-center w-full my-1 border rounded hover:bg-gray-100"
                      >
                        <input
                          id="checkbox-item-11"
                          type="hidden"
                          class="w-4 h-4 text-hamian bg-gray-100 border-gray-300 rounded-lg"
                        />
                        <label
                          for="checkbox-item-11"
                          class="flex items-center justify-between w-full py-2 mr-2 text-sm font-medium text-gray-500 rounded"
                        >
                          <span class="flex items-center w-full pr-2 text-right"
                            >دسته به عنوان مادر</span
                          >
                          <i
                            v-if="data.parent_id == 0"
                            class="flex items-center pl-2 text-left text-green-500 fa-solid fa-check"
                          ></i>
                        </label>
                      </div>
                    </li>
                  </ul>
  
                  <ul
                    v-if="categoryList.length != 0"
                    class="h-40 p-3 overflow-y-auto text-sm text-gray-700"
                    aria-labelledby="dropdownSearchButton"
                  >
                    <li @click="setParentId(0, 'دسته به عنوان مادر')">
                      <div
                        class="flex items-center w-full my-1 border rounded hover:bg-gray-100"
                      >
                        <input
                          id="checkbox-item-11"
                          type="hidden"
                          class="w-4 h-4 text-hamian bg-gray-100 border-gray-300 rounded-lg"
                        />
                        <label
                          for="checkbox-item-11"
                          class="flex items-center justify-between w-full py-2 mr-2 text-sm font-medium text-gray-500 rounded"
                        >
                          <span class="flex items-center w-full pr-2 text-right"
                            >دسته به عنوان مادر</span
                          >
                          <i
                            v-if="data.parent_id == 0"
                            class="flex items-center pl-2 text-left text-green-500 fa-solid fa-check"
                          ></i>
                        </label>
                      </div>
                    </li>
                    <li
                      v-for="(item, index) in categoryList"
                      :key="index"
                      @click="setParentId(item._id, item.title)"
                    >
                      <div
                        class="flex items-center w-full my-1 border rounded hover:bg-gray-100"
                      >
                        <input
                          id="checkbox-item-11"
                          type="hidden"
                          v-model="data.parent_id"
                          class="w-4 h-4 text-hamian bg-gray-100 border-gray-300 rounded-lg"
                        />
                        <label
                          for="checkbox-item-11"
                          class="flex items-center justify-between w-full py-2 mr-2 text-sm font-medium text-gray-500 rounded"
                        >
                          <span
                            class="flex items-center w-full pr-2 text-right"
                            >{{ item.title }}</span
                          >
                          <i
                            v-if="data.parent_id == item._id"
                            class="flex items-center pl-2 text-left text-green-500 fa-solid fa-check"
                          ></i>
                        </label>
                      </div>
                      <ul class="pr-2 overflow-y-auto text-sm text-gray-700"
                       v-if="item.childs.length != 0">
                        <li
                          v-for="(child, index) in item.childs"
                          :key="index"
                          @click.stop="setParentId(child._id, child.title)"
                        >
                          <div
                            class="flex items-center w-full my-1 border rounded hover:bg-gray-100"
                          >
                            <input
                              id="checkbox-item-11"
                              type="hidden"
                              v-model="data.parent_id"
                              class="w-4 h-4 text-hamian bg-gray-100 border-gray-300 rounded-lg"
                            />
                            <label
                              for="checkbox-item-11"
                              class="flex items-center justify-between w-full py-2 mr-2 text-sm font-medium text-gray-500 rounded"
                            >
                              <span
                                class="flex items-center w-full pr-2 text-right"
                                >{{ child.title }}</span
                              >
                              <i
                                v-if="data.parent_id == child._id"
                                class="flex items-center pl-2 text-left text-green-500 fa-solid fa-check"
                              ></i>
                            </label>
                          </div>
  
  
                          <ul class="pr-2 overflow-y-auto text-sm text-gray-700"
                            v-if="child.childs.length != 0">
                              <li
                                v-for="(subchild, index) in child.childs"
                                :key="index"
                                @click.stop="setParentId(subchild._id, subchild.title)"
                              >
                                <div
                                  class="flex items-center w-full my-1 border rounded hover:bg-gray-100"
                                >
                                  <input
                                    id="checkbox-item-11"
                                    type="hidden"
                                    v-model="data.parent_id"
                                    class="w-4 h-4 text-hamian bg-gray-100 border-gray-300 rounded-lg"
                                  />
                                  <label
                                    for="checkbox-item-11"
                                    class="flex items-center justify-between w-full py-2 mr-2 text-sm font-medium text-gray-500 rounded"
                                  >
                                    <span
                                      class="flex items-center w-full pr-2 text-right"
                                      >{{ subchild.title }}</span
                                    >
                                    <i
                                      v-if="data.parent_id == subchild._id"
                                      class="flex items-center pl-2 text-left text-green-500 fa-solid fa-check"
                                    ></i>
                                  </label>
                                </div>
                              </li>
                              
                            </ul>
                        </li>
                        
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
  
  
  
            <div
              class="grid grid-cols-1 lg:grid-cols-1 xl:grid-cols-2 2xl:grid-cols-2 3xl:grid-cols-2 gap-4"
            >
              <div
                class="flex items-center justify-center w-full pt-2 rounded-lg grow"
              >
                <div
                  class="flex items-center justify-center w-full h-full px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md"
                >
                  <div class="space-y-1 text-center">
                    <div
                      class="w-12 h-12 mx-auto text-4xl text-gray-400 fa-duotone fa-image"
                    ></div>
                    <div class="flex text-sm text-gray-600">
                      <label
                        for="upload-img-category"
                        class="relative mx-auto font-medium text-hamian bg-white rounded-md cursor-pointer focus-widuotone:outline-none focus-widuotone:ring-2 focus-widuotone:ring-green-500 focus-widuotone:ring-offset-2 hover:text-hamian"
                      >
                        <span>آپلود تصویر دسته</span>
                        <input
                          id="upload-img-category"
                          name="upload-img-category"
                          type="file"
                          class="sr-only"
                          ref="categoryimage"
                          @change="setImageCategory"
                        />
                      </label>
                    </div>
                    <p class="text-xs text-gray-500">
                      PNG, JPG, GIF بیشترین اندازه (100 کیلیوبایت)
                    </p>
                  </div>
                </div>
              </div>
  
              <div
                class="flex items-center justify-center w-full pt-2 rounded-lg grow"
              >
                <div
                  class="flex items-center justify-center w-full h-full px-6 pt-5 pb-6 border border-gray-300 rounded-md"
                >
                  <img v-if="data.cat_img_reader_file != null"
                    :src="data.cat_img_reader_file.src"
                    class="object-cover w-24 mx-auto"
                  />
                  <p v-else>انتخاب نشده</p>
                </div>
              </div>
            </div>
    
          </div>
        </div>
  
        <div class="block p-4">
          <button
            type="submit"
            v-if="!loading"
            class="box-border relative z-0 inline-flex items-center justify-center w-full p-3 px-8 py-3 my-2 overflow-hidden font-medium text-white transition-all duration-300 bg-hamian rounded-md cursor-pointer group ease focus:outline-none"
          >
            <span
              class="absolute bottom-0 right-0 w-8 h-20 -mb-8 -mr-5 transition-all duration-300 ease-out transform rotate-45 translate-x-1 bg-white opacity-10 group-hover:translate-x-0"
            ></span>
            <span
              class="absolute top-0 left-0 w-20 h-8 -mt-1 -ml-12 transition-all duration-300 ease-out transform -rotate-45 -translate-x-1 bg-white opacity-10 group-hover:translate-x-0"
            ></span>
            <span class="relative z-20 flex items-center justify-center w-full text-center">
              <i class="pl-2 text-2xl text-white fa-duotone fa-edit"></i>
              <span class="w-full">ویرایش دسته محصول</span>
            </span>
          </button>
          <button
            type="button"
            v-if="loading"
            class="box-border relative z-0 inline-flex items-center justify-center w-full p-3 px-8 py-3 my-2 overflow-hidden font-medium text-white transition-all duration-300 bg-hamian rounded-md cursor-pointer group ease focus:outline-none"
          >
            <span
              class="absolute bottom-0 right-0 w-8 h-20 -mb-8 -mr-5 transition-all duration-300 ease-out transform rotate-45 translate-x-1 bg-white opacity-10 group-hover:translate-x-0"
            ></span>
            <span
              class="absolute top-0 left-0 w-20 h-8 -mt-1 -ml-12 transition-all duration-300 ease-out transform -rotate-45 -translate-x-1 bg-white opacity-10 group-hover:translate-x-0"
            ></span>
            <span class="relative z-20 flex items-center justify-center w-full text-center">
              <i class="pl-2 text-2xl text-white fa-duotone fa-arrow-up-from-bracket"></i>
              <span class="w-full">در حال بروزرسانی ...</span>
            </span>
          </button>
        </div>
      </div>
    </form>
  </template>
  
  <script>
  import { toast } from "vue3-toastify";
  import "vue3-toastify/dist/index.css";
  
  export default {
    name: "EditCategory",
    data() {
      return {
        loading: false,
        data: {
          title: null,
          parent_id: 0,
          cat_image: null,
        },
        categoryStatus: false,
        cat_name: null,
      };
    },
    props: {
      categoryList: {
        required: true,
        type: [Array, Object],
      },
      catDetail: {
        required: true,
        type: [Array, Object],
      },
    },
    mounted() {
      if (this.catDetail) {
        this.data.title = this.catDetail.title;
        this.data.parent_id = this.catDetail.parent_id;
        this.setParentId(this.catDetail.parent_id , this.catDetail.parent_name)
      }
    },
    methods: {
      setImageCategory(event) {
        let file = event.target.files[0];
        const types = [
          "image/jpg",
          "image/png",
          "image/jpeg",
          "image/gif",
          "image/webp",
          "image/svg+xml",
        ];
        if (types.includes(file.type)) {
          this.data.cat_image = file;
          this.create_cat_img_reader_file(file)
        } else {
          toast.error("پسوند فایل غیر مجاز میباشد", {
            autoClose: 3000,
            theme: "colored",
            transition: "flip",
            position: "bottom-right",
            rtl: true,
          });
          this.$refs.categoryimage.value = "";
          this.data.cat_img_reader_file = null
        }
      },
      create_cat_img_reader_file(file){
        let img = new Image();
        let reader = new FileReader();
  
        reader.onload = (e) => {
          this.data.cat_img_reader_file = { src: e.target.result };
        };
  
        reader.readAsDataURL(file);
      },
      async category_edit() {
        const formData = new FormData();
  
        formData.append("id", this.$route.params.id);
        formData.append("title", this.data.title);
        formData.append("parent_id", this.data.parent_id);
  
        if (this.data.cat_image != null) {
          formData.append("cat_image", this.data.cat_image);
        }

        formData.append("slug", this.persianSlug(this.data.title));
  
        this.loading = true;
  
        const send_data = await this.$store.dispatch("edit_category", formData);
        if (send_data.status != 200) {
          this.loading = false;
          toast.error("لطفا تمامی اطلاعات را با دقت وارد کنید ، خطایی رخ داده !!", {
            autoClose: 3000,
            theme: "colored",
            transition: "flip",
            position: "bottom-right",
            rtl: true,
          });
        } else if (send_data.status == 200) {
          this.loading = false;
  
          toast.success("دسته بندی مورد نظر شما با موفقیت بروزرسانی گردید", {
            autoClose: 3000,
            theme: "colored",
            transition: "flip",
            position: "bottom-right",
            rtl: true,
          });
  
          this.clearData();
        }
      },
      clearData() {
        this.data.title = null;
        this.data.parent_id = 0;
        this.data.cat_image = null;
  
        if (this.data.cat_image != null) {
          this.$refs.categoryimage.value = "";
        }
      },
      setParentId(id, name) {
        this.data.parent_id = id;
        this.cat_name = name;
        this.categoryStatus = false;
      },
      persianSlug(titleStr) {
        titleStr = titleStr.replace(/^\s+|\s+$/g, "");
        titleStr = titleStr.toLowerCase();
        titleStr = titleStr
          .replace(/[^a-z0-9_\s-ءاأإآؤئبتثجحخدذرزسشصضطظعغفقكلمنهويةى]#u/, "")
          .replace(/\s+/g, "-")
          .replace(/-+/g, "-");
        return titleStr;
      },
    },
  };
  </script>
  