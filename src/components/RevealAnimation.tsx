
import React, { useEffect, useState } from 'react';

const RevealAnimation: React.FC = () => {
  const [showAnimation, setShowAnimation] = useState(false);
  const [circles, setCircles] = useState<Array<{ id: number; size: number; x: number; y: number; delay: number }>>([]);

  useEffect(() => {
    // Create circles for the reveal animation
    const newCircles = [];
    const count = 20;
    
    for (let i = 0; i < count; i++) {
      newCircles.push({
        id: i,
        size: Math.random() * 30 + 10,
        x: Math.random() * 100,
        y: Math.random() * 100,
        delay: Math.random() * 0.5,
      });
    }
    
    setCircles(newCircles);
    setShowAnimation(true);
    
    // Clean up animation after it completes
    const timer = setTimeout(() => {
      setShowAnimation(false);
    }, 4000);
    
    return () => clearTimeout(timer);
  }, []);

  if (!showAnimation) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      {circles.map((circle) => (
        <div
          key={circle.id}
          className="absolute rounded-full bg-green-400 opacity-0 reveal-circle"
          style={{
            width: `${circle.size}px`,
            height: `${circle.size}px`,
            left: `${circle.x}%`,
            top: `${circle.y}%`,
            animation: `reveal-circle 2s ease-out forwards`,
            animationDelay: `${circle.delay}s`,
          }}
        />
      ))}
    </div>
  );
};

export default RevealAnimation;
