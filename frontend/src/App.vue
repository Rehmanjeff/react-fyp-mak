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
import { ref, watch, onMounted } from "vue"

const token = ref(localStorage.getItem('dynoAuthToken'))
const refreshToken = ref(localStorage.getItem('dynoAuthRefreshToken'))
const isLoggedIn = ref(token.value !== null && token.value != '' ? true : false)

const checkLogin = () => {
  
  isLoggedIn.value = localStorage.getItem('dynoAuthToken')
}

async function updateToken () {
 
  if(isLoggedIn){

    let response = await fetch('http://127.0.0.1:8000/accounts/api/token/refresh/', {
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify({'refresh':refreshToken.value})
    })

    let data = await response.json()
    
    if (response.status === 200){
        
      token.value = data.access
      refreshToken.value = data.refresh
    }else{
        
      token.value = false
      refreshToken.value = false
      localStorage.removeItem("dynoAuthToken")
      localStorage.removeItem("dynoAuthRefreshToken")
    }
  }
}

onMounted(() => {

  const fourMinutes = 60 * 4 * 1000
  const interval = setInterval(() => {
    
    updateToken()
  }, fourMinutes)

})

</script>
