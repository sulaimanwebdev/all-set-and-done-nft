import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";



import SwiperCore, { Navigation } from "swiper";
SwiperCore.use([Navigation]);

const HeroSection = () => {

        
let navigationPrevRef = React.useRef(null);
let navigationNextRef = React.useRef(null);
const [slidPrevsBtn, setSlidPrevsBtn] = React.useState(false);
const [slidNextBtn, setSlidNextBtn] = React.useState(true);



    const [counter, setcounter] = useState(1)
  return (
    <>
     <div className="relative  pl-4 pr-4 sm:pl-7 sm:pr-7 xl:pr-[100px] mt-5 mb-2 z-[99] py-5 gap-[20px] lg:gap-[170px] mx-auto max-w-[1600px] flex items-center justify-between flex-col lg:flex-row text-white">
         <div>
             <div className="font-[700] text-[31px] mb-3">Synergy between Art Professionals and Artificial Intelligence</div>
             <div className="opacity-80 font-[300]  mb-8">The new generation of NFT linked to a real work of art with a unique security system. Release your mind! Become an author of NFT using our Artificial Intelligence module.</div>
             <button className='flex items-center gap-3 bg-white py-4 px-6 rounded-full text-[#9F00FF] font-bold text-[16px] relative'><span className='z-[999]'>EXPLORE MORE</span> <svg width="20" className='z-[999]' height="8" viewBox="0 0 20 8" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16 7L19 4L16 1M1 4L19 4L1 4Z" stroke="#9F00FF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
             <div className="w-full absolute top-0 left-0 rounded-full h-full bg-white z-[99]"></div>
             <div className="w-full absolute -top-[3px] -left-[3px] rounded-full h-full bg-[#FFE302]"></div>
             <div className="w-full absolute -bottom-[3px] -right-[3px] rounded-full h-full bg-[#9F00FF]"></div>
             </button>


             
        <div className=" hidden lg:flex  gap-[40px] xl:gap-[100px] flex-col xl:flex-row mt-16">
            <div>
                <div className="font-bold text-[18px] mb-2">Contracts</div>
                <div className="opacity-80 font-[300]"><div className='mb-1'>NFT Contract: 0x073....3c61A</div><div>Splitter Contract: 0xdb....77C2B</div></div>
            </div>
            <div>
                <div className="font-bold text-[18px] mb-2">Collection</div>
                <div className="opacity-80 font-[300]">
                    <div className='mb-1'>10 000 NFT tokens</div>
                    <div className='mb-1'>Ethereum Blockchain</div>
                    <div>ERC-721</div>
</div>
            </div>
        </div>


         </div>







         <div className='relative z-[99999999999] mt-16 lg:mt-0 w-full sm:min-w-[440px]  max-w-[440px] top-silder'>
         <Swiper 
         slidesPerView={1}
         onSwiper={(swiper) => {
            setTimeout(() => {
              swiper.params.navigation.prevEl =
                navigationPrevRef.current;
              swiper.params.navigation.nextEl =
                navigationNextRef.current;
              swiper.navigation.destroy();
              swiper.navigation.init();
              swiper.navigation.update();
            });
          }}
          navigation={{
            prevEl: navigationPrevRef.current,
            nextEl: navigationNextRef.current,
          }} modules={[Navigation]} className="mySwiper min-h-[650px] sm:min-h-[580px] w-full h-full">
       
        <SwiperSlide className="relative px-10 mx-0 my-0 pt-[40px]  w-full sm:min-w-[440px]  max-w-[440px] min-h-[300px]">
            
            <img src="/images/nft-1.png" alt="nft" className="mx-auto transform -translate-y-[30px] max-w-[200px] "/>
            <div className="w-[calc(100%-40px)] h-[calc(100%-50px)] absolute top-[80px] left-[20px]  bg-[#221B47] rounded-md -z-[99]"></div>
       
            <div className="font-[600] mt-6">PUBLIC MINT</div>
            <div className="text-[#9F00FF] font-[600] tracking-[0.2rem] mt-2">MINTED  21/10000</div>
            <div className="opacity-50 mt-1">Coming soon</div>
            <div className="flex justify-between items-center mt-2">
                <div className="text-[#FFE302] text-[18px] sm:text-[21px] font-[500]">0.10 ETH</div>
                <div className="opacity-50 text-sm">Created 22/01/2022</div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-5">
                <button className="py-4 bg-[#FFFFFF1A] gap-4 rounded-full flex items-center justify-center">21:10:26:37</button>
                <button className="py-4 bg-white text-[#9F00FF] font-bold gap-4 rounded-full flex items-center justify-center">MINT</button>

            </div>
        </SwiperSlide>


 


        <SwiperSlide className="relative px-10 mx-0 my-0 pt-[40px]  w-full sm:min-w-[440px]  max-w-[440px] min-h-[300px]">
            
            <img src="/images/nft-2.png" alt="nft" className="mx-auto transform -translate-y-[30px] max-w-[200px] "/>
            <div className="w-[calc(100%-40px)] h-[calc(100%-50px)] absolute top-[80px] left-[20px]  bg-[#221B47] rounded-md -z-[99]"></div>
       
            <div className="font-[600] mt-6">PRESALE MINT</div>
            <div className="text-[#9F00FF] font-[600] tracking-[0.2rem] mt-2">MINTED 21/10000</div>
            <div className="opacity-50 mt-1">24H evenmt</div>
            <div className="flex justify-between items-center mt-2">
                <div className="text-[#FFE302] text-[18px] sm:text-[21px] font-[500]">0.06 ETH</div>
                <div className="opacity-50 text-sm">Created 22/01/2022</div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-5 mb-2">
                <button className="h-[56px] bg-[#FFFFFF1A] gap-4 rounded-full flex items-center justify-between">
                       <button onClick={()=>{
                           if(counter === 1){
                               setcounter(1);
                           }
                           else{
                            setcounter(counter -1);

                           }
                       }} className="rounded-full w-[40px] ml-3 h-[40px] text-center flex items-center justify-center bg-white text-[#9F00FF] "><svg width="6" height="4" viewBox="0 0 6 4" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.668875 3.12V0.88H5.31688V3.12H0.668875Z" fill="#9F00FF"/></svg></button>
                       <div>{counter}</div>
                       <button
                       onClick={()=>{
                        
                         setcounter(counter +1);

                    }}
                       className="rounded-full w-[40px] mr-3 h-[40px] text-center flex items-center justify-center bg-white text-[#9F00FF] "><svg width="10" height="8" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3.72363 0.144H6.29963V2.944H9.21963V5.2H6.29963V8H3.72363V5.2H0.803625V2.944H3.72363V0.144Z" fill="#9F00FF"/></svg></button>
                </button>
                <button className="h-[56px] bg-white text-[#9F00FF] font-bold gap-4 rounded-full flex items-center justify-center">MINT</button>

            </div>
        </SwiperSlide>



      
        
      </Swiper>
      <div className="w-full z-[999999999999] absolute top-[40%] sm:top-[45%] left-0 flex items-center justify-between gap-6 mt-10">
                <button
                  className="w-[50px] transform -translate-x-2 h-[50px] rounded-xl flex items-center justify-center bg-[#3E3576]"
                  
                  ref={navigationPrevRef}
                >
                  <img src="/images/left.svg"/>
                </button>
                <button
                  className="w-[50px] transform translate-x-2 h-[50px] rounded-xl flex items-center justify-center bg-[#3E3576]"
                  
                  ref={navigationNextRef}
                >
                  <img src="/images/right.svg"/>

                </button>
              </div>
         </div>




        

     </div>

     <div className="flex lg:hidden items-center justify-center gap-5 pl-4 pr-4  z-[99] py-3 mx-auto max-w-[1600px]">

<a href="/#"><img src="/images/medium.svg" alt="social-icon" /></a>
<a href="/#"><img src="/images/telegram.svg" alt="social-icon" /></a>
<a href="/#"><img src="/images/twitter.svg" alt="social-icon" /></a>
<a href="/#"><img src="/images/instagram.svg" alt="social-icon" /></a>
<a href="/#"><img src="/images/discord.svg" alt="social-icon" /></a>
<a href="/#"><img src="/images/facebook.svg" alt="social-icon" /></a>

</div>


<div className="block text-white lg:hidden pl-4 pr-4 mx-auto max-w-[1600px]">
<div className="flex  gap-[40px] xl:gap-[100px] flex-col xl:flex-row mt-16">
            <div>
                <div className="font-bold text-[18px] mb-2">Contracts</div>
                <div className="opacity-80 font-[300]"><div className='mb-1'>NFT Contract: 0x073....3c61A</div><div>Splitter Contract: 0xdb....77C2B</div></div>
            </div>
            <div>
                <div className="font-bold text-[18px] mb-2">Collection</div>
                <div className="opacity-80 font-[300]">
                    <div className='mb-1'>10 000 NFT tokens</div>
                    <div className='mb-1'>Ethereum Blockchain</div>
                    <div>ERC-721</div>
</div>
            </div>
        </div>

</div>


    </>
  )
}

export default HeroSection