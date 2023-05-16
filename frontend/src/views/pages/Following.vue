<template>
  <div>
    <FollowerFollowng />
    <div class="flex flex-col w-full px-2 py-2">
      <div v-for="(userFollowing, index) in userFollowings" :key="index" class="flex flex-row mb-4">
        <div class="w-12 h-12 mr-2 overflow-hidden bg-gray-100 rounded-full">
          <img :src="'/assets/images/default_profile.png'" class="w-12 h-12" alt="" />
        </div>
        <div class="flex flex-col">
          <p class="font-semibold">{{ userFollowing.fields.first_name+' '+userFollowing.fields.last_name }}</p>
          <p class="-mt-1 text-gray-500 text-sm">@{{ userFollowing.fields.username }}</p>
        </div>
        <div class="ml-auto">
          <span @click="proceedUnfollow(userFollowing.pk)" @mouseover="handleMouseOver" @mouseleave="handleMouseOut" class="flex px-5 py-1 ml-auto font-semibold text-center border rounded-full cursor-pointer hover:border-red-100 hover:text-red-500 hover:bg-red-100">
            Following
          </span>
        </div>
      </div>
      <div class="text-center mt-10 text-gray-400" v-if="userFollowings.length == 0">
        No records to show
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue"
import FollowerFollowng from "@/views/components/profile/Follower-Followng.vue"
import User from "@/composables/User.js"

const { profile, unfollow } = User()
const userFollowings = ref([])
const token = localStorage.getItem("dynoAuthToken")

const handleMouseOver = (event) => {
  
  event.target.textContent = 'Unfollow'
}

const handleMouseOut = (event) => {
  
  event.target.textContent = 'Following'
}

const proceedUnfollow = (id, index) => {

  unfollow(token, id).then((data) => {
      
    if(data.status == 204){

      userFollowings.value.splice(index, 1)
    }else{

      if(data.response){

        error.value = data.response.data.detail
      }
      error.value = data.message
    }
  })
}

const userProfile = () => {

  profile(token).then((data) => {
      
    if(data.status == 200){

      userFollowings.value = data.data.following
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

