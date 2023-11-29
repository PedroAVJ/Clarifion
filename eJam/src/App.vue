<script setup lang="ts">
// SVG's
import StarbustIcon from '@/assets/svg/checkmarks/starbust.svg'
import TruckIcon from '@/assets/svg/truck-outline.svg'
import HeartIcon from '@/assets/svg/heart-outline.svg'
import ArrowSyncIcon from '@/assets/svg/checkmarks/arrow-sync.svg'
import WhiteLockIcon from '@/assets/svg/locks/white.svg'
import McAfeeIcon from '@/assets/svg/logos/mc-afee.svg'
import NortonIcon from '@/assets/svg/logos/norton.svg'
import CompletedIcon from '@/assets/svg/elipses/completed.svg'
import CurrentIcon from '@/assets/svg/elipses/blue.svg'
import PendingIcon from '@/assets/svg/elipses/blue-ring.svg'
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
import clarifionLogo from '@/assets/images/clarifion-logo.png'
import clarifionDescription from '@/assets/images/clarifion-description.png'
import clarifionProduct from '@/assets/images/clarifion-product.png'
import profilePicture from '@/assets/images/profile-pic.png'
import GuaranteeSeal from '@/assets/images/guarantee-seal.png'
</script>

<template>
  <div class="flex flex-col min-h-screen">
    <!--Header-->
    <header class="bg-[#252F3D] py-4 px-4">
      <div class="container mx-auto flex justify-between items-center">
        <!--Satisfaction Guarantee Icon-->
        <div class="flex items-center">
          <StarbustIcon/>
          <span class="text-white text-xs font-manrope font-medium">30-DAY SATISFACTION GUARANTEE</span>
        </div>
  
        <!--Free Delivery Icon-->
        <div class="flex items-center">
          <TruckIcon/>
          <span class="text-white text-xs font-manrope font-medium">FREE DELIVERY ON ORDERS OVER $40.00</span>
        </div>
  
        <!--Happy Customers Icon-->
        <div class="flex items-center">
          <HeartIcon/>
          <span class="text-white text-xs font-manrope font-medium">50.000+ HAPPY CUSTOMERS</span>
        </div>
  
        <!--Money Back Guarantee Icon-->
        <div class="flex items-center">
          <ArrowSyncIcon/>
          <span class="text-white text-xs font-manrope font-medium">100% MONEY BACK GUARANTEE</span>
        </div>
      </div>
    </header>

    <!--Main-->
    <main class="flex-grow px-4">
      <!--Logos-->
      <div class="container mx-auto flex justify-between items-center mt-6">
        <img :src="clarifionLogo" alt="clarifion-logo" class="w-48 h-auto">

        <div class="flex items-center space-x-0">
          <McAfeeIcon class="w-32 h-auto"/>
          <NortonIcon class="w-32 h-auto"/>
        </div>
      </div>

      <!--Title-->
      <div class="flex flex-col items-center">
        <div>
          <span class="font-manrope font-normal text-5xl">
            Wait ! Your Order In Progress.
          </span>
        </div>
        <div>
          <span class="font-manrope font-normal text-[#4D5254] text-2xl">
            Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing
          </span>
        </div>
      </div>

      <!--Steps-->
      <div class="flex flex-row justify-between mx-40 my-10">
        <div class="flex items-center space-x-4">
          <CompletedIcon/>
          <span class="font-normal font-manrope text-xl text-black">Step 1 : Cart Review</span>
        </div>
        <div class="flex items-center space-x-4">
          <CompletedIcon/>
          <span class="font-normal font-manrope text-xl text-black">Step 2 : Checkout</span>
        </div>
        <div class="flex items-center space-x-4">
          <div class="relative">
            <CurrentIcon/>
            <div class="absolute flex items-center justify-center inset-0 font-manrope font-extralight text-white">
              <span>3</span>
            </div>
          </div>
          <span class="font-bold font-manrope text-xl text-black">Step 3 : Special Offer</span>
        </div>
        <div class="flex items-center space-x-4">
          <div class="relative">
            <PendingIcon/>
            <div class="absolute flex items-center justify-center inset-0 font-manrope font-extralight text-[#2C7EF8]">
              <span>4</span>
            </div>
          </div>
          <span class="font-normal font-manrope text-xl text-black">Step 4 : Confirmation</span>
        </div>
      </div>

      <!--Posting-->
      <div class="flex justify-between mx-40 my-20">
        <!--Left-->
        <div class="flex flex-col items-center w-1/2">
          <img :src="clarifionDescription" alt="clarifion description" class="w-5/6 h-5/6"/>

          <!--Review-->
          <div class="flex flex-col w-5/6 mt-10 p-5 space-y-5">
            <div class="self-start flex items-center space-x-2">
              <img :src="profilePicture" alt="profile picture" class="rounded-full w-12 h-12"/>
              <div class="flex flex-col space-y-2">
                <StarsIcon/>
                <div class="flex space-x-2">
                  <span class="font-bold font-manrope text-sm text-[#333333]">Ken T.</span>
                  <VerifiedIcon/>
                  <span class="font-normal font-manrope text-sm text-[#5BB59A]">Verified Customer</span>
                </div>
              </div>
            </div>
            <div>
              <span class="font-normal font-manrope text-base text-[#4D5254]">“As soon as the Clarifions arrived I put one in my bedroom. This was late in the afternoon. When I went to the bedroom in the evening it smelled clean. When I went to bed I felt I could breathe better. Wonderful.”</span>
            </div>
          </div>
        </div>

        <!--Right-->
        <div class="flex flex-col items-start w-1/2 space-y-6">
          <div class="font-manrope text-4xl w-4/5">
            <span class="text-[#2C7EF8]">ONE TIME ONLY</span>
            <span> Special Price For 6 Extra Clarifion For Only </span>
            <span class="text-[#2C7EF8]">$14 Each</span>
            <span> ($84.00 Total!)</span>
          </div>

          <!--Info-->
          <div class="flex w-full h-32 space-x-4">
            <img :src="clarifionProduct" alt="clarifion product" class="bg-[#2C7EF8] w-32 h-32 rounded-lg"/>
            <div class="flex flex-col w-3/4 space-y-2">
              <div class="flex justify-between">
                <span class="font-normal font-manrope text-xl">Clarifion Air Ionizer</span>
                <div class="flex justify-between space-x-2 font-manrope font-semibold">
                  <div class="text-[#969696] text-base line-through">$180</div>
                  <div class="text-[#2C7EF8] text-2xl">$84</div>
                </div>
              </div>
              <div class="flex">
                <FatStarIcon/>
                <FatStarIcon/>
                <FatStarIcon/>
                <FatStarIcon/>
                <FatStarIcon/>
              </div>
              <div class="flex">
                <CheckedIcon class="mr-4"/>
                <div class="font-manrope font-light text-base text-[#37465A]">12 left in Stock</div>
              </div>
              <div class="font-manrope font-normal text-base text-[#4D5254]">Simply plug a Clarifion into any standard outlet and replace bulky, expensive air purifiers with a simple.</div>
            </div>
          </div>

          <div class="flex space-x-4">
            <BlueMarkIcon/>
            <div class="font-manrope text-base text-[#4D5254]">
              <span class="font-normal">Negative Ion Technology may </span>
              <span class="font-bold">help with allergens</span>
            </div>
          </div>

          <div class="flex space-x-4">
            <BlueMarkIcon/>
            <div class="font-manrope text-base text-[#4D5254]">
              <span class="font-normal">Designed for </span>
              <span class="font-bold">air rejuvenation</span>
            </div>
          </div>
          
          <div class="flex space-x-4">
            <BlueMarkIcon/>
            <div class="font-manrope text-base text-[#4D5254]">
              <span class="font-bold">Perfect for every room</span>
              <span class="font-normal"> in all types of places.</span>
            </div>
          </div>

          <div class="flex bg-[#EDF3FD] p-4 rounded-lg w-full items-center space-x-4">
            <ModuloIcon/>
            <div class="font-manrope text-base font-normal">
              <span>Save </span>
              <span class="text-[#2C7EF8]">53% </span>
              <span>and get </span>
              <span class="text-[#2C7EF8]">6 extra Clarifision </span>
              <span>for only </span>
              <span class="text-[#2C7EF8]">$14 Each.</span>
            </div>
          </div>

          <div class="flex justify-center items-center bg-[#59AE43] rounded-full text-white font-bold text-xl font-manrope w-full py-4 space-x-5">
            <span>YES - CLAIM MY DISCOUNT</span>
            <ArrowIcon/>
          </div>

          <div class="flex w-full justify-between items-center font-manrope font-normal text-xs border border-[#CFCFCF] rounded py-2 px-4">
            <div class="pr-6">Free shipping</div>
            <div class="flex items-center border-x-[1px] border-x-[#CFCFCF] px-6">
              <GreyLockIcon/>
              <span>
                Secure 256-bit SSL encryption.
              </span>
            </div>
            <div class="flex justify-center pl-6">
              <VisaIcon/>
              <ShopPayIcon/>
              <PayPalIcon/>
              <MastercardIcon/>
              <GooglePayIcon/>
              <ApplePayIcon/>
              <AmericanExpressIcon/>
            </div>
          </div>

          <div class="flex justify-center items-center text-[#F82C2C] font-medium text-lg font-manrope w-full underline">
            <span>NO THANKS, I DON'T WANT THIS</span>
          </div>

          <div class="flex w-full">
            <img :src="GuaranteeSeal" alt="guarantee seal" class="w-1/5">
            <div class="w-4/5 font-manrope text-base text-[#4D5254]">
              <span class="font-normal">If you are not completely thrilled with your Clarifion - We have a </span>
              <span class="font-bold">
                30 day satisfaction guarantee
              </span>
              <span class="font-normal">. Please refer to our return policy at the bottom of the page for more details. Happy Shopping!</span>
            </div>
          </div>
        </div>
      </div>
    </main>

    <!--Footer-->
    <footer class="bg-[#252F3D] py-4 px-4">
      <div class="container mx-auto flex justify-between items-center">
        <!--Copyright-->
        <div class="flex items-center py-4 space-x-4">
          <div class="text-white text-xs font-manrope font-medium pr-4 border-r-[1px] border-r-white">Copyright (C) 2023</div>
          <div class="text-white text-xs font-manrope font-medium">clarifionsupport@clarifion.com</div>
        </div>
  
        <!--Security-->
        <div class="flex items-center">
          <WhiteLockIcon/>
          <span class="text-white text-xs font-manrope font-medium">Secure 256-Bit SSL Encryption.</span>
        </div>
      </div>
    </footer>
  </div>
</template>
