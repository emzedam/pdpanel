<template>
    <div class="relative mt-4">
        <div class="text-orange-500 bg-orange-100 p-2 rounded-lg text-right mb-3 pr-3">
            <span>
                <i class="fa fa-chevron-left text-xs ml-3"></i>
            </span>
            <span>
                در این قسمت میتوانید حداکثر تا ۶ تگ انتخاب کنید
            </span>
        </div>
        <div class="dropdown">
          <label
            class="flex pb-2 pr-1 text-sm font-medium text-gray-700"
          >
            <span>انتخاب تگ ها</span>
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
             {{ currentElem.tag_title.length != 0 ? currentElem.tag_title.join(",") : 'تگ مورد نظر را انتخاب کنید' }}
            </span>
            <i
              class="fa-duotone fa-angle-down text-[14px] ml-1 w-4 h-3 leading-[20px]"
            ></i>
          </button>
          <div
            class="categories h-[300px] overflow-y-scroll absolute top-18 z-10 mt-2 bg-white border rounded-lg w-full p-3"
            v-if="focused == true"
          >
            <ul class="rounded-lg">
              <li class="disabled text-sm font-normal">
                <input
                  type="search"
                  class="border border-gray-200 w-full my-2 rounded-lg placeholder:text-sm text-gray-400 placeholder:text-gray-400/70"
                  placeholder="جستجو در لیست"
                  @input="(e) => do_search_tag(e.target.value)"
                />
              </li>
              <li
                class="py-1 text-gray-500 relative border border-gray-100 p-1 mt-2 cursor-pointer  px-2 rounded-md"
                v-for="tag in tag_search_result"
                @click.stop="selectTag(tag.id.toString() , tag.name)"
              >
                <i class="fa-hashtag ml-1 fa-light text-[15px] text-hamian"></i>
                <span class="inline-block mr-1 hover:text-hamian transition-all">{{ tag.name }}</span>

                <span>
                    <i
                        v-if="currentElem.tag_id.length != 0 && currentElem.tag_id.includes(tag.id.toString())"
                        class="fa-check ml-1 fa-light text-[15px] text-hamian absolute left-3 top-2"></i>
                </span>
              </li>
            </ul>
          </div>
        </div>
    </div>
</template>

<script setup>
import {ref} from 'vue'
const props = defineProps({
    tag_search_result: {
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
    "searchTag",
    "doSelectMultipleTag"
])


const toggleFocus = () => {
    focused.value = !focused.value;
}

const selectTag = (id , title) => {
    emit("doSelectMultipleTag" , {id: id , title: title , index: props.elemIndex})
}

const do_search_tag = (value) => {
    emit("searchTag" , value)
}
 
</script>