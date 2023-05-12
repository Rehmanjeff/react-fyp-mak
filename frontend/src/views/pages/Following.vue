<template>
  <div>
    <FollowerFollowng />
    <div class="flex flex-col w-full">
      <div class="flex flex-row mb-4">
        <div class="w-12 h-12 mr-2 overflow-hidden bg-gray-100 rounded-full">
          <img
            src="/assets/images/default_profile.png"
            class="w-12 h-12"
            alt=""
          />
        </div>
        <div class="flex flex-col text-sm">
          <p class="font-bold">User</p>
          <p class="-mt-1 text-gray-500">@User</p>
        </div>
        <div class="ml-auto">
          <span
            @mouseover="isHovering = true"
            @mouseout="isHovering = false"
            class="flex px-5 py-1 ml-auto text-xs font-semibold text-center border rounded-full cursor-pointer hover:border-red-100 hover:text-red-500 hover:bg-red-100"
          >
            {{ isHovering ? "Unfollow" : "Following" }}
          </span>
        </div>
      </div>
      <div class="flex flex-row mb-4">
        <div class="w-12 h-12 mr-2 overflow-hidden bg-gray-100 rounded-full">
          <img
            src="/assets/images/default_profile.png"
            class="w-12 h-12"
            alt=""
          />
        </div>
        <div class="flex flex-col text-sm">
          <p class="font-bold">User</p>
          <p class="-mt-1 text-gray-500">@User</p>
        </div>
        <div class="ml-auto">
          <span
            @mouseover="isFollow = true"
            @mouseout="isFollow = false"
            class="flex px-5 py-1 ml-auto text-xs font-semibold text-center border rounded-full cursor-pointer hover:border-red-100 hover:text-red-500 hover:bg-red-100"
          >
            {{ isFollow ? "Unfollow" : "Following" }}
          </span>
        </div>
      </div>
      <div class="flex flex-row mb-2">
        <div class="w-12 h-12 mr-2 overflow-hidden bg-gray-100 rounded-full">
          <img
            src="/assets/images/default_profile.png"
            class="w-12 h-12"
            alt=""
          />
        </div>
        <div class="flex flex-col text-sm">
          <p class="font-bold">User</p>
          <p class="-mt-1 text-gray-500">@User</p>
        </div>
        <div class="ml-auto">
          <span
            @mouseover="is = true"
            @mouseout="is = false"
            class="flex px-5 py-1 ml-auto text-xs font-semibold text-center border rounded-full cursor-pointer hover:border-red-100 hover:text-red-500 hover:bg-red-100"
          >
            {{ is ? "Unfollow" : "Following" }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue"
import FollowerFollowng from "@/views/components/profile/Follower-Followng.vue"

const isHovering = ref(false)
const isFollow = ref(false)
const is = ref(false)
</script>

