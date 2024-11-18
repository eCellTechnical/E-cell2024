import Heading from "./Heading";

const Maps = () => {
  return (
    <div className="md:h-[70vh] h-[85vh] gap-10 flex flex-col md:flex-row md:p-14 p-4 bg-[#0B0713] rounded-lg border-2 border-[#26222D] justify-center">
      <div className="md:w-[50%] w-full flex flex-col ">
        <div className="w-[100%]">
          <Heading top="Still Any Issues?" med="IdeateX 2.O" last="CONTACT" />
        </div>

        <div className="text-[16px] mt-8 text-[#838490]">
          For any queries or further information about IDEATEX 2.O, you can reach
          out to us via email at ecell@kiet.edu, or call us at
          +91-9519847063 (Anubhav) & +91-9639475868 (Nakshatra). You can also connect with us on our social media
          platforms: <a href="https://www.linkedin.com/in/e-cell-kiet?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer">Linkedin</a> and <a href="https://www.instagram.com/kietecell?igsh=dWhwazFmcjcyY3Nj" target="_blank" rel="noopener noreferrer">Instagram</a>
        </div>

        {/* <input
          placeholder="Enter Your Email"
          className="bg-transparent rounded-lg border-2 border-[#26222D] py-5 mt-8 outline-none p-4 "
        ></input> */}
      </div>

      <div className="w-full md:w-[50%] md:m-4 text-black bg-white h-[80%]">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3497.8737422743498!2d77.49449147409977!3d28.753186378593963!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cf574d18f2b6f%3A0x4a65c0bc0122eb2f!2sKIET%20Group%20of%20Institutions!5e0!3m2!1sen!2sin!4v1731219428499!5m2!1sen!2sin" 
          width="100%" 
          height="100%" 
          style={{ border: 0 }}  
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default Maps;
