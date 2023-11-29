<script setup lang="ts">
import ReviewDiv from '@/components/ReviewDiv.vue'
import clarifionDescription from '@/assets/images/clarifion-description.png'
</script>

<template>
  <div class="flex flex-col w-1/2 space-y-6">
        <img
          :src="clarifionDescription"
          alt="clarifion description"
          class="w-auto h-auto rounded-lg"
        />
        <ReviewDiv />
      </div>
</template>
