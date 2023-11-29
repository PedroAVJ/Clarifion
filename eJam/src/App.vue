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
    <TitleSteps />
    <MainTitle />

    <main class="flex flex-row justify-between w-5/6 mx-auto mb-16 p-10 space-x-10">
      <LeftSide />

      <!--Right-->
      <div class="flex flex-col w-1/2 space-y-8">
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
