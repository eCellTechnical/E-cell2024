"use client";
import {
  BadgePercent,
  Clock,
  IndianRupee,
  Plus,
  Share2,
  Users,
} from "lucide-react";
import React, { useEffect, useState } from "react";

function App() {
  const [selectedOption, setSelectedOption] = useState(0);
  const options = [
    { id: 0, label: "4 player" },
    { id: 1, label: "4 player" },
    { id: 2, label: "4 player" },
  ];
  const [timeRemaining, setTimeRemaining] = useState({
    days: 2,
    hours: 14,
    minutes: 25,
    seconds: 30,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      if (timeRemaining.seconds > 0) {
        setTimeRemaining((prev) => ({ ...prev, seconds: prev.seconds - 1 }));
      } else if (timeRemaining.minutes > 0) {
        setTimeRemaining((prev) => ({
          ...prev,
          minutes: prev.minutes - 1,
          seconds: 59,
        }));
      } else if (timeRemaining.hours > 0) {
        setTimeRemaining((prev) => ({
          ...prev,
          hours: prev.hours - 1,
          minutes: 59,
          seconds: 59,
        }));
      } else if (timeRemaining.days > 0) {
        setTimeRemaining((prev) => ({
          ...prev,
          days: prev.days - 1,
          hours: 23,
          minutes: 59,
          seconds: 59,
        }));
      } else {
        clearInterval(timer);
      }
    }, 1000);
    return () => clearInterval(timer);
  }, [timeRemaining]);

  return (
    <div className="font-sans pt-20 leading-[1.5] font-normal text-white bg-[#131313] antialiased">
        <div className="p-4 md:p-0">
      <div className="w-full md:w-[90%] lg:w-[80%] mx-auto p-2 md:p-4 relative min-h-screen">
        <div className="grid grid-cols-1 lg:grid-cols-10 gap-3">
          <div className="lg:col-span-7 pb-8">
            <div className="flex flex-col md:flex-row gap-2 md:gap-3">
              <div className="w-full md:w-[50%] h-40 sm:h-48 md:h-auto mb-2 md:mb-0">
                <img
                  src="https://wowtheme7.com/tf/dyat/assets/img/tournament/11.png"
                  alt="Treasure Map"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <div className="flex flex-row md:flex-col w-full md:w-[50%] gap-2 md:gap-3 h-40 sm:h-48 md:h-auto">
                <div className="w-1/2 md:w-full h-full md:h-1/2">
                  <img
                    src="https://wowtheme7.com/tf/dyat/assets/img/tournament/12.png"
                    alt="Treasure Chest"
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
                <div className="w-1/2 md:w-full h-full md:h-1/2">
                  <img
                    src="https://wowtheme7.com/tf/dyat/assets/img/tournament/13.png"
                    alt="Treasure Hunt"
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-4 pt-4">
              <div className="flex flex-col sm:flex-row w-full justify-between gap-3">
                <p className="text-2xl sm:text-3xl md:text-[40px] font-bold">Tresure Hunt</p>
                <button className="p-2 sm:p-3 text-base sm:text-[18px] font-bold rounded-md w-full sm:w-[20%] text-black bg-[#00fcb8]">
                  Register
                </button>
              </div>
              <hr className="w-full h-2 opacity-20" />

              <div className="flex flex-col sm:flex-row gap-3 w-full">
                <div className="w-full sm:w-[50%] rounded-md bg-[#18222D] p-4 mb-3 sm:mb-0">
                  <p className="text-[16px] font-normal">PRIZE MONEY</p>
                  <p className="text-[#00fcb8] text-[18px] flex font-bold items-center">
                    <IndianRupee className="p-1" />
                    Rs.20000
                  </p>
                </div>
                <div className="w-full sm:w-[50%] rounded-md bg-[#18222D] p-4">
                  <p className="text-[16px] font-normal">PRIZE MONEY</p>
                  <p className="text-[#00fcb8] text-[18px] flex font-bold items-center">
                    <IndianRupee className="p-1" />
                    Rs.20000
                  </p>
                </div>
              </div>

              <div className="relative">
                <p className="text-normal text-[16px] opacity-80 line-clamp-4 md:line-clamp-none">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est
                  neque dolores, blanditiis laudantium voluptates omnis
                  reprehenderit quo nesciunt pariatur autem earum qui quos
                  adipisci magni accusantium laboriosam, facere nisi vel! Itaque,
                  temporibus impedit? Tempore iste dolor reiciendis nesciunt
                  obcaecati beatae nemo non iure aperiam commodi! Omnis doloremque
                  veniam nesciunt nobis qui porro atque non, ut dolorem quas illum
                  eos architecto? Laboriosam ipsa similique commodi omnis, ipsum
                  recusandae quo voluptatem? Similique veniam libero ullam hic
                  rerum dolor obcaecati odio enim eveniet saepe ad assumenda,
                  nostrum deserunt dicta! Dolorum illo maxime ducimus. Sequi, qui.
                  Commodi, illum doloremque. 
                  <br/>
                    <br/>
                  Maxime saepe eligendi reprehenderit
                  ducimus minus excepturi? Placeat consequuntur soluta velit
                  dolor, deleniti corrupti ea, commodi inventore exercitationem
                  excepturi molestiae iste fuga animi assumenda pariatur!
                </p>
                <button className="text-[#00fcb8] font-medium mt-1 block md:hidden">
                  Read more
                </button>
              </div>
            </div>

            <div className="flex flex-col gap-4 pt-4">
              <p className="text-xl md:text-[24px] font-bold">EVENT INFO</p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-4">
                {options.map((option, index) => (
                  <div
                    key={option.id}
                    className="w-full p-3 md:p-4 rounded-lg bg-[#18222D] flex flex-col items-start"
                  >
                    <div className="flex justify-between items-center w-full mb-2 md:mb-4">
                      <div className="p-1 md:p-2">
                        <Users color="white" size={20} className="md:w-6 md:h-6" />
                      </div>
                      <div className="p-1 md:p-2">
                        <Plus color="white" size={16} className="md:w-5 md:h-5" />
                      </div>
                    </div>
                    <div className="mt-2 md:mt-4">
                      <h2 className="text-white text-lg md:text-2xl font-bold mb-1">
                        Team size
                      </h2>
                      <p className="text-[#00fcb8] text-base md:text-xl font-medium">
                        {option.label}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-3 h-full mt-4 lg:mt-0">
            <div className="lg:sticky lg:top-4 bg-[#18222D] rounded-lg">
              <div className="bg-gradient-to-r text-black from-[#00fcb8] to-[#00d06d] rounded-t-lg p-3 md:p-4 flex items-center">
                <BadgePercent size={20} className="mr-2" />
                <div>
                  <p className="font-bold text-sm md:text-base">Early Bird Discount</p>
                  <p className="text-xs md:text-sm">20% off until registration closes</p>
                </div>
              </div>

              <div className="bg-[#111920] rounded-lg p-3 md:p-4 m-2 md:m-4">
                <div className="flex items-center mb-2 md:mb-3">
                  <Clock size={16} className="mr-2 text-[#00fcb8]" />
                  <h3 className="text-white font-bold text-sm md:text-base">
                    Registration Closes In
                  </h3>
                </div>
                <div className="grid grid-cols-4 gap-1 md:gap-2 text-center">
                  <div className="bg-[#18222D] rounded p-1 md:p-2">
                    <p className="text-[#00fcb8] text-lg md:text-2xl font-bold">
                      {timeRemaining.days}
                    </p>
                    <p className="text-[10px] md:text-xs text-gray-400">Days</p>
                  </div>
                  <div className="bg-[#18222D] rounded p-1 md:p-2">
                    <p className="text-[#00fcb8] text-lg md:text-2xl font-bold">
                      {timeRemaining.hours}
                    </p>
                    <p className="text-[10px] md:text-xs text-gray-400">Hours</p>
                  </div>
                  <div className="bg-[#18222D] rounded p-1 md:p-2">
                    <p className="text-[#00fcb8] text-lg md:text-2xl font-bold">
                      {timeRemaining.minutes}
                    </p>
                    <p className="text-[10px] md:text-xs text-gray-400">Mins</p>
                  </div>
                  <div className="bg-[#18222D] rounded p-1 md:p-2">
                    <p className="text-[#00fcb8] text-lg md:text-2xl font-bold">
                      {timeRemaining.seconds}
                    </p>
                    <p className="text-[10px] md:text-xs text-gray-400">Secs</p>
                  </div>
                </div>
              </div>

              <div className="bg-[#111920] p-3 md:p-4 mx-2 md:mx-4">
                <h3 className="text-white font-bold mb-2 md:mb-3 text-sm md:text-base">Price Details</h3>
                <div className="flex justify-between mb-1 md:mb-2 text-sm md:text-base">
                  <p className="text-gray-400">Entry Fee</p>
                  <p className="text-white flex items-center">
                    <IndianRupee size={12} className="md:w-3.5 md:h-3.5" />
                    <span>1,000</span>
                  </p>
                </div>
                <div className="flex justify-between mb-1 md:mb-2 text-sm md:text-base">
                  <p className="text-gray-400">Discount</p>
                  <p className="text-[#00fcb8] flex items-center">
                    - <IndianRupee size={12} className="md:w-3.5 md:h-3.5" />
                    <span>200</span>
                  </p>
                </div>
                <hr className="border-gray-700 my-2 md:my-3" />
                <div className="flex justify-between font-bold text-sm md:text-base">
                  <p className="text-white">Total</p>
                  <p className="text-[#00fcb8] flex items-center">
                    <IndianRupee size={12} className="md:w-3.5 md:h-3.5" />
                    <span>800</span>
                  </p>
                </div>
              </div>

              <div className="p-3 md:p-4 mx-2 md:mx-4">
                <h3 className="text-white font-bold mb-2 md:mb-3 text-sm md:text-base">Event Details</h3>
                <div className="flex items-center mb-1 md:mb-2">
                  <Users size={16} className="mr-2 text-gray-400" />
                  <div>
                    <p className="text-white text-xs md:text-sm">42 teams registered</p>
                    <p className="text-[10px] md:text-xs text-gray-400">
                      Max 60 teams allowed
                    </p>
                  </div>
                </div>
                <div className="w-full bg-[#18222D] rounded-full h-1.5 md:h-2 mt-1">
                  <div
                    className="bg-[#00fcb8] h-1.5 md:h-2 rounded-full"
                    style={{ width: "70%" }}
                  ></div>
                </div>
              </div>

              <div className="flex flex-col gap-2 md:gap-3 p-3 md:p-4 mx-2 md:mx-4 sticky bottom-0 md:relative bg-[#18222D] md:bg-transparent">
                <button className="bg-[#00fcb8] cursor-pointer hover:bg-green-500 text-black font-bold rounded-lg py-2 md:py-3 w-full text-sm md:text-base">
                  Register Now
                </button>
                <button className="flex justify-center cursor-pointer items-center bg-[#111920] hover:bg-[#0e161f] text-white font-semibold rounded-lg py-2 md:py-3 w-full text-sm md:text-base">
                  <Share2 size={16} className="mr-2" />
                  Share Event
                </button>
              </div>

              <div className="rounded-md p-2 md:p-4">
                <p className="text-gray-400 text-xs md:text-sm text-center">
                  Need help? Contact support
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
    
  );
}

export default App;