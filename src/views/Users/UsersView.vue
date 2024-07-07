<template>
    <div class="pt-24 p-4 block">
      <Users 
      v-if="usersInformation != null"
      :usersInformation="usersInformation"
      @removeUsersList="(result) => splice_list_of_users(result.ids)"
      />
    </div>
</template>

<script setup>
import {ref , onMounted} from 'vue'
import {useStore} from 'vuex'
import Users from "@/components/Users/Users.vue";

const store = useStore()
const usersInformation = ref(null)

onMounted(async () => {
  await get_users_list()
})

const get_users_list = async () => {
  const result = await store.dispatch("get_users_list")
  if(result.status == 200){
    usersInformation.value = result.result
  }
}

const splice_list_of_users = (ids) => {
  const result = usersInformation.value.usersList.filter(({ id }) => !ids.includes(id));
  usersInformation.value.usersList = result
}

</script>
