<script setup lang="ts">
import HeaderItems from './components/HeaderItems.vue'
import TitleItems from './components/TitleItems.vue'
import FooterItems from './components/FooterItems.vue'

// SVG's
import StarsIcon from '@/assets/svg/stars/five-stars.svg'
import VerifiedIcon from '@/assets/svg/checkmarks/verified.svg'
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
import profilePicture from '@/assets/images/profile-pic.png'
import GuaranteeSeal from '@/assets/images/guarantee-seal.png'
</script>

<template>
  <div class="flex flex-col items-center font-manrope">
    <HeaderItems />
    <TitleItems />

    <!--Posting-->
    <main class="flex flex-row justify-between mx-40 my-20">
      <!--Left-->
      <div class="flex flex-col items-center w-1/2">
        <img :src="clarifionDescription" alt="clarifion description" class="w-5/6 h-5/6" />

        <!--Review-->
        <div class="flex flex-col w-5/6 mt-10 p-5 space-y-5">
          <div class="self-start flex items-center space-x-2">
            <img :src="profilePicture" alt="profile picture" class="rounded-full w-12 h-12" />
            <div class="flex flex-col space-y-2">
              <StarsIcon />
              <div class="flex space-x-2">
                <span class="font-bold text-sm text-[#333333]">Ken T.</span>
                <VerifiedIcon />
                <span class="font-normal text-sm text-[#5BB59A]"
                  >Verified Customer</span
                >
              </div>
            </div>
          </div>
          <div>
            <span class="font-normal text-base text-[#4D5254]"
              >“As soon as the Clarifions arrived I put one in my bedroom. This was late in the
              afternoon. When I went to the bedroom in the evening it smelled clean. When I went
              to bed I felt I could breathe better. Wonderful.”</span
            >
          </div>
        </div>
      </div>

      <!--Right-->
      <div class="flex flex-col items-start w-1/2 space-y-6">
        <div class="text-4xl w-4/5">
          <span class="text-[#2C7EF8]">ONE TIME ONLY</span>
          <span> Special Price For 6 Extra Clarifion For Only </span>
          <span class="text-[#2C7EF8]">$14 Each</span>
          <span> ($84.00 Total!)</span>
        </div>

        <!--Info-->
        <div class="flex w-full h-32 space-x-4">
          <img
            :src="clarifionProduct"
            alt="clarifion product"
            class="bg-[#2C7EF8] w-32 h-32 rounded-lg"
          />
          <div class="flex flex-col w-3/4 space-y-2">
            <div class="flex justify-between">
              <span class="font-normal text-xl">Clarifion Air Ionizer</span>
              <div class="flex justify-between space-x-2 font-semibold">
                <div class="text-[#969696] text-base line-through">$180</div>
                <div class="text-[#2C7EF8] text-2xl">$84</div>
              </div>
            </div>
            <div class="flex">
              <FatStarIcon />
              <FatStarIcon />
              <FatStarIcon />
              <FatStarIcon />
              <FatStarIcon />
            </div>
            <div class="flex">
              <CheckedIcon class="mr-4" />
              <div class="font-light text-base text-[#37465A]">12 left in Stock</div>
            </div>
            <div class="font-normal text-base text-[#4D5254]">
              Simply plug a Clarifion into any standard outlet and replace bulky, expensive air
              purifiers with a simple.
            </div>
          </div>
        </div>

        <div class="flex space-x-4">
          <BlueMarkIcon />
          <div class="text-base text-[#4D5254]">
            <span class="font-normal">Negative Ion Technology may </span>
            <span class="font-bold">help with allergens</span>
          </div>
        </div>

        <div class="flex space-x-4">
          <BlueMarkIcon />
          <div class="text-base text-[#4D5254]">
            <span class="font-normal">Designed for </span>
            <span class="font-bold">air rejuvenation</span>
          </div>
        </div>

        <div class="flex space-x-4">
          <BlueMarkIcon />
          <div class="text-base text-[#4D5254]">
            <span class="font-bold">Perfect for every room</span>
            <span class="font-normal"> in all types of places.</span>
          </div>
        </div>

        <div class="flex bg-[#EDF3FD] p-4 rounded-lg w-full items-center space-x-4">
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

        <div
          class="flex justify-center items-center bg-[#59AE43] rounded-full text-white font-bold text-xl w-full py-4 space-x-5"
        >
          <span>YES - CLAIM MY DISCOUNT</span>
          <ArrowIcon />
        </div>

        <div
          class="flex w-full justify-between items-center font-normal text-xs border border-[#CFCFCF] rounded py-2 px-4"
        >
          <div class="pr-6">Free shipping</div>
          <div class="flex items-center border-x-[1px] border-x-[#CFCFCF] px-6">
            <GreyLockIcon />
            <span> Secure 256-bit SSL encryption. </span>
          </div>
          <div class="flex justify-center pl-6">
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
          class="flex justify-center items-center text-[#F82C2C] font-medium text-lg w-full underline"
        >
          <span>NO THANKS, I DON'T WANT THIS</span>
        </div>

        <div class="flex w-full">
          <img :src="GuaranteeSeal" alt="guarantee seal" class="w-1/5" />
          <div class="w-4/5 text-base text-[#4D5254]">
            <span class="font-normal"
              >If you are not completely thrilled with your Clarifion - We have a
            </span>
            <span class="font-bold"> 30 day satisfaction guarantee </span>
            <span class="font-normal"
              >. Please refer to our return policy at the bottom of the page for more details.
              Happy Shopping!</span
            >
          </div>
        </div>
      </div>
    </main>

    <FooterItems />
  </div>
</template>
