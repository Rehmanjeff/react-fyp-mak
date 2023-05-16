<template>
  <div class="flex flex-col py-3 border-r border-theme-gray-border">
    <TweetBox @submit="proceedCreateTweet" />
    <div class="py-5">
      <TweetView @likeClicked="toggleLiked" v-for="tweet in tweets" :key="tweet.id" :tweet="tweet" />
      <div class="text-center mt-10 text-gray-400" v-if="tweets.length == 0">
        No tweets to show
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import TweetView from "@/views/components/TweetView.vue"
import TweetBox from "@/views/components/TweetBox.vue"
import Tweet from "@/composables/Tweet.js"

const { createTweet, userHomeFeed, toggleLikeTweet } = Tweet()
const loading = ref(false)
const tweet = ref('')
const error = ref('')
const tweets = ref([])

const proceedCreateTweet = (text) => {

  if(!loading.value){
    
    loading.value = true
    createTweet(text).then((data) => {

      loading.value = false        
      if(data.status == 201){

        tweet.value = ''
      }else{

        if(data.response){

          error.value = data.response.data.detail
        }
        error.value = data.message
      }
    })
  }
}

const feed = () => {

  userHomeFeed().then((data) => {
       
    if(data.status == 200){

      tweets.value = data.data[0]
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

          feed()
        }else{

            if(data.response){

                error.value = data.response.data.detail
            }
            error.value = data.message
        }
    })
}

onMounted(() => {
  
  feed()
})

</script>