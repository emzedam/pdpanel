<template>

  <div class="pt-24 p-4 block">
    <Detail 
      v-if="donation != null"
      :donation="donation"
    />
  </div>

</template>

<script setup>
import {ref , onMounted} from 'vue'
import {useRoute,useRouter} from 'vue-router'
import Detail from '../components/Helps/detail.vue'
import {useStore} from 'vuex'

const route = useRoute()
const router = useRouter()
const store = useStore()
const donation = ref(null)

onMounted(async() => {
  if(route.params.id) {
    await get_donation()
  }else{
    router.push("/help")
  }
})

const get_donation = async () => {
  const result = await store.dispatch("get_donation" , {id: route.params.id})
  if(result.status == 200) {
    donation.value = result.result
  }
}
</script>