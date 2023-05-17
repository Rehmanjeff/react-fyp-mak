<template>
  <div class="fixed w-1/6 flex flex-col my-3 border-r border-theme-gray-border h-full">
    <div class="mb-4 pl-4 mt-1 w-11">
      <img src="/assets/images/logo.png" />
    </div>
    <div class="flex flex-row items-center pl-4 py-2 my-1 hover:bg-theme-gray w-fit pr-5 rounded-full" v-for="item in navigation" :key="item.id">
      <div class="mr-5">
        <img v-if="item.icon" :src="$route.name == item.name ? '/assets/images/'+item.active_icon : '/assets/images/'+item.icon" alt="{{ item.name }}" />
      </div>
      <RouterLink v-if="!item.params" class="text-xl" :class="$route.name == item.name ? 'font-semibold' : 'font-normal'" :to="{ name: item.link }">{{ item.name }}</RouterLink>
      <RouterLink v-else class="text-xl" :class="$route.name == item.name ? 'font-semibold' : 'font-normal'" :to="{ name: item.link, params: item.params }">{{ item.name }}</RouterLink>
    </div>
    <div class="my-4 pr-10">
      <div @click="open = true" class="py-3 px-2 rounded-full text-center cursor-pointer bg-theme-blue text-white font-semibold text-lg hover:bg-theme-blue-darker">Tweet</div>
    </div>
    <div v-if="userMenu" @click.stop="userMenu = true" class="fixed border rounded-lg bottom-24">
      <hr class="mt-3" />
      <div @click="proceedLogout" class="px-12 py-4 font-semibold cursor-pointer text-semibold hover:bg-gray-100">
        Log out @{{ localUsername }}
      </div>
    </div>
    <div @click.stop="userMenu = !userMenu" class="relative flex flex-row items-center px-4 py-2 mt-auto mb-10 rounded-full cursor-pointer hover:bg-theme-gray">
      <div class="mr-2">
        <img class="rounded-full" src="/assets/images/default_profile.png" alt="" />
      </div>
      <div class="flex flex-col">
        <div class="font-semibold text-md">{{ localUserFullName }}</div>
        <div class="-mt-1 text-gray-600 text-md">@{{ localUsername }}</div>
      </div>
      <div class="ml-auto">
        <img src="/assets/images/more.png" alt="" />
      </div>
    </div>
    <TweetModal :open="open" @closed="closed" />
    <Message @hide="showMessage = false" :show="showMessage" miliseconds="3000" :message="toastMessage" />
  </div>  
</template>

<script setup>
import Auth from "@/composables/Auth.js"
import TweetModal from "@/views/components/TweetModal.vue"
import { ref, onMounted } from "vue"
import Message from "@/views/components/Message.vue"

const emit = defineEmits(['logout', 'logoutError'])
const open = ref(false)
const userMenu = ref(false)
const { logout } = Auth()
const navigation = [

  { id: 1, name: "Home", icon: "home.png", active_icon: "home-active.png", link: "Home" },
  { id: 2, name: "Messages", icon: "messages.png" , active_icon: "messages-active.png", link: "Messages" },
  { id: 3, name: "Profile", icon: "profile.png" , active_icon: "profile-active.png", link: "Profile", params: { username : '' } },
  { id: 4, name: "Settings", icon: "settings.png", active_icon: "settings-active.png", link: "Settings" },

]
const token = localStorage.getItem("dynoAuthToken")
const tokenRefresh = localStorage.getItem("dynoAuthRefreshToken")
const showMessage = ref(false)
const toastMessage = ref('')
const localUserFullName = localStorage.getItem("name")
const localUsername = localStorage.getItem("username")

const proceedLogout = async () => {

  const response = await logout(token, tokenRefresh)
  if(response.status == 200){

    emit('logout')
  }else{
    
    // console.log(response.data.detail)
    // todo: refresh token expires at server and prevents user logout. forcing logout (not meant to be a solution)

    localStorage.removeItem('dynoAuthRefreshToken')
    localStorage.removeItem('dynoAuthToken')
    localStorage.removeItem('username')
    emit('logout')
  }
}

const closed = () => {

  open.value = false
  toastMessage.value = 'Tweet created successfully'
  showMessage.value = true
}

onMounted(() => {
  
  document.addEventListener("click", () => {
    userMenu.value = false
  })
})

</script>