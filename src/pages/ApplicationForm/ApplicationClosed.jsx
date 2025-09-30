import React from 'react';
import Lottie from 'lottie-react';
import animationData from '../../assets/ApplicationForm/data.json';

export default function ApplicationClosed() {
  return (
    <div className="form-container !pt-[15vh] flex flex-col lg:flex-row items-center text-black dark:text-white min-h-[100vh] bg-white dark:bg-black">
      <div className="w-[90%] lg:w-[50%] flex items-center lg:ml-8">
        <Lottie
          animationData={animationData}
          loop={true}
          autoplay={true}
          className="z-[1] lg:flex lg:w-full opacity-90"
        />
      </div>

      <div className="flex flex-col items-center w-full lg:w-[80%]">
        {/* Recruitment heading removed on request (keeps div position intact) */}

        <div className="w-[90%] lg:w-[60%] mt-8">
          <div className="w-full flex justify-center items-start min-h-[420px]">
            <div className="w-[90%] lg:w-full max-w-3xl mx-auto p-6 sm:p-8 rounded-xl shadow-2xl bg-gray-100 dark:bg-[#1C1C1E]/40 backdrop-blur-md border border-gray-300 dark:border-gray-800 text-center">
              <h1 className="text-3xl sm:text-4xl font-bold mb-4 text-center tracking-tight bg-gradient-to-r from-[#4E55BA] to-[#6C63FF] text-transparent bg-clip-text">
                Applications Closed
              </h1>
              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed text-lg sm:text-xl">
                Thank you for your interest. Recruitment for this cycle is now closed — you may apply next year. In the meantime, download our app to receive the latest updates and announcements.
              </p>
              <div className="flex flex-col items-center gap-3">
                <a
                  href="https://play.google.com/store/apps/details?id=com.devshiv.ecellapp"
                  target="_blank"
                  rel="noreferrer"
                  className="px-6 py-2 rounded-md border border-[#4D55BA] text-[#4D55BA] hover:bg-[#4D55BA] hover:text-white transition-colors text-base font-medium"
                >
                  Download App
                </a>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
