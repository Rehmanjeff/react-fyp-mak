<!-- Login form component -->
<template>
    
    <div class="min-h-screen flex flex-col items-center justify-center bg-gray-100">
        <div class="max-w-md w-full bg-white rounded-lg shadow-lg overflow-hidden">
        <div class="p-8">
            <h2 class="text-2xl font-bold text-gray-800 mb-4">Log In</h2>
            <div>
                <label for="email" class="block text-gray-700 font-bold mb-2">Email</label>
                <input id="email" type="email" v-model="email" class="w-full border border-grey-300 rounded-lg py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" required>
            </div>
            <div class="mt-5">
                <label for="password" class="block text-gray-700 font-bold mb-2">Password</label>
                <input id="password" type="password" v-model="password" class="w-full border border-grey-300 rounded-lg py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" required>
            </div>
            <div class="mt-10">
                <button type="button" @click="proceedLogin" class="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors duration-200">Log In</button>
            </div>
        </div>
        </div>
    </div>

</template>
  
<script setup>
import { ref } from 'vue'
import Auth from '@/composables/Auth.js'

const emit = defineEmits(['response'])

const email = ref('')
const password = ref('')
const { login } = Auth()

const proceedLogin = () => {

    if(email != '' && password != ''){

        login(email.value, password.value).then((data) => {

            const response = JSON.parse(JSON.stringify(data))

            if(response.is_verified === true){

                localStorage.setItem('dynoAuthToken', response.access)
                localStorage.setItem('dynoAuthRefreshToken', response.refresh)

                emit('response')
            }
        })
    }
}

</script>
