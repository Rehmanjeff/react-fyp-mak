<template>
  <div>
    <FollowerFollowng />
    <div class="flex flex-col w-full">
      <div v-for="(userFollower, index) in userFollowers" :key="index"  class="flex flex-row px-2 py-2 mb-4 rounded cursor-pointer hover:bg-gray-100">
        <div class="w-12 h-12 mr-2 overflow-hidden bg-gray-100 rounded-full">
          <img src="/assets/images/default_profile.png" class="w-12 h-12" alt="" />
        </div>
        <div class="flex flex-col text-sm">
          <p class="font-bold">{{ userFollower.fields.first_name+' '+userFollower.fields.last_name }}</p>
          <p class="-mt-1 text-gray-500">@{{ userFollower.fields.username }}</p>
        </div>
      </div>
      <div class="text-center mt-10 text-gray-400" v-if="userFollowers.length == 0">
        No records to show
      </div>
    </div>
  </div>
</template>
  
<script setup>
import { ref, onMounted } from "vue"
import FollowerFollowng from "@/views/components/profile/Follower-Followng.vue"
import User from "@/composables/User.js"

const { profile } = User()
const userFollowers = ref([])
const token = localStorage.getItem("dynoAuthToken")

const userProfile = () => {

  profile(token).then((data) => {
      
    if(data.status == 200){

      userFollowers.value = data.data.followers
    }else{

      if(data.response){

        error.value = data.response.data.detail
      }
      error.value = data.message
    }
  })
}

onMounted(() => {
  
  userProfile()
})

</script>
  
  
