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
                
                <RetweetQuoteBox @submit="proceedCreateQuoteTweet" />
                
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
  import RetweetQuoteBox from "@/views/components/RetweetQuoteBox.vue"
  import Tweet from "@/composables/Tweet.js"
  
  const props = defineProps(["open", "id", "username"])
  const emits = defineEmits(["closed"])
  const loading = ref(false)
  const { quoteTweet } = Tweet()
  
  const closed = (code) => {
    emits("closed", code)
  }
  
  const proceedCreateQuoteTweet = (text) => {
  
    if(!loading.value){
      
      loading.value = true
      quoteTweet(props.id, text).then((data) => {
  
        loading.value = false        
        if(data.status == 201){

            closed('201')
        }else{

            closed(data.status)
        }
      })
    }
  }
  
  </script>