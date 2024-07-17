<template>
    <div class="pt-24 p-4 block">
      <EditPosts
        v-if="newsInfo != null"
        :newsInfo="newsInfo"
      />
    </div>
</template>

<script setup>
import EditPosts from "@/components/Posts/EditPosts.vue";
import {ref , onMounted} from 'vue'
import {useRoute , useRouter} from 'vue-router'
import {useStore} from 'vuex'

const route    = useRoute()
const router   = useRouter()
const store    = useStore()
const newsInfo = ref(null)

onMounted(async () => {
  if(route.params.id) {
    await get_news_detail()
  }else{
    router.push("/posts")
  }
})

const get_news_detail = async () => {
  const id = route.params.id
  const result = await store.dispatch("get_news_detail" , {id: id})
  if(result.status == 200){
    newsInfo.value = result.result
  }
}

</script>
