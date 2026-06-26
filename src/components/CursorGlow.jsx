import { useEffect, useState } from 'react';

export default function CursorGlow() {
  const [pos, setPos] = useState({ x: -200, y: -200 });

  useEffect(() => {
    const handleMove = (e) => {
      setPos({ x: e.clientX, y: e.clientY });
    };

    // Only enable on desktop
    if (window.matchMedia('(pointer: fine)').matches) {
      window.addEventListener('mousemove', handleMove);
    }

    return () => window.removeEventListener('mousemove', handleMove);
  }, []);

  return (
    <div
      className="cursor-glow"
      style={{ left: pos.x, top: pos.y }}
    />
  );
}
