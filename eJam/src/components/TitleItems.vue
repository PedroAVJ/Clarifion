<script setup lang="ts">
import McAfeeIcon from '@/assets/svg/logos/mc-afee.svg'
import NortonIcon from '@/assets/svg/logos/norton.svg'
import CompletedIcon from '@/assets/svg/elipses/completed.svg'
import CurrentIcon from '@/assets/svg/elipses/blue.svg'
import PendingIcon from '@/assets/svg/elipses/blue-ring.svg'
import clarifionLogo from '@/assets/images/clarifion-logo.png'
</script>

<template>
  <div class="flex flex-row justify-between w-5/6 mx-auto my-8">
    <img :src="clarifionLogo" alt="clarifion-logo" class="w-48 h-9" />
    <div class="flex flex-row items-center space-x-8">
      <McAfeeIcon class="w-20 h-8" />
      <NortonIcon class="w-20 h-8" />
    </div>
  </div>
  <div class="font-normal text-5xl">Wait ! Your Order In Progress.</div>
  <div class="font-normal text-2xl text-[#4D5254]">
    Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing
  </div>
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
