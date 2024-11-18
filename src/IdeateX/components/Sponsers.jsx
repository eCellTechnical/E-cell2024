import Heading from './Heading';
import { ArrowRight } from 'lucide-react';

// const logos = [
//     { src: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Zerodha_logo.svg/2560px-Zerodha_logo.svg.png", alt: "Zerodha" },
//     { src: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Zerodha_logo.svg/2560px-Zerodha_logo.svg.png", alt: "Zelle" },
//     { src: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Zerodha_logo.svg/2560px-Zerodha_logo.svg.png", alt: "Spotify" },
//     { src: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Zerodha_logo.svg/2560px-Zerodha_logo.svg.png", alt: "Rackspace" },
//     { src: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Zerodha_logo.svg/2560px-Zerodha_logo.svg.png", alt: "Zerodha" },
//   ];
  
const Sponsers = () => {
  return (
    <div className='h-[85vh] md:h-[80vh] md:gap-10 flex-col p-4 md:p-14 flex bg-[#0B0713] rounded-lg border-2 border-[#26222D] justify-center'>
<div className="w-[100%] flex flex-col md:flex-row md:items-end ">
    <div className="w-full md:w-[60%]">
      <Heading top="The Power Behind Us" med="IdeateX 2.O" last="SPONSERS" />
    </div>

    <div className="text-[16px] w-full md:w-[40%] md:text-right mt-8 md:mt-0 align-bottom text-[#838490]">
    We are proud to have the support of our esteemed sponsors who make IDEATEX 2.O possible. Their commitment to fostering innovation and entrepreneurship provides participants with valuable resources, opportunities, and recognition.
    </div>
  </div>

  <div className=" flex items-center md:flex justify-center cursor-pointer gap-8 py-8 md:py-4 bg-[#0B0713]">
  {/* {logos.map((logo, index) => (
    <div key={index} className="flex items-center justify-center">
      <img
        src={logo.src}
        alt={logo.alt}
        width={300} // Adjust size as needed
        height={300}
        className="object-contain"
      />
    </div>
  ))} */}

<p className='md:text-5xl text-3xl w-full text-center text-gray-400  font-extrabold'>Revealing Soon!!</p>
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
