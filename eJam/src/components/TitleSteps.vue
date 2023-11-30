<script setup lang="ts">
import CompletedIcon from '@/assets/svg/elipses/completed.svg'
import CurrentIcon from '@/assets/svg/elipses/blue.svg'
import PendingIcon from '@/assets/svg/elipses/blue-ring.svg'
</script>

<template>
  <div class="flex flex-row justify-between mx-auto mb-10 mt-14 w-11/12 md:w-5/6">
    <div class="flex flex-col md:flex-row items-center space-x-0 md:space-x-5">
      <CompletedIcon class="w-5 h-5 md:w-10 md:h-10" />
      <div class="text-center">
        <span class="font-normal text-xs md:text-xl hidden md:block">Step 1 : </span>
        <span class="font-normal text-xs md:text-xl">Cart Review</span>
      </div>
    </div>
    <div class="flex flex-col md:flex-row items-center space-x-0 md:space-x-5">
      <CompletedIcon class="w-5 h-5 md:w-10 md:h-10" />
      <div class="text-center">
        <span class="font-normal text-xs md:text-xl hidden md:block">Step 2 : </span>
        <span class="font-normal text-xs md:text-xl">Checkout</span>
      </div>
    </div>
    <div class="flex flex-col md:flex-row items-center space-x-0 md:space-x-5">
      <div class="relative">
        <CurrentIcon class="w-5 h-5 md:w-10 md:h-10" />
        <div class="absolute flex items-center justify-center inset-0 font-extralight text-white">
          <span>3</span>
        </div>
      </div>
      <div class="text-center">
        <span class="font-bold text-xs md:text-xl hidden md:block">Step 3 : </span>
        <span class="font-bold text-xs md:text-xl">Special Offer</span>
      </div>
    </div>
    <div class="flex flex-col md:flex-row items-center space-x-0 md:space-x-5">
      <div class="relative">
        <PendingIcon class="w-5 h-5 md:w-10 md:h-10" />
        <div
          class="absolute flex items-center justify-center inset-0 font-extralight text-[#2C7EF8]"
        >
          <span>4</span>
        </div>
      </div>
      <div class="text-center">
        <span class="font-normal text-xs md:text-xl hidden md:block">Step 4 : </span>
        <span class="font-normal text-xs md:text-xl">Confirmation</span>
      </div>
    </div>
  </div>
</template>
