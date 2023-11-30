<script setup lang="ts">
import HeaderItems from './components/HeaderItems.vue'
import LogoHeader from './components/LogoHeader.vue'
import MainTitle from './components/MainTitle.vue'
import TitleSteps from './components/TitleSteps.vue'
import LeftSide from './components/LeftSide.vue'
import DescriptionText from './components/DescriptionText.vue'
import MainDescription from './components/MainDescription.vue'
import BulletPoints from './components/BulletPoints.vue'
import ExtraInfo from './components/ExtraInfo.vue'
import SaleButtons from './components/SaleButtons.vue'
import SealGuarantee from './components/SealGuarantee.vue'
import FooterItems from './components/FooterItems.vue'
</script>

<template>
  <div class="flex flex-col items-center font-manrope">
    <HeaderItems />
    <LogoHeader />
    <MainTitle />
    <TitleSteps />

    <main class="flex flex-row justify-between md:w-5/6 w-11/12 mx-auto mb-16 md:p-10 md:space-x-10">
      <LeftSide class="hidden md:block" />
      <div class="flex flex-col md:w-1/2 w-full space-y-8 justify-center">
        <DescriptionText />
        <MainDescription />
        <BulletPoints />
        <ExtraInfo />
        <SaleButtons />
        <SealGuarantee />
      </div>
    </main>

    <FooterItems />
  </div>
</template>
