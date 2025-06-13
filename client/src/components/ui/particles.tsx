import { useEffect, useRef } from 'react';

export function Particles() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const createParticle = () => {
      const particle = document.createElement('div');
      particle.className = 'absolute w-0.5 h-0.5 bg-primary rounded-full opacity-70';
      particle.style.left = Math.random() * 100 + 'vw';
      particle.style.animationDuration = (Math.random() * 3 + 5) + 's';
      particle.style.opacity = Math.random().toString();
      
      // Animate particle movement
      particle.animate([
        { transform: 'translateY(100vh) translateX(0)', opacity: 0 },
        { transform: 'translateY(100vh) translateX(0)', opacity: 1, offset: 0.1 },
        { transform: 'translateY(-100px) translateX(100px)', opacity: 1, offset: 0.9 },
        { transform: 'translateY(-100px) translateX(100px)', opacity: 0 }
      ], {
        duration: (Math.random() * 3 + 5) * 1000,
        easing: 'linear'
      });

      container.appendChild(particle);

      setTimeout(() => {
        if (particle.parentNode) {
          particle.parentNode.removeChild(particle);
        }
      }, 8000);
    };

    const interval = setInterval(createParticle, 300);
    return () => clearInterval(interval);
  }, []);

  return (
    <div 
      ref={containerRef}
      className="fixed inset-0 z-0 pointer-events-none"
      aria-hidden="true"
    />
  );
}
