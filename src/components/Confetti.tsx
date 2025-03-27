
import React, { useEffect, useState } from 'react';

interface ConfettiPiece {
  id: number;
  x: number;
  delay: number;
  color: string;
  size: number;
  rotation: number;
}

const colors = ['#4ADE80', '#FFFFFF', '#47B5FF', '#256D85'];
const shapes = ['square', 'circle'];

const Confetti: React.FC = () => {
  const [pieces, setPieces] = useState<ConfettiPiece[]>([]);
  
  useEffect(() => {
    const createPieces = () => {
      const newPieces: ConfettiPiece[] = [];
      const count = Math.min(window.innerWidth / 8, 150); // More pieces
      
      for (let i = 0; i < count; i++) {
        newPieces.push({
          id: i,
          x: Math.random() * 100, // Random horizontal position (%)
          delay: Math.random() * 2, // Reduced delay for faster appearance
          color: colors[Math.floor(Math.random() * colors.length)],
          size: Math.random() * 6 + 5, // Between 5px and 11px
          rotation: Math.random() * 360, // Random initial rotation
        });
      }
      
      setPieces(newPieces);
    };
    
    createPieces();
    
    // Clean up confetti after animation completes
    const timer = setTimeout(() => {
      setPieces([]);
    }, 10000);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      {pieces.map((piece) => {
        const isSquare = shapes[Math.floor(Math.random() * shapes.length)] === 'square';
        return (
          <div
            key={piece.id}
            className={`confetti ${isSquare ? '' : 'rounded-full'}`}
            style={{
              left: `${piece.x}%`,
              width: `${piece.size}px`,
              height: `${piece.size}px`,
              backgroundColor: piece.color,
              animation: `confetti-fall ${4 + Math.random() * 2}s ease-out forwards`,
              animationDelay: `${piece.delay}s`,
              transform: `rotate(${piece.rotation}deg)`,
            }}
          />
        );
      })}
    </div>
  );
};

export default Confetti;
