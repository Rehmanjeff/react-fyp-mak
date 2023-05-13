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
        <div class="text-lg">Personalization and data</div>
        <div class="ml-auto">
          <Switch v-model="enabled" :class="[enabled ? 'bg-indigo-600' : 'bg-gray-200','relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2',]">
            <span class="sr-only">Use setting</span>
            <span aria-hidden="true" :class="[ enabled ? 'translate-x-5' : 'translate-x-0','pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out']"/>
          </Switch>
        </div>
      </div>
      <div class="mb-4 text-gray-500 text-md">
        This is enable or disable all of the setting on this page
      </div>
    </div>
    <hr class="mb-4" />
    <div class="px-8">
      <div class="mb-6 text-2xl font-semibold">Personalization</div>
      <div class="flex flex-col">
        <div class="flex flex-row">
          <div class="text-lg">Personalized ads</div>
          <div class="ml-auto">
            <input type="checkbox" v-model="personalizedads" @change="handleChange" class="w-4 h-4 text-indigo-600 border-gray-300 rounded-full" />
          </div>
        </div>
        <div class="mb-8 text-gray-500 text-md">
          You will see ads on twitter based on your twitter activity. When this
          setting is enabled, Twitter may further personalize ads from twitter
          advertisers, on and off Twitter
        </div>
      </div>
      <div class="flex flex-col">
        <div class="flex flex-row">
          <div class="text-lg">Personalize based on your inferred identity</div>
          <div class="ml-auto">
            <input type="checkbox" v-model="identity" @change="handleClick" class="w-4 h-4 text-indigo-600 border-gray-300 rounded-full" />
          </div>
        </div>
        <div class="mb-4 text-gray-500 text-md">
          Twitter will always personalize your experience based on information
          you've provided, as well as the devices you've used to log in. When
          this setting is enable, Twitter may also personalize based on other
          inferences about your identity, like devices and browsers you haven't
          use to log in to Twitter ro email addressand phone number similar to
          those linked to your Twitter account.
          <span class="cursor-pointer text-theme-blue">Learn more</span>
        </div>
      </div>
    </div>
    <hr class="mb-4" />
    <div class="px-8">
      <div class="mb-6 text-2xl font-bold">Data</div>
      <div class="flex flex-col">
        <div class="flex flex-row">
          <div class="text-lg">
            Allow additional information sharing with business partners
          </div>
          <div class="ml-auto">
            <input type="checkbox" v-model="partners" @change="handle" class="w-4 h-4 text-indigo-600 border-gray-300 rounded-full" />
          </div>
        </div>
        <div class="text-gray-500 text-md">
          Twitter always share information with bussiness partners as a way to
          run and improve its products. When enabled, this allow Twitter to
          share additional information with those partners to help support
          running Twitter's business, including making Twitter's marketing
          activities on other sites and apps more relevant for you
          <span class="cursor-pointer text-theme-blue">Learn more</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue"
import { Switch } from "@headlessui/vue"

const enabled = ref(false)
const personalizedads = ref("")
const identity = ref("")
const partners = ref("")

function handleChange() {
  console.log("Change " + personalizedads.value)
}

function handleClick() {
  console.log("Change " + identity.value)
}

function handle() {
  console.log("Change " + partners.value)
}

function Toggle() {
  console.log("Change" + enabled.value)
}
</script>
