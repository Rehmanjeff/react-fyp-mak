<template>
  <div class="flex flex-col py-3 border-r border-theme-gray-border">
    <div class="flex flex-col px-3 py-2 border-t border-b border-theme-gray-border">
      <div class="flex flex-row items-center">
        <div class="w-1/10">
          <img class="rounded-full" src="/assets/images/default_profile.png" alt="" />
        </div>
        <div class="w-full">
          <input v-model="tweet" type="text" class="text-xl outline-none w-full" placeholder="Whats happening" />
        </div>
      </div>
      <div class="flex flex-row mt-5">
        <div class="w-1/10"></div>
        <div class="flex flex-row items-center w-full">
          <div class="rounded-full hover:bg-blue-50 p-2 cursor-pointer">
            <img class="h-fit" src="/assets/images/tweet-image-upload.png" alt="" />
          </div>
          <div :class="tweet.length == 0 ? 'opacity-50' : 'cursor-pointer'" class="ml-auto bg-theme-blue text-white rounded-full px-5 py-2">Tweet</div>
        </div>
      </div>
    </div>
    <div class="py-5">
      <Tweet />
      <Tweet />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Tweet from "@/views/components/Tweet.vue"

const tweet = ref('')

</script>