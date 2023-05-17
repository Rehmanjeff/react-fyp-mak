<template>
  
    <div class="fixed left-[45%] bottom-5 bg-theme-blue text-white rounded-md py-2 px-6 z-99" v-if="showMessage">
        {{ message }}
    </div>

</template>

<script setup>
import { ref, watch } from 'vue'

const props = defineProps(['show', 'message', 'miliseconds'])
const emit = defineEmits(['hide'])
const showMessage = ref(false)

watch(() => props.show, (newValue, oldValue) => {
    
    showMessage.value = newValue
    setTimeout(() => {

        showMessage.value = false
        emit('hide')
    }, props.miliseconds)
})

</script>