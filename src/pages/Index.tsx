
import React, { useEffect, useState } from 'react';
import Hero from '../components/Hero';
import Confetti from '../components/Confetti';

const Index: React.FC = () => {
  const [showConfetti, setShowConfetti] = useState(false);

  useEffect(() => {
    // Slight delay before showing confetti for better visual effect
    const timer = setTimeout(() => {
      setShowConfetti(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-b from-white to-gray-50">
      {showConfetti && <Confetti />}
      <Hero />
    </div>
  );
};

export default Index;
