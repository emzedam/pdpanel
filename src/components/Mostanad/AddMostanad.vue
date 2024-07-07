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
          افزودن مستند
        </h6>
        <p
          class="flex items-center gap-1 pt-2 text-xs antialiased font-normal leading-normal text-gray-600 font-fa"
        >
          از این بخش می توانید مستند را اضافه کنید
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
                <span>عنوان مستند</span>
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
                    :value="mostanadData.title"
                    class="block w-full pr-10 py-4 border-gray-300 rounded-md focus:border-hamian focus:ring-hamian sm:text-sm"
                    placeholder="حداکثر 60 کاراکتر بنویسید"
                  />
                </div>
              </div>
            </div>

            <div class="grid lg:grid-cols-2 gap-4">
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
                      v-model="mostanadData.date"
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
            </div>
            
            <div class="grid grid-cols-1 !mt-[50px]">
              <div class="relative lg:w-full justify-start flex">
                <div
                  class="flex items-center justify-center w-full  p-20 border-2 border-gray-300 border-dashed rounded-md"
                >
                  <div class="space-y-1 text-center">

                    <div
                      v-if="videoFileSrc == ''"
                      class="w-12 h-12 mx-auto text-4xl text-gray-400 fa-duotone fa-video"
                    ></div>
                    <div
                      v-else
                      class=" relative mx-auto text-4xl text-gray-400"
                    >
                    <button
                      @click="remove_video_file()"
                      class="absolute top-[-10px] w-7 h-7  left-[-40px] cursor-pointer bg-red-500 flex items-center justify-center text-white py-1 px-2 rounded-lg"
                    >
                      <i class="fa-regular fa-close text-sm text-white"></i>
                    </button>
                      <video width="420" height="240" controls>
                        <source :src="videoFileSrc">
                      </video>
                    </div>

                    <div class="flex text-sm text-gray-600">
                      <label
                        for="video-upload"
                        class="relative mx-auto font-medium text-hamian bg-white rounded-md cursor-pointer focus-widuotone:outline-none focus-widuotone:ring-2 focus-widuotone:ring-hamian focus-widuotone:ring-offset-2 hover:text-hamian"
                        ><span>انتخاب ویدیو</span
                        ><input
                          id="video-upload"
                          type="file"
                          class="sr-only"
                          ref="video_input"
                          @change="set_video_file"
                      /></label>
                    </div>
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
                  v-model:content="mostanadData.content"
                  :options="options"
                ></QuillEditor>
              </div>
            </div>

            <div class="relative col-span-4 sm:col-span-2 mt-2">
              <label
                for="last-name"
                class="flex py-2 pr-1 text-sm font-medium text-gray-700"
              >
                <span> خلاصه مستند</span>
              </label>
              <div class="w-full mt-1">
                <QuillEditor 
                  theme="snow" 
                  toolbar="minimal" 
                  contentType="html"
                  :options="options"
                  v-model:content="mostanadData.summary_description"
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
                        v-model="mostanadData.meta_title"
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
                          v-model="mostanadData.meta_description"
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
                          <TagInput v-model="mostanadData.keywords"></TagInput>
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
      <div class="sticky top-24">
              <div class="mt-2 border border-gray-200  rounded-lg card">
        <div class="flex items-center w-full p-4 border-b border-gray-200">
          <i class="pl-2 text-2xl text-hamian fa-duotone fa-ballot-check"></i
          ><span>افزودن مستند جدید</span>
        </div>
        <div class="block p-4">
          <button
            type="button"
            @click="loading == false ? saveMostanadData() : ''"
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
                <span v-else>افزودن مستند جدید</span>
              </span></span
            >
          </button>
          <button
            type="button"
            class="hidden box-border relative z-0  items-center justify-center w-full p-3 px-8 py-3 my-2 overflow-hidden font-medium text-hamian transition-all duration-300 bg-hamian/10 rounded-md cursor-pointer group ease focus:outline-none"
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
              :value="`https://petoman.com/hamian/mostanad/${mostanadData.slug}`"
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
    this.mostanadData.author_id = this.authadmin.id
  },
  data() {
    return {
      loading: false,
      useRealInput: false,
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
      mostanadData: {
        title: '',
        slug:'',
        date: '',
        author_id: '',
        content: '',
        summary_description: '',
        seo_image: '',
        meta_title: '',
        meta_description: '',
        keywords: [],
        image: '',
        video: ''
      },
      seoImgSrc: '',
      seoImgSrc2: '',
      videoFileSrc: ''
    };
  },

  methods: {
    set_news_title(e) {
      this.mostanadData.title = e.target.value;
      this.mostanadData.slug = this.generateSlug(this.mostanadData.title);
    },
    generateSlug(text){
      return text
        .toLowerCase()
        .replace(/[^a-z0-9اآبپتثجچحخدذرزژسشصضطظعغفقکگلمنوهی ]+/g, "")
        .replace(/ /g, "-");
    },
    set_seo_image(e){
      this.mostanadData.seo_image = e.target.files[0];
      this.createFile(e.target.files[0]);
    },
    set_video_file(e){
      this.mostanadData.video = e.target.files[0];
      this.createVideoFile(e.target.files[0]);
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
    createVideoFile(file) {
      if (!file.type.match("video.*")) {
        alert("لطفا نوع فایل را ویدیو انتخاب کنید");
        this.$refs.video_input.value = "";
        this.videoFileSrc = '';
        return;
      }
      let reader = new FileReader();

      reader.onload = (e) => {
        this.videoFileSrc = e.target.result ;
      };

      reader.readAsDataURL(file);
    },
    remove_seo_image() {
      this.seoImgSrc = '';
      this.$refs.seo_image_input.value = ""
      this.mostanadData.seo_image = '';
    },
    remove_video_file() {
      this.videoFileSrc = '';
      this.$refs.video_input.value = ""
      this.mostanadData.video = '';
    },
    set_index_image(e){
      this.mostanadData.image = e.target.files[0];
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
      this.mostanadData.image = '';
    },
    async saveMostanadData() {
      let validate = this.validateData()
      if(validate == true){
        this.loading = true
        const result = await this.$store.dispatch("save_mostanad_data" , this.mostanadData)
        if(result.status == 200){
          this.loading = false
          this.showSwal("پیغام موفقیت آمیز" , result.message , 'success')
          this.clearData()
        }else {
          this.loading = false
          this.showSwal("خطایی رخ داد" , result.message , 'error')
        }
      }else {
        this.showSwal("خطایی رخ داد" , validate , 'error')
      }
    },
    validateData(){
      if(this.mostanadData.title == ''){
        return "عنوان مستند را وارد کنید"
      }else if(this.mostanadData.date == '') {
        return "تاریخ انتشار مستند انتخاب نشده"
      }else if(this.mostanadData.video == '') {
        return "لطفا ویدیو مربوط به مستند را وارد کنید"
      }else if(this.mostanadData.content == '') {
        return "توضیحات مستند را وارد کنید"
      }else if(this.mostanadData.image == '') {
        return "تصویر شاخص مستند را انتخاب کنید"
      }else {
        return true
      }
    },
    clearData() {
      this.mostanadData.title = ''
      this.mostanadData.slug =''
      this.mostanadData.date = ''
      this.mostanadData.content = ''
      this.mostanadData.summary_description = ''
      this.mostanadData.seo_image = ''
      this.mostanadData.video = ''
      this.mostanadData.meta_title = ''
      this.mostanadData.meta_description = ''
      this.mostanadData.keywords = []
      this.mostanadData.image = ''

      this.seoImgSrc = ''
      this.seoImgSrc2 = ''
      this.videoFileSrc = ''

      this.$refs.seo_image_input.value = ""
      this.$refs.index_image_input.value = ""
      this.$refs.video_input.value = ""
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
