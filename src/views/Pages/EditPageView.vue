<template>
  <div class="pt-24 p-4 block">
    <EditPage 
    v-if="pageInfo != null"
    :pageInfo="pageInfo"
    />
  </div>
</template>

<script setup>
import EditPage from "@/components/Pages/EditPage.vue";
import {ref , onMounted} from 'vue'
import {useRoute , useRouter} from 'vue-router'
import {useStore} from 'vuex'

const route = useRoute()
const router = useRouter()
const store = useStore()
const pageInfo = ref(null)

onMounted(async () => {
if(route.params.id) {
  await get_page_detail()
}else{
  router.push("/pages")
}
})

const get_page_detail = async () => {
  const id = route.params.id
  const result = await store.dispatch("get_page_detail" , {id: id})
  if(result.status == 200){
    pageInfo.value = result.result
  }
}

</script>
