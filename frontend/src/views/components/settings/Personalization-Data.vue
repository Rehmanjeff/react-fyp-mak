<template>
  <div>
    <div class="flex flex-col px-8">
      <div class="flex flex-row">
        <div></div>
        <div class="mb-4 text-xl font-bold">Personalization and data</div>
      </div>
      <div class="mb-4 text-gray-500 text-md">
        These setting apply to this browser or device while you're logged out.
        They don't have any effect when you're logged in
      </div>
    </div>
    <hr class="mb-4" />
    <div class="flex flex-col px-8">
      <div class="flex flex-row mb-2">
        <div class="text-lg">Private Account</div>
        <div class="ml-auto">
          <Switch v-model="enabled" :class="[enabled ? 'bg-indigo-600' : 'bg-gray-200', 'relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none ']">
            <span class="sr-only">Use setting</span>
            <span aria-hidden="true" :class="[ enabled ? 'translate-x-5' : 'translate-x-0', 'pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out']" />
          </Switch>
        </div>
      </div>
      <div class="mb-4 text-gray-500 text-md">
        This is make your public account private
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref, watch } from "vue"
import { Switch } from "@headlessui/vue"
import User from "@/composables/User.js"

const { account, update } = User()

const enabled = ref(false)
const token = localStorage.getItem("dynoAuthToken")

watch(enabled, (newValue, oldValue) => {
  
  let data = {
    is_private: newValue === false ? 0 : 1,
  }
  update(token, data).then((response) => {})
})

const getUserdata = () => {

  account(token).then((response) => {

    if (response.status === 200) {

      const userData = response.data
      enabled.value = userData.is_private
    }
  })
}

onMounted(() => {

  getUserdata()
})
</script>