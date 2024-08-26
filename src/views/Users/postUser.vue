<template>
    <div class="lg:pt-24 px-4">
        <div class="grid lg:grid-cols-12 gap-4">
            <div
              class="border border-gray-200 rounded-lg card mt-2 lg:col-span-9 col-span-12"
            >
              test
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
                      ><span class="w-full">
                        <div class="lds-ring" v-if="loading == true"><div></div><div></div><div></div><div></div></div>
                        <span v-else>تایید نوشته</span>
                      </span></span
                    >
                  </button>
                  <button
                    type="button"
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
                      ><span class="w-full">رد نوشته</span></span
                    >
                  </button>
                </div>
              </div>

              <div class="mt-2 border border-gray-200  rounded-lg card p-3">
                <label for="rejection_reason"> در صورت تایید نبودن نوشته دلیل رد را وارد کنید</label>
                <div>
                    <textarea id="rejection_reason" class="w-full border-gray-300 mt-3"></textarea>
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

const route = useRoute()
const router = useRouter()
const store = useStore()
const loading = ref(false)
const postData = ref(null)

onMounted(() => {
    if(!route.params.id) {
        router.push("/")
    }

    getUserPost()

})

const verifyPost = () => {
    console.log("test")
}

const getUserPost = async () => {
    const result = await store.dispatch("get_user_post" , {
        post_id: route.params.id
    })

    if(result.status == 200) {
        postData.value = result.result
        console.log(result.result)
    }
}
</script>