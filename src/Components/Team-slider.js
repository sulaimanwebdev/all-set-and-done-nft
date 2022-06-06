import React, {useRef, useState} from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";


import SwiperCore, { Navigation } from "swiper";
SwiperCore.use([Navigation]);

const TeamSlider = () => {

    
let navigationPrevRef = React.useRef(null);
let navigationNextRef = React.useRef(null);
const [slidPrevsBtn, setSlidPrevsBtn] = React.useState(false);
const [slidNextBtn, setSlidNextBtn] = React.useState(true);




  return (
    <>
      <div className='z-[99999999999] w-full main-slider mt-[100px]'>
         <Swiper 
          slidesPerView={1}
         spaceBetween={30}
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
          }}



         modules={[Navigation]} className="mySwiper w-full h-full">
       
        <SwiperSlide className="bg-white bg-opacity-20 rounded-2xl px-5 w-fit min-h-[300px] py-5">
        <div className="">
           <img src="/images/team1.png" alt="team-member" className='max-h-[300px] object-left-top rounded-b-2xl object-cover w-full mx-auto text-center'/>
           <div className="mt-5">
             <div className="flex justify-between gap-3">
                <div className="text-white font-[700] text-[19px] mb-1">Rimas Sakaluskas</div>
               <a href="/#"><img src="/images/linkedin.svg" alt="linkedin" className="w-full min-w-[25px]"/></a>

             </div>
             <div className="opacity-60 text-[15px] text-white w-full">Artist, Painter. Traditional art.</div>

             <div>
             </div>
           </div>

         </div>
            
        </SwiperSlide>




        <SwiperSlide className="bg-white bg-opacity-20 rounded-2xl px-5 w-fit min-h-[300px] py-5">
        <div className="">
           <img src="/images/team2.png" alt="team-member" className='max-h-[300px] object-left-top rounded-b-2xl object-cover w-full mx-auto text-center'/>
           <div className="mt-5">
             <div className="flex justify-between gap-3">
                <div className="text-white font-[700] text-[19px] mb-1">Rimas Sakaluskas</div>
               <a href="/#"><img src="/images/linkedin.svg" alt="linkedin" className="w-full min-w-[25px]"/></a>

             </div>
             <div className="opacity-60 text-[15px] text-white w-full">Artist, Painter. Traditional art.</div>

             <div>
             </div>
           </div>

         </div>
            
        </SwiperSlide>



        <SwiperSlide className="bg-white bg-opacity-20 rounded-2xl px-5 w-fit min-h-[300px] py-5">
        <div className="">
           <img src="/images/team3.png" alt="team-member" className='max-h-[300px] object-left-top rounded-b-2xl object-cover w-full mx-auto text-center'/>
           <div className="mt-5">
             <div className="flex justify-between gap-3">
                <div className="text-white font-[700] text-[19px] mb-1">Rimas Sakaluskas</div>
               <a href="/#"><img src="/images/linkedin.svg" alt="linkedin" className="w-full min-w-[25px]"/></a>

             </div>
             <div className="opacity-60 text-[15px] text-white w-full">Artist, Painter. Traditional art.</div>

             <div>
             </div>
           </div>

         </div>
            
        </SwiperSlide>






        <SwiperSlide className="bg-white bg-opacity-20 rounded-2xl px-5 w-fit min-h-[300px] py-5">
        <div className="">
           <img src="/images/team3.png" alt="team-member" className='max-h-[300px] object-left-top rounded-b-2xl object-cover w-full mx-auto text-center'/>
           <div className="mt-5">
             <div className="flex justify-between gap-3">
                <div className="text-white font-[700] text-[19px] mb-1">Rimas Sakaluskas</div>
               <a href="/#"><img src="/images/linkedin.svg" alt="linkedin" className="w-full min-w-[25px]"/></a>

             </div>
             <div className="opacity-60 text-[15px] text-white w-full">Artist, Painter. Traditional art.</div>

             <div>
             </div>
           </div>

         </div>
            
        </SwiperSlide>





        <SwiperSlide className="bg-white bg-opacity-20 rounded-2xl px-5 w-fit min-h-[300px] py-5">
        <div className="">
           <img src="/images/team5.png" alt="team-member" className='max-h-[300px] object-left-top rounded-b-2xl object-cover w-full mx-auto text-center'/>
           <div className="mt-5">
             <div className="flex justify-between gap-3">
                <div className="text-white font-[700] text-[19px] mb-1">Rimas Sakaluskas</div>
               <a href="/#"><img src="/images/linkedin.svg" alt="linkedin" className="w-full min-w-[25px]"/></a>

             </div>
             <div className="opacity-60 text-[15px] text-white w-full">Artist, Painter. Traditional art.</div>

             <div>
             </div>
           </div>

         </div>
            
        </SwiperSlide>



        


        
      </Swiper>

      <div className="flex items-center justify-center gap-6 mt-10">
                <button
                  className="w-[50px] h-[50px] rounded-xl flex items-center justify-center bg-[#3E3576]"
                  
                  ref={navigationPrevRef}
                >
                  <img src="/images/left.svg"/>
                </button>
                <button
                  className="w-[50px] h-[50px] rounded-xl flex items-center justify-center bg-[#3E3576]"
                  
                  ref={navigationNextRef}
                >
                  <img src="/images/right.svg"/>

                </button>
              </div>
         </div>
    </>
  )
}

export default TeamSlider