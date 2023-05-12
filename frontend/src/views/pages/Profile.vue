<template>
  <div>
    <div class="flex flex-row items-center">
      <img src="/assets/images/arrow.png" class="w-4 h-4" alt="" />
      <div class="flex flex-col ml-4">
        <span class="text-lg font-semibold">User</span>
        <span class="-mt-1 text-xs text-gray-500">0 Tweets</span>
      </div>
    </div>
    <div class="flex justify-center p-16 text-center bg-gray-300">
      <span class="">cover</span>
    </div>
    <div class="flex w-full pl-2">
      <div
        class="w-24 h-24 overflow-hidden p-4 rounded-full mt-[-40px] border-4 border-white bg-gray-300"
      >
        <img
          src="/assets/images/roundprofile.png"
          class="w-auto h-auto mt-1"
          alt=""
        />
      </div>
    </div>
    <div class="flex flex-col">
      <span class="font-bold">User</span>
      <span class="-mt-1 text-sm text-gray-500">@username</span>
    </div>
    <div class="flex flex-row w-full mt-2 text-sm">
      <div class="flex w-1/2">
        <img src="/assets/images/date.png" class="w-4 h-5 mr-2" alt="" />
        <span class="text-gray-500">Born December 2, 2004</span>
      </div>
      <div class="flex w-1/2">
        <img src="/assets/images/calender.png" class="w-4 h-5 mr-2" alt="" />
        <span class="text-gray-500">Join August, 2019</span>
      </div>
    </div>
    <div class="flex flex-row w-full mt-2">
      <div class="flex w-1/4 gap-2 mt-4 text-xs text-gray-500">
        <RouterLink :to="{ name: 'Following' }">
          <span class="mr-1 font-bold text-black">12</span>
          <span>Following</span>
        </RouterLink>
      </div>
      <div class="flex w-1/4 gap-2 mt-4 text-xs text-gray-500">
        <RouterLink :to="{ name: 'Follower' }">
          <span class="mr-1 font-bold text-black">2</span>
          <span>Followers</span>
        </RouterLink>
      </div>
    </div>
    <div class="flex flex-row w-full gap-2 mt-8 text-xs cursor-pointer">
      <div @click="tabChange('tweets')" class="w-1/4 text-center">
        <div
          @click="activeTab = 'tweets'"
          :class="[
            activeTab == 'tweets'
              ? 'border-b-2 border-theme-blue'
              : 'hover:border-b-2 hover:border-theme-blue',
          ]"
        >
          Tweets
        </div>
      </div>

      <div @click="tabChange('tweets&replies')" class="w-1/4 text-center">
        <div
          @click="activeTab = 'tweets&replies'"
          :class="[
            activeTab == 'tweets&replies'
              ? 'border-b-2 border-theme-blue'
              : 'hover:border-b-2 hover:border-theme-blue',
          ]"
        >
          Tweets & Replies
        </div>
      </div>

      <div @click="tabChange('media')" class="w-1/4 text-center">
        <div
          @click="activeTab = 'media'"
          :class="[
            activeTab == 'media'
              ? 'border-b-2 border-theme-blue'
              : 'hover:border-b-2 hover:border-theme-blue',
          ]"
        >
          Media
        </div>
      </div>

      <div @click="tabChange('likes')" class="w-1/4 text-center">
        <div
          @click="activeTab = 'likes'"
          :class="[
            activeTab == 'likes'
              ? 'border-b-2 border-theme-blue'
              : 'hover:border-b-2 hover:border-theme-blue',
          ]"
        >
          Likes
        </div>
      </div>
    </div>
    <div class="mt-4">
      <LikesVue v-if="activeTab == 'likes'" />
      <TweetsVue v-if="activeTab == 'tweets'" />
      <MediaVue v-if="activeTab == 'media'" />
      <TweetsRepliesVue v-if="activeTab == 'tweets&replies'" />
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import LikesVue from "@/views/components/profile/Likes.vue"
import MediaVue from "@/views/components/profile/Media.vue"
import TweetsRepliesVue from "@/views/components/profile/Tweets-Replies.vue"
import TweetsVue from "@/views/components/profile/Tweets.vue"

const activeTab = ref("tweets");
function tabChange(value) {
  activeTab.value = value
}

</script>
