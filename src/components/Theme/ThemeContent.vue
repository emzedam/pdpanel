<template>
  <div class="col-span-3 p-4 bg-gray-100 rounded-lg w-full h-[600px]">
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
                <span
                  class="transform transition-transform"
                  :class="{ 'rotate-180': activeIndex === index }"
                >
                  &#9660;
                </span>
              </button>
              <div v-if="activeIndex === index" class="p-4">
                <div v-if="element.tools.hasCategoryItem">
                    <label for="category"> انتخاب دسته بندی : </label>
                    <select v-model="element.category" id="category" class="w-full mt-2 rounded-lg border border-gray-200 cursor-pointer">
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                    </select>
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
import { ref } from "vue";
import draggable from "vuedraggable";

const activeIndex = ref(null);
const list2 = ref([]);

const log = (evt) => {
  console.log(list2.value);
  console.log(evt);
  //    this.selectedItem = event.item;
};

const toggleAccordion = (index) => {
  if (activeIndex.value === index) {
    activeIndex.value = null;
  } else {
    activeIndex.value = index;
  }
};
</script>
