import Heading from "./Heading"; // Adjust path if needed

const Schedule = () => {
  return (
    <div  className="bg-black text-white flex md:flex-row flex-col p-4 md:p-8 h-full md:h-[80vh]">
      {/* Title Section using Heading Component */}``
      <div className="w-full md:w-[30%] sticky top-0  md:h-screen p-4 mb-8">
        <Heading top="Schedule" med="" last="AGENDA" />
        <p className="text-gray-400 mt-4 md:mt-12 text-sm md:text-base">
          The IDEATEX 2.O agenda includes introductions, team presentations,
          feedback from mentors, a networking break, final judging, and an
          awards ceremony, followed by closing remarks and future opportunities.
        </p>
        <div className="flex gap-4 mt-8 md:mt-12 items-center cursor-pointer group">
          <div className="underline text-gray-300 underline-offset-8 group-hover:text-[#AE0D61] transition-all ease-in-out text-sm md:text-[16px]">
            Download Agenda
          </div>
          <button className="p-3 md:p-4 pl-5 pr-5 group-hover:rotate-[90deg] group-hover:text-[#AE0D61] transition-all duration-300 ease-in-out cursor-pointer text-[16px] md:text-[18px] rounded-full items-center flex text-white justify-center bg-[#333038]">
            →
          </button>
        </div>
      </div>

      {/* Right Section */}
      <div className="w-full h-full md:w-[70%]  md:p-8 pt-4 md:pt-0 md:overflow-y-auto md:h-[80vh] hide-scrollbar">
        {/* Day Tabs */}
        <div className="flex flex-col gap-4 w-full mb-8">
          <div className="h-[15vh] md:h-[20vh] text-wrap text-[24px] md:text-[32px] font-[800] text-[#d2d2d2] justify-center bg-[#0B0713] rounded-lg border-2 border-[#26222D] flex md:text-center items-center p-2 md:p-4">
            23 NOVEMBER 2024 - IDEATEX
          </div>

          {/* Schedule List */}
          <div className="w-full mt-4">
            {Array(6)
              .fill("")
              .map((_, index) => (
                <div
                  key={index}
                  className="flex flex-col md:flex-row py-4 border-b border-[#26222D]"
                >
                  <div className="font-[800] w-full md:w-[25%] text-[#d2d2d2] text-[20px] md:text-[28px] mb-2 md:mb-0">
                    11:00 AM
                  </div>
                  <div className="w-full md:w-[75%]">
                    <p className="font-[600] text-[#d2d2d2] text-[22px] md:text-[30px]">
                      Pre-Event Registration
                    </p>
                    <p className="font-[400] mt-2 md:mt-4 text-[#838490] text-[14px] md:text-[16px]">
                      Immerse yourself in an artistic wonderland as enchanting
                      installations come to life. Engage with visual and
                      interactive displays that celebrate the harmony between
                      music and art.
                    </p>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Schedule;
