<template>
  <div>
    <div v-for="comment in comments" :key="comment.id">
      <TweetView @commentMade="userTweets()" @likeClicked="toggleLiked" :tweet="comment.tweet" :comment="comment.comment" />
    </div>
    
    <div class="text-center mt-10 text-gray-400" v-if="comments.length == 0">No tweets to show</div>
  </div>
</template>

<script setup>
import { onMounted, ref, watch } from 'vue'
import TweetView from "@/views/components/TweetView.vue"
import Tweet from "@/composables/Tweet.js"
import { useRoute } from 'vue-router'

const { userProfileTweetComments, toggleLikeTweet } = Tweet()
const error = ref('')
const comments = ref([])
const route = useRoute()
const username = ref(route.params.username)

watch( () => route.params.username, (newValue, oldValue) => {

if (newValue !== oldValue) {
  if (newValue === '') {
    
    username.value = ''
    userTweets()
  }else{
    
    username.value = route.params.username
    userTweets()
  }
}
})

const userTweets = () => {

userProfileTweetComments(username.value).then((data) => {
    
  if(data.status == 200){

    comments.value = data.data
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
