<template>
  <div class="flex flex-col items-center justify-center min-h-screen bg-gray-100">
    <div class="w-full max-w-md overflow-hidden bg-white rounded-lg shadow-lg">
      <div class="p-8">
        <div class="flex items-center justify-center mb-8">
          <img src="/assets/images/logo.png" class="w-8 h-6" alt="" />
        </div>
        <h2 class="mb-4 text-2xl font-bold text-gray-800">Create Account</h2>
        <div>
          <input id="email" type="text" v-model="email" placeholder="Name" class="w-full px-4 py-2 border rounded border-grey-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" required />
        </div>
        <div class="mt-5">
          <input id="password" type="text" placeholder="Phone number" v-model="password" class="w-full px-4 py-2 border rounded border-grey-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" required />
        </div>
        <div class="flex mt-2 mb-6">
          <p class="mt-2 text-sm text-blue-500 cursor-pointer">Use email</p>
        </div>
        <div class="mb-4">
          <p class="mb-2 text-sm font-bold">Date of birth</p>
          <p class="text-xs leading-relaxed text-gray-500 font-Segoe UI">
            Facilisi sem pulvinar velit nunc, gravida scelerisque amet nibh sit.
            Quis bibendum ante phasellus metus, magna lacinia sed augue. Odio
            enim nascetur leo mauris vel eget. Pretium id ullamcorper blandit
            viverra dignissim eget tellus. Nibh mi massa in molestie a sit. Elit
            congue.
          </p>
        </div>
        <div class="flex flex-row w-full gap-4">
          <select class="w-2/4 px-4 py-3 text-sm text-gray-400 bg-white border rounded border-grey-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent">
            <option disabled selected hidden>Month</option>
            <option value="January">January</option>
            <option value="Febuary">Febuary</option>
            <option value="March">March</option>
            <option value="April">April</option>
            <option value="May">May</option>
            <option value="June">June</option>
            <option value="July">July</option>
            <option value="August">August</option>
            <option value="September">September</option>
            <option value="October">October</option>
            <option value="November">November</option>
            <option value="December">December</option>
          </select>
          <select class="w-1/4 px-4 py-3 text-sm text-gray-400 bg-white border rounded border-grey-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent">
            <option disabled selected hidden>Day</option>
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

          <select class="w-1/4 px-4 py-3 text-sm text-gray-400 bg-white border rounded border-grey-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent">
            <option disabled selected hidden>Year</option>
            <option value="25">1993</option>
            <option value="26">1994</option>
            <option value="27">1995</option>
            <option value="28">1996</option>
            <option value="29">1997</option>
            <option value="30">1998</option>
            <option value="31">1999</option>
            <option value="1">2000</option>
            <option value="2">2001</option>
            <option value="3">2002</option>
            <option value="4">2003</option>
            <option value="5">2004</option>
            <option value="6">2005</option>
            <option value="7">2006</option>
            <option value="8">2007</option>
            <option value="9">2008</option>
            <option value="10">2009</option>
            <option value="11">2010</option>
            <option value="12">2011</option>
            <option value="13">2012</option>
            <option value="14">2013</option>
            <option value="15">2014</option>
            <option value="16">2015</option>
            <option value="17">2016</option>
            <option value="18">2017</option>
            <option value="19">2018</option>
            <option value="20">2019</option>
            <option value="21">2020</option>
            <option value="22">2021</option>
            <option value="23">2022</option>
            <option value="24">2023</option>
          </select>
        </div>
        <div class="mt-10">
          <RouterLink :to="{ name: 'Home' }">
            <button type="button" @click="proceedLogin" class="w-full px-4 py-2 text-sm font-semibold text-white transition-colors duration-200 bg-blue-500 rounded-3xl hover:bg-blue-600">
              Next
            </button>
          </RouterLink>
          <div class="flex ml-2">
            <RouterLink :to="{ name: 'Home' }">
              <p class="mt-2 text-xs text-blue-500 cursor-pointer hover:underline">
                Already have an account ?&nbsp;<span class="font-bold"> Login</span>
              </p>
            </RouterLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>

</script>
