import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { useRef, ReactNode } from 'react';

interface TextRevealProps {
  children: string;
  className?: string;
}

export function TextReveal({ children, className = "" }: TextRevealProps) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.8", "start 0.2"]
  });

  const words = children.split(" ");

  return (
    <div ref={ref} className={className}>
      {words.map((word, index) => (
        <motion.span
          key={index}
          className="inline-block mr-2"
          style={{
            opacity: useTransform(
              scrollYProgress,
              [index / words.length, (index + 1) / words.length],
              [0.2, 1]
            )
          }}
        >
          {word}
        </motion.span>
      ))}
    </div>
  );
}

interface MagneticScrollProps {
  children: ReactNode;
  strength?: number;
}

export function MagneticScroll({ children, strength = 0.3 }: MagneticScrollProps) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const magneticY = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [50 * strength, 0, -50 * strength]
  );

  const smoothY = useSpring(magneticY, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <motion.div
      ref={ref}
      style={{ y: smoothY }}
    >
      {children}
    </motion.div>
  );
}

interface ScrollVelocityProps {
  children: ReactNode;
  factor?: number;
}

export function ScrollVelocity({ children, factor = 1 }: ScrollVelocityProps) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -200 * factor]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <motion.div
      ref={ref}
      style={{ y, opacity }}
    >
      {children}
    </motion.div>
  );
}

interface StickyScrollProps {
  children: ReactNode;
  top?: number;
}

export function StickyScroll({ children, top = 100 }: StickyScrollProps) {
  return (
    <motion.div
      className="sticky"
      style={{ top: `${top}px` }}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      {children}
    </motion.div>
  );
}

interface ScrollGlitchProps {
  children: ReactNode;
  intensity?: number;
}

export function ScrollGlitch({ children, intensity = 2 }: ScrollGlitchProps) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const x = useTransform(scrollYProgress, [0, 0.2, 0.4, 0.6, 0.8, 1], 
    [0, intensity, -intensity, intensity, -intensity, 0]);
  
  const glitchIntensity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0]);

  return (
    <motion.div
      ref={ref}
      style={{ 
        x,
        filter: useTransform(glitchIntensity, [0, 1], 
          ['hue-rotate(0deg)', `hue-rotate(${intensity * 90}deg)`])
      }}
    >
      {children}
    </motion.div>
  );
}

interface ScrollWaveProps {
  children: ReactNode[];
  waveHeight?: number;
}

export function ScrollWave({ children, waveHeight = 20 }: ScrollWaveProps) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  return (
    <div ref={ref}>
      {children.map((child, index) => {
        const y = useTransform(
          scrollYProgress,
          [0, 0.5, 1],
          [
            Math.sin((index * 0.5) + 0) * waveHeight,
            Math.sin((index * 0.5) + Math.PI) * waveHeight,
            Math.sin((index * 0.5) + Math.PI * 2) * waveHeight
          ]
        );

        return (
          <motion.div key={index} style={{ y }}>
            {child}
          </motion.div>
        );
      })}
    </div>
  );
}

interface ScrollBlurProps {
  children: ReactNode;
  maxBlur?: number;
}

export function ScrollBlur({ children, maxBlur = 5 }: ScrollBlurProps) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const blur = useTransform(scrollYProgress, [0, 0.5, 1], [maxBlur, 0, maxBlur]);

  return (
    <motion.div
      ref={ref}
      style={{
        filter: useTransform(blur, (value) => `blur(${value}px)`)
      }}
    >
      {children}
    </motion.div>
  );
}

interface ScrollPathProps {
  children: ReactNode;
  path?: string;
}

export function ScrollPath({ children, path = "M0,0 Q50,50 100,0" }: ScrollPathProps) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  // Simulate path movement with bezier curve
  const progress = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const x = useTransform(progress, [0, 0.5, 1], [0, 50, 100]);
  const y = useTransform(progress, [0, 0.5, 1], [0, 50, 0]);

  return (
    <motion.div
      ref={ref}
      style={{ x, y }}
    >
      {children}
    </motion.div>
  );
}

interface ScrollCounterProps {
  from: number;
  to: number;
  duration?: number;
  className?: string;
}

export function ScrollCounter({ from, to, duration = 2, className = "" }: ScrollCounterProps) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.8", "start 0.2"]
  });

  const count = useTransform(scrollYProgress, [0, 1], [from, to]);
  const rounded = useTransform(count, (value) => Math.round(value));

  return (
    <motion.div ref={ref} className={className}>
      <motion.span>{rounded}</motion.span>
    </motion.div>
  );
}

interface ScrollColorShiftProps {
  children: ReactNode;
  colors?: string[];
}

export function ScrollColorShift({ children, colors = ['#00ff00', '#ff0000', '#0000ff'] }: ScrollColorShiftProps) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const colorIndex = useTransform(scrollYProgress, [0, 1], [0, colors.length - 1]);
  
  return (
    <motion.div
      ref={ref}
      style={{
        color: useTransform(colorIndex, (value) => {
          const index = Math.floor(value);
          const nextIndex = Math.min(index + 1, colors.length - 1);
          const progress = value - index;
          
          // Simple color interpolation
          return colors[index] || colors[0];
        })
      }}
    >
      {children}
    </motion.div>
  );
}