<template>
  <div class="flex flex-row border-b border-theme-gray-border">
    <div class="flex flex-col w-2/6 max-h-screen overflow-y-auto">
      <div class="flex flex-row items-center justify-center gap-3 px-3 py-2 mx-3 mt-2 border rounded-full border-theme-gray-border">
        <div>
          <img src="/assets/images/search.png" alt="" />
        </div>
        <div>
          <input class="w-full text-sm outline-none" type="text" placeholder="Search direct messages" />
        </div>
      </div>
      <div class="flex flex-col mt-3">
        <div v-for="user in user_message.users" :key="user.id" @click="userListClick(user.id)">
          <RouterLink :to="{ name: 'Messages', params: { username: user.username }, }" class="flex flex-row gap-3 p-3 mb-2" :class="[selectedUserId === user.id ? 'bg-theme-gray-light' : 'cursor-pointer hover:bg-theme-gray-light', ]">
            <div>
              <img class="rounded-full" src="/assets/images/default_profile.png" :alt="user.name" />
            </div>
            <div class="flex flex-col w-full">
              <div class="flex flex-row items-center gap-1">
                <div class="font-semibold">{{ user.name }}</div>
                <div class="text-sm text-theme-gray-dark">@{{ user.username }}</div>
                <div class="flex ml-auto text-sm text-theme-gray-dark">
                  {{ formatTimeAgo(user.messages[0].created_at) }}
                </div>
              </div>
              <div class="text-sm text-theme-gray-dark">
                {{ user.messages[0].body }}
              </div>
            </div>
          </RouterLink>
        </div>
      </div>
    </div>
    <div class="flex flex-col w-4/6 border-l border-r border-theme-gray-border">
      <div class="flex flex-col items-center justify-center pb-10 mt-3 border-b border-theme-gray-borders">
        <div>
          <img class="rounded-full" src="/assets/images/default_profile.png" alt="" />
        </div>
        <div class="mt-1 font-semibold">{{ profileData.first_name }}</div>
        <div class="text-sm text-theme-gray-dark">@{{ profileData.username }}</div>
        <div class="flex flex-row items-center mt-4 text-sm text-theme-gray-dark">
          <div>{{ profileData.date_joined }}</div>
          <div>. {{ profileData.followers_count }} Followers</div>
        </div>
      </div>
      <div class="flex flex-col h-full pt-5">
        <div class="flex flex-col overflow-y-auto h-max-500p">
          <div v-for="chat in partner_chat.slice().reverse()" :key="chat.id" class="flex flex-col px-3 mb-4 text-sm w-fit" :class="chat.msg_receiver.username != profileData.username ? 'self-end' : 'self-start'">
            <div class="p-3 mb-1 text-center text-white bg-theme-blue rounded-xl" :class=" chat.msg_receiver.username == profileData.username ? 'rounded-br-sm' : 'rounded-bl-sm'">
              {{ chat.body }}
            </div>
            <div class="text-theme-gray-dark">
              {{ formatDateTime(chat.created_at) }}
            </div>
          </div>
        </div>
        <div class="flex flex-row p-2 mt-auto border-t border-theme-gray-border">
          <div class="relative w-full">
            <input v-model="message" class="w-full p-4 rounded-lg outline-none bg-theme-gray-light" type="text" placeholder="start a new message" />
            <div @click="postMessage" :class="{ 'opacity-50': message.length === 0, 'cursor-pointer hover:bg-gray-300': message.length > 0 }" class="absolute p-2 rounded-full right-4 top-2">
              <img src="/assets/images/send.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref, watch } from "vue"
import User from "@/composables/User.js"
import { useRoute } from "vue-router"
import Message from "@/composables/Message"
import CommonFunctions from "@/composables/commonFunctions"

const message = ref('')
const profileData = ref(false)
const { formatTimeAgo, formatDateTime } = CommonFunctions()
const { profile } = User()
const { partnerList, messageChat, postChat, getUserId } = Message()
const token = localStorage.getItem("dynoAuthToken")
const route = useRoute()
const username = route.params.username
const user_message = ref([])
const partner_chat = ref([])
const selectedUserId = ref(null)

const getUserById = () => {

  if (route.params.username){

    getUserId(token, route.params.username).then((data) => {

      selectedUserId.value = data.data.user_id
    })
  }
}

const postMessage = () => {

  if(message.value.length > 0){

    const data = {
      message: message.value
    }
    postChat(token, selectedUserId.value, data).then((data) => {

      if (data.status === 201) {

        userChat(selectedUserId.value)
      }
    })
    if(route.params.username){

      resetValue()
      messages()
    }
  }
}

const userListClick = (id) => {

  userChat(id)
  selectedUserId.value = id
}

const userChat = (userid) => {

  messageChat(token, userid).then((data) => {

    partner_chat.value = data.data.messages
  })
}

const resetValue = () => {

  message.value = ''
}

const messages = () => {

  partnerList(token).then((data) => {

    user_message.value = data.data
  })
}

const userProfile = () => {

  profile(token, username).then((data) => {

    if (data.status == 200) {

      profileData.value = data.data
      const [dobyear, dobmonth, dobday] = data.data.date_of_birth.split("-")
      const [year, month, day] = data.data.date_joined.split("-")
      const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
      const dobMonthName = months[parseInt(dobmonth) - 1]
      const monthName = months[parseInt(month) - 1]
      profileData.value.date_of_birth = dobMonthName + " " + dobday + ", " + dobyear
      profileData.value.date_joined = monthName + ", " + year
    }else{

      if (data.response) {

        error.value = data.response.data.detail
      }
      error.value = data.message
    }
  })
}

watch(() => user_message.value, (newVal, oldVal) => {

    for (let index = 0; index < user_message.value.users.length; index++) {

      if (user_message.value.users[index].username == route.params.username) {

        userChat(user_message.value.users[index].id)
        selectedUserId.value = user_message.value.users[index].id
        break
      }
    }
  }
)

onMounted(() => {

  if (route.params.username) {

    getUserById()
  }
  userProfile()
  messages()
})
</script>