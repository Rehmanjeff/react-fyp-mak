<template>
  <div class="flex flex-col my-3 border-r border-theme-gray-border h-full">
    <div class="mb-4 pl-4 mt-1 w-11">
      <img src="/assets/images/logo.png" />
    </div>
    <div class="flex flex-row items-center pl-4 py-2 my-1 hover:bg-theme-gray w-fit pr-5 rounded-full" v-for="item in navigation" :key="item.id">
      <div class="mr-5">
        <img v-if="item.icon" :src="item.is_active ? '/assets/images/'+item.active_icon : '/assets/images/'+item.icon" alt="{{ item.name }}" />
      </div>
      <RouterLink class="text-xl" :class="item.is_active ? 'font-semibold' : 'font-normal'" :to="{ name: item.link }">{{ item.name }}</RouterLink>
    </div>
    <button @click="proceedLogout">Logout</button>
    <div class="my-4 pr-10">
      <div class="py-3 px-2 rounded-full text-center cursor-pointer bg-theme-blue text-white font-semibold text-lg hover:bg-theme-blue-darker">Tweet</div>
    </div>
  </div>  
</template>

<script setup>
import axios from "axios"
import Auth from "@/composables/Auth.js"

const emit = defineEmits(['logout'])
const { logout } = Auth()
const navigation = [

  { id: 1, name: "Home", icon: "home.png", active_icon: "home-active.png", link: "Home", is_active: true },
  { id: 2, name: "Messages", icon: "messages.png" , active_icon: "messages-active.png", link: "Messages", is_active: false },
  { id: 3, name: "Profile", icon: "profile.png" , active_icon: "profile-active.png", link: "Profile", is_active: false },
  { id: 4, name: "Settings", icon: "settings.png", active_icon: false, link: "Settings", is_active: false },

];
const token = localStorage.getItem("dynoAuthToken")
const tokenRefresh = localStorage.getItem("dynoAuthRefreshToken")

const  proceedLogout = async () => {

  await logout(token, tokenRefresh)
  emit('logout')
}

</script>