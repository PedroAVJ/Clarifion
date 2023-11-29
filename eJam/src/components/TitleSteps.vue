<script setup lang="ts">
import CompletedIcon from '@/assets/svg/elipses/completed.svg'
import CurrentIcon from '@/assets/svg/elipses/blue.svg'
import PendingIcon from '@/assets/svg/elipses/blue-ring.svg'
</script>

<template>
  <div class="flex flex-row justify-between mx-auto mb-10 mt-14 w-5/6">
    <div class="flex items-center space-x-5">
      <CompletedIcon />
      <span class="font-normal text-xl">Step 1 : Cart Review</span>
    </div>
    <div class="flex items-center space-x-5">
      <CompletedIcon />
      <span class="font-normal text-xl">Step 2 : Checkout</span>
    </div>
    <div class="flex items-center space-x-5">
      <div class="relative">
        <CurrentIcon />
        <div class="absolute flex items-center justify-center inset-0 font-extralight text-white">
          <span>3</span>
        </div>
      </div>
      <span class="font-bold text-xl">Step 3 : Special Offer</span>
    </div>
    <div class="flex items-center space-x-5">
      <div class="relative">
        <PendingIcon />
        <div
          class="absolute flex items-center justify-center inset-0 font-extralight text-[#2C7EF8]"
        >
          <span>4</span>
        </div>
      </div>
      <span class="font-normal text-xl">Step 4 : Confirmation</span>
    </div>
  </div>
</template>
