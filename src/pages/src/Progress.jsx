import React from 'react';
import { Check } from 'lucide-react';

export default function Progress({ currentStep }) {
  const steps = [
    { id: 1, name: 'Basic Info' },
    { id: 2, name: 'Domain' },
    { id: 3, name: 'Submitted' }
  ];

  return (
    <div className="w-full mb-8">
      <div className="relative flex justify-between">
        {/* Progress line */}
        <div className="absolute top-5 left-0 h-[2px] w-full bg-gray-600" style={{ zIndex: 0 }}>
          <div 
            className="h-full bg-gradient-to-r from-[#4E55BA] to-[#6C63FF] transition-all duration-1000 ease-in-out"
            style={{ width: `${((currentStep - 1) / 2) * 100}%` }}
          />
          {/* Animated circle */}
          <div
            className="absolute top-1/2 transform -translate-y-1/2 w-4 h-4 rounded-full bg-white border-2 border-[#4E55BA] shadow-lg transition-all duration-1000 ease-in-out"
            style={{ 
              left: `${((currentStep - 1) / 2) * 100}%`,
              transform: 'translate(-50%, -50%)',
              boxShadow: '0 0 10px rgba(78, 85, 186, 0.5)'
            }}
          />
        </div>

        {/* Steps */}
        {steps.map((step) => (
          <div key={step.id} className="flex flex-col items-center z-10">
            <div className={`w-10 h-10 rounded-full flex items-center justify-center border-2 transition-all duration-500
              ${currentStep >= step.id 
                ? 'border-[#4E55BA] bg-gradient-to-r from-[#4E55BA] to-[#6C63FF] text-white shadow-lg' 
                : 'border-gray-600 bg-[#1C1C1E] text-gray-600'}`}
            >
              {currentStep > step.id ? (
                <Check className="w-6 h-6 animate-pulse" />
              ) : (
                <span>{step.id}</span>
              )}
            </div>
            <span className={`mt-2 text-sm font-medium transition-colors duration-500 ${
              currentStep >= step.id ? 'text-white' : 'text-gray-400'
            }`}>
              {step.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
