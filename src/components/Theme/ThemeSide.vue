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

    <ThemeContent />

    <div class="col-span-1">

        <div class="mt-2 border border-gray-200 rounded-lg card">
            <div class="flex items-center w-full p-4 border-b border-gray-200">
              <i class="pl-2 text-2xl text-orange-500 fa-duotone fa-layer-group"></i
              ><span>تغییرات قالب</span>
            </div>
            <div class="block p-4">
              <button
                type="button"
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
                   ثبت تغییرات
                  </span></span
                >
              </button>
            </div>
          </div>

    </div>
</template>

<script setup>
import ThemeContent from './ThemeContent.vue'
import {ref} from 'vue'
import draggable from "vuedraggable";

let idGlobal = 8;

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
        }
    },
])

const cloneEl = (item) => {
  // if(type == "sectionOne"){
    return {
      ...item,
      category: null
    }
  // }
}
</script>