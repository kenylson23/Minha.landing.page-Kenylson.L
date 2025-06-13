import { motion, useScroll, useTransform, useSpring, MotionValue } from 'framer-motion';
import { useRef, ReactNode } from 'react';

interface ScrollTriggeredProps {
  children: ReactNode;
  className?: string;
}

// Animação de entrada com bounce effect
export function BounceInOnScroll({ children, className = "" }: ScrollTriggeredProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 100, scale: 0.8 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-150px" }}
      transition={{
        duration: 0.8,
        type: "spring",
        bounce: 0.4,
        delay: 0.1
      }}
    >
      {children}
    </motion.div>
  );
}

// Animação de slide lateral com rotação
export function SlideRotateOnScroll({ children, direction = "left", className = "" }: ScrollTriggeredProps & { direction?: "left" | "right" }) {
  const x = direction === "left" ? -100 : 100;
  const rotate = direction === "left" ? -10 : 10;
  
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, x, rotate }}
      whileInView={{ opacity: 1, x: 0, rotate: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{
        duration: 1,
        type: "spring",
        stiffness: 100,
        damping: 15
      }}
    >
      {children}
    </motion.div>
  );
}

// Efeito de parallax suave
export function ParallaxElement({ children, speed = 0.5, className = "" }: ScrollTriggeredProps & { speed?: number }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [0, speed * 100]);
  const smoothY = useSpring(y, { stiffness: 100, damping: 30 });
  
  return (
    <motion.div
      ref={ref}
      className={className}
      style={{ y: smoothY }}
    >
      {children}
    </motion.div>
  );
}

// Animação de escala com opacity
export function ScaleUpOnScroll({ children, className = "" }: ScrollTriggeredProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94]
      }}
    >
      {children}
    </motion.div>
  );
}

// Efeito de blur que remove conforme scrolla
export function BlurRevealOnScroll({ children, className = "" }: ScrollTriggeredProps) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  const blur = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [10, 0, 0, 10]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.3, 1, 1, 0.3]);
  
  return (
    <motion.div
      ref={ref}
      className={className}
      style={{
        filter: useTransform(blur, (value) => `blur(${value}px)`),
        opacity
      }}
    >
      {children}
    </motion.div>
  );
}

// Animação de flip 3D
export function FlipOnScroll({ children, className = "" }: ScrollTriggeredProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, rotateY: 90 }}
      whileInView={{ opacity: 1, rotateY: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{
        duration: 0.8,
        ease: "easeOut"
      }}
      style={{ perspective: 1000 }}
    >
      {children}
    </motion.div>
  );
}

// Animação de ondas sequenciais
export function WaveReveal({ children, className = "" }: { children: ReactNode[]; className?: string }) {
  return (
    <div className={className}>
      {children.map((child, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{
            duration: 0.6,
            delay: index * 0.15,
            ease: [0.22, 1, 0.36, 1]
          }}
        >
          {child}
        </motion.div>
      ))}
    </div>
  );
}

// Efeito magnético com scroll
export function MagneticHover({ children, className = "" }: ScrollTriggeredProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      whileHover={{ 
        scale: 1.05, 
        rotate: [0, -1, 1, 0],
        transition: { duration: 0.3 }
      }}
      transition={{ duration: 0.6 }}
    >
      {children}
    </motion.div>
  );
}

// Contador animado
export function AnimatedCounter({ from, to, duration = 2, className = "" }: {
  from: number;
  to: number;
  duration?: number;
  className?: string;
}) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.8", "start 0.3"]
  });
  
  const count = useTransform(scrollYProgress, [0, 1], [from, to]);
  const rounded = useTransform(count, (value) => Math.round(value));
  
  return (
    <motion.div ref={ref} className={className}>
      <motion.span>{rounded}</motion.span>
    </motion.div>
  );
}

// Efeito de glitch no scroll
export function GlitchOnScroll({ children, className = "" }: ScrollTriggeredProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0 }}
      whileInView={{ 
        opacity: 1,
        x: [0, -2, 2, 0],
        filter: [
          "hue-rotate(0deg)",
          "hue-rotate(90deg)",
          "hue-rotate(180deg)",
          "hue-rotate(0deg)"
        ]
      }}
      viewport={{ once: true }}
      transition={{
        duration: 1.5,
        times: [0, 0.3, 0.6, 1],
        ease: "easeInOut"
      }}
    >
      {children}
    </motion.div>
  );
}