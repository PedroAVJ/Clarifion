<script setup lang="ts">
import WhiteLockIcon from '@/assets/svg/locks/white.svg'
</script>

<template>
  <footer class="bg-[#252F3D] w-full">
    <div class="flex md:flex-row flex-col space-y-4 justify-between w-5/6 mx-auto my-5 md:my-6">
      <div class="flex flex-row items-center space-x-2 md:space-x-4">
        <div class="text-white text-xs font-normal md:font-medium">Copyright (C) 2023</div>
        <div class="border-r-[1px] border-r-white h-3 w-0"></div>
        <div class="text-white text-xs font-normal md:font-medium">
          clarifionsupport@clarifion.com
        </div>
      </div>
      <div class="flex flex-row items-center space-x-4 justify-center">
        <WhiteLockIcon />
        <span class="text-white text-xs font-normal md:font-medium"
          >Secure 256-Bit SSL Encryption.</span
        >
      </div>
    </div>
  </footer>
</template>
