<template>
    <div class="pt-24 p-4 block">
      <Profile 
      v-if="userInfo != null"
      :userInfo="userInfo"
      />
    </div>
</template>


<script setup>
import Profile from "@/components/Admins/Profile.vue";
import {ref , onMounted} from 'vue'
import {useRoute , useRouter} from 'vue-router'
import {useStore} from 'vuex'

const route = useRoute()
const router = useRouter()
const store = useStore()
const userInfo = ref(null)

onMounted(async () => {
if(route.params.id) {
  await get_user_detail()
}else{
  router.push("/users")
}
})

const get_user_detail = async () => {
  const id = route.params.id
  const result = await store.dispatch("get_admin_detail" , {id: id})
  if(result.status == 200){
    userInfo.value = result.result
  }
}

</script>
