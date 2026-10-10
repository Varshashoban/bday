import { useEffect, useState } from 'react';

/**
 * FloatingHearts — decorative floating heart particles.
 * Used on the birthday reveal and final screens.
 */
export default function FloatingHearts({ count = 12 }) {
  const [hearts, setHearts] = useState([]);

  useEffect(() => {
    const generated = Array.from({ length: count }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 4,
      duration: 3 + Math.random() * 4,
      size: 12 + Math.random() * 18,
      symbol: ['♡', '♥', '❤', '💗', '💕'][Math.floor(Math.random() * 5)],
    }));
    setHearts(generated);
  }, [count]);

  return (
    <div className="floating-hearts" aria-hidden="true">
      {hearts.map((h) => (
        <span
          key={h.id}
          className="floating-heart"
          style={{
            left: `${h.left}%`,
            animationDelay: `${h.delay}s`,
            animationDuration: `${h.duration}s`,
            fontSize: `${h.size}px`,
          }}
        >
          {h.symbol}
        </span>
      ))}
    </div>
  );
}
