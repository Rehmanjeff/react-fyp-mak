<template>
  
  <Login @response="checkLogin" v-if="!isLoggedIn" />

  <Main v-else>

    <!-- Left Bar -->
    <template v-slot:leftbar>
      <LeftBar />
    </template>

    <!-- Route dynamic content -->
    <router-view />

    <!-- Right Bar -->
    <template v-slot:rightbar>
      <RightBar />
    </template>

  </Main>

</template>

<script setup>
import Login from '@/views/pages/Login.vue'
import Main from '@/views/layouts/Main.vue'
import RightBar from '@/views/components/RightBar.vue'
import LeftBar from '@/views/components/LeftBar.vue'
import { ref } from 'vue'

const token = localStorage.getItem('dynoAuthToken')
const isLoggedIn = ref(token !== null && token != '' ? true : false)

const checkLogin = () => {

  isLoggedIn.value = localStorage.getItem('dynoAuthToken')
}
</script>
