<script setup lang="ts">
import GuaranteeSeal from '@/assets/images/guarantee-seal.png'
</script>

<template>
  <div class="flex flex-row space-x-4">
    <img :src="GuaranteeSeal" alt="guarantee seal" class="w-12 h-12 md:w-20 md:h-20" />
    <div class="w-4/5 text-xs md:text-base text-[#4D5254]">
      <span class="font-normal"
        >If you are not completely thrilled with your Clarifion - We have a
      </span>
      <span class="font-bold"> 30 day satisfaction guarantee </span>
      <span class="font-normal"
        >. Please refer to our return policy at the bottom of the page for more details. Happy
        Shopping!</span
      >
    </div>
  </div>
</template>
