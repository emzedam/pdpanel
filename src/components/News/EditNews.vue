<template>
  <div class="grid lg:grid-cols-12 gap-4">
    <div
      class="border border-gray-200 rounded-lg card mt-2 lg:col-span-9 col-span-12"
    >
      <div
        class="relative pb-4 m-0 overflow-hidden text-gray-700 bg-transparent border-b shadow-none bg-clip-border border-b-gray-200 px-6 py-6"
      >
        <h6
          class="flex items-center gap-1 text-سئ antialiased font-semibold leading-normal text-gray-600 font-fa"
        >
          <i
            class="fa-duotone fa-pen-to-square text-[20px] !w-5 !h-5 text-hamian ml-1"
          ></i>
          ویرایش نوشته
        </h6>
        <p
          class="flex items-center gap-1 pt-2 text-xs antialiased font-normal leading-normal text-gray-600 font-fa"
        >
          از این بخش می توانید نوشته را ویرایش کنید
        </p>
      </div>

      <div class="flex flex-col tabs">
        <div class="p-4 tab-content sm:p-5">
          <div class="space-y-5">
            <div class="relative col-span-4 sm:col-span-2 mt-4">
              <label
                for="last-name"
                class="flex pb-2 pr-1 text-sm font-medium text-gray-700"
              >
                <span>عنوان نوشته</span>
              </label>
              <div class="mt-1 rounded-md">
                <div
                  class="relative flex items-stretch flex-grow focus-within:z-10"
                >
                  <div
                    class="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none"
                  >
                    <i
                      class="fa-duotone fa-duotone fa-h1 text-hamian h-5 w-5 flex leading-[1px] pr-1"
                    ></i>
                  </div>
                  <input
                    type="text"
                    @keyup="(e) => set_news_title(e)"
                    :value="newsData.title"
                    class="block w-full pr-10 py-4 border-gray-300 rounded-md focus:border-hamian focus:ring-hamian sm:text-sm"
                    placeholder="حداکثر 60 کاراکتر بنویسید"
                  />
                </div>
              </div>
            </div>

            <div class="grid lg:grid-cols-3 gap-4">
              <div class="relative mt-4">
                <label
                  for="last-name"
                  class="flex pb-2 pr-1 text-sm font-medium text-gray-700"
                >
                  <span>تاریخ </span>
                </label>
                <div class="mt-1 rounded-md">
                  <div
                    class="relative flex items-stretch flex-grow focus-within:z-10"
                  >
                    <div
                      class="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none"
                    >
                      <i
                        class="fa-duotone fa-duotone fa-pen-to-square text-hamian h-5 w-5 flex leading-[1px] pr-1"
                      ></i>
                    </div>

                    <input
                      type="text"
                      class="custom-input block w-full pr-10 py-4 border-gray-300 rounded-md focus:border-hamian focus:ring-hamian sm:text-sm"
                      placeholder="انتخاب کنید"
                    />

                    <date-picker
                      v-model="newsData.date"
                      format="jYYYY/jMM/jDD"
                      custom-input=".custom-input"
                      @input="date=$event"
                    />
                  </div>
                </div>
              </div>

              <div class="relative mt-4">
                <label
                  for="last-name"
                  class="flex pb-2 pr-1 text-sm font-medium text-gray-700"
                >
                  <span>نویسنده </span>
                </label>
                <div class="mt-1 rounded-md">
                  <div
                    class="relative flex items-stretch flex-grow focus-within:z-10"
                  >
                    <div
                      class="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none"
                    >
                      <i
                        class="fa-duotone fa-duotone fa-user text-hamian h-5 w-5 flex leading-[1px] pr-1"
                      ></i>
                    </div>
                    <input
                      type="text"
                      class="block w-full pr-10 py-4 border-gray-300 rounded-md focus:border-hamian focus:ring-hamian sm:text-sm"
                      disabled
                      :placeholder="`${authadmin.name} ${authadmin.family}`"
                    />
                  </div>
                </div>
              </div>

              <div class="relative mt-4">
                <div class="dropdown">
                  <label
                    class="flex pb-2 pr-1 text-sm font-medium text-gray-700"
                  >
                    <span>دسته بندی</span>
                  </label>

                  <button
                    type="button"
                    class="text-gray-500 border border-gray-300 focus:ring-1 focus:outline-none focus:ring-hamian font-medium rounded-lg text-sm px-4 py-4 text-center inline-flex items-center w-full justify-between mt-1"
                    @click="toggleFocus"
                  >
                    <i
                      class="fa-duotone fa-list text-hamian h-5 w-5 flex leading-[1px] text-[19px]"
                    ></i>
                    <span
                      class="w-full pr-2 text-right text-normal font-normal"
                    >
                     {{ category_titles.length != 0 ? category_titles.join(','): 'دسته مورد نظر را انتخاب کنید' }}
                        </span
                    >
                    <i
                      class="fa-duotone fa-angle-down text-[14px] ml-1 w-4 h-3 leading-[20px]"
                    ></i>
                  </button>
                  <div
                    class="categories absolute top-18 z-10 mt-2 bg-white border rounded-lg w-full p-3"
                    v-if="focused"
                  >
                    <ul class="rounded-lg">
                      <li class="disabled text-sm font-semibold text-gray-400">
                        {{ placeholder }}
                      </li>
                      <li class="disabled text-sm font-normal">
                        <input
                          type="search"
                          class="border border-gray-200 w-full my-2 rounded-lg placeholder:text-sm text-gray-400 placeholder:text-gray-400/70"
                          placeholder="جستجو در لیست"
                          @input="(e) => do_search_category(e.target.value)"
                        />
                      </li>
                      <li
                        class="py-1 text-gray-500 relative border border-gray-100 p-1 mt-2 cursor-pointer  px-2 rounded-md"
                        v-for="category in cat_search_result"
                        @click.stop="selectCategory(category.id , category.title)"
                        :class="{ 'bg-gray-50': newsData.category_ids.includes(category.id) }"
                      >
                        <i class="fa-chevron-left ml-1 fa-light text-[15px] text-hamian"></i>
                        <span class="inline-block mr-1 hover:text-hamian transition-all">{{ category.title }}</span>
                        <i
                        v-if="newsData.category_ids.includes(category.id)"
                      class="fa-check ml-1 fa-light text-[15px] text-hamian absolute left-3 top-2"></i>
                        
                        <!-- level two category -->
                        <ul class="pr-3 !bg-white pt-1 pb-1 p-1 rounded-lg" v-if="category.childs.length != 0 && searchCatText == ''">
                          <li
                            class="py-1 relative text-gray-500 border border-gray-100  mt-2 cursor-pointer px-2 rounded-md"
                            v-for="levelTwoCat in category.childs"
                            @click.stop="selectCategory(levelTwoCat.id , levelTwoCat.title)"
                            :class="{ 'bg-gray-50': newsData.category_ids.includes(levelTwoCat.id) }"
                          >
                            <i class="fa-chevron-left ml-1 fa-light text-[15px] text-hamian"></i>
                            <span class="inline-block mr-1 hover:text-hamian transition-all">{{ levelTwoCat.title }}</span>
                            <i
                              v-if="newsData.category_ids.includes(levelTwoCat.id)"
                            class="fa-check ml-1 fa-light text-[15px] text-hamian absolute left-3 top-2"></i>

                            <!-- level three category -->
                            <ul class="pr-3 !bg-white p-1 rounded-lg" v-if="levelTwoCat.childs.length != 0 && searchCatText == ''">
                              <li
                                class="py-1 border relative border-gray-100  text-gray-500 mt-2 cursor-pointer  px-2 rounded-md"
                                v-for="levelThreeCat in levelTwoCat.childs"
                                @click.stop="selectCategory(levelThreeCat.id , levelThreeCat.title)"
                                :class="{ 'bg-gray-50': newsData.category_ids.includes(levelThreeCat.id) }"
                              >
                                <i class="fa-chevron-left ml-1 fa-light text-[15px] text-hamian"></i>
                                <span class="inline-block mr-1 hover:text-hamian transition-all">{{ levelThreeCat.title }}</span>
                                <i
                                v-if="newsData.category_ids.includes(levelThreeCat.id)"
                                class="fa-check ml-1 fa-light text-[15px] text-hamian absolute left-3 top-2"></i>
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div class="relative col-span-4 sm:col-span-2 mt-2">
              <label
                for="last-name"
                class="flex py-2 pr-1 text-sm font-medium text-gray-700"
              >
                <span> توضیحات</span>
              </label>
              <div class="w-full mt-1">
                <QuillEditor
                  theme="snow"
                  contentType="html"
                  :modules="modules"
                  toolbar="full"
                  v-model:content="newsData.content"
                  :options="options"
                ></QuillEditor>
              </div>
            </div>

            <div class="relative col-span-4 sm:col-span-2 mt-2">
              <label
                for="last-name"
                class="flex py-2 pr-1 text-sm font-medium text-gray-700"
              >
                <span> خلاصه نوشته</span>
              </label>
              <div class="w-full mt-1">
                <QuillEditor 
                  theme="snow" 
                  toolbar="minimal" 
                  contentType="html"
                  :options="options"
                  v-model:content="newsData.summary_description"
                ></QuillEditor>
              </div>
            </div>

            <div class="bg-white border rounded-lg">
              <div class="border-b px-8 py-4">
                <h3 class="text-lg font-medium leading-6 text-gray-900">
                  سئو و بهینه سازی
                </h3>
                <p class="mt-1 text-sm text-gray-500">
                  بهینه سازی نوشته برای موتورهای جستجوگر گوگل هنگام اشتراک گذاری
                  در شبکه های اجتماعی
                </p>
              </div>
              <div class="w-full px-8 py-10">
                <div class="w-full">
                  <div class="grid grid-cols-6 gap-6">
                    <div class="col-span-6">
                      <div class="relative lg:w-full justify-start flex">
                        <div
                          class="flex items-center justify-center w-full max-w-[150px] px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md"
                        >
                          <div class="space-y-1 text-center">

                            <div
                              v-if="seoImgSrc == ''"
                              class="w-12 h-12 mx-auto text-4xl text-gray-400 fa-duotone fa-image"
                            ></div>
                            <div
                              v-else
                              class="w-12 relative h-15 mx-auto text-4xl text-gray-400"
                            >
                            <button
                              @click="remove_seo_image()"
                              class="absolute top-[-10px] w-7 h-7  left-[-40px] cursor-pointer bg-red-500 flex items-center justify-center text-white py-1 px-2 rounded-lg"
                            >
                              <i class="fa-regular fa-close text-sm text-white"></i>
                            </button>
                              <img
                                :src="seoImgSrc"
                                class="w-full h-[70px] object-cover rounded"
                              />
                            </div>

                            <div class="flex text-sm text-gray-600">
                              <label
                                for="seo-file-upload"
                                class="relative mx-auto font-medium text-hamian bg-white rounded-md cursor-pointer focus-widuotone:outline-none focus-widuotone:ring-2 focus-widuotone:ring-hamian focus-widuotone:ring-offset-2 hover:text-hamian"
                                ><span>تصویر شاخص </span
                                ><input
                                  id="seo-file-upload"
                                  type="file"
                                  class="sr-only"
                                  ref="seo_image_input"
                                  @change="set_seo_image"
                              /></label>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="col-span-6">
                      <label
                        for="payment-name"
                        class="block text-sm font-medium text-gray-700"
                        >عنوان متا تگ
                      </label>
                      <input
                        type="text"
                        v-model="newsData.meta_title"
                        name="payment-name"
                        id="payment-name"
                        autocomplete="payment-name"
                        placeholder="برای مثال: سگها وفادارترین حیوانات هستند "
                        class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-hamian focus:ring-hamian sm:text-sm"
                      />
                    </div>

                    <div class="col-span-6">
                      <label
                        for="success"
                        class="block text-sm font-medium text-gray-700"
                        >توضیحات متاتگ</label
                      >
                      <div class="mt-4">
                        <textarea
                          id="success"
                          name="success"
                          rows="3"
                          class="block w-full rounded-md border-gray-300 shadow-sm focus:border-hamian focus:ring-hamian sm:text-sm h-32"
                          v-model="newsData.meta_description"
                          placeholder="توضیحات متاتگ"
                        />
                      </div>
                      <p class="mt-2 text-sm text-gray-500">
                        خلاصه نوشته در متا تگ‌ها، برای موتورهای جستجو. حداکثر
                        ۲۰۰ کاراکتر وارد کنید.
                      </p>
                    </div>

                    <div class="relative col-span-6 mt-4">
                      <label
                        for="last-name"
                        class="flex pb-2 pr-1 text-sm font-medium text-gray-700"
                      >
                        <span> کلمات کلیدی</span>
                      </label>
                      <div class="mt-1 rounded-md">
                        <div
                          class="relative flex items-stretch flex-grow focus-within:z-10"
                        >
                          <div
                            class="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none"
                          >
                            <i
                              class="fa-duotone fa-duotone fa-tag text-hamian h-5 w-5 flex leading-[1px] pr-1"
                            ></i>
                          </div>
                          <TagInput ref="tagInputRef" :modelValue="newsInfo.keywords" v-model="newsData.keywords"></TagInput>
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
    <aside class="lg:col-span-3 col-span-12">
      <div class="mt-2 border border-gray-200 rounded-lg card">
        <div class="flex items-center w-full p-4 border-b border-gray-200">
          <i class="pl-2 text-2xl text-hamian fa-duotone fa-ballot-check"></i
          ><span>افزودن نوشته جدید</span>
        </div>
        <div class="block p-4">
          <button
            type="button"
            @click="editNewsData()"
            class="box-border relative z-0 inline-flex items-center justify-center w-full p-3 px-8 py-3 my-2 overflow-hidden font-medium text-white transition-all duration-300 bg-hamian rounded-md cursor-pointer group ease focus:outline-none"
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
                class="pl-2 text-2xl text-white fa-duotone fa-arrow-up-from-bracket"
              ></i
              ><span class="w-full">
                <div class="lds-ring" v-if="loading == true"><div></div><div></div><div></div><div></div></div>
                <span v-else>ویرایش نوشته </span>
              </span></span
            >
          </button>
          <button
            type="button"
            class="box-border relative z-0 inline-flex items-center justify-center w-full p-3 px-8 py-3 my-2 overflow-hidden font-medium text-hamian transition-all duration-300 bg-hamian/10 rounded-md cursor-pointer group ease focus:outline-none"
          >
            <span
              class="absolute bottom-0 right-0 w-8 h-20 -mb-8 -mr-5 transition-all duration-300 ease-out transform rotate-45 translate-x-1 bg-white opacity-10 group-hover:translate-x-0"
            ></span
            ><span
              class="absolute top-0 left-0 w-20 h-8 -mt-1 -ml-12 transition-all duration-300 ease-out transform -rotate-45 -translate-x-1 bg-white opacity-10 group-hover:translate-x-0"
            ></span
            ><span
              class="relative z-20 flex items-center justify-center w-full text-center"
              ><i class="pl-2 text-2xl text-hamaian fa-duotone fa-eye"></i
              ><span class="w-full"> پیش نمایش</span></span
            >
          </button>

          <div
            class="slug-url mt-2 text-gray-400 text-light font-en text-sm flex-col flex pr-2"
          >
            <span class="font-fa text-xs pb-2">نشانی اینترنتی:</span
            ><input
            dir="ltr"
              class="border border-gray-200 text-left p-3 rounded-lg flex items-center cursor-text relative overflow-hidden"
              type="text"
              readonly
              :value="`https://petoman.com/hamian/news/${newsData.slug}`"
            />
          </div>
        </div>
      </div>

      <div class="mt-6 border border-gray-200 rounded-lg card">
        <div class="flex items-center w-full p-4 border-b border-gray-200">
          <i class="pl-2 text-2xl text-hamian fa-duotone fa-image"></i
          ><span> تصویر شاخص</span>
        </div>
        <div class="block p-4">
          <div
            class="flex items-center justify-center w-full pt-2 rounded-lg grow"
          >
            <div
              class="flex items-center justify-center w-full h-full px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md"
            >
              <div class="space-y-1 text-center">

                <div
                  v-if="seoImgSrc2 == ''"
                  class="w-12 h-12 mx-auto text-4xl text-gray-400 fa-duotone fa-image"
                ></div>
                <div
                  v-else
                  class="w-12 relative h-15 mx-auto text-4xl text-gray-400"
                >
                <button
                  @click="remove_index_image()"
                  class="absolute top-[-10px] w-7 h-7  left-[-40px] cursor-pointer bg-red-500 flex items-center justify-center text-white py-1 px-2 rounded-lg"
                >
                  <i class="fa-regular fa-close text-sm text-white"></i>
                </button>
                  <img
                    :src="seoImgSrc2"
                    class="w-full h-[70px] object-cover rounded"
                  />
                </div>

                <div class="flex text-sm text-gray-600">
                  <label
                    for="index-file-upload"
                    class="relative mx-auto font-medium text-hamian bg-white rounded-md cursor-pointer focus-widuotone:outline-none focus-widuotone:ring-2 focus-widuotone:ring-hamian focus-widuotone:ring-offset-2 hover:text-hamian"
                    ><span>تصویر شاخص</span
                    ><input
                      id="index-file-upload"
                      type="file"
                      class="sr-only"
                      ref="index_image_input"
                      @change="set_index_image"
                      /></label
                  ><!---->
                </div>
                <p class="text-xs text-gray-500 pt-2">
                  PNG, JPG, GIF بیشترین اندازه (10مگابایت)
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </aside>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import TagInput from "../Tag/TagInput.vue";
import ImageUploader from 'quill-image-uploader';
import BlotFormatter from 'quill-blot-formatter/dist/BlotFormatter'
import api from "@/axios/index.js";
import Swal from 'sweetalert2'

export default {
  components: {
    TagInput,
  },
  async mounted(){
    this.newsData.author_id = this.authadmin.id
    await this.getCategories();

    if(this.newsInfo != null){
      this.newsData.id = this.newsInfo.id
      this.newsData.title = this.newsInfo.title
      this.newsData.slug = this.generateSlug(this.newsInfo.title);
      this.newsData.date = this.newsInfo.date.split('-').join('/')
      this.newsData.category_ids = this.newsInfo.category_ids.split(',').map(Number)
      
      this.newsInfo.categories.forEach((val , index) => {
        this.category_titles = [...this.category_titles , val.title]
      })

      this.newsData.content = this.newsInfo.content
      this.newsData.summary_description = this.newsInfo.summary_description
      this.newsData.meta_title = this.newsInfo.meta_title
      this.newsData.meta_description = this.newsInfo.meta_description
      this.newsData.keywords = this.newsInfo.keywords != null ? this.newsInfo.keywords.split(',') : []
      this.seoImgSrc  = this.newsInfo.seo_image != null ? `${this.globalUrl}/storage/news/seo/${this.newsInfo.seo_image}`: ''
      this.seoImgSrc2 = this.newsInfo.image != null ? `${this.globalUrl}/storage/news/${this.newsInfo.image}`: ''
      
    }

    
    
  },
  props: {
    newsInfo: {
      required: true,
      type: [Array , Object]
    }
  },    
  data() {
    return {
      loading: false,
      searchCatText: '',
      categoryList: [],
      category_titles: [],
      cat_search_result: [],
      placeholder: "دسته مورد نظر را انتخاب کنید",
      useRealInput: false,
      focused: false,
      category: false,
      options: {
        debug: "info",
        modules: {
          toolbar: ["bold", "italic", "underline"],
          BlotFormatter: {},
        },
        placeholder: "نوشتن را شروع کنید...",
        readOnly: false,
        theme: "snow",
      },
      modules: [
        {
          name: 'ImageUploader',  
          module: ImageUploader, 
          options: {
            upload: file => {
              return new Promise((resolve, reject) => {
                const formData = new FormData();
                formData.append("quil_file", file);

                api.post('/admin/news/quil-upload', formData)
                .then(res => {
                  resolve(res.data.url);
                })
                .catch(err => {
                  reject("Upload failed");
                  console.error("Error:", err)
                })
              })
            }
          }
        },
        {
          name: 'blotFormatter',  
          module: BlotFormatter, 
          options: {}
        }
      ],
      newsData: {
        id: '',
        title: '',
        slug:'',
        date: '',
        author_id: '',
        category_ids: [],
        content: '',
        summary_description: '',
        seo_image: '',
        meta_title: '',
        meta_description: '',
        keywords: [],
        image: ''
      },
      seoImgSrc: '',
      seoImgSrc2: ''
    };
  },
  methods: {
    toggleFocus() {
      if (this.useRealInput) {
        this.$refs.input.focus();
      } else {
        this.focused = !this.focused;
      }
    },
    selectCategory(id , name) {
      const idsList = this.newsData.category_ids
      const titleList = this.category_titles
      // add ids
      if(idsList.includes(id)){
        const filteredId = idsList.filter((val , index) => {
          return val != id
        })
        this.newsData.category_ids = filteredId
      }else{
        this.newsData.category_ids = [...this.newsData.category_ids , id]
      }
      // add names

      if(titleList.includes(name)){
        const filteredNames = titleList.filter((val , index) => {
          return val != name
        })
        this.category_titles = filteredNames
      }else{
        this.category_titles = [...this.category_titles , name]
      }
    },
    findText(value) {
      const category = this.categories.filter((category) => {
        if (category.value === value) return true;
      })[0];
      return category === undefined ? "" : category.text;
    },
    async getCategories() {
      const result = await this.$store.dispatch("get_categories_list");
      if (result.status == 200) {
        this.categoryList = result.result;
        this.cat_search_result = result.result;
      } else {
        this.categoryList = [];
        this.cat_search_result = [];
      }
    },
    do_search_category(text) {
        if(text != '') {
          this.searchCatText = text
          this.cat_search_result = []
          this.categoryList.forEach((val , index) => {
            if(val.title.indexOf(text) > -1) {
              this.cat_search_result = [...this.cat_search_result , val]
            }
  
            val.childs.forEach((child , key) => {
              if(child.title.indexOf(text) > -1) {
                this.cat_search_result = [...this.cat_search_result , child]
              }
  
              child.childs.forEach((subchild , childkey) => {
                if(subchild.title.indexOf(text) > -1) {
                  this.cat_search_result = [...this.cat_search_result , subchild]
                }
              })
            })
            
          })
          console.log(this.cat_search_result)
        }else{
          this.cat_search_result = this.categoryList
          this.searchCatText = ''
        }
    },
    set_news_title(e) {
      this.newsData.title = e.target.value;
      this.newsData.slug = this.generateSlug(this.newsData.title);
    },
    generateSlug(text){
      return text
        .toLowerCase()
        .replace(/[^a-z0-9اآبپتثجچحخدذرزژسشصضطظعغفقکگلمنوهی ]+/g, "")
        .replace(/ /g, "-");
    },
    set_seo_image(e){
      this.newsData.seo_image = e.target.files[0];
      this.createFile(e.target.files[0]);
    },
    createFile(file) {
      if (!file.type.match("image.*")) {
        alert("لطفا نوع فایل را عکس انتخاب کنید");
        this.$refs.seo_image_input.value = "";
        this.seoImgSrc = '';
        return;
      }
      let reader = new FileReader();

      reader.onload = (e) => {
        this.seoImgSrc = e.target.result ;
      };

      reader.readAsDataURL(file);
    },
    remove_seo_image() {
      this.seoImgSrc = '';
      this.$refs.seo_image_input.value = ""
      this.newsData.seo_image = '';
    },
    set_index_image(e){
      this.newsData.image = e.target.files[0];
      this.createIndexFile(e.target.files[0]);
    },
    createIndexFile(file) {
      if (!file.type.match("image.*")) {
        alert("لطفا نوع فایل را عکس انتخاب کنید");
        this.$refs.index_image_input.value = "";
        this.seoImgSrc2 = '';
        return;
      }
      let reader = new FileReader();

      reader.onload = (e) => {
        this.seoImgSrc2 = e.target.result ;
      };

      reader.readAsDataURL(file);
    },
    remove_index_image() {
      this.seoImgSrc2 = '';
      this.$refs.index_image_input.value = ""
      this.newsData.image = '';
    },
    async editNewsData() {
      let validate = this.validateData()
      if(validate == true){
        this.loading = true
        const result = await this.$store.dispatch("edit_news_data" , this.newsData)
        if(result.status == 200){
          this.loading = false
          this.showSwal("پیغام موفقیت آمیز" , result.message , 'success')
        }else {
          this.loading = false
          this.showSwal("خطایی رخ داد" , result.message , 'error')
        }
      }else {
        this.showSwal("خطایی رخ داد" , validate , 'error')
      }
    },
    validateData(){
      if(this.newsData.title == ''){
        return "عنوان خبر را وارد کنید"
      }else if(this.newsData.date == '') {
        return "تاریخ انتشار خبر انتخاب نشده"
      }else if(this.newsData.category_ids.length == 0) {
        return "لطفا دسته بندی مربوط به خبر را انتخاب کنید"
      }else if(this.newsData.content == '') {
        return "محتوای خبر را وارد کنید"
      }else {
        return true
      }
    },
    showSwal(title , text , icon) {
      Swal.fire({
        title: title,
        text: text,
        icon: icon
      });
    }
  },
  computed: {
    ...mapGetters({
      'authadmin': 'get_authadmin'
    })
  }
};
</script>
<style>
.vpd-controls.direction-prev > button {
  display: flex;
  align-items: center;
  justify-content: center;
}

.lds-ring {
  /* change color here */
  color: #1c4c5b
}
.lds-ring,
.lds-ring div {
  box-sizing: border-box;
}
.lds-ring {
  display: inline-block;
  position: relative;
  width: 18px;
  height: 18px;
}
.lds-ring div {
  box-sizing: border-box;
    display: block;
    position: absolute;
    width: 30px;
    height: 30px;
    border: 3px solid currentColor;
    border-radius: 50%;
    animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    border-color: #fff transparent transparent transparent;
}
.lds-ring div:nth-child(1) {
  animation-delay: -0.45s;
}
.lds-ring div:nth-child(2) {
  animation-delay: -0.3s;
}
.lds-ring div:nth-child(3) {
  animation-delay: -0.15s;
}
@keyframes lds-ring {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
