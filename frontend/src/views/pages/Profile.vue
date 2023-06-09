<template>
  <div>
    <div class="flex justify-center p-16 text-center bg-gray-300">
      <span class="">cover</span>
    </div>
    <div class="flex w-full pl-2">
      <div class="w-24 h-24 overflow-hidden p-4 rounded-full mt-[-40px] border-4 border-white bg-gray-300">
        <img src="/assets/images/roundprofile.png" class="w-auto h-auto mt-1" alt="" />
      </div>
    </div>
    <div class="flex flex-col pl-3">
      
      <div v-if="$route.params.username" class="flex flex-row items-center">
        <div class="flex flex-col">
          <span class="font-semibold">{{ profileData ? profileData.first_name + " " + profileData.last_name : "" }}</span>
          <span class="-mt-1 text-sm text-gray-500 text-theme-gray-dark">@{{ profileData ? profileData.username : "" }}</span>
        </div>
        <div class="flex flex-row gap-4 ml-auto">
          <RouterLink class="flex items-center justify-center" :to="{ name: 'Messages', params: {username: username} }">
            <span class="px-5 py-1 font-semibold text-center bg-white border rounded-full cursor-pointer text-theme-blue border-theme-blue">Message</span>
          </RouterLink>
          <span @click="followUnfollow ? Unfollow() : Follow()" class="px-5 py-1 mr-5 font-semibold text-center text-white bg-black rounded-full cursor-pointer">{{ followUnfollow ? "Following" : "Follow" }}</span>
        </div>
      </div>
      <div v-else class="flex flex-col">
        <span class="font-semibold">{{ profileData ? profileData.first_name + " " + profileData.last_name : ""}}</span>
        <span class="-mt-1 text-sm text-gray-500 text-theme-gray-dark">@{{ profileData ? profileData.username : "" }}</span>
      </div>

      <div class="flex flex-row w-full mt-2 text-md">
        <div class="flex w-1/2 items-center">
          <img src="/assets/images/date.png" class="h-fit mr-2" alt="" />
          <span class="text-gray-500">Born {{ profileData ? profileData.date_of_birth : '' }}</span>
        </div>
        <div class="flex w-1/2 items-center">
          <img src="/assets/images/calendar.png" class="h-fit mr-2" alt="" />
          <span class="text-gray-500">Joined {{ profileData ? profileData.date_joined : '' }}</span>
        </div>
      </div>
      <div class="flex flex-row w-full mt-2 text-sm">
        <div class="flex w-1/4 gap-2 mt-4 text-gray-500">
          <RouterLink :to="{ name: 'Following', params: { username: username } }">
            <span class="mr-1 font-bold text-black">{{ profileData ? profileData.following_count : 0 }}</span>
            <span>Following</span>
          </RouterLink>
        </div>
        <div class="flex w-1/4 gap-2 mt-4 text-gray-500">
          <RouterLink :to="{ name: 'Follower', params: { username: username } }">
            <span class="mr-1 font-bold text-black">{{ profileData ? profileData.followers_count : 0 }}</span>
            <span>Followers</span>
          </RouterLink>
        </div>
      </div>
    </div>
    <div class="flex flex-row justify-around w-full gap-2 mt-8 text-sm cursor-pointer text-sm">
      <div @click="tabChange('tweets')" class="text-center">
        <div @click="activeTab = 'tweets'" :class="[activeTab == 'tweets' ? 'border-b-2 border-theme-blue' : 'hover:border-b-2 hover:border-theme-blue']">
          Tweets
        </div>
      </div>

      <div @click="tabChange('tweets&replies')" class="text-center">
        <div @click="activeTab = 'tweets&replies'" :class="[activeTab == 'tweets&replies' ? 'border-b-2 border-theme-blue' : 'hover:border-b-2 hover:border-theme-blue']">
          Replies
        </div>
      </div>

      <div @click="tabChange('media')" class="text-center">
        <div @click="activeTab = 'media'" :class="[activeTab == 'media' ? 'border-b-2 border-theme-blue' : 'hover:border-b-2 hover:border-theme-blue']">
          Media
        </div>
      </div>

      <div @click="tabChange('likes')" class="text-center">
        <div @click="activeTab = 'likes'" :class="[activeTab == 'likes' ? 'border-b-2 border-theme-blue' : 'hover:border-b-2 hover:border-theme-blue']">
          Likes
        </div>
      </div>
    </div>
    <div class="mt-4">
      <LikesVue v-if="activeTab == 'likes'" />
      <TweetsVue :forceReload="reload" v-if="activeTab == 'tweets'" />
      <MediaVue v-if="activeTab == 'media'" />
      <TweetsRepliesVue v-if="activeTab == 'tweets&replies'" />
    </div>
    <Message @hide="showMessage = false" :show="showMessage" miliseconds="3000" :message="toastMessage" />
  </div>
</template>

<script setup>
import { ref, onMounted, watch, computed } from "vue"
import LikesVue from "@/views/components/profile/Likes.vue"
import MediaVue from "@/views/components/profile/Media.vue"
import TweetsRepliesVue from "@/views/components/profile/Tweets-Replies.vue"
import TweetsVue from "@/views/components/profile/Tweets.vue"
import User from "@/composables/User.js"
import Message from "@/views/components/Message.vue"
import { useRoute, RouterLink } from "vue-router"

const showMessage = ref(false)
const { profile, follow, unfollow } = User()
const profileData = ref(false)
const token = localStorage.getItem("dynoAuthToken")
const error = ref('')
const toastMessage = ref('')
const route = useRoute()
const username = ref(route.params.username)
const reload = ref(false)
const localUsername = localStorage.getItem("username")

const activeTab = ref("tweets")
function tabChange(value) {
  activeTab.value = value
}

watch(() => route.params.username, (newValue, oldValue) => {
  
  if(newValue !== oldValue){
    if (newValue === '') {
      
      username.value = ''
      userProfile()
    }else{
      
      username.value = route.params.username
      userProfile()
    }
  }
})

const userProfile = () => {

  profile(token, username.value).then((data) => {
    
    if(data.status == 200){

      profileData.value = data.data
      const [dobyear, dobmonth, dobday] = data.data.date_of_birth.split('-')
      const [year, month, day] = data.data.date_joined.split('-')
      const months = ['January', 'February', 'March', 'April', 'May', 'June','July', 'August', 'September', 'October', 'November', 'December']
      const dobMonthName = months[parseInt(dobmonth) - 1]
      const monthName = months[parseInt(month) - 1]
      profileData.value.date_of_birth = dobMonthName+' '+dobday+', '+dobyear
      profileData.value.date_joined = monthName+', '+year
    }else{

      if(data.response){

        error.value = data.response.data.detail
      }
      error.value = data.message
    }
  })
}

const Follow = () => {
  
  follow(profileData.value.id, token).then((data) => {
    userProfile()
  })
}

const Unfollow = () => {

  unfollow(token, profileData.value.id).then((data) => {
    userProfile()
  })
}

const followUnfollow = computed(() => {
  const followers = profileData.value.followers;

  if (typeof followers === "object" && followers !== null) {
    for(const key in followers){
      
      const item = followers[key].fields
      if (localUsername === item.username) {
        return true
      }
    }
  }

  return false
})

onMounted(() => {
  
  userProfile()
})

</script>
