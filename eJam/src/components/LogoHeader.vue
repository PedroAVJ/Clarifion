<script setup lang="ts">
import McAfeeIcon from '@/assets/svg/logos/mc-afee.svg'
import NortonIcon from '@/assets/svg/logos/norton.svg'
import clarifionLogo from '@/assets/images/clarifion-logo.png'
</script>

<template>
  <div class="flex flex-row justify-between w-5/6 mx-auto my-8">
    <img :src="clarifionLogo" alt="clarifion-logo" class="md:w-48 md:h-9 w-28 h-5" />
    <div class="flex flex-row items-center space-x-8">
      <McAfeeIcon class="md:w-20 md:h-8 w-11 h-4" />
      <NortonIcon class="md:w-20 md:h-8 w-11 h-4" />
    </div>
  </div>
</template>
