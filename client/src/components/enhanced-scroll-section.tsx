import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { useRef } from 'react';
import { Code2, Zap, Target, Award } from 'lucide-react';
import { AnimatedCounter } from '@/components/ui/scroll-trigger-animations';

export function EnhancedScrollSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  // Parallax effects with different speeds
  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '-50%']);
  const leftIconY = useTransform(scrollYProgress, [0, 1], ['0%', '-80%']);
  const rightIconY = useTransform(scrollYProgress, [0, 1], ['0%', '80%']);

  // Smooth spring animations
  const smoothBackgroundY = useSpring(backgroundY, { stiffness: 100, damping: 30 });
  const smoothTextY = useSpring(textY, { stiffness: 100, damping: 30 });

  // Scale and rotate effects
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 360]);

  const stats = [
    { icon: <Code2 size={32} />, number: 150, label: "Projetos Entregues", suffix: "+" },
    { icon: <Zap size={32} />, number: 98, label: "Satisfação Cliente", suffix: "%" },
    { icon: <Target size={32} />, number: 24, label: "Meses Experiência", suffix: "+" },
    { icon: <Award size={32} />, number: 5, label: "Anos no Mercado", suffix: "" }
  ];

  return (
    <section ref={ref} className="relative py-32 overflow-hidden bg-gradient-to-b from-gray-900 via-black to-gray-800">
      {/* Animated background with parallax */}
      <motion.div
        className="absolute inset-0 opacity-10"
        style={{ y: smoothBackgroundY }}
      >
        <div className="w-full h-full bg-gradient-to-r from-primary/20 to-green-400/20" />
      </motion.div>

      {/* Floating geometric shapes with different parallax speeds */}
      <motion.div
        className="absolute top-20 left-20 w-32 h-32 border-2 border-primary/30"
        style={{ y: leftIconY, rotate }}
      />
      <motion.div
        className="absolute bottom-20 right-20 w-24 h-24 bg-primary/10 rounded-full"
        style={{ y: rightIconY, scale }}
      />

      <div className="max-w-7xl mx-auto px-6 relative">
        {/* Main content with parallax */}
        <motion.div
          className="text-center mb-20"
          style={{ y: smoothTextY }}
        >
          <motion.h2
            className="text-5xl md:text-7xl font-bold mb-8 neon-text"
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, type: "spring", bounce: 0.4 }}
          >
            RESULTADOS
          </motion.h2>
          
          <motion.div
            className="w-40 h-2 bg-gradient-to-r from-primary to-green-400 mx-auto mb-8 animate-morphing-border"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, delay: 0.5 }}
          />

          <motion.p
            className="text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            Números que falam por si só. Cada projeto é uma oportunidade de superar expectativas e criar soluções digitais extraordinárias.
          </motion.p>
        </motion.div>

        {/* Animated statistics grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="relative perspective-1000"
              initial={{ opacity: 0, rotateY: 90 }}
              whileInView={{ opacity: 1, rotateY: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ 
                duration: 0.8, 
                delay: index * 0.2,
                type: "spring",
                stiffness: 100
              }}
            >
              <motion.div
                className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-3xl border border-primary/20 hover:border-primary/60 transition-all duration-500 group cursor-pointer transform-3d"
                whileHover={{ 
                  scale: 1.05, 
                  rotateY: 10,
                  rotateX: 5,
                  boxShadow: "0 25px 50px rgba(34, 197, 94, 0.3)"
                }}
                transition={{ duration: 0.3 }}
              >
                {/* Glowing effect on hover */}
                <motion.div
                  className="absolute inset-0 rounded-3xl bg-gradient-to-r from-primary/20 to-green-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  initial={false}
                />

                <div className="relative z-10">
                  <motion.div
                    className="w-20 h-20 bg-primary/10 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors duration-300"
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  >
                    <div className="text-primary">
                      {stat.icon}
                    </div>
                  </motion.div>

                  <div className="text-center">
                    <div className="flex items-center justify-center mb-4">
                      <AnimatedCounter
                        from={0}
                        to={stat.number}
                        duration={2}
                        className="text-4xl md:text-5xl font-bold text-primary font-mono"
                      />
                      <motion.span
                        className="text-4xl md:text-5xl font-bold text-primary font-mono ml-1"
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 1.5 + (index * 0.2) }}
                      >
                        {stat.suffix}
                      </motion.span>
                    </div>
                    
                    <motion.h3
                      className="text-lg font-semibold text-white group-hover:text-primary transition-colors duration-300"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.8 + (index * 0.2) }}
                    >
                      {stat.label}
                    </motion.h3>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Wave animation for additional visual interest */}
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 1 }}
        >
          {['C', 'O', 'N', 'F', 'I', 'A', 'N', 'Ç', 'A'].map((letter, index) => (
            <motion.span
              key={index}
              className="inline-block text-3xl md:text-4xl font-bold text-gray-600 mx-1"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: 1.5 + (index * 0.1),
                type: "spring",
                bounce: 0.6
              }}
              whileHover={{ 
                color: "#22c55e", 
                scale: 1.2,
                textShadow: "0 0 20px #22c55e"
              }}
            >
              {letter}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}