<script setup lang="ts">
import CheckmarkIcon from '@/assets/svg/checkmarks/starbust.svg'
import TruckIcon from '@/assets/svg/truck-outline.svg'
import HeartIcon from '@/assets/svg/heart-outline.svg'
import ArrowSyncIcon from '@/assets/svg/checkmarks/arrow-sync.svg'
import WhiteLockIcon from '@/assets/svg/locks/white.svg'
</script>

<template>
  <div class="flex flex-col min-h-screen">
    <!--Header-->
    <header class="bg-[#252F3D] py-4">
      <div class="container mx-auto flex justify-between items-center">
        <!--Satisfaction Guarantee Icon-->
        <div class="flex items-center">
          <CheckmarkIcon/>
          <span class="text-white text-xs font-manrope font-medium">30-DAY SATISFACTION GUARANTEE</span>
        </div>
  
        <!--Free Delivery Icon-->
        <div class="flex items-center">
          <TruckIcon/>
          <span class="text-white text-xs font-manrope font-medium">Free delivery on orders over $40.00</span>
        </div>
  
        <!--Happy Customers Icon-->
        <div class="flex items-center">
          <HeartIcon/>
          <span class="text-white text-xs font-manrope font-medium">50.000+ HAPPY CUSTOMERS</span>
        </div>
  
        <!--Money Back Guarantee Icon-->
        <div class="flex items-center">
          <ArrowSyncIcon/>
          <span class="text-white text-xs font-manrope font-medium">100% Money Back Guarantee</span>
        </div>
      </div>
    </header>

    <main class="flex-grow">
      <!-- Your main content goes here -->
    </main>

    <!--Footer-->
    <footer class="bg-[#252F3D] py-4">
      <div class="container mx-auto flex justify-between items-center">
        <!--Copyright-->
        <div class="flex items-center">
          <span class="text-white text-xs font-manrope font-medium">Copyright (C) 2023</span>
          <div class="w-0 h-6 border border-white mx-3"></div>
          <span class="text-white text-xs font-manrope font-medium">clarifionsupport@clarifion.com</span>
        </div>
  
        <!--Security-->
        <div class="flex items-center">
          <WhiteLockIcon/>
          <span class="text-white text-xs font-manrope font-medium">Secure 256-bit SSL encryption.</span>
        </div>
      </div>
    </footer>
  </div>
</template>
