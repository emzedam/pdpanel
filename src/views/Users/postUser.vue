<template>
    <div class="lg:pt-24 px-4">
        <div class="grid lg:grid-cols-12 gap-4">
            <div
              class="border border-gray-200 rounded-lg card mt-2 lg:col-span-9 col-span-12"
              >
              <div v-if="postData != null">
                <div class="p-4">
                  <div class="flex items-center justify-between">
                    <label>تصویر شاخص نوشته :</label>
                    <div>
                      <div class="text-green-500 bg-green-500/10 px-5 py-2 rounded-lg" v-if="postData.status == 1">تایید شده</div>
                      <div class="text-orange-500 bg-orange-500/10 px-5 py-2 rounded-lg" v-if="postData.status == 0">در انتظار تایید </div>
                      <div class="text-red-500 bg-red-500/10 px-5 py-2 rounded-lg" v-if="postData.status == 2">رد شده</div>
                    </div>
                  </div>
                  <div class="bg-gray-100 p-4 mt-3 rounded-lg">
                    <a target="_blank" :href="`${globalUrl}storage/posts/${postData.image}`">
                      <img class="rounded-lg max-w-sm max-h-sm" :src="`${globalUrl}storage/posts/${postData.image}`" />
                    </a>
                  </div>
                </div>
                <div class="p-4">
                  <label class="font-bold">عنوان نوشته :</label>
                  <p class="bg-gray-100 p-3 mt-2 rounded-lg">{{ postData.title }}</p>
                </div>
                ‌<div class="p-4 pt-0">
                  <label class="font-bold"> محتوای متنی :</label>
                  <div class="border p-4 mt-3 rounded-lg" v-html="postData.content"></div>
                </div>
                <div class="p-4">
                  <label class="font-bold"> تگ های نوشته :</label>
                  <ul v-if="postData.tags.length != 0" class="flex mt-3">
                    <li 
                    class="mr-2 bg-gray-100 p-3 rounded-lg underline"
                    v-for="(tag , index) in postData.tags" :key="tag.id">#{{tag.name}}</li>
                  </ul>
                </div>
              </div>
              <div v-else class="p-4">در حال بارگذاری ...</div>
            </div>
            <aside class="lg:col-span-3 col-span-12">
              <div class="sticky top-24">
              <div class="mt-2 border border-gray-200  rounded-lg card">
                <div class="flex items-center w-full p-4 border-b border-gray-200">
                  <i class="pl-2 text-2xl text-hamian fa-duotone fa-ballot-check"></i
                  ><span>تایید نوشته</span>
                </div>
                <div class="block p-4">
                  <button
                    type="button"
                    @click="verifyPost()"
                    class="box-border relative z-0 inline-flex items-center justify-center w-full p-3 px-8 py-3 my-2 overflow-hidden font-medium text-white transition-all duration-300 bg-green-500 rounded-md cursor-pointer group ease focus:outline-none"
                  >
                    <span
                      class="absolute bottom-0 right-0 w-8 h-20 -mb-8 -mr-5 transition-all duration-300 ease-out transform rotate-45 translate-x-1 bg-white opacity-10 group-hover:translate-x-0"
                    ></span
                    ><span
                      class="absolute top-0 left-0 w-20 h-8 -mt-1 -ml-12 transition-all duration-300 ease-out transform -rotate-45 -translate-x-1 bg-white opacity-10 group-hover:translate-x-0"
                    ></span
                    ><span
                      class="relative z-20 flex items-center justify-center w-full text-center"
                      ><i
                        class="pl-2 text-2xl text-white fa-duotone fa-arrow-up-from-bracket"
                      ></i
                      >
                        <span class="w-full">
                          <div class="lds-ring" v-if="loading == true"><div></div><div></div><div></div><div></div></div>
                          <span v-else>تایید نوشته</span>
                        </span>
                      </span>
                  </button>
                  <button
                    type="button"
                    @click="rejectPost()"
                    class="box-border relative z-0 inline-flex items-center justify-center w-full p-3 px-8 py-3 my-2 overflow-hidden font-medium text-red-500 transition-all duration-300 bg-red-500/10 rounded-md cursor-pointer group ease focus:outline-none"
                  >
                    <span
                      class="absolute bottom-0 right-0 w-8 h-20 -mb-8 -mr-5 transition-all duration-300 ease-out transform rotate-45 translate-x-1 bg-white opacity-10 group-hover:translate-x-0"
                    ></span
                    ><span
                      class="absolute top-0 left-0 w-20 h-8 -mt-1 -ml-12 transition-all duration-300 ease-out transform -rotate-45 -translate-x-1 bg-white opacity-10 group-hover:translate-x-0"
                    ></span
                    ><span
                      class="relative z-20 flex items-center justify-center w-full text-center"
                      ><i class="pl-2 text-2xl text-hamaian fa-duotone fa-close"></i
                      >
                        <span class="w-full">
                          <div class="lds-ring" v-if="rejectLoading == true"><div></div><div></div><div></div><div></div></div>
                          <span v-else>رد نوشته</span>
                        </span>
                      </span
                    >
                  </button>
                </div>
              </div>

              <div class="mt-2 border border-gray-200  rounded-lg card p-3">
                <label for="rejection_reason" class="font-bold"> در صورت تایید نبودن نوشته دلیل رد را وارد کنید :</label>
                <div>
                    <textarea v-model="rejectText" id="rejection_reason" class="rounded-lg w-full border-gray-300 mt-3"></textarea>
                </div>
              </div>
              </div>
        
            </aside>
          </div>
    </div>
</template>

<script setup>
import {ref , onMounted} from 'vue'
import {useStore} from 'vuex'
import {useRoute , useRouter} from 'vue-router'
import Swal from "sweetalert2";

const route = useRoute()
const router = useRouter()
const store = useStore()
const loading = ref(false)
const rejectLoading = ref(false)
const postData = ref(null)
const rejectText = ref("")

onMounted(() => {
    if(!route.params.id) {
        router.push("/")
    }
    getUserPost()
})

const verifyPost = async () => {
  loading.value = true
  const result = await store.dispatch("do_verify_post" , {
    post_id: postData.value.id
  })
  
  if(result.status == 200) {
    loading.value = false
    postData.value.status = 1
    rejectText.value = ""
    showSwal("تاییدیه" , result.message , "success")
  }
}

const getUserPost = async () => {
    const result = await store.dispatch("get_user_post" , {
        post_id: route.params.id
    })

    if(result.status == 200) {
        postData.value = result.result
        if(result.result.rejection != null) {
          rejectText.value = result.result.rejection
        }
    }
}

const rejectPost = async () => {
  if(rejectText.value != "") {
    rejectLoading.value = true
    const result = await store.dispatch("reject_user_post" , {
        post_id: route.params.id,
        reject_text: rejectText.value
    })

    if(result.status == 200) {
      rejectLoading.value = false
      postData.value.status = 2
      showSwal("تاییدیه" , result.message , "success")
    }
  }else {
    showSwal("هشدار" , "لطفا دلیل رد این نوشته را جهت اطلاع به کاربر وارد کنید" , "warning");
  }
}

const showSwal = (title, text, icon) => {
  Swal.fire({
    title: title,
    text: text,
    icon: icon,
  });
}
</script>