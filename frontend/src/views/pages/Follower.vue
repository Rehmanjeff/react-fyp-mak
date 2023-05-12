<template>
  <div>
    <FollowerFollowng />
    <div class="flex flex-col w-full">
      <div class="flex flex-row px-2 py-2 mb-4 rounded cursor-pointer hover:bg-gray-100">
        <div class="w-12 h-12 mr-2 overflow-hidden bg-gray-100 rounded-full">
          <img src="/assets/images/default_profile.png" class="w-12 h-12" alt="" />
        </div>
        <div class="flex flex-col">
          <p class="font-semibold">User</p>
          <RouterLink class="text-sm" :to="{ name: 'Profile' }">
            <p class="-mt-1 text-gray-500">@User</p>
          </RouterLink>
        </div>
      </div>
      <div class="flex flex-row px-2 py-2 mb-4 rounded cursor-pointer hover:bg-gray-100">
        <div class="w-12 h-12 mr-2 overflow-hidden bg-gray-100 rounded-full">
          <img src="/assets/images/default_profile.png" class="w-12 h-12" alt="" />
        </div>
        <div class="flex flex-col text-sm">
          <p class="font-bold">User</p>
          <RouterLink :to="{ name: 'Profile' }">
            <p class="-mt-1 text-gray-500">@User</p>
          </RouterLink>
        </div>
      </div>
    </div>
  </div>
</template>
  
<script setup>

import FollowerFollowng from "@/views/components/profile/Follower-Followng.vue"

</script>
  
  
