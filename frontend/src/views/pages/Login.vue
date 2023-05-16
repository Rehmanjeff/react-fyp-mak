<!-- Login form component -->
<template>
    <div class="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div class="w-full max-w-md overflow-hidden bg-white rounded-lg shadow-lg">
        <div class="p-8">
          <div class="flex items-center justify-center mb-8">
            <img src="/assets/images/logo.png" class="w-8 h-6" alt="" />
          </div>
          <h2 class="mb-4 text-2xl font-bold text-gray-800">Log In</h2>
          <div>
            <input id="email" type="email" v-model="email" placeholder="Email" class="w-full px-4 py-2 border rounded border-grey-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" required />
          </div>
          <div class="mt-5">
            <input id="password" type="password" placeholder="Password" v-model="password" class="w-full px-4 py-2 border rounded border-grey-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" required />
          </div>
          <div class="mt-10">
            <button type="button" @click="proceedLogin" class="w-full px-4 py-2 mb-4 text-sm font-semibold text-white transition-colors duration-200 bg-blue-500 border rounded-3xl hover:bg-blue-600">
              Log In
            </button>
            <RouterLink :to="{ name: 'CreateAccount' }">
              <button type="button" class="w-full px-4 py-2 text-sm font-semibold text-blue-500 transition-colors duration-200 bg-white border border-blue-500 rounded-3xl">
                Create an account
              </button>
            </RouterLink>
            <div class="flex ml-2">
              <RouterLink :to="{ name: 'ForgetPassword' }">
                <p class="mt-2 text-xs text-blue-500 cursor-pointer hover:underline">
                  Forget password ?
                </p>
              </RouterLink>
            </div>
            <div v-if="error" class="flex ml-2">
              <div class="text-sm text-theme-red mt-5 font-semibold">{{ error }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from "vue"
  import Auth from "@/composables/Auth.js"
  
  const emit = defineEmits(["response"])
  const error = ref(false)
  
  const email = ref("")
  const password = ref("")
  const { login } = Auth()
  
  const proceedLogin = () => {
    if (email.value != "" && password.value != "") {
      login(email.value, password.value).then((data) => {

        const response = JSON.parse(JSON.stringify(data))

        if(response.message){

          error.value = response.message
          emit("response", response.message)
        }else if(response.access && response.refresh && response.access){

          localStorage.setItem("dynoAuthToken", response.access);
          localStorage.setItem("dynoAuthRefreshToken", response.refresh);
          localStorage.setItem("username", response.username);
          console.log(localStorage.getItem('username'))
  
          emit("response")
        }else{

          console.log(response)
        }
      })
    }
  }
  </script>
  