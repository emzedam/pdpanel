<template>
    <div class="pt-24 p-4 block">
        <EditCategory
            v-if="catDetail != null && categoryList.length != 0"
            :catDetail="catDetail"
            :categoryList="categoryList"
        />
    </div>

  </template>
  
  <script setup>
  import EditCategory from "@/components/Category/EditCategory.vue";
  
  import { ref, onMounted } from "vue";
  import store from "@/store";
  import { useRoute } from "vue-router";
  
  const catDetail = ref(null);
  const categoryList = ref([]);
  const route = useRoute();
  
  onMounted(async () => {
    await get_category_detail(route.params.id);
    await getCategories();
  });
  
  const get_category_detail = async (id) => {
    const fetch_cat_detail = await store.dispatch("get_category_by_id", { id: id });
    if (fetch_cat_detail.statusCode == 200 && fetch_cat_detail.statusResult) {
      catDetail.value = fetch_cat_detail.statusResult;
    }
  };
  
  const getCategories = async () => {
    const result = await store.dispatch("get_categories_list");
    if (result.status == 200) {
        categoryList.value = result.result;
    } else {
        categoryList.value = [];
    }
  };
  </script>
  