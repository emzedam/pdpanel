<template>
  <div class="col-span-3 p-4 bg-gray-100 rounded-lg w-full h-[600px] overflow-y-scroll shadow-sm">
    <draggable
      class="dragArea list-group w-full h-full"
      :list="list2"
      group="myitems"
      @change="log"
      item-key="id"
    >
      <template #item="{ element,index }">
        <div class="list-group-item">
          <div class="accordion bg-white mb-2 rounded-lg">
            <div
              class="border-b border-gray-200"
            >
              <button
                @click="toggleAccordion(index)"
                class="flex justify-between items-center w-full p-4 text-left focus:outline-none"
              >
                <span class="text-lg font-medium">{{ element.name }}</span>
                <div>
                    <i @click.stop="removeAccordion(index)" class="fa fa-trash ml-2 bg-red-500 text-white p-2 rounded-lg cursor-pointer"></i>

                    <span
                        class="transform transition-transform"
                        :class="{ 'rotate-180': activeIndex === index }"
                    >
                        &#9660;
                    </span>
                </div>
              </button>
              <div v-if="activeIndex === index" class="p-4">
                <div v-if="element.tools.hasCategoryItem">
                    <Category 
                        :cat_search_result="cat_search_result"
                        :elemIndex="index"
                        :currentElem="element"
                        @searchCat="(text) => do_search_category(text)"
                        @doSelectCat="(data) => selectCategory(data)"
                        @doSelectMultipleCat="(data) => doSelectMultipleCat(data)"
                    />
                </div>
                <div v-if="element.tools.hasTagItem">
                    <label for="tag"> انتخاب تگ ها : </label>
                    <select v-model="element.tags" id="tag" class="w-full mt-2 rounded-lg border border-gray-200 cursor-pointer">
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                    </select>
                </div>
                <div v-if="element.tools.hasTitle" class="mt-3">
                    <label for="title"> عنوان : </label>
                    <input type="text" id="title" class="w-full border border-gray-200 rounded-lg mt-3" v-model="element.title" />
                </div>
                <div v-if="element.tools.hasIconName" class="mt-3">
                    <label for="icon"> آیکون : </label>
                    <input type="text" id="icon" class="w-full border border-gray-200 rounded-lg mt-3" v-model="element.icon" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </template>
    </draggable>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import draggable from "vuedraggable";
import {useStore} from 'vuex'
import Category from './CategoryConfig/index.vue'


const store = useStore()
const activeIndex = ref(null);
const list2 = ref([]);
const categoryList = ref([])
const cat_search_result = ref([])



const log = (evt) => {
  console.log(list2.value);
  console.log(evt);
};

onMounted(() => {
    getCategories()
})



const selectCategory = (data) => {
    list2.value[data.index].category_id = data.id
    list2.value[data.index].category_title = data.title
}

const toggleAccordion = (index) => {
  if (activeIndex.value === index) {
    activeIndex.value = null;
  } else {
    activeIndex.value = index;
  }
}


const removeAccordion = (index) => {
    list2.value.splice(index , 1)
}


const getCategories = async () => {
    const result = await store.dispatch("get_categories_list");
    if (result.status == 200) {
        categoryList.value = result.result;
        cat_search_result.value = result.result;
    } else {
        categoryList.value = [];
        cat_search_result.value = [];
    }
}


const do_search_category = (text) => {
    if(text != '') {
        cat_search_result.value = []
        categoryList.value.forEach((val , index) => {
        if(val.title.indexOf(text) > -1) {
            cat_search_result.value = [...cat_search_result.value , val]
        }

        val.childs.forEach((child , key) => {
            if(child.title.indexOf(text) > -1) {
            cat_search_result.value = [...cat_search_result.value , child]
            }

            child.childs.forEach((subchild , childkey) => {
            if(subchild.title.indexOf(text) > -1) {
                cat_search_result.value = [...cat_search_result.value , subchild]
            }
            })
        })
        
        })
    }else{
        cat_search_result.value = categoryList.value
        text = ''
    }
}

const doSelectMultipleCat = (data) => {
    list2.value[data.index].category_id = list2.value[data.index].category_id == null ? [] : list2.value[data.index].category_id
    list2.value[data.index].category_title = list2.value[data.index].category_title == null ? [] : list2.value[data.index].category_title

    if(list2.value[data.index].category_id.includes(data.id)) {
        list2.value[data.index].category_id.splice(list2.value[data.index].category_id.indexOf(data.id) , 1)
        list2.value[data.index].category_title.splice(list2.value[data.index].category_title.indexOf(data.title) , 1)
        
        if(list2.value[data.index].category_id.length == 0) {
            list2.value[data.index].category_id = null
            list2.value[data.index].category_title = null
        }
    }else {
        list2.value[data.index].category_id.push(data.id)
        list2.value[data.index].category_title.push(data.title)
        
    }
}

</script>
