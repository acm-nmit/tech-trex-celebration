
import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center max-w-4xl mx-auto px-6 md:px-0">
      <div className="mb-4 text-xl md:text-2xl text-gray-300 font-medium animate-fade-in-delay">
        And the answer is...
      </div>
      
      <h1 className="font-bold text-5xl md:text-7xl lg:text-8xl text-white tracking-tight animate-reveal">
        <span className="text-white">TECH</span>
        <span className="text-green-400">-TREX</span>
      </h1>
      
      <div className="mt-10 flex flex-col items-center animate-fade-in-delay">
        <div className="px-4 py-1 rounded-full bg-green-400 bg-opacity-10 mb-3">
          <p className="text-green-400 font-medium text-sm">
            REGISTRATIONS NOW OPEN
          </p>
        </div>
        
        <p className="text-white text-xl md:text-2xl font-medium">
          April 4th, 2025
        </p>
      </div>
    </div>
  );
};

export default Hero;
