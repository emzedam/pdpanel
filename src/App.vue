
<template>
  <component :is="layout">
    <router-view v-slot="{ Component, route }">
      <component :is="Component" />
    </router-view>
  </component>
</template>
<script setup>
import {computed} from 'vue'
import {useRoute} from 'vue-router'
import Pusher from 'pusher-js';
import {useStore} from 'vuex'

const store = useStore()
const default_layout = "default";
const route = useRoute()

const layout = computed(() => {
  return (route.meta.layout || default_layout) + "-layout";
})

var pusher = new Pusher('9644a3ae6a42555d6252', {
  cluster: 'mt1'
});

var channel = pusher.subscribe('releasePostChannel');
channel.bind('releasePostEvent', function(data) {
  store.commit("add_notification" , data)
});


</script>

<style>

.ck-editor__editable {
  height: 250px;
}
</style>
