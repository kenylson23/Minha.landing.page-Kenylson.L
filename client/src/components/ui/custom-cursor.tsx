import { useEffect, useRef } from 'react';

export function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    let mouseX = 0, mouseY = 0;
    let cursorX = 0, cursorY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const animateCursor = () => {
      cursorX += (mouseX - cursorX) * 0.1;
      cursorY += (mouseY - cursorY) * 0.1;
      cursor.style.left = cursorX + 'px';
      cursor.style.top = cursorY + 'px';
      requestAnimationFrame(animateCursor);
    };

    document.addEventListener('mousemove', handleMouseMove);
    animateCursor();

    // Add magnetic effect for interactive elements
    const interactiveElements = document.querySelectorAll('button, a, .cursor-magnetic');
    
    const handleMouseEnter = () => {
      cursor.style.transform = 'scale(2)';
      cursor.style.mixBlendMode = 'difference';
    };

    const handleMouseLeave = () => {
      cursor.style.transform = 'scale(1)';
      cursor.style.mixBlendMode = 'normal';
    };

    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', handleMouseEnter);
      el.addEventListener('mouseleave', handleMouseLeave);
    });

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      interactiveElements.forEach(el => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className="fixed w-5 h-5 bg-primary rounded-full pointer-events-none z-[9999] transition-transform duration-100 shadow-[0_0_10px_rgba(0,255,0,0.6)]"
      style={{ left: 0, top: 0 }}
    />
  );
}
