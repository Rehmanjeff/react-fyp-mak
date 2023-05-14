<template>
  
  <Main v-if="isLoggedIn">
    <!-- Left Bar -->
    <template v-slot:leftbar>
      <LeftBar @logout="checkLogin" />
    </template>

    <!-- Route dynamic content -->
    <router-view />

    <!-- Right Bar -->
    <template v-slot:rightbar>
      <RightBar />
    </template>
  </Main>

  <CreateAccount v-else-if="$route.name == 'CreateAccount'" />

  <ForgetPassword v-else-if="$route.name == 'ForgetPassword'" />

  <Login @response="checkLogin" v-else />

</template>

<script setup>
import Login from "@/views/pages/Login.vue"
import Main from "@/views/layouts/Main.vue"
import RightBar from "@/views/components/RightBar.vue"
import LeftBar from "@/views/components/LeftBar.vue"
import CreateAccount from "@/views/pages/CreateAccount.vue"
import ForgetPassword from "@/views/pages/ForgetPassword.vue"
import { ref } from "vue"

const token = ref(localStorage.getItem('dynoAuthToken'))
const isLoggedIn = ref(token.value !== null && token.value != '' ? true : false)

const checkLogin = () => {
  
  isLoggedIn.value = localStorage.getItem('dynoAuthToken')
}

</script>
