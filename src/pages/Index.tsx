
import React, { useEffect, useState } from 'react';
import Hero from '../components/Hero';
import RevealAnimation from '../components/RevealAnimation';

const Index: React.FC = () => {
  const [showReveal, setShowReveal] = useState(false);

  useEffect(() => {
    // Show reveal animation immediately
    setShowReveal(true);
  }, []);

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gray-800 reveal-grid">
      {showReveal && <RevealAnimation />}
      <Hero />
    </div>
  );
};

export default Index;
