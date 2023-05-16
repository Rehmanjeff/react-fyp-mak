<template>
  <div>
    <div class="flex flex-col px-8 py-4">
      <div v-if="successMessage" class="flex p-2 mb-2 text-center text-white bg-green-400 rounded">
        {{ successMessage }}
      </div>
      <label for="" class="mb-1">First Name</label>

      <input type="text" v-model="firstname" placeholder="Firstname" class="w-full px-4 py-2 border rounded border-grey-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
    </div>
    <div class="flex flex-col px-8 py-4">
      <label for="" class="mb-1">Last Name</label>
      <input type="text" v-model="lastname" placeholder="Lastname" class="w-full px-4 py-2 border rounded border-grey-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
    </div>
    <div class="flex flex-col px-8 py-4">
      <label for="" class="mb-1">Phone number</label>
      <input type="text" v-model="phonenumber" placeholder="Phone number" class="w-full px-4 py-2 border rounded border-grey-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
    </div>
    <div class="px-8 py-4">
      <button @click="updateUser" type="button" :class="!loading ? 'hover:bg-blue-600' : 'cursor-not-allowed'" class="w-full px-4 py-2 text-sm font-semibold text-blue-500 transition-colors duration-200 bg-white border border-blue-500 hover:bg-blue-500 hover:text-white rounded-3xl">
        Confirm
      </button>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue"
import User from "@/composables/User.js"

const { update, account } = User()
const firstname = ref("")
const lastname = ref("")
const phonenumber = ref("")
const loading = ref(false)
const successMessage = ref("")

const token = localStorage.getItem("dynoAuthToken")

const updateUser = () => {

  if (!loading.value) {

    loading.value = true
    let data = {
      first_name: firstname.value,
      last_name: lastname.value,
      phone_number: phonenumber.value,
    }

    update(token, data).then((response) => {

      loading.value = false
      successMessage.value = "User information updated successfully"
    })
  }
}

const getUserdata = () => {

  if (!loading.value) {

    loading.value = true
    account(token).then((response) => {

      loading.value = false
      if (response.status === 200) {
        
        const userData = response.data
        firstname.value = userData.first_name
        lastname.value = userData.last_name
        phonenumber.value = userData.phone_number
      }
    })
  }
}

onMounted(() => {

  getUserdata()
})
</script>