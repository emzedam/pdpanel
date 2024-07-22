<template>
    <div class="relative mt-4">
        <div class="text-orange-500 bg-orange-100 p-2 rounded-lg text-right mb-3 pr-3" v-if="currentElem.tools.multipleCategory">
            <span>
                <i class="fa fa-chevron-left text-xs ml-3"></i>
            </span>
            <span>
                در این حالت انتخاب چندگانه دسته بندی فعال است و میتوانید حداکثر تا {{ currentElem.tools.maxSelectCount }} دسته بندی انتخاب کنید
            </span>
        </div>
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
              v-if="!currentElem.tools.multipleCategory"
              class="w-full pr-2 text-right text-normal font-normal"
            >
             {{ currentElem.category_title != null ? currentElem.category_title : 'دسته مورد نظر را انتخاب کنید' }}
            </span>
            <span
              v-if="currentElem.tools.multipleCategory"
              class="w-full pr-2 text-right text-normal font-normal"
            >
             {{ currentElem.category_title != null ? currentElem.category_title.join(",") : 'دسته مورد نظر را انتخاب کنید' }}
            </span>
            <i
              class="fa-duotone fa-angle-down text-[14px] ml-1 w-4 h-3 leading-[20px]"
            ></i>
          </button>
          <div
            class="categories absolute top-18 z-10 mt-2 bg-white border rounded-lg w-full p-3"
            v-if="focused == true"
          >
            <ul class="rounded-lg">
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
              >
                <i class="fa-chevron-left ml-1 fa-light text-[15px] text-hamian"></i>
                <span class="inline-block mr-1 hover:text-hamian transition-all">{{ category.title }}</span>

                <span v-if="!currentElem.tools.multipleCategory">
                    <i
                        v-if="currentElem.category_id == category.id"
                        class="fa-check ml-1 fa-light text-[15px] text-hamian absolute left-3 top-2"></i>
                </span>
                <span v-if="currentElem.tools.multipleCategory">
                    <i
                        v-if="currentElem.category_id != null && currentElem.category_id.includes(category.id)"
                        class="fa-check ml-1 fa-light text-[15px] text-hamian absolute left-3 top-2"></i>
                </span>
                
                <!-- level two category -->
                <ul class="pr-3 !bg-white pt-1 pb-1 p-1 rounded-lg" v-if="category.childs.length != 0 && searchCatText == ''">
                  <li
                    class="py-1 relative text-gray-500 border border-gray-100  mt-2 cursor-pointer px-2 rounded-md"
                    v-for="levelTwoCat in category.childs"
                    @click.stop="selectCategory(levelTwoCat.id , levelTwoCat.title)"
                  >
                    <i class="fa-chevron-left ml-1 fa-light text-[15px] text-hamian"></i>
                    <span class="inline-block mr-1 hover:text-hamian transition-all">{{ levelTwoCat.title }}</span>

                    <span v-if="!currentElem.tools.multipleCategory">
                        <i
                            v-if="currentElem.category_id == levelTwoCat.id"
                            class="fa-check ml-1 fa-light text-[15px] text-hamian absolute left-3 top-2"></i>
                    </span>
                    <span v-if="currentElem.tools.multipleCategory">
                        <i
                            v-if="currentElem.category_id != null && currentElem.category_id.includes(levelTwoCat.id)"
                            class="fa-check ml-1 fa-light text-[15px] text-hamian absolute left-3 top-2"></i>
                    </span>

                    <!-- level three category -->
                    <ul class="pr-3 !bg-white p-1 rounded-lg" v-if="levelTwoCat.childs.length != 0 && searchCatText == ''">
                      <li
                        class="py-1 border relative border-gray-100  text-gray-500 mt-2 cursor-pointer  px-2 rounded-md"
                        v-for="levelThreeCat in levelTwoCat.childs"
                        @click.stop="selectCategory(levelThreeCat.id , levelThreeCat.title)"
                      >
                        <i class="fa-chevron-left ml-1 fa-light text-[15px] text-hamian"></i>
                        <span class="inline-block mr-1 hover:text-hamian transition-all">{{ levelThreeCat.title }}</span>

                        <span v-if="!currentElem.tools.multipleCategory">
                            <i
                                v-if="currentElem.category_id == levelThreeCat.id"
                                class="fa-check ml-1 fa-light text-[15px] text-hamian absolute left-3 top-2"></i>
                        </span>
                        <span v-if="currentElem.tools.multipleCategory">
                            <i
                                v-if="currentElem.category_id != null && currentElem.category_id.includes(levelThreeCat.id)"
                                class="fa-check ml-1 fa-light text-[15px] text-hamian absolute left-3 top-2"></i>
                        </span>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
    </div>
</template>

<script setup>
import {ref} from 'vue'
const props = defineProps({
    cat_search_result: {
        required: true,
        type: [Array , Object]
    },
    elemIndex: {
        required: true,
        type: Number
    },
    currentElem: {
        required: true,
        type: [Array , Object]
    }
})

const focused = ref(false)


const emit = defineEmits([
    "doSelectCat",
    "searchCat",
    "doSelectMultipleCat"
])


const toggleFocus = () => {
    focused.value = !focused.value;
}

const selectCategory = (id , title) => {
    if(!props.currentElem.tools.multipleCategory) {
        emit("doSelectCat" , {id: id , title: title , index: props.elemIndex})
        focused.value = false
    }else {
        emit("doSelectMultipleCat" , {id: id , title: title , index: props.elemIndex})
    }

}

const do_search_category = (value) => {
    emit("searchCat" , value)
}
 
</script>