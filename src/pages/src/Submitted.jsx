import React from 'react';

export default function Submitted() {
  return (
    <div className="min-h-screen p-2 sm:p-4 overflow-x-hidden font-inter bg-gradient-to-br from-black to-[#1C1C1E] flex items-center justify-center">
      <div className="w-full max-w-sm sm:max-w-md md:max-w-2xl lg:max-w-4xl xl:max-w-5xl mx-auto p-3 sm:p-4 md:p-6 lg:p-8 rounded-xl md:rounded-2xl shadow-2xl bg-[#1C1C1E]/40 backdrop-blur-md border border-gray-800">
        
        {/* Heading */}
        <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 md:mb-8 text-center font-caldina tracking-tight bg-gradient-to-r from-[#4E55BA] to-[#6C63FF] text-transparent bg-clip-text">
          Your form has been submitted
        </h1>

        {/* Sub-text */}
        <p className="text-gray-300 text-center mb-10 font-inter">
          Thanks for applying. The team will review the application and get back soon.
        </p>

        {/* Download App Section */}
        <div className="flex flex-col items-center justify-center gap-4 mt-8">
          <h2 className="text-lg font-semibold text-white">
            Download our App 📲
          </h2>
          <p className="text-gray-400 text-sm text-center max-w-md">
            View your profile and track updates directly in the app.
          </p>

          {/* Download Button */}
          <a
            href="/" // <- yaha actual app link daalna hoga
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-block px-6 py-2 rounded-lg bg-gradient-to-r from-[#43a3da] to-[#2723b2] text-white font-medium shadow-lg hover:scale-105 transition-transform"
          >
            Download App
          </a>
        </div>
      </div>
    </div>
  );
}
