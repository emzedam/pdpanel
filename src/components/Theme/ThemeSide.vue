<template>
    <div class="col-span-1">
        <div class="items rounded-lg">
            <draggable 
                :list="items"
                :group="{ name: 'myitems', pull: 'clone', put: false }"
                item-key="id"
                :clone="cloneEl"
            >
                <template #item="{ element }">
                    <div :style="{backgroundImage: `url(/theme/${element.image})`}" class="w-full h-[90px] bg-cover bg-center cursor-pointer flex items-center justify-center rounded-lg mb-3">
                        <div class="item w-full h-full bg-gray-500/50 flex items-center justify-center text-2xl font-bold text-white rounded-lg">
                          <p class="[text-shadow:_0_1px_0_rgb(0_0_0_/_40%)]">{{ element.name }}</p>
                        </div>
                    </div>
                </template>
            </draggable>

                
          </div>
    </div>

    <ThemeContent ref="templateContent" />

    <div class="col-span-1">

        <div class="mt-2 border border-gray-200 rounded-lg card">
            <div class="flex items-center w-full p-4 border-b border-gray-200">
              <i class="pl-2 text-2xl text-orange-500 fa-duotone fa-layer-group"></i
              ><span>تغییرات قالب</span>
            </div>
            <div class="block p-4">
              <button
                type="button"
                @click="saveTemplate()"
                class="box-border relative z-0 inline-flex items-center justify-center w-full p-3 px-8 py-3 my-2 overflow-hidden font-medium text-white transition-all duration-300 bg-orange-500 rounded-md cursor-pointer group ease focus:outline-none"
              >
                <span
                  class="absolute bottom-0 right-0 w-8 h-20 -mb-8 -mr-5 transition-all duration-300 ease-out transform rotate-45 translate-x-1 bg-white opacity-10 group-hover:translate-x-0"
                ></span
                ><span
                  class="absolute top-0 left-0 w-20 h-8 -mt-1 -ml-12 transition-all duration-300 ease-out transform -rotate-45 -translate-x-1 bg-white opacity-10 group-hover:translate-x-0"
                ></span
                ><span
                  class="relative z-20 flex items-center justify-center w-full text-center"
                  ><i class="pl-2 text-2xl text-white fa-duotone fa-arrow-up-from-bracket"></i
                  ><span class="w-full">
                    <div class="lds-ring" v-if="loading == true"><div></div><div></div><div></div><div></div></div>
                    <span v-else>ثبت تغییرات</span>
                  </span>
                </span>
              </button>
            </div>
          </div>

    </div>
</template>

<script setup>
import ThemeContent from './ThemeContent.vue'
import {ref} from 'vue'
import draggable from "vuedraggable";
import {useStore} from 'vuex'
import Swal from 'sweetalert2'

let   idGlobal = 8;
const loading  = ref(false)
const store    = useStore()
const templateContent = ref(null)

const items = ref([
    { 
        id: 1,
        type: "sectionOne",
        name: 'حالت اول',
        image: '1.png',
        tools: {
          hasCategoryItem: true,
          multipleCategory: false,
          hasTagItem: false,
          hasIconName: false,
          hasTitle: false,
          maxSelectCount: 1,
          isNewersOption: true  
        }
    },
    { 
        id: 2,
        type: "sectionTwo",
        name: 'حالت دوم',
        image: '2.png',
        tools: {
          hasCategoryItem: true,
          multipleCategory: true,
          hasTagItem: false,
          hasIconName: true,
          hasTitle: true,
          maxSelectCount: 6,
          isNewersOption: true  
        }
    },
    { 
        id: 3,
        type: "sectionThree",
        name: 'حالت سوم',
        image: '3.png',
        tools: {
          hasCategoryItem: true,
          multipleCategory: false,
          hasTagItem: false,
          hasIconName: true,
          hasTitle: true,
          maxSelectCount: 1,
          isNewersOption: true  
        }
    },
    { 
        id: 4,
        name: 'حالت چهارم',
        type: "sectionFour",
        image: '4.png',
        tools: {
          hasCategoryItem: true,
          multipleCategory: true,
          hasTagItem: false,
          hasIconName: true,
          hasTitle: true,
          maxSelectCount: 4,
          isNewersOption: false  
        }
    },
    { 
        id: 5,
        name: 'حالت پنجم',
        type: "sectionFive",
        image: '5.png',
        tools: {
          hasCategoryItem: true,
          multipleCategory: false,
          hasTagItem: false,
          hasIconName: true,
          hasTitle: true,
          maxSelectCount: 1,
          isNewersOption: true  
        }
    },
    { 
        id: 6,
        name: 'حالت ششم',
        type: "sectionSix",
        image: '6.png',
        tools: {
          hasCategoryItem: false,
          multipleCategory: false,
          hasTagItem: true,
          hasIconName: true,
          hasTitle: true,
          maxSelectCount: 6,
          isNewersOption: false 
        }
    },
])

const cloneEl = (item) => {
    return {
      ...item,
      category_id: [],
      category_title: [],
      tag_id: [],
      tag_title: [],
      title: null,
      icon: null,
      isNewers: false
    }
}

const saveTemplate = () => {
  let validateResult = validateData();
  if(validateResult == true){
    loading.value = true
    const result = store.dispatch("save_template" , templateContent.value.list2)
    if (result.status == 200) {
      loading.value = false
      showSwal("موفقیت آمیز" , result.message , "success")
    } else {
      loading.value = false
      showSwal("خطا" , result.message , "error")
    }
  } else {
    showSwal("خطا" , validateResult , "error")
  }
}

const validateData = () => {
  let error = true
  if(templateContent.value.list2.length != 0) {
    templateContent.value.list2.forEach(item => {
      if(item.type == "sectionOne") {
        if(item.category_id.length == 0) {
          error = "لطفا دسته بندی را در حالت اول مشخص کنید"
        }
      }else if(item.type == "sectionTwo"){
        if(item.category_id.length == 0) {
          error = "لطفا دسته بندی را در حالت دوم مشخص کنید"
        }else if(item.title == null) {
          error = "لطفا عنوان را در حالت دوم وارد کنید"
        }else if(item.icon == null) {
          error = "لطفا آیکون را در حالت دوم وارد کنید"
        }
      }else if(item.type == "sectionThree"){
        if(item.category_id.length == 0) {
          error = "لطفا دسته بندی را در حالت سوم مشخص کنید"
        }else if(item.title == null) {
          error = "لطفا عنوان را در حالت سوم وارد کنید"
        }else if(item.icon == null) {
          error = "لطفا آیکون را در حالت سوم وارد کنید"
        }
      }else if(item.type == "sectionFour"){
        if(item.category_id.length == 0) {
          error = "لطفا دسته بندی را در حالت چهارم مشخص کنید"
        }else if(item.title == null) {
          error = "لطفا عنوان را در حالت چهارم وارد کنید"
        }else if(item.icon == null) {
          error = "لطفا آیکون را در حالت چهارم وارد کنید"
        }
      }else if(item.type == "sectionFour"){
        if(item.category_id.length == 0) {
          error = "لطفا دسته بندی را در حالت چهارم مشخص کنید"
        }else if(item.title == null) {
          error = "لطفا عنوان را در حالت چهارم وارد کنید"
        }else if(item.icon == null) {
          error = "لطفا آیکون را در حالت چهارم وارد کنید"
        }
      }else if(item.type == "sectionFive"){
        if(item.category_id.length == 0) {
          error = "لطفا دسته بندی را در حالت پنجم مشخص کنید"
        }else if(item.title == null) {
          error = "لطفا عنوان را در حالت پنجم وارد کنید"
        }else if(item.icon == null) {
          error = "لطفا آیکون را در حالت پنجم وارد کنید"
        }
      }else if(item.type == "sectionSix"){
        if(item.tag_id.length == 0) {
          error = "لطفا تگ ها را در حالت ششم مشخص کنید"
        }else if(item.title == null) {
          error = "لطفا عنوان را در حالت ششم وارد کنید"
        }else if(item.icon == null) {
          error = "لطفا آیکون را در حالت ششم وارد کنید"
        }
      }
    });
  }else {
    error = "آیتمی را اضافه نکرده اید !"
  }

  return error
}

const showSwal = (title , text , icon) => {
  Swal.fire({
    title: title,
    text: text,
    icon: icon
  });
}

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
