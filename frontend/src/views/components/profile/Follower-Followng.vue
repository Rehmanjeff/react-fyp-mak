<template>
  <div class="flex flex-row w-full mb-4 text-md text-gray-500 border-b border-theme-gray-border">
    <div class="w-1/2 cursor-pointer hover:bg-theme-gray pt-2">
      <div class="flex flex-col w-fit mx-auto gap-2">
        <RouterLink :to="{ name: 'Follower', params: { username: username } }">
          <div class="font-semibold" :class="activeTab == 'follower' ? 'text-black' : 'text-theme-gray-dark'">
            Followers
          </div>
        </RouterLink>
        <div v-if="activeTab == 'follower'" class="bg-theme-blue h-1"></div>
      </div>
    </div>
    <div class="w-1/2 cursor-pointer hover:bg-theme-gray pt-2">
      <div class="flex flex-col w-fit mx-auto gap-2">
        <RouterLink :to="{ name: 'Following', params: { username: username } }">
          <div class="font-semibold" :class="activeTab == 'following' ? 'text-black' : 'text-theme-gray-dark'">
            Following
          </div>
        </RouterLink>
        <div v-if="activeTab == 'following'" class="bg-theme-blue h-1"></div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref, watch } from "vue"
import { useRoute } from "vue-router"

const activeTab = ref("")
const route = useRoute()
const username = ref(route.params.username)

watch(() => route.params.username, (newValue, oldValue) => {
  
  if(newValue !== oldValue){
    if(newValue === ''){
      
      username.value = ''
    }else{
      
      username.value = route.params.username
    }
  }
})

// If User click on follower the activetab will be according to the route name

onMounted(() => {
  if (route.name == "Following") {
    activeTab.value = "following"
  } else if (route.name == "Follower") {
    activeTab.value = "follower"
  }
})

</script>
