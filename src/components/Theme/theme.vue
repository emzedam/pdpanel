<template>
  <div>
    <div class="lg:mr-72">
      <div class="divide-y divide-gray-200">
        <div class="space-y-8 divide-y divide-gray-200 sm:space-y-5">
          <div class="space-y-6 sm:space-y-5">
            <div class="p-4">
              <h3 class="text-lg font-medium leading-6 text-gray-900">
                تنظیمات قالب
              </h3>
              <p class="mt-1 text-sm text-gray-500">
                از این بخش می توانید ظاهر سایت را تنظیم کنید.
              </p>
            </div>

            <div class="fields">
              <div
                class="sm:grid sm:grid-cols-2 sm:items-center sm:gap-4 border-t border-gray-200 px-6 py-5"
              >
                <div class="lable pb-0">
                  <label
                    for="photo"
                    class="block text-sm font-medium text-gray-700"
                  >لوگو سایت</label>
                </div>
                <div class="md:col-span-1 sm:mt-0 grid lg:grid-cols-2 gap-4">
                  <div
                    v-if="siteLogoSrc != ''"
                    class="w-full border-2 rounded-md px-6 pt-5 pb-6 border-dashed overflow-hidden flex items-center"
                  >
                    <img
                      class="w-20 h-20 mx-auto flex items-center"
                      :src="siteLogoSrc"
                    />
                  </div>
                  <div class="w-full h-full">
                    <span class="overflow-hidden rounded-lg h-full">
                      <div
                        class="flex h-full w-full lg:max-w-xs justify-center rounded-md border-2 border-dashed border-gray-300 px-6 pt-5 pb-6"
                      >
                        <div class="space-y-1 text-center h-full">
                          <svg
                            class="mx-auto h-12 w-12 text-gray-400"
                            stroke="currentColor"
                            fill="none"
                            viewBox="0 0 48 48"
                            aria-hidden="true"
                          >
                            <path
                              d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            ></path>
                          </svg>
                          <div
                            class="flex text-sm text-gray-600 justify-center"
                          >
                            <label
                              for="logo-upload"
                              class="relative cursor-pointer rounded-md bg-white font-medium text-hamian focus-within:outline-none focus-within:ring-2 focus-within:ring-hamian focus-within:ring-offset-2 hover:text-hamian"
                            >
                              <span>آپلود لوگو</span>
                              <input
                                @change="(e) => set_site_logo(e)"
                                id="logo-upload"
                                name="logo-upload"
                                type="file"
                                class="sr-only"
                              />
                            </label>
                          </div>
                        </div>
                      </div>
                    </span>
                  </div>
                </div>
              </div>

              <div
                class="sm:grid sm:grid-cols-2 sm:items-start sm:gap-4 border-t border-gray-200 px-6 py-5"
              >
                <div class="lable pb-0">
                  <label
                    for="about"
                    class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                  >
                    درباره پت دانیم</label
                  >
                  <p class="mt-2 text-sm text-gray-500">
                    به طور خلاصه در مورد پت دانیم بنویسید
                  </p>
                </div>
                <div class="mt-1 md:col-span-1 sm:mt-0">
                  <textarea
                    v-model="themData.aboutus"
                    id="about"
                    name="about"
                    class="block w-full rounded-md border-gray-300 focus:border-hamian focus:ring-hamian sm:text-sm h-32"
                  />
                </div>
              </div>

              <div
                class="sm:grid sm:grid-cols-2 sm:items-start sm:gap-4 border-t border-gray-200 px-6 py-5"
              >
                <div class="lable pb-0">
                  <label
                    for="about"
                    class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                    >خانواده ما</label
                  >
                  <p class="mt-2 text-sm text-gray-500">
                    از این بخش می توانید لینک های دلخواه را به پابرگ سایت اضافه
                    کنید
                  </p>
                </div>
                <div class="mt-1 md:col-span-1 sm:mt-0">
                  <div
                    class="border my-2 p-4 rounded-lg"
                    v-for="field in fields"
                  >
                    <input
                      type="text"
                      v-model="field.title"
                      class="appearance-none border border-gray-200 rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none mb-1"
                      placeholder="عنوان لینک"
                    />
                    <input
                      type="text"
                      v-model="field.url"
                      class="appearance-none border rounded-lg border-gray-200 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none mb-1"
                      placeholder=" لینک"
                    />
                    <button
                      class="font-bold text-red-400 text-xs w-full text-right mb-4 focus:outline-none"
                      @click="removeField(field.id)"
                    >
                      &mdash; حذف
                    </button>
                  </div>
                  <button
                    @click="addField"
                    class="mb-8 text-hamian font-bold focus:outline-none border py-3 px-4 rounded-lg"
                  >
                    + اضافه کردن
                  </button>
                </div>
              </div>

              <div
                class="sm:grid sm:grid-cols-2 sm:items-start sm:gap-4 border-t border-gray-200 px-6 py-5"
              >
                <div class="lable pb-0">
                  <label
                    for="about"
                    class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                    >شبکه های اجتماعی</label
                  >
                  <p class="mt-2 text-sm text-gray-500">
                     شبکه های اجتماعی را از این بخش می توانید ویرایش کنید
                  </p>
                </div>
                <div class="mt-1 md:col-span-1 sm:mt-0 space-y-4">
                  <div class="border p-3 rounded-lg">
                    <label
                      for="email"
                      class="block text-sm font-medium text-gray-700 pb-1"
                    >پست الکترونیک</label>
                    <div class="relative mt-1 rounded-md">
                      <div
                        class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3"
                      >
                        <i
                          class="fa-light fa-envelope h-5 w-5 text-gray-400"
                        ></i>
                      </div>
                      <input
                        v-model="themData.email"
                        type="email"
                        name="email"
                        id="email"
                        class="block w-full rounded-md border-gray-300 pl-10 focus:border-hamian focus:ring-hamian sm:text-sm ltr text-left"
                        placeholder="you@example.com"
                      />
                    </div>
                  </div>

                  <div class="border p-3 rounded-lg">
                    <label
                      for="account-number"
                      class="block text-sm font-medium text-gray-700 pb-1"
                    >
                      آدرس تلگرام
                    </label>
                    <div class="relative mt-1 rounded-md">
                      <input
                        v-model="themData.telegram"
                        type="text"
                        name="account-number"
                        id="account-number"
                        class="block w-full rounded-md border-gray-300 pl-10 focus:border-hamian focus:ring-hamian sm:text-sm ltr text-left"
                        placeholder="petoman_team"
                      />
                      <div
                        class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3"
                      >
                        <i
                          class="fa-brands fa-telegram h-5 w-5 text-gray-400"
                        ></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="py-5">
          <div class="flex justify-end gap-4">
            <button
              type="button"
              class="rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-1 focus:ring-hamian focus:ring-offset-0"
            >
              انصراف
            </button>
            <button
              @click="save_setting()"
              class="ml-3 inline-flex justify-center rounded-md border border-transparent bg-hamian py-2 px-4 text-sm font-medium text-white hover:bg-hamian/90 focus:outline-none focus:ring-0 focus:ring-hamian-70 focus:ring-offset-0"
            >
              <div class="lds-dual-ring" v-if="loading == true"></div>
              <span v-else>ذخیره تنظیمات</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Swal from "sweetalert2";
export default {
  data() {
    return {
      fields: [],
      fieldCount: 1,
      sliders: [],
      sliderCount: 1,
      themData: {
        aboutus: "",
        email: "",
        telegram: "",
      },
      siteLogoSrc: "",
      loading: false,
    };
  },
  async mounted() {
    await this.get_theme_config();
  },
  methods: {
    addField() {
      this.fieldCount = this.fields.length + 1;
      this.fields.push({ id: this.fieldCount, title: "", url: "" });
    },
    removeField(id) {
      this.fields = this.fields.filter((obj) => obj.id !== id);
    },
    addSliderField() {
      this.sliderCount = this.sliders.length + 1;
      this.sliders.push({
        id: this.sliderCount,
        file: "",
        localSrc: "",
        sliderId: 0,
      });
    },
    removeSliderField(id) {
      this.sliders = this.sliders.filter((obj) => obj.id !== id);
    },
    set_slider_images(e, index) {
      let file = e.target.files[0];
      this.sliders[index].file = file;
      let reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = (e) => {
        this.sliders[index].localSrc = e.target.result;
      };
    },
    set_site_logo(e) {
      let file = e.target.files[0];
      this.themData.siteLogo = file;
      let reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = (e) => {
        this.siteLogoSrc = e.target.result;
      };
    },
    async get_theme_config() {
      const result = await this.$store.dispatch("get_theme_config");
      if (result.status == 200) {
        const data = result.result;

        console.log(data);
        // add default linkduni
        if (data.linkduni != null && data.linkduni.length != 0) {
          for (let i = 0; i < data.linkduni.length; i++) {
            this.fieldCount = i + 1;
            this.fields.push({
              id: this.fieldCount,
              title: data.linkduni[i]["title"],
              url: data.linkduni[i]["url"],
            });
          }
        }

        // add default slider
        if (data.slider != null && data.slider.length != 0) {
          for (let i = 0; i < data.slider.length; i++) {
            this.sliderCount = i + 1;
            this.sliders.push({
              id: this.sliderCount,
              file: "",
              localSrc: `${this.globalUrl}/storage/theme/${data.slider[i]["file_name"]}`,
              sliderId: data.slider[i].id,
            });
          }
        }

        if (
          data.themeData.site_logo != null &&
          data.themeData.site_logo != ""
        ) {
          this.siteLogoSrc = `${this.globalUrl}/storage/theme/${data.themeData.site_logo}`;
        }

        this.themData.aboutus = data.themeData.aboutus;
        this.themData.address = data.themeData.address;
        this.themData.cardnumber = data.themeData.cardnumber;
        this.themData.email = data.themeData.email;
        this.themData.instagram = data.themeData.instagram;
        this.themData.mobile = data.themeData.mobile;
        this.themData.telphone = data.themeData.telphone;
      }
    },
    async save_setting() {
      this.loading = true;
      this.themData.sliders = this.sliders;
      this.themData.linkduni = this.fields;
      const result = await this.$store.dispatch(
        "save_theme_config",
        this.themData
      );
      if (result.status == 200) {
        this.loading = false;
        this.showSwal("پیغام موفقیت آمیز", result.message, "success");
      }
    },
    showSwal(title, text, icon) {
      Swal.fire({
        title: title,
        text: text,
        icon: icon,
      });
    },
  },
};
</script>

<style scoped>
.lds-dual-ring,
.lds-dual-ring:after {
  box-sizing: border-box;
}
.lds-dual-ring {
  display: inline-flex;
  width: 20px;
  height: 20px;
  justify-content: center;
  align-items: center;
}
.lds-dual-ring:after {
  content: " ";
  display: block;
  width: 28px;
  height: 17px;
  margin: 8px;
  border-radius: 50%;
  border: 6.4px solid currentColor;
  border-color: currentColor transparent currentColor transparent;
  animation: lds-dual-ring 1.2s linear infinite;
}
@keyframes lds-dual-ring {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
