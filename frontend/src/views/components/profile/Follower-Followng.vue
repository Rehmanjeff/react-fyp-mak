<template>
  <div class="flex flex-row w-full gap-5 mb-4 text-sm text-gray-500">
    <div class="w-1/2" @click="tabChange('follower')">
      <RouterLink :to="{ name: 'Follower' }">
        <div
          @click="activeTab = 'follower'"
          :class="[
            activeTab == 'follower'
              ? 'border-b-2 border-theme-blue text-center'
              : 'hover:border-b-2 hover:border-theme-blue text-center',
          ]"
        >
          Followers
        </div>
      </RouterLink>
    </div>
    <div class="w-1/2 cursor-pointer" @click="tabChange('following')">
      <RouterLink :to="{ name: 'Following' }">
        <div
          @click="activeTab = 'following'"
          :class="[
            activeTab == 'following'
              ? 'border-b-2 border-theme-blue text-center'
              : 'hover:border-b-2 hover:border-theme-blue text-center',
          ]"
        >
          Following
        </div>
      </RouterLink>
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

function tabChange(value) {
  activeTab.value = value
  console.log(activeTab.value)
}
</script>
