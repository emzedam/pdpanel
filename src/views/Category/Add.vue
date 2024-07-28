<template>
  <div class="pt-24 p-4 block">
    <div class="gap-4 lg:grid lg:grid-cols-12">
      <AddCategoryForm
        @update-categories="getCategories"
        :categoryList="categoryList"
        :categorySearchList="cat_search_result"
        @search_category="(text) => do_search_category(text)"
      />
      <ListCategory
        @reload_category="reload_categories()"
        :categoryList="categoryList"
        @updateCategory="(result) => updateStateCategory(result)"
      />
    </div>
  </div>
</template>

<script>
import ListCategory from "@/components/Category/ListCategory.vue";
import AddCategoryForm from "@/components/Category/AddCategoryForm.vue";

export default {
  data() {
    return {
      categoryList: [],
      cat_search_result: [],
    };
  },
  async mounted() {
    await this.getCategories();
  },
  components: {
    ListCategory,
    AddCategoryForm,
  },
  methods: {
    do_search_category(text) {
      if (text != "") {
        this.cat_search_result = [];
        this.categoryList.forEach((val, index) => {
          if (val.title.indexOf(text) > -1) {
            this.cat_search_result = [...this.cat_search_result, val];
          }

          val.childs.forEach((child, key) => {
            if (child.title.indexOf(text) > -1) {
              this.cat_search_result = [...this.cat_search_result, child];
            }

            child.childs.forEach((subchild, childkey) => {
              if (subchild.title.indexOf(text) > -1) {
                this.cat_search_result = [...this.cat_search_result, subchild];
              }
            });
          });
        });
      } else {
        this.cat_search_result = this.categoryList;
      }
    },
    async getCategories() {
      const result = await this.$store.dispatch("get_categories_list");
      if (result.status == 200) {
        this.categoryList = result.result;
        this.cat_search_result = result.result;
      } else {
        this.categoryList = [];
        this.cat_search_result = [];
      }
    },
    async reload_categories() {
      await this.getCategories();
    },
    updateStateCategory(data) {
      let getCat = this.categoryList.filter((val, index) => {
        return val.id == data.id;
      });
      getCat[0].is_header = data.state;
    },
  },
};
</script>
