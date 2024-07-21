<template>
    <div class="col-span-3 bg-gray-100 w-full h-[600px]">
        <draggable
            class="dragArea list-group w-full h-full"
            :list="list2"
            group="myitems"
            @change="log"
            item-key="id"
        >
            <template #item="{ element }">
                <div class="list-group-item">
                    {{ element.name }}
                </div>
            </template>
        </draggable>
    </div>
</template>

<script setup>
import {ref} from 'vue'
import draggable from "vuedraggable";

const list2 = ref([])

const log = (evt) => {
    console.log(list2.value)
    console.log(evt);
//    this.selectedItem = event.item;
}
</script>