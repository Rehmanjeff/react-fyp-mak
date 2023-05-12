<template>

  <div class="flex flex-row border-b border-theme-gray-border">
    <div class="flex flex-col w-2/6 max-h-screen overflow-y-auto">
      <div class="flex flex-row items-center justify-center gap-3 rounded-full border border-theme-gray-border px-3 py-2 mt-2 mx-3">
        <div>
          <img src="/assets/images/search.png" alt="" />
        </div>
        <div>
          <input class="w-full outline-none text-sm" type="text" placeholder="Search direct messages" />
        </div>
      </div>
      <div class="flex flex-col mt-3">
        
        <div v-for="(user, index) in users" :key="user.id" @click="userListClick(index)" class="flex flex-row p-3 gap-3" :class="user.active ? 'bg-theme-gray-light' : 'cursor-pointer hover:bg-theme-gray-light'">
          <div>
            <img class="rounded-full" :src="'/assets/images/'+user.image" :alt="user.name" />
          </div>
          <div class="flex flex-col">
            <div class="flex flex-row items-center gap-1">
              <div class="font-semibold">{{ user.name }}</div>
              <div class="text-sm text-theme-gray-dark">{{ user.username }}</div>
              <div class="text-sm text-theme-gray-dark"> . {{ user.timeElapsed }}</div>
            </div>
            <div class="text-sm text-theme-gray-dark">
              {{ user.message }}
            </div>
          </div>
        </div>

      </div>
    </div>
    <div class="flex flex-col w-4/6 border-r border-l border-theme-gray-border">
      <div class="flex flex-col items-center justify-center mt-3 pb-10 border-b border-theme-gray-borders">
        <div>
          <img class="rounded-full" src="/assets/images/default_profile.png" alt="" />
        </div> 
        <div class="font-semibold mt-1">Spotify</div>
        <div class="text-sm text-theme-gray-dark">@spotify</div> 
        <div class="flex flex-row items-center text-sm text-theme-gray-dark mt-4">
          <div>Joined march 2018</div>
          <div> . 535K followers</div>
        </div>
      </div>
      <div class="flex flex-col pt-5 h-full">
        <div class="flex flex-col h-full overflow-y-auto h-max-500p">
          
          <div v-for="message in messages" :key="message.id" class="flex flex-col text-sm mb-4 w-fit px-3" :class="message.type == 'outbound' ? 'self-end' : 'self-start'">
            <div class="bg-theme-blue text-white rounded-xl p-3 mb-1" :class="message.type == 'outbound' ? 'rounded-br-sm' : 'rounded-bl-sm'">{{ message.message }}</div>
            <div class="text-theme-gray-dark">{{ message.time }}</div>
          </div>

        </div>
        <div class="flex flex-row mt-auto p-2 border-t border-theme-gray-border">
          <div class="w-full relative">
            <input v-model="message" class="w-full bg-theme-gray-light p-4 rounded-lg outline-none" type="text" placeholder="start a new message" />
            <div :class="message.length == 0 ? 'opacity-50' : 'cursor-pointer hover:bg-gray-300'" class="absolute right-4 top-2 rounded-full p-2">
              <img src="/assets/images/send.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script setup>
import { ref } from 'vue'

const message = ref('')

const users = ref([
  { 
    id: 1, 
    name: 'spotify', 
    username: '@spotify123', 
    image: 'default_profile.png', 
    timeElapsed: '42m', 
    message: 'Hello', 
    active: true, 
    'messages': [
      { id: 1, message: 'first message', time: '10:57AM', type: 'outbound' },
      { id: 4, message: 'second message', time: '10:59AM', type: 'outbound' },
      { id: 8, message: 'Reply to messages above', time: '02:03PM', type: 'inbound' },
    ]
  },
  { 
    id: 2, 
    name: 'edsheeran', 
    username: '@edsher', 
    image: 'default_profile.png', 
    timeElapsed: '20m', 
    message: '', 
    active: false, 
    'messages': [
      { id: 1, message: 'first message to sheeran', time: '01:56AM', type: 'outbound' },
      { id: 4, message: 'sheeran replied to first message', time: '01:59AM', type: 'inbound' },
      { id: 8, message: 'Thanks for the reply', time: '05:03PM', type: 'outbound' },
    ]
  },
  { 
    id: 3, 
    name: 'galo', 
    username: '@galaleo', 
    image: 'default_profile.png', 
    timeElapsed: '3h', 
    message: 'Reply to messages above', 
    active: false, 
    'messages': [
      { id: 1, message: 'first message', time: '10:57AM', type: 'outbound' },
      { id: 4, message: 'second message', time: '10:59AM', type: 'outbound' },
      { id: 8, message: 'Reply to messages above', time: '02:03PM', type: 'inbound' },
    ]
  },
])

const messages = ref(users.value[0].messages)

const userListClick = (id) => {

  messages.value = users.value[id].messages
  for (let i = 0; i < users.value.length; i++) {
    
    users.value[i].active = false
  }
  users.value[id].active = true
}

</script>