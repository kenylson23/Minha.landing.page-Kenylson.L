import { CustomCursor } from '@/components/ui/custom-cursor';
import { Particles } from '@/components/ui/particles';
import { Navigation } from '@/components/navigation';
import { HeroSection } from '@/components/hero-section';
import { ServicesSection } from '@/components/services-section';
import { PortfolioSection } from '@/components/portfolio-section';
import { SkillsSection } from '@/components/skills-section';
import { ContactSection } from '@/components/contact-section';
import { EnhancedScrollSection } from '@/components/enhanced-scroll-section';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <div className="bg-black text-white min-h-screen">
      <CustomCursor />
      <Particles />
      <Navigation />
      
      <main>
        <HeroSection />
        <ServicesSection />
        <PortfolioSection />
        <EnhancedScrollSection />
        <SkillsSection />
        <ContactSection />
      </main>
      
      {/* Footer */}
      <motion.footer
        className="bg-black border-t border-primary/20 py-12"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <motion.div
                className="text-3xl font-bold text-primary font-mono mb-2 cursor-pointer"
                whileHover={{ scale: 1.05 }}
                onClick={() => {
                  const element = document.getElementById('home');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }
                }}
              >
                &lt;KL/&gt;
              </motion.div>
              <p className="text-gray-400">Desenvolvedor Web • Criando o futuro digital</p>
            </div>
            
            <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8">
              <div className="text-center md:text-right">
                <p className="text-gray-400 text-sm">Entre em contato</p>
                <a
                  href="tel:+244949639932"
                  className="text-primary font-mono text-lg hover:text-green-400 transition-colors duration-300"
                >
                  +244 949639932
                </a>
              </div>
              <div className="w-px h-12 bg-gray-600 hidden md:block" />
              <div className="flex space-x-4">
                {[
                  { icon: "LinkedIn", href: "#" },
                  { icon: "GitHub", href: "#" },
                  { icon: "Twitter", href: "#" }
                ].map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    className="text-gray-400 hover:text-primary transition-colors duration-300 cursor-magnetic"
                    whileHover={{ scale: 1.2, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    aria-label={social.icon}
                  >
                    <span className="text-xl">
                      {social.icon === "LinkedIn" && "💼"}
                      {social.icon === "GitHub" && "🐙"}
                      {social.icon === "Twitter" && "🐦"}
                    </span>
                  </motion.a>
                ))}
              </div>
            </div>
          </div>
          
          <motion.div
            className="border-t border-gray-800 mt-8 pt-8 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-gray-400 text-sm">
              © 2024 Kenylson Lourenço. Todos os direitos reservados. Desenvolvido com{' '}
              <span className="text-primary">❤</span> e muita tecnologia.
            </p>
          </motion.div>
        </div>
      </motion.footer>
    </div>
  );
}
