<template>
    <div>
      <TweetView v-if="tweet" @commentMade="fetchTweetDetails()" @likeClicked="toggleLiked" :tweet="tweet" />
      <TweetCommentBox v-if="tweet" @submit="proceedCreateTweetComment" :username="tweet.user.username" />
    </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import TweetView from "@/views/components/TweetView.vue"
import Tweet from "@/composables/Tweet.js"
import TweetCommentBox from "@/views/components/TweetCommentBox.vue"

const props = defineProps(['id'])
const { tweetDetails, toggleLikeTweet, createTweetComment } = Tweet()
const error = ref('')
const tweet = ref(false)
const loading = ref(false)

const fetchTweetDetails = () => {

  tweetDetails(props.id).then((data) => {
      
    if(data.status == 200){

      tweet.value = data.data
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

        fetchTweetDetails()
    }else{

        if(data.response){

            error.value = data.response.data.detail
        }
        error.value = data.message
    }
    })
}

const proceedCreateTweetComment = (text) => {
  
  if(!loading.value){
    
    loading.value = true
    createTweetComment(props.id, text).then((data) => {

      loading.value = false        
      if(data.status == 201){

          closed('201')
      }else{

          closed(data.status)
      }
    })
  }
}

onMounted(() => {
  
    fetchTweetDetails()
})

</script>
