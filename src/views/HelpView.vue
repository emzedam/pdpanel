<template>


  <div class="pt-24 p-4 block">
    <Help
      :donations="donations"
    />
  </div>



</template>

<script setup>
import {ref , onMounted} from 'vue'
import Help from '../components/Helps/helps.vue'
import {useStore} from 'vuex'

const store = useStore()
const donations = ref([])

onMounted(async() => {
  await get_donations_list()
})

const get_donations_list = async () => {
  const result = await store.dispatch("get_donations_list")
  if(result.status == 200) {
    donations.value = result.result
  }
}
</script>

