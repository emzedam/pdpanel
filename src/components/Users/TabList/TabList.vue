<template>
  <ul
    class="lg:flex lg:flex-wrap gap-2 mt-4 mb-8 nav nav-pills lg:flex-row sm:grid sm:grid-cols-2 xs:grid xs:grid-cols-1 w-full"
  >
    <li class="nav-item">
      <a
        class="w-full inline-flex items-center justify-center p-2 px-6 leading-[1.5] text-gray-400 border rounded-md nav-link"
        @click.prevent="selectTab(1)"
        :class="activateTab == 1 ? 'text-white bg-orange-500' : ''"
        href="javascript:void(0);"
        ><i class="ml-1 fa fa-user-check text-[1.125rem ]"></i><span>حساب</span></a
      >
    </li>

    <li class="nav-item">
      <a
        @click.prevent="selectTab(2)"
        :class="activateTab == 2 ? 'text-white bg-orange-500' : ''"
        class="w-full inline-flex items-center justify-center p-2 px-6 leading-[1.5] text-gray-400 border rounded-md focus:border-orange-500"
        href="app-user-view-security.html"
        ><i class="ml-1 fa fa-lock text-[1.125rem ]"></i><span>امنیت</span></a
      >
    </li>
   <li class="nav-item hidden">
      <a
        @click.prevent="selectTab(3)"
        :class="activateTab == 3 ? 'text-white bg-orange-500' : ''"
        class="w-full inline-flex items-center justify-center p-2 px-6 leading-[1.5] text-gray-400 border rounded-md focus:border-orange-500"
        href="app-user-view-security.html"
        ><i class="ml-1 fa fa-user text-[1.125rem ]"></i><span>احراز هویت</span></a
      >
    </li>

       <li class="nav-item hidden">
      <a
        @click.prevent="selectTab(4)"
        :class="activateTab == 4 ? 'text-white bg-orange-500' : ''"
        class="w-full inline-flex items-center justify-center p-2 px-6 leading-[1.5] text-gray-400 border rounded-md focus:border-orange-500"
        href="app-user-view-security.html"
        ><i class="ml-1 fa fa-dollar text-[1.125rem ]"></i><span>تراکنش ها</span></a
      >
    </li>


 
  </ul>
</template>

<script>
export default {
  props: {
    activateTab: {
      type: Number,
      required: true,
    },
  },
  methods: {
    selectTab(number) {
      this.$emit("set_active_tab", number);
    },
  },
};
</script>
