import { motion } from 'framer-motion';
import { Code, Server, Smartphone, Cloud, Palette, Rocket } from 'lucide-react';

export function ServicesSection() {
  const services = [
    {
      icon: <Code size={24} />,
      title: "Desenvolvimento Frontend",
      description: "Interfaces modernas e responsivas usando React, Vue.js, Angular e as mais avançadas tecnologias frontend.",
      technologies: ["React", "Vue.js", "TypeScript"]
    },
    {
      icon: <Server size={24} />,
      title: "Desenvolvimento Backend",
      description: "APIs robustas e escaláveis com Node.js, Python, PHP e integração com bancos de dados modernos.",
      technologies: ["Node.js", "Python", "MongoDB"]
    },
    {
      icon: <Smartphone size={24} />,
      title: "Aplicações Mobile",
      description: "Apps nativos e híbridos com React Native e Flutter para iOS e Android com performance excepcional.",
      technologies: ["React Native", "Flutter", "PWA"]
    },
    {
      icon: <Cloud size={24} />,
      title: "Cloud & DevOps",
      description: "Deploy e infraestrutura na nuvem com AWS, Google Cloud, Docker e automação de CI/CD.",
      technologies: ["AWS", "Docker", "CI/CD"]
    },
    {
      icon: <Palette size={24} />,
      title: "UI/UX Design",
      description: "Design de interfaces intuitivas e experiências de usuário memoráveis com foco na conversão.",
      technologies: ["Figma", "Adobe XD", "Prototyping"]
    },
    {
      icon: <Rocket size={24} />,
      title: "Otimização & SEO",
      description: "Performance optimization, SEO técnico e analytics para maximizar sua visibilidade online.",
      technologies: ["SEO", "Analytics", "Performance"]
    }
  ];

  return (
    <section id="services" className="py-32 bg-gradient-to-b from-black to-gray-900 relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6 neon-text">SERVIÇOS</h2>
          <div className="w-32 h-1 bg-gradient-to-r from-primary to-green-400 mx-auto mb-8" />
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Soluções completas em desenvolvimento web para elevar sua presença digital
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Stagger staggerDelay={0.15}>
            {services.map((service, index) => (
              <ScrollScale key={index} scaleRange={[0.9, 1.05]}>
                <ScrollVelocity factor={0.8}>
                  <motion.div
                    className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-primary/20 hover:border-primary/60 transition-all duration-500 group cursor-magnetic"
                    whileHover={{ scale: 1.05, y: -5 }}
                  >
                    <motion.div
                      className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-300"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <div className="text-primary">
                        {service.icon}
                      </div>
                    </motion.div>
                    <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-primary transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-gray-400 mb-6 leading-relaxed">
                      {service.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {service.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </ScrollVelocity>
              </ScrollScale>
            ))}
          </Stagger>
        </div>
      </div>
    </section>
  );
}
