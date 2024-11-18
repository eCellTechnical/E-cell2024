// components/TicketInfo.tsx
import { Link } from 'react-router-dom';
function TicketInfo() {
  return (
    <div className="flex items-center justify-center mt-8 w-full bg-black">
      <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-6 w-full  md:px-0">
        
        {/* Ticket Options */}
        <div className="rounded-lg w-full md:w-1/2 p-1">
          <img src='ticket.jpg' className="flex justify-between items-center md:h-[40vh] text-black p-2 bg-gradient-to-r from-white to-white rounded-lg w-full">
          </img>

          {/* Buy Tickets Button */}
          <Link to="/register">
     
    </Link>
        </div>
        
        {/* Availability Section */}
        <div className="bg-gradient-to-r from-[#AE0D61] to-[#530AAC] text-white rounded-lg p-6 pt-4 flex flex-col justify-center w-full md:w-1/3 relative">
          <div className="flex flex-row items-center">
            <div className="text-[48px] md:text-[70px] font-[800]">248</div>
            <div className="text-[20px] md:text-[32px] font-[800] leading-[25px] md:leading-[35px] p-2">Seats <br /> Available</div>
          </div>

          {/* Progress Bar */}
          <div className="flex items-center mt-4">
            <div className="bg-white p-1 w-full md:w-[80%] rounded-full h-[8vh] md:h-[9vh] flex items-center overflow-hidden">
              <div className="bg-pink-600 h-full rounded-full text-center flex items-center p-2 md:p-4 text-[14px] md:text-[18px] text-white font-semibold" style={{ width: '73%' }}>
                73% filled
              </div>
              <div className="bg-white h-full text-center text-[14px] md:text-[18px] flex items-center justify-center text-[#490ab5] font-semibold" style={{ width: '17%' }}>
                17%
              </div>
            </div>
            <div className="w-[25%] md:w-[17%] ml-2 hover:rotate-[-45deg] transition-all duration-300 ease-in-out cursor-pointer text-[18px] md:text-[24px] h-[8vh] md:h-[9vh] rounded-full flex items-center justify-center bg-white text-black">
              →
            </div>
          </div>
          
        </div>

        {/* Additional Stats */}
        <div className="md:space-y-4 md:mt-0 gap-2 flex flex-row md:flex-col justify-center items-center md:items-start">
          <div className="bg-[#0B0713] border-2 border-solid border-[#26222D] flex flex-col justify-center h-[45%] text-white rounded-lg p-4 w-1/2 md:w-32 text-center">
            <div className="text-2xl md:text-3xl font-bold">10+</div>
            <div className="text-xs md:text-sm">Sponsors</div>
          </div>
          <div className="bg-[#0B0713] border-2 border-solid border-[#26222D] flex flex-col justify-center h-[45%] text-white rounded-lg p-4 w-1/2 md:w-32 text-center">
            <div className="text-2xl md:text-3xl font-bold">20+</div>
            <div className="text-xs md:text-sm">Teams</div>
          </div>
        </div>


        
      </div>
    </div>
  );
}

export default TicketInfo;
