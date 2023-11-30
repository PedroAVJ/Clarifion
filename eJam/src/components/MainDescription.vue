<script setup lang="ts">
import FatStarIcon from '@/assets/svg/stars/fat.svg'
import CheckedIcon from '@/assets/svg/checked.svg'
import clarifionProduct from '@/assets/images/clarifion-product.png'
</script>

<template>
  <div class="flex flex-col space-y-4">
    <div class="flex flex-row space-x-6 w-full">
      <img
        :src="clarifionProduct"
        alt="clarifion product"
        class="bg-[#2C7EF8] w-20 h-20 md:w-40 md:h-40 rounded-lg"
      />
      <div class="flex flex-col w-3/4 h-20 md:h-40 space-y-3 md:space-y-3.5">
        <div class="flex flex-row justify-between">
          <span class="font-normal text-sm md:text-xl">Clarifion Air Ionizer</span>
          <div class="flex flex-row justify-between space-x-2.5 font-semibold">
            <div class="text-[#969696] text-xs md:text-base line-through">$180</div>
            <div class="text-[#2C7EF8] text-sm md:text-2xl">$84</div>
          </div>
        </div>
        <div class="flex flex-row">
          <FatStarIcon />
          <FatStarIcon />
          <FatStarIcon />
          <FatStarIcon />
          <FatStarIcon />
        </div>
        <div class="flex flex-row space-x-4 items-center">
          <CheckedIcon />
          <div class="font-light text-xs md:text-base text-[#37465A]">12 left in Stock</div>
        </div>
        <div class="font-normal text-base text-[#4D5254] hidden md:block">
          Simply plug a Clarifion into any standard outlet and replace bulky, expensive air
          purifiers with a simple.
        </div>
      </div>
    </div>
    <div class="font-normal text-base text-center text-[#4D5254] block md:hidden">
      Simply plug a Clarifion into any standard outlet and replace bulky, expensive air purifiers
      with a simple.
    </div>
  </div>
</template>
