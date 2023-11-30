<script setup lang="ts">
import ArrowIcon from '@/assets/svg/arrow.svg'
import GreyLockIcon from '@/assets/svg/locks/grey.svg'

// Cards
import AmericanExpressIcon from '@/assets/svg/cards/american-express.svg'
import ApplePayIcon from '@/assets/svg/cards/apple-pay.svg'
import GooglePayIcon from '@/assets/svg/cards/google-pay.svg'
import MastercardIcon from '@/assets/svg/cards/mastercard.svg'
import PayPalIcon from '@/assets/svg/cards/paypal.svg'
import ShopPayIcon from '@/assets/svg/cards/shop-pay.svg'
import VisaIcon from '@/assets/svg/cards/visa.svg'
</script>

<template>
  <div class="flex flex-col">
    <div
      class="flex flex-row justify-center items-center bg-[#59AE43] rounded-full text-white font-bold text-sm md:text-xl py-4 space-x-5"
    >
      <span>YES - CLAIM MY DISCOUNT</span>
      <ArrowIcon />
    </div>

    <div class="hidden md:block">
      <div
        class="flex flex-row justify-between items-center font-normal text-xs border border-[#CFCFCF] rounded py-2 px-4 space-x-3 md:space-x-4 mt-3 mb-5"
      >
        <div>Free shipping</div>
        <div class="border-r-[1px] border-x-[#CFCFCF] h-4"></div>
        <div class="flex flex-row space-x-2.5">
          <GreyLockIcon />
          <div>Secure 256-bit SSL encryption.</div>
        </div>
        <div class="border-r-[1px] border-x-[#CFCFCF] h-4 hidden md:block"></div>
        <div class="hidden md:block">
          <div class="flex flex-row justify-between">
            <VisaIcon />
            <ShopPayIcon />
            <PayPalIcon />
            <MastercardIcon />
            <GooglePayIcon />
            <ApplePayIcon />
            <AmericanExpressIcon />
          </div>
        </div>
      </div>
    </div>

    <div class="block md:hidden">
      <div
        class="flex flex-col items-center font-normal text-xs border border-[#CFCFCF] rounded py-2 px-4 space-x-3 mt-3 mb-5"
      >
        <div class="flex flex-row items-center">
          <div>Free shipping</div>
          <div class="border border-[#CFCFCF] h-4 w-[1px] mx-2"></div>
          <div class="flex flex-row space-x-2.5">
            <GreyLockIcon />
            <div>Secure 256-bit SSL encryption.</div>
          </div>
        </div>
        <div class="border-t-[1px] border-[#CFCFCF] w-full h-[1px] my-2"></div>
        <div class="flex flex-row justify-between">
          <VisaIcon />
          <ShopPayIcon />
          <PayPalIcon />
          <MastercardIcon />
          <GooglePayIcon />
          <ApplePayIcon />
          <AmericanExpressIcon />
        </div>
      </div>
    </div>

    <div
      class="flex flex-row justify-center items-center text-[#F82C2C] font-medium text-lg underline"
    >
      <span>NO THANKS, I DON'T WANT THIS</span>
    </div>
  </div>
</template>
