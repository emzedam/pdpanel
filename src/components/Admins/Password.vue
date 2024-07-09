<template>
  <label
    for="last-name"
    class="flex pb-2 pr-1 text-sm font-medium text-gray-700"
  >
    <span>رمز عبور </span>
  </label>
  <div class="mt-1 flex rounded-lg border">
    <button
      type="button"
      @click="chengeType"
      class="relative inline-flex items-center space-x-2 rounded-r-lg border-l outline-none focus:border-gray-200 border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-0"
    >
      <span v-if="inputType == 'password'" class="fa fa-eye text-hamian"></span>
      <span v-if="inputType == 'text'" class="fa fa-eye-slash"></span>
    </button>
    <div class="relative flex flex-grow items-stretch focus-within:z-10">
      <div
        class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3"
      ></div>
      <input
        :type="inputType"
        class="font-en block w-full rounded-none rounded-r-lg ltr text-left border-0 border-gray-300 pr-4 py-4 focus:ring-0 focus:border-indigo-500 focus:ring-indigo-500 outline-none sm:text-sm"
        :placeholder="placeholder"
        v-model="password"
      />
    </div>
    <button
      @click="generate()"
      type="button"
      class="relative -mr-px inline-flex items-center space-x-2 rounded-l-lg border-0 border-gray-300 bg-gray-50 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 focus:border-indigo-500 focus:outline-none focus:ring-0 focus:ring-indigo-500"
    >
      <span class="fa fa-refresh text-hamian"></span>
    </button>
  </div>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: "text",
    },
    size: {
      type: String,
      default: "32",
    },
    characters: {
      type: String,
      default: "a-z,A-Z,0-9,#",
    },
    placeholder: {
      type: String,
      default: "رمز عبور",
    },
    auto: [String, Boolean],
    value: "",
  },
  emits: ['input'],
  data: function () {
    return {
      password: '',
      inputType: ''
    };
  },
  watch: {
    password(newVal , oldVal){
      if(newVal != ''){
        this.$emit('input', newVal);
      }else {
        this.$emit('input', '');
      }
    }
  },
  mounted: function () {
    if (this.auto == "true" || this.auto == 1) {
      this.generate();
    }
    this.inputType = this.type
  },  
  methods: {
    generate() {
      let charactersArray = this.characters.split(",");
      let CharacterSet = "";
      let password = "";

      if (charactersArray.indexOf("a-z") >= 0) {
        CharacterSet += "abcdefghijklmnopqrstuvwxyz";
      }
      if (charactersArray.indexOf("A-Z") >= 0) {
        CharacterSet += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      }
      if (charactersArray.indexOf("0-9") >= 0) {
        CharacterSet += "0123456789";
      }
      if (charactersArray.indexOf("#") >= 0) {
        CharacterSet += "![]{}()%&*$#^<>~@|";
      }

      for (let i = 0; i < this.size; i++) {
        password += CharacterSet.charAt(
          Math.floor(Math.random() * CharacterSet.length)
        );
      }
      this.password = password;
    },
    chengeType() {
      if(this.inputType == "text") {
        this.inputType = "password"
      }else{
        this.inputType = "text"
      }
    }
  },
};
</script>
