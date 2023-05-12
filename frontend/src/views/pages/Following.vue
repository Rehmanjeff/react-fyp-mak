<template>
  <div>
    <FollowerFollowng />
    <div class="flex flex-col w-full px-2 py-2">
      
      <div v-for="(userFollowing, index) in userFollowings" :key="index" class="flex flex-row mb-4">
        <div class="w-12 h-12 mr-2 overflow-hidden bg-gray-100 rounded-full">
          <img :src="'/assets/images/'+userFollowing.image" class="w-12 h-12" alt="" />
        </div>
        <div class="flex flex-col">
          <p class="font-semibold">{{ userFollowing.name }}</p>
          <p class="-mt-1 text-gray-500 text-sm">{{ userFollowing.username }}</p>
        </div>
        <div class="ml-auto">
          <span @mouseover="toggleText(index)" @mouseleave="toggleText(index)" class="flex px-5 py-1 ml-auto font-semibold text-center border rounded-full cursor-pointer hover:border-red-100 hover:text-red-500 hover:bg-red-100">
            {{ userFollowing.isFollowing ? 'Following': 'Unfollow' }}
          </span>
        </div>
      </div>

    </div>
  </div>
</template>

<script setup>
import { ref } from "vue"
import FollowerFollowng from "@/views/components/profile/Follower-Followng.vue"

const userFollowings = ref([
  { id: 1, name: "Spotify", username: '@spot123', image: 'default_profile.png', isFollowing: true },
  { id: 2, name: "Gelop", username: '@gglok', image: 'default_profile.png', isFollowing: true }
])

const toggleText = (index) => {
  
  userFollowings.value[index].isFollowing = !userFollowings.value[index].isFollowing
}

</script>

