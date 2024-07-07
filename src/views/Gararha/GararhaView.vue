<script setup>
</script>

<template>
    <div class="pt-24 p-4 block">
      <Gararha 
      v-if="appointInformation != null"
      :appointInformation="appointInformation"
      @removeAppointmentList="(result) => splice_list_of_appointment(result.ids)"
      @changeList="(list) => changeList(list)"
      />
    </div>
</template>


<script setup>
import {ref , onMounted} from 'vue'
import {useStore} from 'vuex'
import Gararha from "@/components/Gararha/gararha.vue";

const store = useStore()
const appointInformation = ref(null)

onMounted(async () => {
  await get_appointment_list()
})

const get_appointment_list = async () => {
  const result = await store.dispatch("get_appointment_list")
  if(result.status == 200){
    appointInformation.value = result.result
  }
}

const splice_list_of_appointment = (ids) => {
  const result = appointInformation.value.appointmentList.filter(({ id }) => !ids.includes(id));
  appointInformation.value.appointmentList = result
}

const changeList = (data) => {
  appointInformation.value.appointmentList = data
}

</script>