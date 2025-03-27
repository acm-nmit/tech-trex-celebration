
import React, { useEffect, useState } from 'react';
import Hero from '../components/Hero';
import Confetti from '../components/Confetti';

const Index: React.FC = () => {
  const [showConfetti, setShowConfetti] = useState(false);

  useEffect(() => {
    // Show confetti immediately
    setShowConfetti(true);
  }, []);

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-charcoal grid-bg">
      {showConfetti && <Confetti />}
      <Hero />
    </div>
  );
};

export default Index;
