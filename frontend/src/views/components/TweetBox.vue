<template>
    <div class="flex flex-col px-3 py-4 border-t border-b border-theme-gray-border">
        <div class="flex flex-row items-center gap-2">
            <div class="w-1/10">
                <img class="rounded-full" src="/assets/images/default_profile.png" alt=""/>
            </div>
            <div class="w-full">
                <input v-model="tweet" type="text" class="w-full text-xl outline-none" placeholder="Whats happening" />
            </div>
        </div>
        <div class="flex flex-row mt-5">
            <div class="w-1/10"></div>
            <div class="flex flex-row items-center w-full">
                <div class="p-2 rounded-full cursor-pointer hover:bg-blue-50">
                    <img class="h-fit" src="/assets/images/tweet-image-upload.png" alt=""/>
                </div>
                <div @click="clicked" :class="tweet.length == 0 ? 'opacity-50' : 'cursor-pointer'" class="px-5 py-2 ml-auto text-white rounded-full bg-theme-blue">
                    Tweet
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'

const emit = defineEmits(['submit'])
const tweet = ref('')

const clicked = () => {

    if(tweet.value != ''){

        emit('submit', tweet.value)
        tweet.value = ''
    }
}

</script>