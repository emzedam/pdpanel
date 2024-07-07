<template>
  <div class="pt-24 p-4 block">
    <Pages 
    v-if="pagesInformation != null"
    :pagesInformation="pagesInformation"
    @removePagesList="(result) => splice_list_of_pages(result.ids)"
    />
  </div>
</template>

<script setup>
import {ref , onMounted} from 'vue'
import {useStore} from 'vuex'
import Pages from "@/components/Pages/Pages.vue";

const store = useStore()
const pagesInformation = ref(null)

onMounted(async () => {
  await get_pages_list()
})

const get_pages_list = async () => {
  const result = await store.dispatch("get_page_list")
  if(result.status == 200){
    pagesInformation.value = result.result
  }
}


const splice_list_of_pages = (ids) => {
  const result = pagesInformation.value.pagesList.filter(({ id }) => !ids.includes(id));
  pagesInformation.value.pagesList = result
}


</script>


