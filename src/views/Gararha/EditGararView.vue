<template>
    <div class="pt-24 p-4 block">
      <EditGarar 
      v-if="appointmentInfo != null"
      :appointmentInfo="appointmentInfo"
      />
    </div>
</template>
<script setup>
import EditGarar from "@/components/Gararha/EditGarar.vue";
import {ref , onMounted} from 'vue'
import {useRoute , useRouter} from 'vue-router'
import {useStore} from 'vuex'

const route = useRoute()
const router = useRouter()
const store = useStore()
const appointmentInfo = ref(null)

onMounted(async () => {
  if(route.params.id) {
    await get_appointment_detail()
  }else{
    router.push("/gararha")
  }
})

const get_appointment_detail = async () => {
  const id = route.params.id
  const result = await store.dispatch("get_appointment_detail" , {id: id})
  if(result.status == 200){
    appointmentInfo.value = result.result
  }
}

</script>