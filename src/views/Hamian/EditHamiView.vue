<template>
    <div class="pt-24 p-4 block">
      <EditHami 
        v-if="hamiInfo != null"
        :hamiInfo="hamiInfo"
      />
    </div>
</template>

<script setup>
import EditHami from "@/components/Hamian/EditHami.vue";
import {ref , onMounted} from 'vue'
import {useRoute , useRouter} from 'vue-router'
import {useStore} from 'vuex'

const route = useRoute()
const router = useRouter()
const store = useStore()
const hamiInfo = ref(null)

onMounted(async () => {
if(route.params.id) {
  await get_supporter_detail()
}else{
  router.push("/hamian")
}
})

const get_supporter_detail = async () => {
  const id = route.params.id
  const result = await store.dispatch("get_supporter_detail" , {id: id})
  if(result.status == 200){
    hamiInfo.value = result.result
    console.log(hamiInfo.value)
  }
}

</script>

