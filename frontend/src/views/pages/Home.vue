<template>
  <div class="flex flex-col py-3 border-r border-theme-gray-border">
    <TweetBox @submit="proceedCreateTweet" />
    <div class="py-5">
      <SearchTweet />
      <TweetView @quoteTweeted="quoteTweeted" @shareClicked="shareClicked" @commentMade="commentMade" @likeClicked="toggleLiked" v-for="tweet in tweets" :key="tweet.id" :tweet="tweet" />
      <div class="text-center mt-10 text-gray-400" v-if="tweets.length == 0">
        No tweets to show
      </div>
    </div>
    <Message @hide="showMessage = false" :show="showMessage" miliseconds="3000" :message="toastMessage" />
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import TweetView from "@/views/components/TweetView.vue"
import TweetBox from "@/views/components/TweetBox.vue"
import Tweet from "@/composables/Tweet.js"
import SearchTweet from "@/views/components/SearchTweet.vue"
import Message from "@/views/components/Message.vue"
import CommonFunctions from "@/composables/commonFunctions.js"

const { createTweet, userHomeFeed, toggleLikeTweet } = Tweet()
const { copyToClipboard, domainWithProtocol } = CommonFunctions()
const loading = ref(false)
const tweet = ref('')
const error = ref('')
const tweets = ref([])
const showMessage = ref(false)
const toastMessage = ref('')

const proceedCreateTweet = (text) => {

  if(!loading.value){
    
    loading.value = true
    createTweet(text).then((data) => {

      loading.value = false        
      if(data.status == 201){

        tweet.value = ''
        toastMessage.value = 'Tweet created successfully'
        showMessage.value = true
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

      tweets.value = data.data.length ? data.data[0] : []
    }else{

      if(data.response){

        error.value = data.response.data.detail
      }
      error.value = data.message
    }
  })
}

const commentMade = () => {

  feed()
  toastMessage.value = 'Comment created successfully'
  showMessage.value = true
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

const shareClicked = (id) => {

  copyToClipboard(domainWithProtocol() + '/tweet/' + id)
  toastMessage.value = 'Copied to clipboard'
  showMessage.value = true
}

const quoteTweeted = () => {

  feed()
  toastMessage.value = 'Quote tweet created successfully'
  showMessage.value = true
}

onMounted(() => {
  
  feed()
})

</script>