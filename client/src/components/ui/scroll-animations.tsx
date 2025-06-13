import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { useRef, ReactNode } from 'react';

interface ScrollRevealProps {
  children: ReactNode;
  direction?: 'up' | 'down' | 'left' | 'right';
  delay?: number;
  duration?: number;
}

export function ScrollReveal({ 
  children, 
  direction = 'up', 
  delay = 0, 
  duration = 0.8 
}: ScrollRevealProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const directions = {
    up: { y: 50, x: 0 },
    down: { y: -50, x: 0 },
    left: { y: 0, x: 50 },
    right: { y: 0, x: -50 }
  };

  return (
    <motion.div
      ref={ref}
      initial={{ 
        opacity: 0, 
        ...directions[direction]
      }}
      animate={{
        opacity: isInView ? 1 : 0,
        x: isInView ? 0 : directions[direction].x,
        y: isInView ? 0 : directions[direction].y
      }}
      transition={{ 
        duration, 
        delay,
        ease: [0.22, 1, 0.36, 1]
      }}
    >
      {children}
    </motion.div>
  );
}

interface ParallaxProps {
  children: ReactNode;
  speed?: number;
  direction?: 'vertical' | 'horizontal';
}

export function Parallax({ children, speed = 0.5, direction = 'vertical' }: ParallaxProps) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], 
    direction === 'vertical' ? [-100 * speed, 100 * speed] : [0, 0]
  );
  const x = useTransform(scrollYProgress, [0, 1], 
    direction === 'horizontal' ? [-100 * speed, 100 * speed] : [0, 0]
  );

  return (
    <motion.div
      ref={ref}
      style={{ y: direction === 'vertical' ? y : 0, x: direction === 'horizontal' ? x : 0 }}
    >
      {children}
    </motion.div>
  );
}

interface ScrollScaleProps {
  children: ReactNode;
  scaleRange?: [number, number];
}

export function ScrollScale({ children, scaleRange = [0.8, 1] }: ScrollScaleProps) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [scaleRange[0], 1, scaleRange[1]]);

  return (
    <motion.div
      ref={ref}
      style={{ scale }}
    >
      {children}
    </motion.div>
  );
}

interface ScrollRotateProps {
  children: ReactNode;
  rotateRange?: [number, number];
}

export function ScrollRotate({ children, rotateRange = [0, 360] }: ScrollRotateProps) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const rotate = useTransform(scrollYProgress, [0, 1], rotateRange);

  return (
    <motion.div
      ref={ref}
      style={{ rotate }}
    >
      {children}
    </motion.div>
  );
}

interface StaggerProps {
  children: ReactNode[];
  delay?: number;
  staggerDelay?: number;
}

export function Stagger({ children, delay = 0, staggerDelay = 0.1 }: StaggerProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div ref={ref}>
      {children.map((child, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{
            duration: 0.6,
            delay: delay + (index * staggerDelay),
            ease: [0.22, 1, 0.36, 1]
          }}
        >
          {child}
        </motion.div>
      ))}
    </div>
  );
}

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-green-400 origin-left z-50"
      style={{ scaleX: scrollYProgress }}
    />
  );
}

interface ScrollFadeProps {
  children: ReactNode;
  fadeDirection?: 'in' | 'out';
}

export function ScrollFade({ children, fadeDirection = 'in' }: ScrollFadeProps) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(
    scrollYProgress, 
    [0, 0.3, 0.7, 1], 
    fadeDirection === 'in' ? [0, 1, 1, 0] : [1, 0, 0, 1]
  );

  return (
    <motion.div
      ref={ref}
      style={{ opacity }}
    >
      {children}
    </motion.div>
  );
}

interface ScrollMorphProps {
  children: ReactNode;
  morphFrom?: string;
  morphTo?: string;
}

export function ScrollMorph({ children, morphFrom = "0 0 0", morphTo = "20px 20px 20px" }: ScrollMorphProps) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const borderRadius = useTransform(
    scrollYProgress,
    [0, 1],
    [morphFrom, morphTo]
  );

  return (
    <motion.div
      ref={ref}
      style={{ borderRadius }}
    >
      {children}
    </motion.div>
  );
}