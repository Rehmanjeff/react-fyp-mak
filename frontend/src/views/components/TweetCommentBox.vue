<template>
  
  <div class="flex flex-col px-3 py-4 border-b border-theme-gray-border">
        <div class="flex flex-row items-center gap-2">
            <div class="w-1/10"></div>
            <div class="w-full text-theme-gray-dark">
                Replying to
                <RouterLink class="text-theme-blue" :to="{ name: 'Profile', params: { username: username } }"> @{{ username }} </RouterLink>
            </div>
        </div>
        <div class="flex flex-row items-center gap-2">
            <div class="w-1/10">
                <img class="rounded-full" src="/assets/images/default_profile.png" alt=""/>
            </div>
            <div class="w-full">
                <input v-model="comment" type="text" class="w-full text-xl outline-none" placeholder="Tweet your reply!" />
            </div>
        </div>
        <div class="flex flex-row mt-5">
            <div class="w-1/10"></div>
            <div class="flex flex-row items-center w-full">
                <div class="p-2 rounded-full cursor-pointer hover:bg-blue-50">
                    <img class="h-fit" src="/assets/images/tweet-image-upload.png" alt=""/>
                </div>
                <div @click="clicked" :class="comment.length == 0 ? 'opacity-50' : 'cursor-pointer'" class="px-5 py-2 ml-auto text-white rounded-full bg-theme-blue">
                    Reply
                </div>
            </div>
        </div>
    </div>

</template>

<script setup>
import { ref } from 'vue'

const emit = defineEmits(['submit'])
const props = defineProps(['username'])
const comment = ref('')

const clicked = () => {

    if(comment.value != ''){

        emit('submit', comment.value)
        comment.value = ''
    }
}

</script>