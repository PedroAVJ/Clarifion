<script setup lang="ts">
import StarsIcon from '@/assets/svg/stars/five-stars.svg'
import VerifiedIcon from '@/assets/svg/checkmarks/verified.svg'
import profilePicture from '@/assets/images/profile-pic-circle.png'
</script>

<template>
  <div class="flex flex-col p-6 space-y-5">
    <div class="flex flex-row w-1/2 space-x-3">
      <img :src="profilePicture" alt="profile picture" />
      <div class="flex flex-col space-y-2 my-auto">
        <StarsIcon />
        <div class="flex flex-row space-x-2.5">
          <span class="font-bold text-sm text-[#333333]">Ken T.</span>
          <VerifiedIcon />
          <span class="font-normal text-sm text-[#5BB59A]">Verified Customer</span>
        </div>
      </div>
    </div>
    <div class="font-normal text-base text-[#4D5254]">
      “As soon as the Clarifions arrived I put one in my bedroom. This was late in the afternoon.
      When I went to the bedroom in the evening it smelled clean. When I went to bed I felt I could
      breathe better. Wonderful.”
    </div>
  </div>
</template>
