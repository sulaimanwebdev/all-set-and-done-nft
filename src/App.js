import FAQ from "./Components/FAQ";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import HeroSection from "./Components/Hero-section";
import Slider2 from "./Components/Slider-2";
import Slider1 from "./Components/Slider1";
import TeamSlider from "./Components/Team-slider";

function App() {
  return (
    <>
    <div className="h-full relative w-full bg-[#060023]">
      
    <div className="z-[99999999999999999999999999999] relative">
    <Header/> 
    </div>
     <HeroSection/>



     <div className="px-7 z-[999999999] relative mt-[100px] pb-10 mx-auto max-w-[1600px] text-white">
     <div className=" flex items-center justify-between flex-col sm:flex-row">
       <div className="text-center mb-10 sm:mb-0 sm:text-left sm:w-[800px]">
         <div className="text-[#9F00FF] mb-3 font-[500] text-[18px]">ABOUT US</div>
         <div className="text-[34px] font-[700]">About Project</div>
       </div>
       <div className="leading-[28px] opacity-90">
       In order to facilitate universal access to the world of digital art, 0x0.art platform was created through which users can create original digital art using our AI tool, tokenize their art, print it, and authenticate physical reproductions using the Ethereum blockchain as verified assets.
       </div>
     </div>


     <div className="bg-radial-1 relative  mt-[120px] sm:mt-[170px] w-full rounded-md flex items-center justify-center pb-14 md:pb-0 gap-[20px] md:gap-[60px] lg:gap-[150px] flex-col md:flex-row">
        <img src="/images/nft-3.png" alt="nft" className="w-[240px] transform -translate-y-16" />
        <div className="px-4 md:px-0 w-full md:w-[600px]">
          <div className="flex items-center gap-5">
            <img src="/images/tick.svg" alt="tick" />
            <div className="font-[700] text-[17px]">Every NFT owner will have access to create it's own artwork, using our Artificial Intelligence module, convert it to NFT and claim for relief printed version</div>
          </div>
          <div className="flex items-center gap-5 mt-[28px]">
            <img src="/images/tick.svg" alt="tick" />
            <div className="font-[700] text-[17px]">1% From Platform Fees And 1% Tokens Royalty</div>
          </div>

          <div className="flex items-center gap-5 mt-[35px]">
            <img src="/images/tick.svg" alt="tick" />
            <div className="font-[700] text-[17px]">Tickets To Virtual Gallery On Metaverse</div>
          </div>

        </div>

     </div>





     <div className=" flex items-center text-center md:text-left justify-between flex-col md:flex-row mt-[120px]">
       <div className="lg:w-[800px]">
         <div className="text-[#9F00FF] mb-3 font-[500] text-[18px]">COLLECTION</div>
         <div className="text-[34px] font-[700]">Are you interested with<br/>this art?</div>
       </div>
       <div className="leading-[28px] opacity-90">
      <a href="/#" className="hidden  md:flex text-[#9F00FF] font-[600] text-[16px]">CHECK ON OPENSEA</a>
       </div>
     </div>

    <Slider1/>



      <div className="w-full mt-[60px] md:mt-[100px]">
      <div className="text-[#9F00FF] mb-3 font-[500] text-[18px] text-center tracking-wide">PRODUCTS & FEATURES</div>
      <div className="text-center font-[800] text-[38px] tracking-wide">Explore The 0x0 Platform</div>
      <div className="opacity-70 mt-5 text-[17px] max-w-[500px] mx-auto text-center leading-relaxed">We offer a variety of products & services to help you create, validate, and monetize your digital art.</div>
     
     <div className="grid grid-cols-1 md:grid-cols-3 gap-7 mt-16">
         <div className="text-center flex items-center justify-center flex-col gap-12 rounded-2xl bg-[#18123A] px-5 py-[50px]">
           <img src="/images/icon-1.svg" alt="icon" />
           <div className="max-w-[300px] leading-relaxed">Create new or list your NFT to print shop. Set price and prints limit. Earn from your NFT.</div>
         </div>
         
         <div className="text-center flex items-center justify-center flex-col gap-12 rounded-2xl bg-[#18123A] px-5 py-[50px]">
           <img src="/images/icon-2.svg" alt="icon" />
           <div className="max-w-[300px] leading-relaxed">Use our AI tool to create awesome artworks from text. print it, convert to nft or sell at 0x0.art</div>
         </div>

         <div className="text-center flex items-center justify-center flex-col gap-12 rounded-2xl bg-[#18123A] px-5 py-[50px]">
           <img src="/images/icon-3.svg" alt="icon" />
           <div className="max-w-[300px] leading-relaxed">List printed artwork. Just scan holo sticker set price and list.</div>
         </div>

     </div>





     <div className="flex items-center text-center lg:text-left w-full justfiy-between gap-[50px] xl:gap-[200px] flex-col lg:flex-row mt-40">
        <div className="w-full lg:w-[900px]">
         <div className="text-[#9F00FF] mb-3 text-[18px] tracking-wide font-[600]">AUTHENTICATION</div>
         <div className="text-[38px] font-[700]">Bridging Digital &<br/>Physical Artwork</div>
         <div className="opacity-70 mt-7">Printed artworks will be able to be certified and authenticated by 0x0 Art's new holographic element, which includes a cryptographic key. This will allow for the creation of a new market for digital artworks. Counterfeiting or removing holographic certificate without damage is impossible.</div>
         <button className='hidden lg:flex mt-[60px] items-center gap-3 bg-white py-4 px-6 rounded-full text-[#9F00FF] font-bold text-[16px] relative'><span className='z-[999]'>VIEW STICKER PROTOTYPE</span> <svg width="20" className='z-[999]' height="8" viewBox="0 0 20 8" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16 7L19 4L16 1M1 4L19 4L1 4Z" stroke="#9F00FF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
             <div className="w-full absolute top-0 left-0 rounded-full h-full bg-white z-[99]"></div>
             <div className="w-full absolute -top-[3px] -left-[3px] rounded-full h-full bg-[#FFE302]"></div>
             <div className="w-full absolute -bottom-[3px] -right-[3px] rounded-full h-full bg-[#9F00FF]"></div>
             </button>
        </div>

        <div>
          <img src="/images/qr.svg"  alt="qr" className="w-[950px]"/>
         </div>
      </div>


     
     
      </div>
     


     
    </div>


    <div className="bg-radial-2 rounded-2xl w-full">
    <div className="px-7 z-[999999999] relative mt-[100px] pb-10 mx-auto max-w-[1600px]">
    <div className="pt-20 flex items-center gap-16 text-white flex-col md:flex-row text-center md:text-left ">
       <div className="w-full lg:w-[800px]">
         <div className="text-[#9F00FF] mb-3 font-[500] text-[18px]">PRINTING</div>
         <div className="text-[34px] font-[700]">New Relief <br className="hidden md:block"/> Printing<br className="hidden md:block"/> Technology</div>
       </div>
       <div className="leading-[28px] opacity-90 max-w-[900px]">
       Each and every customer of 0x0 Art will have access to high-end digital printing services allowing anyone to convert digital artwork into physical artwork that can be sold or traded.
This unique relief printing technology makes it possible to print unique embossing at the same time as the item is digitally printed at virtually any size and without repeating the embossing pattern. So structure and motif can be perfectly matched to each other, or the structure may be completely different than the picture itself – it all depends on the designer’s creativity. 
       </div>
     </div>





       <Slider2/>






       
    <div className="flex items-center flex-col lg:flex-row w-full justfiy-between gap-[100px] lg:gap-[200px] text-white mt-[130px]">
        <div className="lg:w-[600px] text-center lg:text-left">
         <div className="text-[#9F00FF] mb-3 text-[18px] leading-loose font-[600]">NEXT-GEN AI</div>
         <div className="text-[34px] font-[700]">Pretrained AI Drawing Tool</div>
         <div className="opacity-70 mt-7">An AI that has been trained to make artwork based on the language provided by the user in a specific style so that the artwork created will remain unique and indistinguishable from human artists.</div>
         <button className='hidden lg:flex mt-[130px] items-center gap-3 bg-white py-4 px-6 rounded-full text-[#9F00FF] font-bold text-[16px] relative'><span className='z-[999]'>MORE ABOUT AI TOOL</span> <svg width="20" className='z-[999]' height="8" viewBox="0 0 20 8" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16 7L19 4L16 1M1 4L19 4L1 4Z" stroke="#9F00FF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
             <div className="w-full absolute top-0 left-0 rounded-full h-full bg-white z-[99]"></div>
             <div className="w-full absolute -top-[3px] -left-[3px] rounded-full h-full bg-[#FFE302]"></div>
             <div className="w-full absolute -bottom-[3px] -right-[3px] rounded-full h-full bg-[#9F00FF]"></div>
             </button>
        </div>

        <div>
         <div className="font-[600] text-[17px] mb-5 text-center ">Painting of London underwater city with purple sky</div>
          <img src="/images/nft-4.png"  alt="nft" className="w-[450px]"/>
          <button className='flex lg:hidden mt-[40px] mx-auto items-center gap-3 bg-white py-4 px-6 rounded-full text-[#9F00FF] font-bold text-[16px] relative'><span className='z-[999]'>MORE ABOUT AI TOOL</span> <svg width="20" className='z-[999]' height="8" viewBox="0 0 20 8" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16 7L19 4L16 1M1 4L19 4L1 4Z" stroke="#9F00FF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
             <div className="w-full absolute top-0 left-0 rounded-full h-full bg-white z-[99]"></div>
             <div className="w-full absolute -top-[3px] -left-[3px] rounded-full h-full bg-[#FFE302]"></div>
             <div className="w-full absolute -bottom-[3px] -right-[3px] rounded-full h-full bg-[#9F00FF]"></div>
             </button>
         </div>
      </div> 









           <div className="mt-[160px] max-w-[800px] mx-auto">
           <div className="text-[#9F00FF] mb-3 font-[500] text-[18px] text-center tracking-wide">Roadmap</div>
      <div className="text-center font-[800] text-white text-[38px] tracking-wide">What are the steps?</div>
      <div className="opacity-70 mt-5 text-[17px] text-white max-w-[500px] mx-auto text-center leading-relaxed">Pellentesque diam volutpat commodo sed egestas egestas fringilla phasellus faucibus</div>
     

           <div className="mt-20 relative">
             
             <img src="/images/union1.svg" alt="lines" className="hidden xl:block absolute top-[28px] -right-[150px]"/>
             <img src="/images/union2.svg" alt="lines" className="hidden xl:block absolute top-[342px] -left-[200px]"/>
             <img src="/images/union3.svg" alt="lines" className="hidden xl:block absolute top-[658px] -right-[150px]"/>
             <img src="/images/union2.svg" alt="lines" className="hidden xl:block absolute top-[972px] -left-[200px]"/>


  
            <div>
              <div className="flex flex-col md:flex-row items-start md:items-center gap-5">
                <div className="w-[60px] h-[60px] text-[18px] flex items-center justify-center rounded-xl bg-[#060023] text-white">01</div>
                <div className="text-white font-[600] text-[24px]">Phase one 2022 end of Q1</div>
              </div>

              <div className="flex gap-[0] lg:gap-[90px] flex-col lg:flex-row xl:gap-[140px] text-white ml-5 md:mr-0 md:transform md:translate-x-[98px] mt-10">

              <ul className="list-disc">
                <li className="mb-5 lg:mb-3 opacity-80">Splitter Smart Contract Release</li>
                <li className="mb-5 lg:mb-3 opacity-80">NFT Smart Contract Release</li>
                <li className="mb-5 lg:mb-3 opacity-80">Whitelist Sale Event</li>
                <li className="mb-5 lg:mb-3 opacity-80">Holo Sticker Prototype</li>
              </ul>

              <ul className="list-disc">
                <li className="mb-5 lg:mb-3 opacity-80">Marketplace Visuals, Litepaper</li>
                <li className="mb-5 lg:mb-3 opacity-80">Test of initial AI module</li>
                <li className="mb-5 lg:mb-3 opacity-80">Test of 0x0.art platform</li>
              </ul>

              </div>
            </div>






            <div className="mt-[70px]">
              <div className="flex flex-col md:flex-row items-start md:items-center gap-5">
                <div className="w-[60px] h-[60px] text-[18px] flex items-center justify-center rounded-xl bg-[#060023] text-white">02</div>
                <div className="text-white font-[600] text-[24px]">Phase two 2022 end of Q2</div>
              </div>

              <div className="flex gap-[0] lg:gap-[90px] flex-col lg:flex-row xl:gap-[140px] text-white ml-5 md:mr-0 md:transform md:translate-x-[98px] mt-10">

              <ul className="list-disc">
                <li className="mb-5 lg:mb-3 opacity-80">Admin area for NFT owners (check, withdrawal NFT balance)</li>
                <li className="mb-5 lg:mb-3 opacity-80">AI Drawing Tool (with conversion to NFT feature)</li>
              </ul>

              <ul className="list-disc">
                <li className="mb-5 lg:mb-3 opacity-80">Public Mint Event</li>
              </ul>

              </div>
            </div>





            <div className="mt-[100px] lg:mt-[145px]">
              <div className="flex flex-col md:flex-row items-start md:items-center gap-5">
                <div className="w-[60px] h-[60px] text-[18px] flex items-center justify-center rounded-xl bg-[#060023] text-white">03</div>
                <div className="text-white font-[600] text-[24px]">Phase three 2022 end of Q3</div>
              </div>

              <div className="flex gap-[0] lg:gap-[90px] flex-col lg:flex-row xl:gap-[140px]  text-white ml-5 md:mr-0 md:transform md:translate-x-[98px] translate-y-5 mt-10">

              <ul className="list-disc">
                <li className="mb-5 lg:mb-3 opacity-80">Marketplace Launch - Secondary Marketplace (sell, buy, auction)</li>
                <li className="mb-5 lg:mb-3 opacity-80">Holo Certificate Checker Tool</li>
              </ul>

              <ul className="list-disc">
                <li className="mb-5 lg:mb-3 opacity-80">Implementation of Unique Pretrained AI Model for Drawing Tool</li>
                <li className="mb-5 lg:mb-3 opacity-80">Claim Printed Artwork for NFT Owners (38cmx50cm)</li>
              </ul>

              </div>
            </div>





            <div className="mt-[95px]">
              <div className="flex flex-col md:flex-row items-start md:items-center gap-5">
                <div className="w-[60px] h-[60px] text-[18px] flex items-center justify-center rounded-xl bg-[#060023] text-white">04</div>
                <div className="text-white font-[600] text-[24px]">Phase four 2022 end of Q4</div>
              </div>

              <div className="flex gap-[0] lg:gap-[90px] flex-col lg:flex-row xl:gap-[140px] text-white ml-5 md:mr-0 md:transform md:translate-x-[98px] mt-10">

              <ul className="list-disc">
                <li className="mb-5 lg:mb-3 opacity-80">Implementation of GenArt for Drawing Tool</li>
                <li className="mb-5 lg:mb-3 opacity-80">Implementation of MultiChain</li>
              </ul>

              <ul className="list-disc">
                <li className="mb-5 lg:mb-3 opacity-80">Virtual Gallery Launch</li>
              </ul>

              </div>
            </div>








            <div className="mt-[100px] mb-[30px] lg:mb-[0] lg:mt-[143px]">
              <div className="flex flex-col md:flex-row items-start md:items-center gap-5">
                <div className="w-[60px] h-[60px] text-[18px] flex items-center justify-center rounded-xl bg-[#060023] text-white">05</div>
                <div className="text-white font-[600] text-[24px]">Phase five 2023</div>
              </div>

              <div className="flex gap-[0] lg:gap-[90px] flex-col lg:flex-row xl:gap-[140px] text-white ml-5 md:mr-0 md:transform md:translate-x-[98px] mt-10">

              <ul className="list-disc">
                <li className="mb-5 lg:mb-3 opacity-80">Project development with foundation of art</li>
                <li className="mb-5 lg:mb-3 opacity-80">Project accountability for European Regional Development Fund</li>
                <li className="mb-5 lg:mb-3 opacity-80">Exhibition of Most populars artworks on 0x0.art platform</li>
              </ul>

              <ul className="list-disc">
                <li className="mb-5 lg:mb-3 opacity-80">Cooperation with association of art</li>
                <li className="mb-5 lg:mb-3 opacity-80">Participation at FESPA GLOBAL PRINT EXPO 2023</li>
              </ul>

              </div>
            </div>












           </div>






           </div>



    
    </div>
    </div>



    <div className="px-7 z-[999999999] relative mt-[80px] pb-10 mx-auto max-w-[1600px]">
    <div className="text-[#9F00FF] mb-3 font-[500] text-[18px] text-center tracking-wide">Our Team</div>
      <div className="text-center font-[800] text-white text-[38px] tracking-wide">Meet The People Behind The Platform</div>
      <div className="opacity-70 mt-5 text-[17px] text-white max-w-[900px] mx-auto text-center leading-relaxed">The founding team behind 0x0 ART consists of people who would be considered art enthusiasts and blockchain developers who have a vision of a truly global art gallery that will boost art sales and the artist's name and bring the blockchain community together.</div>
     

       <div className="hidden sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 mt-10 mb-12">
         <div className="rounded-xl bg-[#221B47] px-5 py-5">
           <img src="/images/team1.png" alt="team-member" />
           <div className="mt-5">
             <div className="flex justify-between gap-3">
                <div className="text-white font-[700] text-[19px] mb-1">Ausra Kalinauskiene</div>
               <a href="/#"><img src="/images/linkedin.svg" alt="linkedin" className="w-full min-w-[25px]"/></a>

             </div>
             <div className="opacity-60 text-[15px] text-white w-full">CEO. Design And Production of Holograms, Optical Security.</div>

             <div>
             </div>
           </div>

         </div>





         <div className="rounded-xl bg-[#221B47] px-5 py-5">
           <img src="/images/team2.png" alt="team-member" />
           <div className="mt-5">
             <div className="flex justify-between gap-3">
                <div className="text-white font-[700] text-[19px] mb-1">Marius Vilkaitis</div>
               <a href="/#"><img src="/images/linkedin.svg" alt="linkedin" className="w-full min-w-[25px]"/></a>

             </div>
             <div className="opacity-60 text-[15px] text-white w-full">Chief of IT and Digital Process Division</div>

             <div>
             </div>
           </div>

         </div>




         <div className="rounded-xl bg-[#221B47] px-5 py-5">
           <img src="/images/team3.png" alt="team-member" />
           <div className="mt-5">
             <div className="flex justify-between gap-3">
                <div className="text-white font-[700] text-[19px] mb-1">Prof. Dr. Vidas  Raudonis</div>
               <a href="/#"><img src="/images/linkedin.svg" alt="linkedin" className="w-full min-w-[25px]"/></a>

             </div>
             <div className="opacity-60 text-[15px] text-white w-full">Chief of ITChief of Artificial Intelligence Division and Digital Process Division</div>

             <div>
             </div>
           </div>

         </div>







         <div className="rounded-xl bg-[#221B47] px-5 py-5">
           <img src="/images/team4.png" alt="team-member" />
           <div className="mt-5">
             <div className="flex justify-between gap-3">
                <div className="text-white font-[700] text-[19px] mb-1">Ugne Buziinskaite</div>
               <a href="/#"><img src="/images/linkedin.svg" alt="linkedin" className="w-full min-w-[25px]"/></a>

             </div>
             <div className="opacity-60 text-[15px] text-white w-full">Chief of Art Division</div>

             <div>
             </div>
           </div>

         </div>






         <div className="rounded-xl bg-[#221B47] px-5 py-5">
           <img src="/images/team5.png" alt="team-member" />
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




         <div className="rounded-xl bg-[#221B47] px-5 py-5">
           <img src="/images/team1.png" alt="team-member" />
           <div className="mt-5">
             <div className="flex justify-between gap-3">
                <div className="text-white font-[700] text-[19px] mb-1">Ausra Kalinauskiene</div>
               <a href="/#"><img src="/images/linkedin.svg" alt="linkedin" className="w-full min-w-[25px]"/></a>

             </div>
             <div className="opacity-60 text-[15px] text-white w-full">CEO. Design And Production of Holograms, Optical Security.</div>

             <div>
             </div>
           </div>

         </div>





         <div className="rounded-xl bg-[#221B47] px-5 py-5">
           <img src="/images/team2.png" alt="team-member" />
           <div className="mt-5">
             <div className="flex justify-between gap-3">
                <div className="text-white font-[700] text-[19px] mb-1">Marius Vilkaitis</div>
               <a href="/#"><img src="/images/linkedin.svg" alt="linkedin" className="w-full min-w-[25px]"/></a>

             </div>
             <div className="opacity-60 text-[15px] text-white w-full">Chief of IT and Digital Process Division</div>

             <div>
             </div>
           </div>

         </div>




         <div className="rounded-xl bg-[#221B47] px-5 py-5">
           <img src="/images/team3.png" alt="team-member" />
           <div className="mt-5">
             <div className="flex justify-between gap-3">
                <div className="text-white font-[700] text-[19px] mb-1">Prof. Dr. Vidas  Raudonis</div>
               <a href="/#"><img src="/images/linkedin.svg" alt="linkedin" className="w-full min-w-[25px]"/></a>

             </div>
             <div className="opacity-60 text-[15px] text-white w-full">Chief of ITChief of Artificial Intelligence Division and Digital Process Division</div>

             <div>
             </div>
           </div>

         </div>







         <div className="rounded-xl bg-[#221B47] px-5 py-5">
           <img src="/images/team4.png" alt="team-member" />
           <div className="mt-5">
             <div className="flex justify-between gap-3">
                <div className="text-white font-[700] text-[19px] mb-1">Ugne Buziinskaite</div>
               <a href="/#"><img src="/images/linkedin.svg" alt="linkedin" className="w-full min-w-[25px]"/></a>

             </div>
             <div className="opacity-60 text-[15px] text-white w-full">Chief of Art Division</div>

             <div>
             </div>
           </div>

         </div>






         <div className="rounded-xl bg-[#221B47] px-5 py-5">
           <img src="/images/team5.png" alt="team-member" />
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


       </div>

       


             <div className="block sm:hidden">
               <TeamSlider/>
             </div>



          <div className="flex items-center justify-center flex-col text-center lg:text-left lg:flex-row gap-[40px] lg:gap-[130px] mt-[140px] lg:mt-[190px]">
            <div>
              <div className="text-[#9F00FF] mb-3 text-[18px] leading-loose font-[600]">SUBSCRIBE</div>
              <div className="text-[38px] font-[700] text-white">Join our newsletter</div>
            </div>

            <div className="flex items-center w-full justify-center gap-5 flex-col">
              <input type="text" placeholder="Enter your email address" className="min-w-full sm:min-w-[370px]  md:min-w-[430px] text-white rounded-full border-2 border-[#9F00FF] bg-[#D9D9D938] h-[50px] outline-none px-5" />
              <button className='flex items-center gap-3 bg-white py-4 px-8 rounded-full text-[#9F00FF] font-bold text-[16px] relative'><span className='z-[999]'>SUBSCRIBE</span> <svg width="20" className='z-[999]' height="8" viewBox="0 0 20 8" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16 7L19 4L16 1M1 4L19 4L1 4Z" stroke="#9F00FF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
             <div className="w-full absolute top-0 left-0 rounded-full h-full bg-white z-[99]"></div>
             <div className="w-full absolute -top-[3px] -left-[3px] rounded-full h-full bg-[#FFE302]"></div>
             <div className="w-full absolute -bottom-[3px] -right-[3px] rounded-full h-full bg-[#9F00FF]"></div>
             </button>
            </div>
          </div>



<div className="mt-[120px] lg:mt-[220px] relative max-w-[947px] w-full mx-auto">
  
<div className="text-[#9F00FF] mb-3 font-[500] text-[18px] text-center tracking-wide">FAQ</div>
      <div className="text-center font-[800] text-[32px] md:text-[38px] tracking-wide text-white mb-14">Frequently Asked Questions</div>
      


          <div className="relative z-[999999999999999999]">
          <FAQ title="What the OXO Art?" answer="Purus sit amet luctus venenatis lectus magna fringilla. Nulla at volutpat diam ut venenatis tellus. Eu tincidunt tortor aliquam nulla facilisi. Quis lectus nulla at volutpat diam ut. Felis bibendum ut tristique et egestas quis ipsum. Ac turpis egestas integer eget." border='border-b border-[#38334F]'/>
          <FAQ title="How Does NFT Work?" answer="Purus sit amet luctus venenatis lectus magna fringilla. Nulla at volutpat diam ut venenatis tellus. Eu tincidunt tortor aliquam nulla facilisi. Quis lectus nulla at volutpat diam ut. Felis bibendum ut tristique et egestas quis ipsum. Ac turpis egestas integer eget." border='border-b border-[#38334F]'/>
          <FAQ title="How Is a Non-Fungible Token Created?" answer="Purus sit amet luctus venenatis lectus magna fringilla. Nulla at volutpat diam ut venenatis tellus. Eu tincidunt tortor aliquam nulla facilisi. Quis lectus nulla at volutpat diam ut. Felis bibendum ut tristique et egestas quis ipsum. Ac turpis egestas integer eget." border='border-b border-[#38334F]'/>
          <FAQ title="What’s worth picking up at the NFT supermarket?" answer="Purus sit amet luctus venenatis lectus magna fringilla. Nulla at volutpat diam ut venenatis tellus. Eu tincidunt tortor aliquam nulla facilisi. Quis lectus nulla at volutpat diam ut. Felis bibendum ut tristique et egestas quis ipsum. Ac turpis egestas integer eget." border='border-b border-[#38334F]'/>
          <FAQ title="Can I build an underground art cave to my NFTs?" answer="Purus sit amet luctus venenatis lectus magna fringilla. Nulla at volutpat diam ut venenatis tellus. Eu tincidunt tortor aliquam nulla facilisi. Quis lectus nulla at volutpat diam ut. Felis bibendum ut tristique et egestas quis ipsum. Ac turpis egestas integer eget." border='border-b border-[#38334F]'/>
          <FAQ title="How do you know your NFT is authentic?" answer="Purus sit amet luctus venenatis lectus magna fringilla. Nulla at volutpat diam ut venenatis tellus. Eu tincidunt tortor aliquam nulla facilisi. Quis lectus nulla at volutpat diam ut. Felis bibendum ut tristique et egestas quis ipsum. Ac turpis egestas integer eget." border='border-b border-[#38334F]'/>
          <FAQ title="Can Everyone List Their NFT Projects?" answer="Purus sit amet luctus venenatis lectus magna fringilla. Nulla at volutpat diam ut venenatis tellus. Eu tincidunt tortor aliquam nulla facilisi. Quis lectus nulla at volutpat diam ut. Felis bibendum ut tristique et egestas quis ipsum. Ac turpis egestas integer eget." border=''/>


          </div>

          <img src="/images/grad-circle-8.svg" alt="circle" className="absolute right-2  top-[50px] "/>

</div>



    </div>
    
     

    <div className="relative z-[999999999999999999999999999999999999]">
      
     <Footer/>


    </div>














   {/* background circles */}


    

   <img src="/images/grad-circle-6.svg" alt="circle" className="absolute left-0  top-[6300px] "/>

<img src="/images/grad-circle-9.svg" alt="circle" className="absolute left-0  top-[8600px] "/>


<img src="/images/grad-circle-5.svg" alt="circle" className="hidden md:block absolute -right-10  top-[2550px] "/>


<img src="/images/grad-circle-4.svg" alt="circle" className="absolute left-0 top-[2200px]  w-[400px]"/>


<img src="/images/grad-circle-3.svg" alt="circle" className="absolute right-0  top-[1900px] "/>

<img src="/images/grad-circle.svg" alt="circle" className="absolute left-0 top-[1200px]  w-[400px]"/>


 <svg className='hidden md:block absolute top-[100px] right-[20%] ' width="700px" height="700px" viewBox="0 0 1136 1136" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_f_27_960)">
<circle cx="568" cy="568" r="168" fill="#143280"/>
</g>
<defs>
<filter id="filter0_f_27_960" x="0" y="0" width="1136" height="1136" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="200" result="effect1_foregroundBlur_27_960"/>
</filter>
</defs>
</svg>



<svg className='w-[300px] md:w-auto absolute top-0 -left-7 ' height="695" viewBox="0 0 596 695" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_f_27_959)">
<circle cx="28" cy="127" r="168" fill="#9F00FF" fill-opacity="0.7"/>
</g>
<defs>
<filter id="filter0_f_27_959" x="-540" y="-441" width="1136" height="1136" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="200" result="effect1_foregroundBlur_27_959"/>
</filter>
</defs>
</svg>

    </div>






















    </>
  );
}

export default App;
