<template>
  <div class="flex flex-col items-center justify-center min-h-screen bg-gray-100">
    <div class="w-full max-w-md overflow-hidden bg-white rounded-lg shadow-lg">
      <div class="p-8">
        <div>
          <h2 class="mb-1 text-2xl font-bold text-gray-800">
            Find your Twitter account
          </h2>
          <p class="mb-8 text-xs text-gray-500 font-Roboto">
            Enter the email, phone number, or username associated with your
            account to change your passowrd.
          </p>
        </div>
        <div>
          <input id="email" type="email" v-model="email" placeholder="Email phone number, or username" class="w-full px-4 py-2 border rounded placeholder:text-sm border-grey-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" required />
        </div>

        <div class="mt-56">
          <button type="button" class="w-full px-4 py-2 text-sm font-semibold text-white transition-colors duration-200 bg-gray-400 border border-gray500 rounded-3xl">
            Next
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>


</script>
