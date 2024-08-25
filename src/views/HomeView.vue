

<template>
  <div class="pt-24 p-4 block">
    <div>Home View</div>
  </div>
  
</template>
<script setup>
import Pusher from 'pusher-js';
import {onMounted} from 'vue'
import {useStore} from 'vuex'
// console.log(window)

const store = useStore()

  var pusher = new Pusher('9644a3ae6a42555d6252', {
    cluster: 'mt1'
  });

  var channel = pusher.subscribe('releasePostChannel');
  channel.bind('releasePostEvent', function(data) {
    store.commit("add_notification" , data)
  });

</script>
