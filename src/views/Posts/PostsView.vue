<template>
  <div class="pt-24 p-4 block">
    <Posts 
    v-if="newsInformation != null"
    :newsInformation="newsInformation"
    @updateNews="(result) => updateStateNews(result)"
    @removeNewsList="(result) => splice_list_of_news(result.ids)"
    />
  </div>
</template>

<script setup>
import {ref , onMounted} from 'vue'
import {useStore} from 'vuex'
import Posts from '@/components/Posts/Posts.vue'

const store = useStore()
const newsInformation = ref(null)

onMounted(async () => {
  await get_news_list()
})

const get_news_list = async () => {
  const result = await store.dispatch("get_news_list")
  if(result.status == 200){
    newsInformation.value = result.result
  }
}

const updateStateNews = (data) => {
  let getNew = newsInformation.value.newsList.filter((val , index) => {
    return val.id == data.id
  })
  getNew[0].is_special = data.state
}

const splice_list_of_news = (ids) => {
  const result = newsInformation.value.newsList.filter(({ id }) => !ids.includes(id));
  newsInformation.value.newsList = result
}


</script>

