import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { ScrollReveal, Parallax } from '@/components/ui/scroll-animations';
import { MagneticScroll, ScrollGlitch, TextReveal } from '@/components/ui/advanced-scroll-effects';

export function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-gray-800" />
      
      {/* Floating geometric shapes with parallax */}
      <Parallax speed={0.3}>
        <motion.div
          className="absolute top-20 left-10 w-20 h-20 border-2 border-primary/30 rotate-45"
          animate={{ 
            y: [0, -20, 0],
            rotate: [45, 90, 45]
          }}
          transition={{ 
            duration: 6, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
        />
      </Parallax>
      
      <Parallax speed={-0.2}>
        <motion.div
          className="absolute bottom-32 right-16 w-16 h-16 bg-primary/10 rounded-full"
          animate={{ 
            y: [0, -15, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            duration: 4, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: 2
          }}
        />
      </Parallax>
      
      <MagneticScroll strength={0.5}>
        <motion.div
          className="absolute top-1/2 left-1/4 w-12 h-12 border border-green-400/40"
          animate={{ 
            y: [0, -25, 0],
            rotate: [0, 180, 360]
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: 4
          }}
        />
      </MagneticScroll>
      
      <div className="relative z-10 text-center max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <motion.h1
            className="text-6xl md:text-8xl font-bold mb-6 neon-text glitch-effect"
            data-text="KENYLSON"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            KENYLSON
          </motion.h1>
          
          <motion.h2
            className="text-3xl md:text-5xl font-light mb-8 text-gray-300"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            LOURENÇO
          </motion.h2>
          
          <motion.div
            className="text-xl md:text-2xl text-primary font-mono mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <span className="animate-neon-flicker">{ "Desenvolvedor Web" }</span>
          </motion.div>
          
          <TextReveal className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto mb-12 leading-relaxed">
            Criando experiências digitais imersivas e interfaces modernas que conectam negócios ao futuro da tecnologia web.
          </TextReveal>
          
          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 1.4 }}
          >
            <motion.button
              className="px-8 py-4 bg-primary text-black font-semibold rounded-lg transition-all duration-300 neon-glow cursor-magnetic"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection('portfolio')}
            >
              Ver Meu Trabalho
            </motion.button>
            <motion.button
              className="px-8 py-4 border-2 border-primary text-primary font-semibold rounded-lg hover:bg-primary hover:text-black transition-all duration-300 cursor-magnetic"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection('contact')}
            >
              Entre em Contato
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        onClick={() => scrollToSection('services')}
      >
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <motion.div
            className="w-1 h-3 bg-primary rounded-full mt-2"
            animate={{ opacity: [1, 0, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </div>
        <ChevronDown className="text-primary mt-2 mx-auto" size={20} />
      </motion.div>
    </section>
  );
}
