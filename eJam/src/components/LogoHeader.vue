<script setup lang="ts">
import McAfeeIcon from '@/assets/svg/logos/mc-afee.svg'
import NortonIcon from '@/assets/svg/logos/norton.svg'
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
</template>
