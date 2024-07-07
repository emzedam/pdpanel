<template>
    <div class="pt-24 p-4 block">
      <EditMostanad 
      v-if="mostanadInfo != null"
      :mostanadInfo="mostanadInfo"
      />
    </div>
</template>

<script setup>
import EditMostanad from "@/components/Mostanad/EditMostanad.vue";
import {ref , onMounted} from 'vue'
import {useRoute , useRouter} from 'vue-router'
import {useStore} from 'vuex'

const route = useRoute()
const router = useRouter()
const store = useStore()
const mostanadInfo = ref(null)

onMounted(async () => {
  if(route.params.id) {
    await get_mostanad_detail()
  }else{
    router.push("/mostanadat")
  }
})

const get_mostanad_detail = async () => {
  const id = route.params.id
  const result = await store.dispatch("get_mostanad_detail" , {id: id})
  if(result.status == 200){
    mostanadInfo.value = result.result
  }
}

</script>
