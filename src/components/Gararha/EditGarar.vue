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
            class="fa-duotone fa-handshake text-[20px] !w-5 !h-5 text-hamian ml-1"
          ></i>
          ویرایش قرار
        </h6>
        <p
          class="flex items-center gap-1 pt-2 text-xs antialiased font-normal leading-normal text-gray-600 font-fa"
        >
          از این بخش می توانید قرار را ویرایش کنید
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
                <span>عنوان قرار</span>
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
                    v-model="appointData.title"
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
                  <span>تاریخ و ساعت قرار </span>
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
                      placeholder="1403/02/28"
                    />

                    <date-picker
                      v-model="appointData.end_date"
                      type="datetime"
                      format="YYYY-MM-DD HH:mm:ss"
                      display-format="dddd jDD jMMMM jYYYY ساعت HH:mm"
                      custom-input=".custom-input"
                      compact-time
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
                  <span>ساعت قرار</span>
                </label>
                <div class="mt-1 rounded-md">
                  <div
                    class="relative flex items-stretch flex-grow focus-within:z-10"
                  >
                    <div
                      class="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none"
                    >
                      <i
                        class="fa-duotone fa-clock text-hamian h-5 w-5 flex leading-[1px] pr-1"
                      ></i>
                    </div>
                    <input
                      type="text"
                      class="custom-input-timer block w-full pr-10 py-4 border-gray-300 rounded-md focus:border-hamian focus:ring-hamian sm:text-sm"
                      placeholder="14:30"
                    />

                    <date-picker
                      v-model="appointData.appointment_time"
                      type="time"
                      custom-input=".custom-input-timer"
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
                  <span>مکان قرار</span>
                </label>
                <div class="mt-1 rounded-md">
                  <div
                    class="relative flex items-stretch flex-grow focus-within:z-10"
                  >
                    <div
                      class="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none"
                    >
                      <i
                        class="fa-duotone fa-location-dot text-hamian h-5 w-5 flex leading-[1px] pr-1"
                      ></i>
                    </div>
                    <input
                      type="text"
                      v-model="appointData.location"
                      class="block w-full pr-10 py-4 border-gray-300 rounded-md focus:border-hamian focus:ring-hamian sm:text-sm"
                      placeholder="آدرس را بنویسید"
                    />
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
                  v-model:content="appointData.description"
                  :options="options"
                ></QuillEditor>
              </div>
            </div>

            <div class="relative col-span-4 sm:col-span-2 mt-2">
              <label
                for="last-name"
                class="flex py-2 pr-1 text-sm font-medium text-gray-700"
              >
                <span> خلاصه قرار</span>
              </label>
              <div class="w-full mt-1">
                <quill-editor 
                  contentType="html" 
                  theme="snow" toolbar="minimal" 
                  v-model:content="appointData.summary_description"
                ></quill-editor>
              </div>
            </div>

            <div class="checkbox">
              <fieldset class="space-y-5">
                <legend class="sr-only">checkbox</legend>
                <div class="relative flex items-start">
                  <div class="flex h-5 items-center">
                    <input
                      v-model="appointData.is_main"
                      id="comments"
                      aria-describedby="comments-description"
                      name="comments"
                      type="checkbox"
                      class="h-4 w-4 rounded border-gray-300 text-hamian focus:ring-hamian"
                    />
                  </div>
                  <div class="mr-3 text-sm">
                    <label for="comments" class="font-medium text-gray-700"
                      >نمایش در صفحه اصلی</label
                    >
                  </div>
                </div>
              </fieldset>
            </div>
          </div>
        </div>
      </div>
    </div>
    <aside class="lg:col-span-3 col-span-12">
      <div class="mt-2 border border-gray-200 rounded-lg card">
        <div class="flex items-center w-full p-4 border-b border-gray-200">
          <i class="pl-2 text-2xl text-hamian fa-duotone fa-ballot-check"></i
          ><span>بروزرسانی اطلاعات</span>
        </div>
        <div class="block p-4">
          <button
            type="button"
            @click="edit_appointment()"
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
              ><i class="pl-2 text-2xl text-white fa-duotone fa-plus"></i
              ><span class="w-full">
                <div class="lds-ring" v-if="loading == true"><div></div><div></div><div></div><div></div></div>
                <span v-else>بروزرسانی قرار</span>
              </span></span
            >
          </button>

          <div
            class="slug-url mt-2 text-gray-400 text-light font-en text-sm flex-col flex pr-2"
          >
            <span class="font-fa text-xs pb-2">نشانی اینترنتی:</span
            ><input
              dir="ltr"
              class="border text-left border-gray-200 p-3 rounded-lg flex items-center cursor-text relative overflow-hidden"
              type="text"
              :value="`https://petoman.com/hamian/${appointData.slug}`"
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
                    v-if="appointmentImgSrc == ''"
                    class="w-12 h-12 mx-auto text-4xl text-gray-400 fa-duotone fa-image"
                   >
                  </div>
                  <div
                    v-else
                    class="w-12 relative h-15 mx-auto text-4xl text-gray-400"
                  >
                  <button
                    @click="remove_appointment_image()"
                    class="absolute top-[-10px] w-7 h-7  left-[-40px] cursor-pointer bg-red-500 flex items-center justify-center text-white py-1 px-2 rounded-lg"
                  >
                    <i class="fa-regular fa-close text-sm text-white"></i>
                  </button>
                    <img
                      :src="appointmentImgSrc"
                      class="w-full h-[70px] object-cover rounded"
                    />
                  </div>
                <div class="flex text-sm text-gray-600">
                  <label
                    for="appoint_image_upload"
                    class="relative mx-auto font-medium text-hamian bg-white rounded-md cursor-pointer focus-widuotone:outline-none focus-widuotone:ring-2 focus-widuotone:ring-hamian focus-widuotone:ring-offset-2 hover:text-hamian"
                    ><span>تصویر شاخص</span
                    ><input
                      id="appoint_image_upload"
                      type="file"
                      ref="appointment_image_input"
                      @change="(e) => set_appointment_image(e)"
                      class="sr-only" /></label
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
import Swal from 'sweetalert2'
import ImageUploader from 'quill-image-uploader';
import BlotFormatter from 'quill-blot-formatter/dist/BlotFormatter'
import api from "@/axios/index.js";
export default {
  data() {
    return {
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

                api.post('/admin/appointments/quil-upload', formData)
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
      appointData: {
        id: "",
        title: "",
        end_date: "",
        appointment_time: "",
        location: "",
        description: "",
        summary_description: "",
        is_main: false,
        slug: "",
        image: ""
      },
      appointmentImgSrc: '',
      loading: false
    };
  },
  props: {
    appointmentInfo: {
      required: true,
      type: [Array , Object]
    }
  },
  mounted() {
    this.appointData.id = this.appointmentInfo.id
    this.appointData.title = this.appointmentInfo.title
    this.appointData.location = this.appointmentInfo.location
    this.appointData.end_date = this.appointmentInfo.end_date
    this.appointData.appointment_time = this.appointmentInfo.appointment_time
    this.appointData.description = this.appointmentInfo.description
    this.appointData.summary_description = this.appointmentInfo.summary_description
    this.appointData.is_main = this.appointmentInfo.is_main == 0 ? false : true
    if(this.appointmentInfo.image != null && this.appointmentInfo.image != "") {
      this.appointmentImgSrc = `${this.globalUrl}/storage/appointments/${this.appointmentInfo.image}`
    }
  },
  watch: {
    'appointData.title'(newVal , oldVal) {
      newVal = newVal.split(" ").join("-");
      this.appointData.slug = newVal
    }
  },
  methods: {
    set_appointment_image(e){
      this.appointData.image = e.target.files[0];
      this.createFile(e.target.files[0]);
    },
    createFile(file) {
      if (!file.type.match("image.*")) {
        alert("لطفا نوع فایل را عکس انتخاب کنید");
        this.$refs.appointment_image_input.value = "";
        this.appointData.image = '';
        this.appointmentImgSrc = '';
        return;
      }
      let reader = new FileReader();

      reader.onload = (e) => {
        this.appointmentImgSrc = e.target.result ;
      };

      reader.readAsDataURL(file);
    },
    remove_appointment_image() {
      this.appointmentImgSrc = '';
      this.$refs.appointment_image_input.value = ""
      this.appointData.image = '';
    },
    async edit_appointment() {
      const validateResult = this.validateData()
      if(validateResult == true){
        this.loading = true
        const result = await this.$store.dispatch("edit_appointment" , this.appointData)
        if(result.status == 200){
          this.loading = false
          this.showSwal("پیغام موفقیت آمیز" , result.message , "success")
        }else {
          this.loading = false
          this.showSwal("خطایی رخ داد !" , result.message , "error")
        }
      }else {
        this.showSwal("خطای اعتبارسنجی !" , validateResult , "error")
      }
    },
    validateData() {
      if(this.appointData.title == ""){
        return "فبلد عنوان الزامی میباشد"
      }else if(this.appointData.end_date == ""){
        return "لطفا تاریخ و ساعت اتمام قرار را مشخص کنید"
      }else if(this.appointData.appointment_time == ""){
        return "لطفا ساعت اتمام قرار را مشخص کنید"
      }else if(this.appointData.location == ""){
        return "لطفا آدرس قرار را مشخص کنید"
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
  }
};
</script>

<style>
.vpd-time .vpd-down-arrow-btn, .vpd-time .vpd-up-arrow-btn{
  display: flex !important;
  justify-content: center !important;
}
</style>
