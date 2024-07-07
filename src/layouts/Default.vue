<template>
  <main>
    <AsideDashboard 
      @close_navmenu_action="NavMenu = false" 
      :NavMenu="NavMenu"  
    />
    <HeaderDashboard
      :NavMenu="NavMenu"
      @open_navmenu_action="open_nav_menu()"
    />
    <div :class="NavMenu == true ? 'lg:mr-72 mr-0 transition-all ease-in': ''">
      <slot />
    </div>
  </main>
  

  </template>
  
  <script setup>
  import {ref , onMounted} from 'vue'
  import HeaderDashboard from "@/components/Header.vue";
  import AsideDashboard from "@/components/DashboardMenuItem.vue";
  const NavMenu = ref(false);
  onMounted(() => {
    if (window.innerWidth >= 1280) {
      NavMenu.value = true;
    }
  });

  const open_nav_menu = () => {
    NavMenu.value = !NavMenu.value;
  };
  </script>
  <style lang="css"></style>
  