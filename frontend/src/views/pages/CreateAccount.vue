<template>
  <div class="flex flex-col items-center justify-center min-h-screen bg-gray-100">
    <div class="w-full max-w-md overflow-hidden bg-white rounded-lg shadow-lg">
      <div class="p-8">
        <div class="flex items-center justify-center mb-8">
          <img src="/assets/images/logo.png" class="w-8 h-6" alt="" />
        </div>
        <h2 class="mb-4 text-2xl font-bold text-gray-800">Create Account</h2>
        <div class="flex flex-col gap-1">
          <input type="text" v-model="username" placeholder="Username" class="w-full px-4 py-2 border rounded border-grey-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" required />
          <div class="text-sm text-theme-red" v-if="error.username">{{ error.username }}</div>
        </div>
        <div class="mt-5 flex flex-col gap-1">
          <input type="text" placeholder="Email" v-model="email" class="w-full px-4 py-2 border rounded border-grey-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" required />
          <div class="text-sm text-theme-red" v-if="error.email">{{ error.email }}</div>
        </div>
        <div class="mt-5">
          <input type="text" placeholder="First Name" v-model="firstName" class="w-full px-4 py-2 border rounded border-grey-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" required />
        </div>
        <div class="mt-5">
          <input type="text" placeholder="Last Name" v-model="lastName" class="w-full px-4 py-2 border rounded border-grey-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" required />
        </div>
        <div class="mt-5 mb-4">
          <p class="mb-2 text-sm font-bold">Date of birth</p>
          <p class="text-xs leading-relaxed text-gray-500 font-Segoe UI">
            Facilisi sem pulvinar velit nunc, gravida scelerisque amet nibh sit.
            Quis bibendum ante phasellus metus, magna lacinia sed augue. Odio
            enim nascetur leo mauris vel eget. Pretium id ullamcorper blandit
            viverra dignissim eget tellus. Nibh mi massa in molestie a sit. Elit
            congue.
          </p>
        </div>
        <div class="flex flex-col gap-1">
          <div class="flex flex-row w-full gap-4">
            <select v-model="dobM" class="w-2/4 px-4 py-3 text-sm text-gray-400 bg-white border rounded border-grey-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent">
              <option disabled value="">Month</option>
              <option value="01">January</option>
              <option value="02">Febuary</option>
              <option value="03">March</option>
              <option value="04">April</option>
              <option value="05">May</option>
              <option value="06">June</option>
              <option value="07">July</option>
              <option value="08">August</option>
              <option value="09">September</option>
              <option value="10">October</option>
              <option value="11">November</option>
              <option value="12">December</option>
            </select>
            <select v-model="dobD" class="w-1/4 px-4 py-3 text-sm text-gray-400 bg-white border rounded border-grey-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent">
              <option disabled value="">Day</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
              <option value="11">11</option>
              <option value="12">12</option>
              <option value="13">13</option>
              <option value="14">14</option>
              <option value="15">15</option>
              <option value="16">16</option>
              <option value="17">17</option>
              <option value="18">18</option>
              <option value="19">19</option>
              <option value="20">20</option>
              <option value="21">21</option>
              <option value="22">22</option>
              <option value="23">23</option>
              <option value="24">24</option>
              <option value="25">25</option>
              <option value="26">26</option>
              <option value="27">27</option>
              <option value="28">28</option>
              <option value="29">29</option>
              <option value="30">30</option>
              <option value="31">31</option>
            </select>

            <select v-model="dobY" class="w-1/4 px-4 py-3 text-sm text-gray-400 bg-white border rounded border-grey-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent">
              <option disabled value="">Year</option>
              <option value="1990">1990</option>
              <option value="1991">1991</option>
              <option value="1992">1992</option>
              <option value="1993">1993</option>
              <option value="1994">1994</option>
              <option value="1995">1995</option>
              <option value="1996">1996</option>
              <option value="1997">1997</option>
              <option value="1998">1998</option>
              <option value="1999">1999</option>
              <option value="12000">2000</option>
              <option value="2001">2001</option>
              <option value="2002">2002</option>
              <option value="2003">2003</option>
              <option value="2004">2004</option>
              <option value="2005">2005</option>
              <option value="2006">2006</option>
              <option value="2007">2007</option>
              <option value="2008">2008</option>
              <option value="2009">2009</option>
              <option value="2010">2010</option>
            </select>
          </div>
          <div class="text-sm text-theme-red" v-if="error.date_of_birth">{{ error.date_of_birth }}</div>
        </div>
        <div class="mt-5 flex flex-col gap-1">
          <input type="text" placeholder="Phone Number" v-model="phoneNumber" class="w-full px-4 py-2 border rounded border-grey-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" required />
          <div class="text-sm text-theme-red" v-if="error.phone_number">{{ error.phone_number }}</div>
        </div>
        <div class="mt-5 flex flex-col gap-1">
          <input type="password" placeholder="Password" v-model="password" class="w-full px-4 py-2 border rounded border-grey-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" required />
          <div class="text-sm text-theme-red" v-if="error.password">{{ error.password }}</div>
        </div>
        <div class="mt-5 flex flex-col gap-1">
          <input type="password" placeholder="Password Confirmation" v-model="passwordConfirmation" class="w-full px-4 py-2 border rounded border-grey-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" required />
          <div class="text-sm text-theme-red" v-if="error.password2">{{ error.password2 }}</div>
        </div>
        <div class="mt-10">
          <button type="button" :class="!loading ? 'hover:bg-blue-600' : 'cursor-not-allowed'" @click="proceedSignup" class="w-full px-4 py-2 text-sm font-semibold text-white transition-colors duration-200 bg-blue-500 rounded-3xl">
            Sign up
          </button>
          <div class="flex ml-2">
            <RouterLink :to="{ name: 'Home' }">
              <p class="mt-2 text-xs text-blue-500 cursor-pointer hover:underline">
                Already have an account ?&nbsp;<span class="font-bold"> Login</span>
              </p>
            </RouterLink>
          </div>
        </div>
        <div class="mt-5">
          <div class="text-sm text-theme-green font-semibold" v-if="success">{{ success }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
import Auth from "@/composables/Auth.js"

const { signup } = Auth()
const username = ref('')
const email = ref('')
const firstName = ref('')
const lastName = ref('')
const dobY = ref('')
const dobM = ref('')
const dobD = ref('')
const password = ref('')
const passwordConfirmation = ref('')
const phoneNumber = ref('')
const loading = ref(false)
const success = ref(false)
const error = reactive({

  email: false,
  username: false,
  phone_number: false,
  date_of_birth: false,
  password: false,
  password2: false
})
const proceedSignup = () => {

  if(!loading.value){

    loading.value = true
    resetErrors()

    let data = {
      username: username.value,
      email: email.value,
      firstName: firstName.value,
      lastName: lastName.value,
      password: password.value,
      password2: passwordConfirmation.value,
      dob: dobY.value+'-'+dobM.value+'-'+dobD.value,
      phoneNumber: phoneNumber.value
    }
    signup(data).then((returnData) => {

      loading.value = false
      const response = JSON.parse(JSON.stringify(returnData))

      if(response.status == 201){

        success.value = 'Your account has been created successfully'
        resetForm()
      }else{

        if(response.data){

          for (let key in error) {
            if (key in response.data) {
              
              error[key] = response.data[key][0]
            }
          }
        }
      }
    })
  }
}

const resetErrors = () => {

  success.value = false
  Object.keys(error).forEach(key => error[key] = false)
}

const resetForm = () => {

  username.value = email.value = firstName .value = lastName.value = dobY.value = dobM.value = dobD.value = password.value = passwordConfirmation.value = phoneNumber.value = ''
}

</script>
