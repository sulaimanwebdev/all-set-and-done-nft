import React from 'react'

const Footer = () => {
  return (
    <>
    <div className="w-full bg-[#18123A]">
    <div className="px-7 z-[999999999]  relative mt-[30px] md:mt-[100px] mx-auto max-w-[1600px] text-white">

    <div className="py-6  flex items-start gap-7 md:gap-0 md:items-center flex-col  md:flex-row justify-between border-b border-[#443e61]">

        <div><img src="/images/logo.svg" alt="logo" /></div>
        <div className="grid  grid-cols-2 md:grid-cols-5 gap-6">
            <a href="/#" className='font-[500]'>Instagram</a>
            <a href="/#" className='font-[500]'>Facebook</a>
            <a href="/#" className='font-[500]'>Opensea</a>
            <a href="/#" className='font-[500]'>Twitter</a>
            <a href="/#" className='font-[500]'>Telegram</a>
        </div>

    </div>



    <div className="py-6  hidden md:flex items-center justify-between">
        <div className="flex items-center gap-5">
            <div className="opacity-70 text-[14px]">© 2022 0x0.art. All rights reserved</div>
            <div className="opacity-70 text-[14px]">hello@0x0.art</div>
        </div>
        <div className="flex items-center gap-6">
            <a href="/#" className='font-[400] text-[14px] opacity-70'>Policy</a>
            <a href="/#" className='font-[400] text-[14px] opacity-70'>Privacy</a>
            <a href="/#" className='font-[400] text-[14px] opacity-70'>Terms & Connditions</a>
        </div>

    </div>


    <div className="flex md:hidden py-6 items-center justify-center flex-col gap-3">
    <div className="opacity-70 text-[14px]">hello@0x0.art</div>
    <div className="flex items-center gap-4">
            <a href="/#" className='font-[400] text-[14px] opacity-70'>Policy</a>
            <a href="/#" className='font-[400] text-[14px] opacity-70'>Privacy</a>
            <a href="/#" className='font-[400] text-[14px] opacity-70'>Terms & Connditions</a>
        </div>

        <div className="opacity-70 text-[14px]">© 2022 0x0.art. All rights reserved</div>

    </div>


    </div>
    </div>
    </>
  )
}

export default Footer