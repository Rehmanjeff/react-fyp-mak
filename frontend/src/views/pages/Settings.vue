<template>
  <div class="flex flex-row border-b border-theme-gray-border">
    <div class="flex flex-col w-2/6 max-h-screen overflow-y-auto">
      <div>
        <div class="ml-4 text-lg font-bold">Privacy</div>
      </div>
      <div class="flex flex-col mt-3">
        <div @click="tabChange('personalization')">
          <div @click="activeTab = 'personalization'" :class="[activeTab == 'personalization' ? 'bg-gray-100 border-r-4 border-theme-blue ' : '']" class="flex flex-col p-4 cursor-pointer hover:bg-gray-100">
            <div class="flex flex-row items-center gap-1">
              <div class="flex flex-col">
                <div class="text-gray-600">Account Security</div>
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
          <hr />
          <div class="p-4 text-lg font-bold">
            <div>General</div>
          </div>

          <div @click="activeTab = 'resources'" :class="[activeTab == 'resources' ? 'bg-gray-100 border-r-4 border-theme-blue' : '']" class="flex flex-col p-4 cursor-pointer hover:bg-gray-100">
            <div @click="tabChange('resources')" class="flex flex-row items-center gap-1">
              <div class="text-gray-600">Personal Information</div>
              <div class="ml-auto text-sm text-theme-gray-dark">
                <img src="/assets/images/arrow-right.png" alt="" />
              </div>
            </div>
          </div>
          <hr />
        </div>
      </div>
    </div>
    <div class="flex flex-col w-4/6 border-l border-r border-theme-gray-border">
      <PersonalizationDataVue v-if="activeTab == 'personalization'" />
      <AdditionalResourcesVue v-if="activeTab == 'resources'" />
    </div>
  </div>
</template>
  
<script setup>
import { ref } from "vue"
import AdditionalResourcesVue from "@/views/components/settings/AdditionalResources.vue"
import PersonalizationDataVue from "@/views/components/settings/Personalization-Data.vue"

const activeTab = ref("personalization")
function tabChange(value) {
  activeTab.value = value
}
</script>