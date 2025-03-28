
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
      
      <div className="mt-6 text-white text-lg md:text-xl font-medium animate-fade-in-delay">
        Hosted by ACM Student Chapter
      </div>
      
      <div className="mt-10 flex flex-col items-center animate-fade-in-delay">
        <div className="px-4 py-1 rounded-full bg-green-400 bg-opacity-10 mb-3">
          <p className="text-green-400 font-medium text-sm">
            REGISTRATIONS NOW OPEN
          </p>
        </div>
        
        <p className="text-white text-xl md:text-2xl font-medium mb-6">
          April 4th, 2025
        </p>

        {/* WhatsApp Registration Section */}
        <div className="mt-4 flex flex-col items-center space-y-4">
          <p className="text-white text-lg font-medium">
            Join WhatsApp For Registration Details
          </p>
          
          <img 
            src="/lovable-uploads/d8c32eca-ab67-4ce2-b660-62dce1fddeae.png" 
            alt="WhatsApp QR Code" 
            className="w-48 h-48 md:w-64 md:h-64 bg-white p-2 rounded-md"
          />
          
          <div className="flex items-center gap-3">
            <div className="h-px w-10 bg-gray-500"></div>
            <span className="text-white text-sm">OR</span>
            <div className="h-px w-10 bg-gray-500"></div>
          </div>
          
          <a 
            href="https://chat.whatsapp.com/example" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-green-400 hover:text-green-300 text-lg font-medium transition-colors underline"
          >
            Click here to join WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
