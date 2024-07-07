<template>
  <div class="pt-24 p-4 block">
    <Mostanadat 
    v-if="mostanadInformation != null"
    :mostanadInformation="mostanadInformation"
    @updateMostanad="(result) => updateStateMostanad(result)"
    @removeMostanadList="(result) => splice_list_of_mostanad(result.ids)"
    />
  </div>
</template>

<script setup>
import {ref , onMounted} from 'vue'
import {useStore} from 'vuex'
import Mostanadat from '@/components/Mostanad/Mostanadat.vue'

const store = useStore()
const mostanadInformation = ref(null)

onMounted(async () => {
  await get_mostanad_list()
})

const get_mostanad_list = async () => {
  const result = await store.dispatch("get_mostanad_list")
  if(result.status == 200){
    mostanadInformation.value = result.result
  }
}

const updateStateMostanad = (data) => {
  let getNew = mostanadInformation.value.mostanadList.filter((val , index) => {
    return val.id == data.id
  })
  getNew[0].is_special = data.state
}

const splice_list_of_mostanad = (ids) => {
  const result = mostanadInformation.value.mostanadList.filter(({ id }) => !ids.includes(id));
  mostanadInformation.value.mostanadList = result
}


</script>

