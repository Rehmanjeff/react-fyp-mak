<template>
    
    <div class="flex flex-row items-start py-3 px-3 border-b border-theme-gray-border w-full gap-3">
        <div>
            <img src="/assets/images/spotify.jpg" alt="" />
        </div>
        <div class="flex flex-col flex-1">
            <div class="flex flex-row items-center gap-1">
                <div class="font-semibold">{{ tweet.user.first_name+' '+tweet.user.last_name }}</div>
                <div>
                    <img src="/assets/images/handle.png" alt="" />
                </div>
                <div class="text-sm text-theme-gray-dark">{{ tweet.user.username }}</div>
                <div class="text-sm text-theme-gray-dark">. {{ tweet.updated_at }}</div>
            </div>
            <div class="text-sm font-normal">
                {{ tweet.text }}
            </div>
            <!--<div class="mt-4">
                <img class="rounded-lg" src="/assets/images/FvFfPANWcAMrSYJ.jpeg" alt="" />
            </div>-->
            <div class="flex flex-row items-center justify-between mt-5 text-sm text-theme-gray-dark">
                <div class="flex flex-row items-center gap-2 cursor-pointer">
                    <img src="/assets/images/comment.png" alt="" />
                    <div>{{ tweet.comments.length }}</div>
                </div>
                <div class="flex flex-row items-center gap-2 cursor-pointer">
                    <img src="/assets/images/retweet.png" alt="" />
                    <div>0</div>
                </div>
                <div @click="toggleLiked(tweet.id, isLikedByUser(tweet.likes) ? 'liked' : 'not-liked')" class="flex flex-row items-center gap-2 cursor-pointer">
                    <img v-if="!isLikedByUser(tweet.likes)" src="/assets/images/like.png" alt="" />
                    <img v-else src="/assets/images/liked.png" alt="" />
                    <div>{{ tweet.likes.length }}</div>
                </div>
                <div class="flex flex-row items-center cursor-pointer">
                    <img src="/assets/images/share.png" alt="" />
                </div>
            </div>
        </div>
    </div>

</template>

<script setup>
import { ref, computed } from 'vue'
import { HeartIcon } from '@heroicons/vue/solid'

const props = defineProps(['tweet', 'page'])
const emit = defineEmits(['likeClicked'])
const username = localStorage.getItem('username')
const toggleLiked = (id, status) => {

    emit('likeClicked', id, status)
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