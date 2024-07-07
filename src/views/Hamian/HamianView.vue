<script setup>

</script>

<template>
    <div class="pt-24 p-4 block">
      <Hamian 
      v-if="supporterInformation != null"
      :supporterInformation="supporterInformation"
      @removeSupporterList="(result) => splice_list_of_supporters(result.ids)"
      />
    </div>
</template>

<script setup>
import {ref , onMounted} from 'vue'
import {useStore} from 'vuex'
import Hamian from "@/components/Hamian/hamian.vue";

const store = useStore()
const supporterInformation = ref(null)

onMounted(async () => {
  await get_supporters_list()
})

const get_supporters_list = async () => {
  const result = await store.dispatch("get_supporters_list")
  if(result.status == 200){
    supporterInformation.value = result.result
  }
}

const splice_list_of_supporters = (ids) => {
  const result = supporterInformation.value.supporterList.filter(({ id }) => !ids.includes(id));
  supporterInformation.value.supporterList = result
}

</script>