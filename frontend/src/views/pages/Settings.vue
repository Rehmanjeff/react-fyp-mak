<template>
  <!-- Width ration 2/6 4/6 -->
  <div class="flex flex-row border-b border-theme-gray-border">
    <div class="flex flex-col w-2/6 max-h-screen overflow-y-auto">
      <div>
        <div class="ml-4 text-lg font-bold">Privacy</div>
      </div>
      <div class="flex flex-col mt-3">
        <div @click="tabChange('personalization')">
          <div @click="activeTab = 'personalization'" :class="[ activeTab == 'personalization' ? 'bg-gray-100 border-r-4 border-theme-blue ': '']"
            class="flex flex-col p-4 cursor-pointer hover:bg-gray-100">
            <div class="flex flex-row items-center gap-1">
              <div class="flex flex-col">
                <div class="text-gray-600">Personalization and data</div>
                <div class="text-sm text-theme-gray-dark">Allow all</div>
              </div>

              <div class="ml-auto text-sm text-theme-gray-dark">
                <img src="/assets/images/arrow-right.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="flex flex-col mt-3">
        <div>
          <div @click="activeTab = 'twitterdata'" :class="[activeTab == 'twitterdata' ? 'bg-gray-100 border-r-4 border-theme-blue ' : '']" class="flex flex-col p-4 cursor-pointer hover:bg-gray-100">
            <div class="flex flex-row items-center gap-1" @click="tabChange('twitterdata')">
              <div class="text-gray-600">Your Twitter data</div>

              <div class="ml-auto text-sm text-theme-gray-dark">
                <img src="/assets/images/arrow-right.png" alt="" />
              </div>
            </div>
          </div>
          <div class="p-4 text-gray-600">
            These setting apply to this browser or device while you're logged
            out. They don't have any effect when you're logged in
          </div>
          <hr />
          <div class="p-4 text-lg font-bold">
            <div>General</div>
          </div>

          <div @click="activeTab = 'resources'" :class="[activeTab == 'resources' ? 'bg-gray-100 border-r-4 border-theme-blue ' : '']" class="flex flex-col p-4 cursor-pointer hover:bg-gray-100">
            <div @click="tabChange('resources')" class="flex flex-row items-center gap-1">
              <div class="text-gray-600">Additional resources</div>
              <div class="ml-auto text-sm text-theme-gray-dark">
                <img src="/assets/images/arrow-right.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="flex flex-col w-4/6 border-l border-r border-theme-gray-border">
      <TwitterDataVue v-if="activeTab == 'twitterdata'" />
      <PersonalizationDataVue v-if="activeTab == 'personalization'" />
      <AdditionalResourcesVue v-if="activeTab == 'resources'" />
    </div>
  </div>
</template>
  
<script setup>
import { ref } from "vue"
import AdditionalResourcesVue from "../components/settings/AdditionalResources.vue"
import PersonalizationDataVue from "../components/settings/Personalization-Data.vue"
import TwitterDataVue from "../components/settings/TwitterData.vue"

const activeTab = ref("personalization")
function tabChange(value) {

  activeTab.value = value
  console.log(activeTab.value)
}
</script>
