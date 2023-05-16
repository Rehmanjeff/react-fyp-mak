<template>
    <div>
      <TweetView @likeClicked="toggleLiked" v-for="tweet in tweets" :key="tweet.id" :tweet="tweet" />
      <div class="text-center mt-10 text-gray-400" v-if="tweets.length == 0">No tweets to show</div>
    </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import TweetView from "@/views/components/TweetView.vue"
import Tweet from "@/composables/Tweet.js"

const { userProfileTweets, toggleLikeTweet } = Tweet()
const error = ref('')
const tweets = ref([])

const userTweets = () => {

  userProfileTweets().then((data) => {
      
    if(data.status == 200){

      tweets.value = data.data
    }else{

      if(data.response){

        error.value = data.response.data.detail
      }
      error.value = data.message
    }
  })
}

const toggleLiked = (id, status) => {

  const action = status == 'liked' ? 'unlike' : 'like'
  toggleLikeTweet(id, action).then((data) => {
    if(data.status == 201 || data.status == 204){

      userTweets()
    }else{

      if(data.response){

          error.value = data.response.data.detail
      }
      error.value = data.message
    }
  })
}

onMounted(() => {
  
  userTweets()
})

</script>
