<script setup lang="ts">
import StarbustIcon from '@/assets/svg/checkmarks/starbust.svg'
import TruckIcon from '@/assets/svg/truck-outline.svg'
import HeartIcon from '@/assets/svg/heart-outline.svg'
import ArrowSyncIcon from '@/assets/svg/checkmarks/arrow-sync.svg'
</script>

<template>
  <header class="flex flex-row justify-between bg-[#252F3D] py-3.5 px-5 md:px-32 w-full">
    <div class="block md:hidden text-white text-3xl font-thin">&lt;</div>
    <div class="flex flex-row items-center space-x-2">
      <StarbustIcon />
      <span class="text-white text-xs font-medium">30-DAY SATISFACTION GUARANTEE</span>
    </div>
    <div class="block md:hidden text-white text-3xl font-thin">&gt;</div>
    <div class="hidden md:block">
      <div class="flex flex-row items-center space-x-2">
        <TruckIcon />
        <span class="text-white text-xs font-medium">FREE DELIVERY ON ORDERS OVER $40.00</span>
      </div>
    </div>
    <div class="hidden md:block">
      <div class="flex flex-row items-center space-x-2">
        <HeartIcon />
        <span class="text-white text-xs font-medium">50.000+ HAPPY CUSTOMERS</span>
      </div>
    </div>
    <div class="hidden md:block">
      <div class="flex flex-row items-center space-x-2">
        <ArrowSyncIcon />
        <span class="text-white text-xs font-medium">100% MONEY BACK GUARANTEE</span>
      </div>
    </div>
  </header>
</template>
