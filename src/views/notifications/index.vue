<template>
    <div class="pt-24 p-4 block">
        <div
            class="w-full"
          >
            <div
              class="p-3 font-normal border-b border-gray-200 dark:border-gray-700"
            >
              <div class="relative">
                <div class="font-bold">پیام ها</div>
              </div>
            </div>
            <div
              
              class="max-h-600 overflow-y-auto scrollbars scrollbar-thin scrollbar-track-white scrollbar-thumb-slate-200"
            >
              <div v-if="notifications.length != 0">
                <router-link :to="`/users/post/${notification.post_id}`" v-for="(notification , index) in notifications" :key="index">
                  <div
                  :class="notification.read_at == null ? 'bg-gray-100' : ''"
                    class="flex flex-wrap flex-row justify-start items-center border-b border-gray-200 dark:border-gray-700 dark:bg-gray-900 dark:bg-opacity-80 dark:hover:bg-opacity-20 py-2 hover:bg-gray-100 "
                  >
                    <div class="flex-shrink max-w-full px-2 text-center">
                      <div class="relative">
                        <img
                          v-if="notification.profile == null"
                          src="/useravatar.webp"
                          class="h-12 w-12 rounded-full mx-auto"
                          alt="Daniel Esteban"
                        />
                        <img
                          v-else
                          :src="`${globalUrl}/storage/avatars/${notification.profile}`"
                          class="h-10 w-10 rounded-full mx-auto"
                          alt="Daniel Esteban"
                        />
                      </div>
                    </div>
                    <div class="flex-shrink max-w-full px-2">
                      <div class="text-sm font-bold">{{ notification.name }} </div>
                      <div class="text-gray-500 text-xs mt-1 truncate">
                        {{ notification.title }}
                      </div>
                      <div class="text-gray-500 text-xs mt-1">{{ notification.date }}</div>
                    </div>
                  </div>
                </router-link>
              </div>
              <div v-else>
                <p class="text-xs text-center pt-5 text-gray-500">در حال حاظر اعلانی وجود ندارد</p>
              </div>
            </div>

            <div @click="deleteNotifications()" class="p-3 h-12 text-center font-normal fixed bottom-0 flex justify-center items-center w-full bg-red-100 text-red-500">
              <button  class="font-bold">حذف همه پیام ها</button>
            </div>
          </div>
    </div>
</template>

<script setup>
import {ref , onMounted} from 'vue'
import {useStore} from 'vuex'
import Swal from "sweetalert2";

const store = useStore()
const notifications = ref([])
onMounted(async () => {
    const result = await store.dispatch('getDefaultNotifications' , {
        state: "all"
    })

    if(result.status == 200) {
        notifications.value = result.result
    }
})

const deleteNotifications = () => {
  if(notifications.value.length != 0) {
    Swal.fire({
      title: "هشدار",
      text: "آیا از خالی کردن لیست اعلانات مطمعن هستید؟",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#9d2c48",
      cancelButtonColor: "#555",
      cancelButtonText: "خیر",
      confirmButtonText: "بله",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const result = await store.dispatch("truncate_notifications")
        if(result.status == 200){
          showSwal("پیغام موفقیت آمیز" , result.message , "success")
          store.commit("clear_notifications")
          notifications.value = []
        }else{
          showSwal("پیغام خطا" , result.message , "error")
        }
      }else {
        document.getElementsByClassName("checkboxState")[index].checked = false
      }
    });
  }else {
    showSwal("پیغام هشدار" , "لیست اعلانات خالی میباشد" , "warning")
  }
}

const showSwal = (title , text , icon) => {
  Swal.fire({
    title: title,
    text: text,
    icon: icon
  });
}
</script>