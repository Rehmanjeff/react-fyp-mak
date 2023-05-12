<template>
  <div class="flex flex-row w-full mb-4 text-md text-gray-500 border-b border-theme-gray-border">
    <div class="w-1/2 cursor-pointer hover:bg-theme-gray pt-2">
      <div class="flex flex-col w-fit mx-auto gap-2">
        <RouterLink :to="{ name: 'Follower' }">
          <div class="font-semibold" :class="activeTab == 'follower' ? 'text-black' : 'text-theme-gray-dark'">
            Follower
          </div>
        </RouterLink>
        <div v-if="activeTab == 'follower'" class="bg-theme-blue h-1"></div>
      </div>
    </div>
    <div class="w-1/2 cursor-pointer hover:bg-theme-gray pt-2">
      <div class="flex flex-col w-fit mx-auto gap-2">
        <RouterLink :to="{ name: 'Following' }">
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
import { onMounted, ref } from "vue"
import { useRoute } from "vue-router"

const activeTab = ref("")
const route = useRoute()

// If User click on follower the activetab will be according to the route name

onMounted(() => {
  if (route.name == "Following") {
    activeTab.value = "following"
  } else if (route.name == "Follower") {
    activeTab.value = "follower"
  }
})

</script>
