<template>
    <div class="login">
      <slot />
    </div>
  </template>
  
  <script>
  export default {
    name: "Auth",
    mounted() {
      document.body.setAttribute("class", "font-fa");
    },
    destroyed() {
      document.body.removeAttribute("class", "");
    },
  };
  </script>
  
  <style lang="css"></style>
  