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
          بروزرسانی حامی
        </h6>
        <p
          class="flex items-center gap-1 pt-2 text-xs antialiased font-normal leading-normal text-gray-600 font-fa"
        >
          از این بخش می توانید اطلاعات حامی را بروزرسانی کنید
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
                <span>نام و نام خانوادگی حامی</span>
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
                    v-model="hamianData.fullName"
                    type="text"
                    class="block w-full pr-10 py-4 border-gray-300 rounded-md focus:border-hamian focus:ring-hamian sm:text-sm"
                    placeholder="حداکثر 60 کاراکتر بنویسید"
                  />
                </div>
              </div>
            </div>

            <div class="grid lg:grid-cols-3 gap-4">
              <div class="relative mt-4">
                <div class="dropdown">
                  <label
                    class="flex pb-2 pr-1 text-sm font-medium text-gray-700"
                  >
                    <span>حیوان مورد علاقه شما</span>
                  </label>

                  <button
                    type="button"
                    class="text-gray-500 border border-gray-300 focus:ring-1 focus:outline-none focus:ring-hamian font-medium rounded-lg text-sm px-4 py-4 text-center inline-flex items-center w-full justify-between mt-1"
                    @click="PettoggleFocus"
                  >
                    <i
                      class="fa-duotone fa-list text-hamian h-5 w-5 flex leading-[1px] text-[19px]"
                    ></i>
                    <span
                      class="w-full pr-2 text-right text-normal font-normal"
                    >
                      {{
                        hamianData.faveorite_animal.names.length == 0
                          ? favPlaceholder
                          : hamianData.faveorite_animal.names.join(",")
                      }}</span
                    >
                    <i
                      class="fa-duotone fa-angle-down text-[14px] ml-1 w-4 h-3 leading-[20px]"
                    ></i>
                  </button>
                  <div
                    class="categories absolute top-18 z-10 mt-2 bg-white border rounded-lg w-full p-3"
                    v-if="Petfocused"
                  >
                    <ul>
                      <li class="disabled text-sm font-normal">
                        <input
                          type="search"
                          class="border border-gray-200 w-full my-2 rounded-lg placeholder:text-sm text-gray-400 placeholder:text-gray-400/70"
                          placeholder="جستجو در لیست"
                          @keyup="(e) => do_search_fav_categories(e)"
                        />
                      </li>
                      <li
                        v-if="searchResFavCategories.length != 0"
                        class="py-1 relative text-gray-500 mt-2 cursor-pointer hover:bg-gray-50 px-2 rounded-md"
                        v-for="favCategory in searchResFavCategories"
                        @click="selectFavCategory(favCategory.id , favCategory.name)"
                      >
                        {{ favCategory.name }}

                        <i
                        v-if="hamianData.faveorite_animal.ids.includes(favCategory.id)"
                        class="fa absolute left-2 fa-check text-green-500"></i>
                      </li>
                      <li v-else class="py-3 px-4 text-center text-gray-400">
                        <span>نتیجه یافت نشد</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div class="relative mt-4">
                <label
                  for="last-name"
                  class="flex pb-2 pr-1 text-sm font-medium text-gray-700"
                >
                  <span>شماره تلفن یا موبایل </span>
                </label>
                <div class="mt-1 rounded-md">
                  <div
                    class="relative flex items-stretch flex-grow focus-within:z-10"
                  >
                    <div
                      class="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none"
                    >
                      <i
                        class="fa-duotone fa-duotone fa-phone text-hamian h-5 w-5 flex leading-[1px] pr-1"
                      ></i>
                    </div>
                    <input
                      type="number"
                      class="block w-full pr-10 py-4 border-gray-300 rounded-md focus:border-hamian focus:ring-hamian sm:text-sm"
                      placeholder="09057305302"
                      v-model="hamianData.mobile"
                    />
                  </div>
                </div>
              </div>

              <div class="relative mt-4">
                <div class="dropdown">
                  <label
                    class="flex pb-2 pr-1 text-sm font-medium text-gray-700"
                  >
                    <span>حوزه فعالیت</span>
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
                    {{
                      hamianData.activity.names.length == 0
                        ? actPlaceholder
                        : hamianData.activity.names.join(",")
                    }}</span
                    >
                    <i
                      class="fa-duotone fa-angle-down text-[14px] ml-1 w-4 h-3 leading-[20px]"
                    ></i>
                  </button>
                  <div
                    class="categories absolute top-18 z-10 mt-2 bg-white border rounded-lg w-full p-3"
                    v-if="focused"
                  >
                    <ul>
                      <li class="disabled text-sm font-normal">
                        <input
                          type="search"
                          class="border border-gray-200 w-full my-2 rounded-lg placeholder:text-sm text-gray-400 placeholder:text-gray-400/70"
                          placeholder="جستجو در لیست"
                          @keyup="(e) => do_search_act_categories(e)"
                        />
                      </li>
                      <li
                        v-if="searchActCategories.length != 0"
                        class="py-1 relative text-gray-500 mt-2 cursor-pointer hover:bg-gray-50 px-2 rounded-md"
                        v-for="category in searchActCategories"
                        @click="selectActCategory(category.id , category.name)"
                        :class="{ selected: value === category.value }"
                      >
                        {{ category.name }}
                        <i
                        v-if="hamianData.activity.ids.includes(category.id)"
                        class="fa absolute left-2 fa-check text-green-500"></i>

                      </li>
                      <li v-else class="py-3 px-4 text-center text-gray-400">
                        <span>نتیجه یافت نشد</span>
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
                <span>بیوگرافی</span>
              </label>
              <div class="w-full mt-1">
                <quill-editor
                  theme="snow"
                  toolbar="minimal"
                  contentType="html"
                  :options="options"
                  v-model:content="hamianData.biography"
                ></quill-editor>
              </div>
            </div>

            <div class="gap-4 border rounded-lg border-gray-200 py-5">
              <div class="lable px-6">
                <label
                  for="about"
                  class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                  >افزودن لینک شبکه های اجتماعی</label
                >
                <p class="mt-2 text-sm text-gray-500">
                  از این بخش می توانید لینک های دلخواه را به پروفایل حامی اضافه
                  کنید
                </p>
              </div>
              <div class="block">
                <div
                  class="border mx-2 rounded-md my-2 p-4 mt-8"
                  v-for="field in hamianData.socials"
                >
                  <input
                    type="text"
                    v-model="field.social_name"
                    class="appearance-none border border-gray-200 rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none mb-1"
                    placeholder="عنوان لینک"
                  />
                  <input
                    type="text"
                    v-model="field.social_link"
                    class="appearance-none ltr border rounded-lg border-gray-200 text-hamian font-en w-full mt-2 py-2 px-3 leading-tight focus:outline-none mb-1"
                    placeholder="https://instagram.com/petoman"
                  />

                  <button
                    @click="removeField(field.id)"
                    class="mb-8 text-red-500 font-bold focus:outline-none mt-1 p py-1 rounded-lg flex items-center text-sm"
                  >
                    <i class="fa fa-trash-can"></i
                    ><span class="mr-2 font-normal">حذف</span>
                  </button>
                </div>
                <button
                  @click="addField"
                  class="mb-8 text-white bg-hamian border-hamian font-bold focus:outline-none mr-3 mt-2 border px-3 py-2 rounded-lg flex items-center"
                >
                  <i class="fa fa-plus"></i
                  ><span class="mr-2 font-normal">افزودن</span>
                </button>
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
          ><span>بروزرسانی اطلاعات حامی </span>
        </div>
        <div class="block p-4">
          <button
            type="button"
            @click="editSupporter()"
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
                <span v-else>بروزرسانی اطلاعات</span>
              </span></span
            >
          </button>
          <button
            type="button"
            class="hidden box-border relative z-0 items-center justify-center w-full p-3 px-8 py-3 my-2 overflow-hidden font-medium text-hamian transition-all duration-300 bg-hamian/10 rounded-md cursor-pointer group ease focus:outline-none"
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
            >
            <input
              class="border border-gray-200 p-3 rounded-lg flex items-center cursor-text relative overflow-hidden"
              type="text"
              :value="`https://petoman.com/hamian/${hamianData.slug}`"
            />
          </div>
        </div>
      </div>

      <div class="mt-6 border border-gray-200 rounded-lg card">
        <div class="flex items-center w-full p-4 border-b border-gray-200">
          <i class="pl-2 text-2xl text-hamian fa-duotone fa-image"></i
          ><span> تصویر حامی</span>
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
                v-if="supporterImgSrc == ''"
                class="w-12 h-12 mx-auto text-4xl text-gray-400 fa-duotone fa-image"
              ></div>
              <div
                v-else
                class="w-12 relative h-15 mx-auto text-4xl text-gray-400"
              >
              <button
                @click="remove_supporter_image()"
                class="absolute top-[-10px] w-7 h-7  left-[-40px] cursor-pointer bg-red-500 flex items-center justify-center text-white py-1 px-2 rounded-lg"
              >
                <i class="fa-regular fa-close text-sm text-white"></i>
              </button>
                <img
                  :src="supporterImgSrc"
                  class="w-full h-[70px] object-cover rounded"
                />
              </div>

              <div class="flex text-sm text-gray-600">
                <label
                  for="seo-file-upload"
                  class="relative mx-auto font-medium text-hamian bg-white rounded-md cursor-pointer focus-widuotone:outline-none focus-widuotone:ring-2 focus-widuotone:ring-hamian focus-widuotone:ring-offset-2 hover:text-hamian"
                  ><span>تصویر حامی </span
                  ><input
                    id="seo-file-upload"
                    type="file"
                    class="sr-only"
                    ref="supporter_image_input"
                    @change="set_supporter_image"
                /></label>
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
import Swal from 'sweetalert2'
import { QuillEditor } from "@vueup/vue-quill";
import "@/assets/css/vue-quill.snow.css";
export default {
  components: {
    QuillEditor,
  },
  props: {
    hamiInfo: {
      required: true,
      type: [Array, Object],
    }
  },
  data() {
    return {
      fieldCount: 1,
      actPlaceholder: "حوزه  فعالیت را انتخاب کنید",
      useRealInput: false,
      focused: false,
      category: false,
      favPlaceholder: "حیوان مورد علاقه شما",
      PetuseRealInput: false,
      Petfocused: false,
      Petcategory: false,
      activityCategories: [],
      searchActCategories: [],
      favoriteCategories: [],
      searchResFavCategories: [],
      options: {
        debug: "info",
        modules: {
          toolbar: ["bold", "italic", "underline"],
          BlotFormatter: {},
        },
        placeholder: "بیوگرافی کوتاه حامی",
        readOnly: false,
        theme: "snow",
      },
      hamianData: {
        id : '',
        fullName: '',
        slug: '',
        mobile: '',
        faveorite_animal: {
          ids: [],
          names: []
        },
        activity: {
          ids: [],
          names: []
        },
        biography: '',
        socials: [],
        profile_image: ''
      },
      supporterImgSrc: '',
      loading: false
    };
  },
  watch: {
    'hamianData.fullName'(newVal , oldVal) {
      newVal = newVal.split(" ").join("");
      this.hamianData.slug = this.$persianToEnglish(newVal).trim()
    }
  },
  async mounted() {
    await this.get_favorite_animals_category()
    await this.get_activity_animals_category()
    this.set_favorite_animals_category(this.hamiInfo.favorite_animal)
    this.set_activity_animals_category(this.hamiInfo.activity)
    this.hamianData.id = this.hamiInfo.id
    this.hamianData.fullName = this.hamiInfo.name
    this.hamianData.slug = this.hamiInfo.slug
    this.hamianData.mobile = Number(this.hamiInfo.mobile)
    this.hamianData.biography = this.hamiInfo.biography
    this.hamianData.socials = this.hamiInfo.socials
    this.supporterImgSrc = `${this.globalUrl}/storage/supporters/${this.hamiInfo.profile_image}`
  },
  methods: {
    set_favorite_animals_category(data) {
      data = data.split(",")
      data = data.map(Number)
      const result = this.favoriteCategories.filter(({id}) => data.includes(id))
      if(result.length != 0){
        result.forEach((val , index) => {
          this.hamianData.faveorite_animal.ids = [...this.hamianData.faveorite_animal.ids, val.id]
          this.hamianData.faveorite_animal.names = [...this.hamianData.faveorite_animal.names, val.name]
        })
      }
    },  
    set_activity_animals_category(data) {
      data = data.split(",")
      data = data.map(Number)
      const result = this.activityCategories.filter(({id}) => data.includes(id))
      if(result.length != 0){
        result.forEach((val , index) => {
          this.hamianData.activity.ids = [...this.hamianData.activity.ids, val.id]
          this.hamianData.activity.names = [...this.hamianData.activity.names, val.name]
        })
      }
    }, 
    do_search_fav_categories(e) {
      let searchText = e.target.value
      if(searchText != ''){
        const filResult = this.favoriteCategories.filter((val) => {
          return val.name.indexOf(searchText) > -1
        })
        this.searchResFavCategories = filResult
      }else {
        this.searchResFavCategories = this.favoriteCategories
      }
    },
    do_search_act_categories(e) {
      let searchText = e.target.value
      if(searchText != ''){
        const filResult = this.activityCategories.filter((val) => {
          return val.name.indexOf(searchText) > -1
        })
        this.searchActCategories = filResult
      }else {
        this.searchActCategories = this.activityCategories
      }
    },
    toggleFocus() {
      if (this.useRealInput) {
        this.$refs.input.focus();
      } else {
        this.focused = !this.focused;
      }
    },
    findText(value) {
      const category = this.categories.filter((category) => {
        if (category.value === value) return true;
      })[0];
      return category === undefined ? "" : category.text;
    },
    PettoggleFocus() {
      if (this.usePetRealInput) {
        this.$refs.input.focus();
      } else {
        this.Petfocused = !this.Petfocused;
      }
    },
    selectActCategory(id , name) {
      if(this.hamianData.activity.ids.includes(id)){
        const filter = this.hamianData.activity.ids.filter((value) => value != id)
        this.hamianData.activity.ids = filter
      }else {
        this.hamianData.activity.ids.push(id)
      }

      if(this.hamianData.activity.names.includes(name)){
        const filter = this.hamianData.activity.names.filter((value) => value != name)
        this.hamianData.activity.names = filter
      }else {
        this.hamianData.activity.names.push(name)
      }
    },
    selectFavCategory(id , name) {
      if(this.hamianData.faveorite_animal.ids.includes(id)){
        const filter = this.hamianData.faveorite_animal.ids.filter((value) => value != id)
        this.hamianData.faveorite_animal.ids = filter
      }else {
        this.hamianData.faveorite_animal.ids.push(id)
      }

      if(this.hamianData.faveorite_animal.names.includes(name)){
        const filter = this.hamianData.faveorite_animal.names.filter((value) => value != name)
        this.hamianData.faveorite_animal.names = filter
      }else {
        this.hamianData.faveorite_animal.names.push(name)
      }
    },
    addField() {
      this.fieldCount = this.hamianData.socials.length + 1
      this.hamianData.socials.push({ id: this.fieldCount, social_name: "", social_link: "" });
    },
    removeField(id) {
      this.hamianData.socials = this.hamianData.socials.filter((obj) => obj.id !== id);
    },
    async get_favorite_animals_category() {
      const result = await this.$store.dispatch("get_favorite_animals_category")
      if(result.status == 200){
        this.favoriteCategories = result.result
        this.searchResFavCategories = result.result
      }
    },
    async get_activity_animals_category() {
      const result = await this.$store.dispatch("get_activity_animals_category")
      if(result.status == 200){
        this.searchActCategories = result.result
        this.activityCategories = result.result
      }
    },
    set_supporter_image(e){
      this.hamianData.profile_image = e.target.files[0];
      this.createFile(e.target.files[0]);
    },
    createFile(file) {
      if (!file.type.match("image.*")) {
        alert("لطفا نوع فایل را عکس انتخاب کنید");
        this.$refs.supporter_image_input.value = "";
        this.hamianData.profile_image = '';
        this.supporterImgSrc = '';
        return;
      }
      let reader = new FileReader();

      reader.onload = (e) => {
        this.supporterImgSrc = e.target.result ;
      };

      reader.readAsDataURL(file);
    },
    remove_supporter_image() {
      this.supporterImgSrc = '';
      this.$refs.supporter_image_input.value = ""
      this.hamianData.profile_image = '';
    },
    async editSupporter() {
      const validateResult = this.validateData()
      if(validateResult == true){
        this.loading = true
        const result = await this.$store.dispatch("edit_supporter" , this.hamianData)
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
      if(this.hamianData.fullName == ""){
        return "نام و نام خانوادگی حامی الزامی میباشد"
      }else if(this.hamianData.mobile == ""){
        return " شماره موبایل حامی الزامی میباشد"
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
};
</script>
