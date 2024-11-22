import Heading from './Heading';
import { ArrowRight } from 'lucide-react';
import acciojob from "../public/Sponsers/acciojob-logo-removebg-preview.png";
import sky from "../public/Sponsers/image__1_-removebg-preview.png";
import Eve from "../public/Sponsers/cropped-Copy-of-THE-EVEPAPER-LOGO-1.0-1.png";
import Quill from "../public/Sponsers/Layer 2.png";
import Goli from "../public/Sponsers/Layer 3.png";
import Pizza from "../public/Sponsers/Layer 4.png";
import Krayonz from "../public/Sponsers/kray.png";
import News from "../public/Sponsers/news.jpg";
import Skill from "../public/Sponsers/download-removebg-preview.png";
import Ed from "../public/Sponsers/Layer 8.png";
import Waffle from "../public/Sponsers/Screenshot_2024-11-21_112445-removebg-preview (1).png";
import Carzilla from "../public/Sponsers/logo white.png";
import Fusion from "../public/Sponsers/WhatsApp_Image_2024-11-21_at_11.14.57_6c526a8d-removebg-preview.png";
import Xc from "../public/Sponsers/xcentic_transparent.png";
import Wap from "../public/Sponsers/WhatsApp_Image_2024-11-21_at_11.56.41_f7659f7c-removebg-preview.png"
import prep from "../public/Sponsers/prep.png";

const logos = [
    
  {src:Skill, alt: "Skill"},
  {src:prep, alt: "prep"},
    {src:acciojob, alt: "acciojob"},
    {src:Quill, alt: "Quill"},
    {src:Carzilla, alt: "Carzilla"},

    
    
  ];
  const logos3 = [
    {src:Waffle, alt: "Waffle"},
    {src:Xc, alt: "Xc"},
    {src:Wap, alt: "Wap"},
    {src:Krayonz, alt: "Krayonz"},
    {src:Eve, alt: "Eve"},
 
   
    
    
    
    {src:Pizza, alt: "Pizza"},
   
  ];
  const logos2 = [
    {src:Goli, alt: "Goli"},
    
    
    {src:Fusion, alt: "Fusion"},
    {src:sky, alt: "sky"},
    {src:News, alt: "News"},
    {src:Ed, alt: "Ed"},
  ];
  
const Sponsers = () => {
  return (
    <div className='h-auto md:h-[200vh] md:gap-10 flex-col p-16 md:p-14 flex bg-[#0B0713] rounded-lg border-2 border-[#26222D] justify-center '>
<div className="w-[100%] flex flex-col md:flex-row md:items-end ">
    <div className="w-full md:w-[60%]">
      <Heading top="The Power Behind Us" med="IdeateX 2.O" last="SPONSERS" />
    </div>

    <div className="text-[16px] w-full md:w-[40%] md:text-right mt-8 md:mt-0 align-bottom text-[#838490]">
    We are proud to have the support of our esteemed sponsors who make IDEATEX 2.O possible. Their commitment to fostering innovation and entrepreneurship provides participants with valuable resources, opportunities, and recognition.
    </div>
  </div>

  <div className=" flex flex-col items-center md:flex-row justify-center cursor-pointer gap-8 py-8  pb-0 md:py-4 bg-[#0B0713]">
  {logos.map((logo, index) => (
    <div key={index} className="flex flex-col md:flex-row items-center justify-center">
      <img
        src={logo.src}
        alt={logo.alt}
        width={300} // Adjust size as needed
        height={300}
        className={`object-contain ${index === 0 ? 'md:w-[100%]' : ''} ${index === 2 ? 'md:w-[50%]' : ''} ` }
      />
    </div>
  ))}

{/* <p className='md:text-5xl text-3xl w-full text-center text-gray-400  font-extrabold'>Revealing Soon!!</p> */}
</div>
  <div className=" flex items-center flex-col  md:flex-row justify-center cursor-pointer gap-8 py-8 pb-0md:py-4 bg-[#0B0713]">
  {logos3.map((logo, index) => (
    <div key={index} className="flex flex-col md:flex-row items-center justify-center">
      <img
        src={logo.src}
        alt={logo.alt}
        width={300} // Adjust size as needed
        height={300}
        className={`object-contain ${index===0 && 'md:w-[97%]'} ${index===5 && 'md:w-[87%]'}`}
      />
    </div>
  ))}

{/* <p className='md:text-5xl text-3xl w-full text-center text-gray-400  font-extrabold'>Revealing Soon!!</p> */}
</div>
  <div className=" flex items-center flex-col md:flex-row justify-center cursor-pointer gap-8 py-8 md:py-4 bg-[#0B0713]">
  {logos2.map((logo, index) => (
    <div key={index} className="flex items-center justify-center">
      <img
        src={logo.src}
        alt={logo.alt}
        width={300} // Adjust size as needed
        height={300}
        className={`object-contain ${index===2 && 'md:w-[77%]'} ${index===4 && 'md:w-[77%]'}`}
      />
    </div>
  ))}

{/* <p className='md:text-5xl text-3xl w-full text-center text-gray-400  font-extrabold'>Revealing Soon!!</p> */}
</div>


<div className='w-full flex justify-center'>
<a href='mailto:ecellcorporate@gmail.com' className="flex items-center md:w-[30%] justify-center gap-2 px-6 py-4 border border-[#AE0D61] rounded-lg text-gray-300 hover:bg-[#AE0D61] hover:text-white transition duration-300 ease-in-out">
      <span className="font-semibold">Become A Sponsor</span>
      <ArrowRight className="w-5 h-5" />
    </a>

</div>

    </div>
    
  );
};

export default Sponsers;
