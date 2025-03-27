
import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center max-w-4xl mx-auto px-6 md:px-0">
      <h1 className="font-bold text-5xl md:text-7xl lg:text-8xl text-techtrex animate-fade-in tracking-tight">
        tech trex
      </h1>
      
      <div className="mt-10 flex flex-col items-center animate-fade-in-delay">
        <div className="px-4 py-1 rounded-full bg-techtrex bg-opacity-10 mb-3">
          <p className="text-techtrex font-medium text-sm">
            REGISTRATIONS NOW OPEN
          </p>
        </div>
        
        <p className="text-techtrex-light text-xl md:text-2xl font-medium">
          April 4th, 2025
        </p>
      </div>
    </div>
  );
};

export default Hero;
