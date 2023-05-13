<template>
    
    <div class="relative">
        <div class="flex flex-row items-center bg-theme-gray-light py-3 px-4 rounded-full">
            <div class="mr-5">
                <img src="/assets/images/search.png" alt="" />
            </div>
            <div class="">
                <input v-model="search.query" class="bg-theme-gray-light outline-none" type="text" placeholder="Search tweets" />
            </div>
            <div v-if="search.showResults" @click="resetSearch" class="ml-auto cursor-pointer">
                <img src="/assets/images/close.png" alt="">
            </div>
        </div>
        <div id="search-results" v-if="search.showResults" class="flex flex-col bg-white drop-shadow py-5 absolute w-full max-h-96 overflow-y-auto">
            <div class="mx-3">
                Search for "{{ search.query }}"
            </div>
            <div v-if="search.results.length == 0" class="mt-5 mx-3">No results found</div>
            <div v-else class="flex flex-col mt-3">
                <div v-for="searchResult in search.results" :key="searchResult.user.id" class="p-3 hover:bg-theme-gray-light">
                    <RouterLink class="flex flex-row gap-3" :to="{ name: 'Profile' }">
                        <div>
                            <img class="rounded-full" :src="'/assets/images/'+searchResult.user.image" :alt="searchResult.user.username" /> 
                        </div>
                        <div class="flex flex-col">
                            <div class="font-semibold">{{ searchResult.user.name }}</div>
                            <div class="text-gray-500 text-sm">{{ searchResult.user.username }}</div>
                        </div>
                    </RouterLink>
                </div>

            </div>
        </div>
    </div>

</template>

<script setup>
import { ref, watch, onMounted, onUnmounted } from 'vue'

const search = ref({

    query: '',
    results: [],
    showResults: false

})

const handleOutsideClick = (event) => {
    if(!search.value.showResults) return;

    const clickedElement = event.target;
    const divElement = document.getElementById('search-results');

    if (!divElement.contains(clickedElement)) {

        resetSearch()
    }
}

watch(() => search.value.query, (newVal, oldVal) => {
    
    if(newVal.length >= 3){

        search.value.showResults = true
        search.value.results = [
            { user: { id: 1, name: 'Spotify', username: '@spoti123', image: 'default_profile.png' } },
            { user: { id: 2, name: 'Dan', username: '@danis', image: 'default_profile.png' } },
            { user: { id: 3, name: 'Gigmn', username: '@twitter', image: 'default_profile.png' } },
        ]
    }else{

        search.value.results = []
    }
})

const resetSearch = () => {

    search.value.results = []
    search.value.query = ''
    search.value.showResults = false
}

onMounted(() => {
    document.addEventListener('click', handleOutsideClick);
});

onUnmounted(() => {
    document.removeEventListener('click', handleOutsideClick);
});

</script>