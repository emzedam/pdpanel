<template>
  <div class="grid lg:grid-cols-12 gap-4">
    <div class="border border-gray-200 rounded-lg card mt-2 col-span-12">
      <div
        class="relative pb-4 m-0 overflow-hidden text-gray-700 bg-transparent border-b shadow-none bg-clip-border border-b-gray-200 px-6 py-6"
      >
        <h6
          class="flex items-center gap-1 text-سئ antialiased font-semibold leading-normal text-gray-600 font-fa"
        >
          <i
            class="fa-duotone fa-pen-to-square text-[20px] !w-5 !h-5 text-hamian ml-1"
          ></i>
         شناسنامه
        </h6>
        <p
          class="flex items-center gap-1 pt-2 text-xs antialiased font-normal leading-normal text-gray-600 font-fa"
        >
          از این بخش می توانید اطلاعات کاربر را ویرایش کنید
        </p>
      </div>

      <div class="flex flex-col tabs">
        <div class="p-4 tab-content sm:p-5">
          <div class="space-y-5">
            <div class="grid lg:grid-cols-2 gap-4">
              <div class="relative mt-4 lg:w-full justify-start flex">
                <div
                  class="flex items-center justify-center w-full max-w-[150px] px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md"
                >
                  <div class="space-y-1 text-center">

                    <div
                      v-if="profileImgSrc == ''"
                      class="w-12 h-12 mx-auto text-4xl text-gray-400 fa-duotone fa-image"
                    ></div>
                    <div
                      v-else
                      class="w-12 relative h-15 mx-auto text-4xl text-gray-400"
                    >
                    <button
                      @click="remove_profile()"
                      class="absolute top-[-10px] w-7 h-7  left-[-40px] cursor-pointer bg-red-500 flex items-center justify-center text-white py-1 px-2 rounded-lg"
                    >
                      <i class="fa-regular fa-close text-sm text-white"></i>
                    </button>
                      <img
                        :src="profileImgSrc"
                        class="w-full h-[70px] object-cover rounded"
                      />
                    </div>

                    <div class="flex text-sm text-gray-600">
                      <label
                        for="profile-file-upload"
                        class="relative mx-auto font-medium text-hamian bg-white rounded-md cursor-pointer focus-widuotone:outline-none focus-widuotone:ring-2 focus-widuotone:ring-hamian focus-widuotone:ring-offset-2 hover:text-hamian"
                        ><span>تصویر پروفایل</span
                        ><input
                          id="profile-file-upload"
                          ref="profileFile"
                          @change="set_profile_image"
                          type="file"
                          class="sr-only" /></label
                      ><!---->
                    </div>
                  </div>
                </div>
              </div>

              <div></div>

              <div class="relative mt-4">
                <label
                  for="last-name"
                  class="flex pb-2 pr-1 text-sm font-medium text-gray-700"
                >
                  <span>نام </span>
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
                      placeholder="نام "
                      v-model="userData.name"
                    />
                  </div>
                </div>
              </div>

              <div class="relative mt-4">
                <label
                  for="last-name"
                  class="flex pb-2 pr-1 text-sm font-medium text-gray-700"
                >
                  <span> نام خانوادگی</span>
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
                      placeholder=" نام خانوادگی "
                      v-model="userData.family"
                    />
                  </div>
                </div>
              </div>

              <div class="relative mt-4">
                <label
                  for="last-name"
                  class="flex pb-2 pr-1 text-sm font-medium text-gray-700"
                >
                  <span>نام کاربری </span>
                </label>
                <div class="mt-1 rounded-md">
                  <div
                    class="relative flex items-stretch flex-grow focus-within:z-10"
                  >
                    <div
                      class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"
                    >
                      <i
                        class="fa-duotone fa-duotone fa-pen-to-square text-hamian h-5 w-5 flex leading-[1px] pr-1"
                      ></i>
                    </div>
                    <input
                      type="text"
                      class="block w-full pl-10 py-4 border-gray-300 rounded-md focus:border-hamian focus:ring-hamian sm:text-sm ltr"
                      placeholder="bapu"
                      v-model="userData.username"
                    />
                  </div>
                </div>
              </div>

              <div class="relative mt-4">
                <label
                  for="last-name"
                  class="flex pb-2 pr-1 text-sm font-medium text-gray-700"
                >
                  <span>ایمیل </span>
                </label>
                <div class="mt-1 rounded-md">
                  <div
                    class="relative flex items-stretch flex-grow focus-within:z-10"
                  >
                    <div
                      class="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none"
                    >
                      <i
                        class="fa-duotone fa-duotone fa-envelope text-hamian h-5 w-5 flex leading-[1px] pr-1"
                      ></i>
                    </div>
                    <input
                      type="text"
                      class="block w-full pr-10 py-4 border-gray-300 rounded-md focus:border-hamian focus:ring-hamian sm:text-sm"
                      placeholder="your@email.com"
                      v-model="userData.email"
                    />
                  </div>
                </div>
              </div>

              <div class="relative mt-4">
                <password
                  size="18"
                  auto="false"
                  characters="a-z,A-Z,0-9,#"
                  type="password"
                  @input="(value) => userData.password = value"
                  :value="userData.password"
                ></password>
              </div>

              <div class="relative mt-4">
                <div class="dropdown">
                  <label
                    class="flex pb-2 pr-1 text-sm font-medium text-gray-700"
                  >
                    <span>گروه کاربری</span>
                  </label>
                  <select ref="input" v-model="value">
                    <option value="" :disabled="true">{{ placeholder }}</option>
                    <option
                      v-for="category in categories"
                      :value="category.value"
                    >
                      {{ category.text }}
                    </option>
                  </select>

                  <button
                    type="button"
                    class="text-gray-500 border border-gray-300 focus:ring-1 focus:outline-none focus:ring-hamian font-medium rounded-lg text-sm px-4 py-4 text-center inline-flex items-center w-full justify-between mt-1"
                    @click="toggleFocus"
                  >
                    <i
                      class="fa-duotone fa-users text-hamian h-5 w-5 flex leading-[1px] text-[19px]"
                    ></i>
                    <span
                      class="w-full pr-2 text-right text-normal font-normal"
                    >
                      {{
                        [null, ""].includes(userData.role)
                          ? placeholder
                          : findText(userData.role)
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
                      <li
                        class="py-1 text-gray-500 mt-2 cursor-pointer hover:bg-gray-50 px-2 rounded-md"
                        v-for="category in categories"
                        @click="selectCategory(category.role)"
                        :class="{ selected: userData.role === category.role }"
                      >
                        {{ category.text }}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="relative w-full px-6 border-t">
        <button
          @click="editUser()"
          type="button"
          class="box-border relative z-0 inline-flex items-center justify-center p-3 px-8 py-3 overflow-hidden font-medium text-white transition-all duration-300 bg-hamian rounded-md cursor-pointer group ease focus:outline-none w-full my-8 max-w-sm"
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
            </span></span>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import password from "./Password.vue";
import Swal from 'sweetalert2'
export default {
  components: { password },
  props: {
    userInfo: {
      required: true,
      type: [Array , Object]
    }
  },    
  data() {
    return {
      loading: false,
      placeholder: "گروه کاربری",
      useRealInput: false,
      value: "",
      focused: false,
      category: false,
      categories: [
        { role: 1, text: "مدیر کل" },
        { role: 2, text: "کاربر عادی" },
      ],
      profileImgSrc: '',
      userData: {
        id: '',
        profile: '',
        name: '',
        family: '',
        username: '',
        email: '',
        password: '',
        role: '',
      }
    };
  },
  mounted() {
    this.userData.id = this.$route.params.id
    this.userData.name = this.userInfo.name
    this.userData.family = this.userInfo.family
    this.userData.username = this.userInfo.username
    this.userData.email = this.userInfo.email
    this.userData.role = this.userInfo.role

    if(this.userInfo.profile != null){
      this.profileImgSrc = `${this.globalUrl}/storage/admin/${this.userInfo.profile}`
    }
  },
  methods: {
    validateData() {
      if(this.userData.name == ''){
        return "فیلد نام اجباری میباشد"
      }else if(this.userData.family == ''){
        return "فیلد نام خانوادگی اجباری میباشد"
      }else if(this.userData.username == ''){
        return "فیلد نام کاربری اجباری میباشد"
      }else if(this.userData.role == ''){
        return "گروه کاربری را مشخص کنید"
      }else {
        return true
      }
    },  
    async editUser() {
      const validateResult = this.validateData()
      if(validateResult == true){
        this.loading = true
        const result = await this.$store.dispatch('edit_user_data', this.userData)
        if(result.status == 200){
          this.loading = false
          this.showSwal("پیغام موفقیت امیز" , result.message , "success")
        }else {
          this.showSwal("خطای رخ داده !" , result.message , "error")
          this.loading = false
        }
      }else {
        this.showSwal("خطای اعتبارسنجی !" , validateResult , "error")
      }
    },
    toggleFocus() {
      if (this.useRealInput) {
        this.$refs.input.focus();
      } else {
        this.focused = !this.focused;
      }
    },
    selectCategory(value) {
      if (value !== this.userData.role) {
        this.userData.role = value;
        this.$refs.input.value = value;
        this.toggleFocus();
      }
    },
    findText(value) {
      const category = this.categories.filter((category) => {
        if (category.role === value) return true;
      })[0];
      return category === undefined ? "" : category.text;
    },
    set_profile_image(e){
      this.userData.profile = e.target.files[0];
      this.createFile(e.target.files[0]);
    },
    createFile(file) {
      if (!file.type.match("image.*")) {
        alert("لطفا نوع فایل را عکس انتخاب کنید");
        this.$refs.profileFile.value = "";
        this.profileImgSrc = '';
        return;
      }
      let reader = new FileReader();

      reader.onload = (e) => {
        this.profileImgSrc = e.target.result ;
      };

      reader.readAsDataURL(file);
    },
    remove_profile() {
      this.profileImgSrc = '';
      this.$refs.profileFile.value = ""
      this.userData.profile = '';
    },
    showSwal(title , text , icon) {
      Swal.fire({
        title: title,
        text: text,
        icon: icon
      });
    },
    clearData() {
      this.userData.name = ''
      this.userData.family = ''
      this.userData.username = ''
      this.userData.email = ''
      this.userData.password = ''
      this.userData.role = ''

      this.remove_profile()
    }
  },
};
</script>
