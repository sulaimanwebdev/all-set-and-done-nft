import React, {useState} from 'react'

const Header = () => {

  const [menu, setmenu] = useState('trannsform -translate-y-full')
  return (
    <>
    <div className="z-[99999999999999999999999] relative px-7 py-5 max-w-[1600px] mx-auto hidden lg:flex items-center justify-between w-full text-white">
    <div className="flex items-center gap-7">
      <img src="/images/logo.svg" alt="logo"  className="cursor-pointer"/>
      <div className="flex gap-5">
        <a href="/#">AI Tool</a>
        <a href="/#">The Platform</a>
        <a href="/#">Litepaper</a>
      </div>
    </div>


    <div className="flex items-center gap-5">

      <a href="/#"><img src="/images/medium.svg" alt="social-icon" /></a>
      <a href="/#"><img src="/images/telegram.svg" alt="social-icon" /></a>
      <a href="/#"><img src="/images/twitter.svg" alt="social-icon" /></a>
      <a href="/#"><img src="/images/instagram.svg" alt="social-icon" /></a>
      <a href="/#"><img src="/images/discord.svg" alt="social-icon" /></a>
      <a href="/#"><img src="/images/facebook.svg" alt="social-icon" /></a>
      <button className="px-4 py-3 ml-2 rounded-md bg-[#9F00FF80]">Connect Wallet</button>

    </div>

   

   </div>







   <div className=" z-[9999] w-full relative px-4 sm:px-7 py-5 max-w-[1600px] mx-auto flex lg:hidden items-center justify-between text-white">
      <img src="/images/logo.svg" alt="logo"  className="cursor-pointer"/>

      <div className={`fixed  transition top-0 left-0 w-full bg-[#18123A] px-5 py-7 ${menu}`}>
      <div className="flex flex-col gap-5 mb-5">
        <a href="/#">AI Tool</a>
        <a href="/#">The Platform</a>
        <a href="/#">Litepaper</a>
      </div>


    <div className="flex sm:items-center flex-col sm:flex-row gap-5">

      <a href="/#"><img src="/images/medium.svg" alt="social-icon" /></a>
      <a href="/#"><img src="/images/telegram.svg" alt="social-icon" /></a>
      <a href="/#"><img src="/images/twitter.svg" alt="social-icon" /></a>
      <a href="/#"><img src="/images/instagram.svg" alt="social-icon" /></a>
      <a href="/#"><img src="/images/discord.svg" alt="social-icon" /></a>
      <a href="/#"><img src="/images/facebook.svg" alt="social-icon" /></a>
      <button className="px-4 py-3 ml-2 rounded-md bg-[#9F00FF80]">Connect Wallet</button>

    </div>
    <div onClick={()=>{setmenu("transform -translate-y-full")}} className="absolute top-5 right-5 flex items-center justify-center rounded-full w-[48px] h-[48px] bg-white bg-opacity-25">
      <img src="/images/close.svg" alt="close-menu" className='max-w-[18px]' />
    </div>
      </div>
      

    <div onClick={()=>{setmenu("transform translate-y-0")}} className="flex items-center justify-center rounded-full w-[48px] h-[48px] bg-[#18123A]">
      <img src="/images/burger.svg" alt="burger-menu" />
    </div>

   </div>


    </>
  )
}

export default Header