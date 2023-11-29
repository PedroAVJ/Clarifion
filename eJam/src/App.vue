<script setup lang="ts">
import HeaderItems from './components/HeaderItems.vue'
import TitleItems from './components/TitleItems.vue'
import ReviewDiv from './components/ReviewDiv.vue'
import FooterItems from './components/FooterItems.vue'

// SVG's
import FatStarIcon from '@/assets/svg/stars/fat.svg'
import CheckedIcon from '@/assets/svg/checked.svg'
import BlueMarkIcon from '@/assets/svg/checkmarks/blue.svg'
import ModuloIcon from '@/assets/svg/modulo.svg'
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

// Images
import clarifionDescription from '@/assets/images/clarifion-description.png'
import clarifionProduct from '@/assets/images/clarifion-product.png'
import GuaranteeSeal from '@/assets/images/guarantee-seal.png'
</script>

<template>
  <div class="flex flex-col items-center font-manrope">
    <HeaderItems />
    <TitleItems />

    <main class="flex flex-row justify-between w-5/6 mx-auto mb-16 p-10 space-x-10">
      <!--Left-->
      <div class="flex flex-col w-1/2 space-y-6">
        <img
          :src="clarifionDescription"
          alt="clarifion description"
          class="w-auto h-auto rounded-lg"
        />
        <ReviewDiv />
      </div>

      <!--Right-->
      <div class="flex flex-col w-1/2 space-y-8">
        <div class="text-4xl">
          <span class="text-[#2C7EF8]">ONE TIME ONLY</span>
          <span> Special Price For 6 Extra Clarifion For Only </span>
          <span class="text-[#2C7EF8]">$14 Each</span>
          <span> ($84.00 Total!)</span>
        </div>

        <!--Info-->
        <div class="flex flex-row space-x-6 w-full">
          <img
            :src="clarifionProduct"
            alt="clarifion product"
            class="bg-[#2C7EF8] w-40 h-40 rounded-lg"
          />
          <div class="flex flex-col w-3/4 space-y-3.5">
            <div class="flex flex-row justify-between">
              <span class="font-normal text-xl">Clarifion Air Ionizer</span>
              <div class="flex flex-row justify-between space-x-2.5 font-semibold">
                <div class="text-[#969696] text-base line-through">$180</div>
                <div class="text-[#2C7EF8] text-2xl">$84</div>
              </div>
            </div>
            <div class="flex flex-row">
              <FatStarIcon />
              <FatStarIcon />
              <FatStarIcon />
              <FatStarIcon />
              <FatStarIcon />
            </div>
            <div class="flex flex-row space-x-4 items-center">
              <CheckedIcon />
              <div class="font-light text-base text-[#37465A]">12 left in Stock</div>
            </div>
            <div class="font-normal text-base text-[#4D5254]">
              Simply plug a Clarifion into any standard outlet and replace bulky, expensive air
              purifiers with a simple.
            </div>
          </div>
        </div>

        <div class="flex flex-col space-y-4">
          <div class="flex flex-row space-x-3">
            <BlueMarkIcon />
            <div class="text-base text-[#4D5254]">
              <span class="font-normal">Negative Ion Technology may </span>
              <span class="font-bold">help with allergens</span>
            </div>
          </div>
          <div class="flex flex-row space-x-3">
            <BlueMarkIcon />
            <div class="text-base text-[#4D5254]">
              <span class="font-normal">Designed for </span>
              <span class="font-bold">air rejuvenation</span>
            </div>
          </div>
          <div class="flex flex-row space-x-3">
            <BlueMarkIcon />
            <div class="text-base text-[#4D5254]">
              <span class="font-bold">Perfect for every room</span>
              <span class="font-normal"> in all types of places.</span>
            </div>
          </div>
        </div>

        <div class="flex flex-row bg-[#EDF3FD] py-3 px-4 rounded-lg items-center space-x-4">
          <ModuloIcon />
          <div class="text-base font-normal">
            <span>Save </span>
            <span class="text-[#2C7EF8]">53% </span>
            <span>and get </span>
            <span class="text-[#2C7EF8]">6 extra Clarifision </span>
            <span>for only </span>
            <span class="text-[#2C7EF8]">$14 Each.</span>
          </div>
        </div>

        <div class="flex flex-col">
          <div
            class="flex flex-row justify-center items-center bg-[#59AE43] rounded-full text-white font-bold text-xl py-4 space-x-5"
          >
            <span>YES - CLAIM MY DISCOUNT</span>
            <ArrowIcon />
          </div>
  
          <div
            class="flex flex-row justify-between items-center font-normal text-xs border border-[#CFCFCF] rounded py-2 px-4 space-x-4 mt-3 mb-5"
          >
            <div>Free shipping</div>
            <div class="border-r-[1px] border-x-[#CFCFCF] h-full"></div>
            <div class="flex flex-row space-x-2.5">
              <GreyLockIcon />
              <div> Secure 256-bit SSL encryption. </div>
            </div>
            <div class="border-r-[1px] border-x-[#CFCFCF] h-full"></div>
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
  
          <div
            class="flex flex-row justify-center items-center text-[#F82C2C] font-medium text-lg underline"
          >
            <span>NO THANKS, I DON'T WANT THIS</span>
          </div>
        </div>

        <div class="flex flex-row space-x-4 items-center">
          <img :src="GuaranteeSeal" alt="guarantee seal" class="w-1/5" />
          <div class="w-4/5 text-base text-[#4D5254]">
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
      </div>
    </main>

    <FooterItems />
  </div>
</template>
