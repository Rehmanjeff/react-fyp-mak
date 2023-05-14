<template>
  <TransitionRoot as="template" :show="open">
    <Dialog as="div" class="relative z-10" @close="closed">
      <TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0" enter-to="opacity-100" leave="ease-in duration-200" leave-from="opacity-100" leave-to="opacity-0">
        <div class="fixed inset-0 transition-opacity bg-gray-500 bg-opacity-75"/>
      </TransitionChild>

      <div class="fixed inset-0 z-10 overflow-y-auto">
        <div class="flex items-end justify-center min-h-full p-4 text-center sm:items-center sm:p-0">
          <TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95" enter-to="opacity-100 translate-y-0 sm:scale-100"
          leave="ease-in duration-200" leave-from="opacity-100 translate-y-0 sm:scale-100" leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95">
            <DialogPanel class="relative overflow-hidden text-left transition-all transform bg-white rounded-lg shadow-xl sm:my-8 sm:w-full sm:max-w-lg">
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
                    <div :class=" tweet.length == 0 ? 'opacity-50' : 'cursor-pointer'" class="px-5 py-2 ml-auto text-white rounded-full bg-theme-blue">
                      Tweet
                    </div>
                  </div>
                </div>
              </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>
  
<script setup>
import { ref } from "vue"
import { Dialog, DialogPanel, DialogTitle, TransitionChild, TransitionRoot} from "@headlessui/vue"

const props = defineProps(["open"])
const emits = defineEmits(["closed"])

const closed = () => {
  emits("closed")
}
const tweet = ref("")
</script>