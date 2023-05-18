<template>
    
    <div class="flex flex-col border-b border-theme-gray-border">

        <div class="flex flex-row items-start py-3 px-3 w-full gap-3">
            <div>
                <img src="/assets/images/spotify.jpg" alt="" />
            </div>
            <div class="flex flex-col flex-1">
                <div class="flex flex-row items-center gap-1">
                    <div class="font-semibold">{{ tweet.user.first_name+' '+tweet.user.last_name }}</div>
                    <div>
                        <img src="/assets/images/handle.png" alt="" />
                    </div>
                    <div class="text-sm text-theme-gray-dark">@{{ tweet.user.username }}</div>
                    <div class="text-sm text-theme-gray-dark">. {{ tweet.updated_at }}</div>
                </div>
                <div class="text-sm font-normal">
                    {{ tweet.text }}
                </div>
                <!--<div class="mt-4">
                    <img class="rounded-lg" src="/assets/images/FvFfPANWcAMrSYJ.jpeg" alt="" />
                </div>-->
                <div class="flex flex-row items-center justify-between mt-5 text-sm text-theme-gray-dark">
                    <div @click="openComment = true" class="flex flex-row items-center gap-2 cursor-pointer">
                        <img src="/assets/images/comment.png" alt="" />
                        <div>{{ tweet.comments.length }}</div>
                    </div>
                    <div @click="openQuoteTweet = true" class="flex flex-row items-center gap-2 cursor-pointer">
                        <img src="/assets/images/retweet.png" alt="" />
                        <div>{{ tweet.share.length }}</div>
                    </div>
                    <div @click="toggleLiked(tweet.id, isLikedByUser(tweet.likes) ? 'liked' : 'not-liked')" class="flex flex-row items-center gap-2 cursor-pointer">
                        <img v-if="!isLikedByUser(tweet.likes)" src="/assets/images/like.png" alt="" />
                        <img v-else src="/assets/images/liked.png" alt="" />
                        <div>{{ tweet.likes.length }}</div>
                    </div>
                    <div @click="shareClicked(tweet.id)" class="flex flex-row items-center cursor-pointer">
                        <img src="/assets/images/share.png" alt="" />
                    </div>
                </div>
            </div>
            <TweetComment :id="tweet.id" :open="openComment" @closed="commentResponse" :username="tweet.user.username" />
            <TweetQuote :id="tweet.id" :open="openQuoteTweet" @closed="quoteResponse" />
        </div>
        <div v-if="comment" class="flex flex-row items-start py-3 px-3 w-full">{{ comment }}</div>
    </div>

</template>

<script setup>
import { ref, watch } from 'vue'
import TweetComment from '@/views/components/TweetComment.vue'
import TweetQuote from '@/views/components/TweetQuote.vue'
import CommonFunctions from "@/composables/commonFunctions.js"

const props = defineProps(['tweet', 'page', 'comment'])
const emit = defineEmits(['likeClicked', 'commentMade', 'shareClicked', 'quoteTweeted'])
const username = localStorage.getItem('username')
const openComment = ref(false)
const openQuoteTweet = ref(false)
const { formatDate } = CommonFunctions()

props.tweet.updated_at = formatDate(props.tweet.updated_at)

watch(() => props.tweet, (newValue, oldValue) => {
    
    if(newValue){

        props.tweet.updated_at = formatDate(props.tweet.updated_at)
    }
})

const toggleLiked = (id, status) => {

    emit('likeClicked', id, status)
}

const commentResponse = (statusCode) => {

    if(statusCode == '201'){

        openComment.value = false
        emit('commentMade')
    }else{

        openComment.value = false
    }
}

const quoteResponse = (statusCode) => {

    if(statusCode == '201'){

        openQuoteTweet.value = false
        emit('quoteTweeted')
    }else{

        openQuoteTweet.value = false
    }
}

const shareClicked = (id) => {

    emit('shareClicked', id)
}

const isLikedByUser = (likes) => {
    
    for(let key in likes) {
        if(likes[key].user.username == username){
            return true
        }
    }
    return false
}
</script>