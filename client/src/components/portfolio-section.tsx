import { motion } from 'framer-motion';
import { ShoppingCart, BarChart3, Smartphone, Bitcoin, Bot, Gamepad2, ExternalLink } from 'lucide-react';

export function PortfolioSection() {
  const projects = [
    {
      icon: <ShoppingCart size={32} />,
      title: "Plataforma E-commerce",
      description: "Sistema completo de vendas online com pagamentos integrados, dashboard administrativo e analytics em tempo real.",
      technologies: ["React", "Node.js", "Stripe"],
      colors: ["bg-green-500", "bg-blue-500", "bg-yellow-500"]
    },
    {
      icon: <BarChart3 size={32} />,
      title: "Dashboard Analytics",
      description: "Interface administrativa com visualização de dados em tempo real, relatórios customizáveis e sistema de notificações.",
      technologies: ["Vue.js", "Python", "PostgreSQL"],
      colors: ["bg-green-500", "bg-primary", "bg-purple-500"]
    },
    {
      icon: <Smartphone size={32} />,
      title: "App de Delivery",
      description: "Aplicativo móvel para delivery com geolocalização, pagamentos online e tracking em tempo real.",
      technologies: ["React Native", "Firebase"],
      colors: ["bg-blue-500", "bg-primary", "bg-orange-500"]
    },
    {
      icon: <Bitcoin size={32} />,
      title: "DeFi Platform",
      description: "Aplicação descentralizada para trading de criptomoedas com smart contracts e wallet integration.",
      technologies: ["Web3.js", "Solidity", "React"],
      colors: ["bg-yellow-500", "bg-primary", "bg-purple-500"]
    },
    {
      icon: <Bot size={32} />,
      title: "Plataforma de IA",
      description: "Sistema de machine learning para análise de dados e automação de processos empresariais.",
      technologies: ["Python", "TensorFlow", "FastAPI"],
      colors: ["bg-red-500", "bg-primary", "bg-blue-500"]
    },
    {
      icon: <Gamepad2 size={32} />,
      title: "Plataforma de Games",
      description: "Portal de jogos multiplayer com sistema de ranking, tournaments e microtransações integradas.",
      technologies: ["Unity", "WebGL", "Socket.io"],
      colors: ["bg-pink-500", "bg-primary", "bg-cyan-500"]
    }
  ];

  return (
    <section id="portfolio" className="py-32 bg-gradient-to-b from-gray-900 to-gray-800 relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6 neon-text">PORTFÓLIO</h2>
          <div className="w-32 h-1 bg-gradient-to-r from-primary to-green-400 mx-auto mb-8" />
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Projetos que demonstram inovação, qualidade técnica e design excepcional
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-800 to-gray-900 border border-primary/20 hover:border-primary/60 transition-all duration-500 cursor-magnetic"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.02, y: -5 }}
            >
              {/* Project showcase */}
              <div className="aspect-video bg-gradient-to-br from-gray-900 to-black relative overflow-hidden">
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-primary/20 to-green-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                />
                <div className="p-6 h-full flex flex-col justify-center">
                  <div className="text-center">
                    <motion.div
                      className="text-primary mb-4"
                      whileHover={{ scale: 1.2, rotate: 5 }}
                      transition={{ duration: 0.3 }}
                    >
                      {project.icon}
                    </motion.div>
                    <h4 className="text-xl font-bold text-white">{project.title}</h4>
                    <p className="text-gray-400 text-sm mt-2">{project.technologies.join(' + ')}</p>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-white group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-2">
                    {project.colors.map((color, colorIndex) => (
                      <motion.span
                        key={colorIndex}
                        className={`w-3 h-3 ${color} rounded-full`}
                        whileHover={{ scale: 1.5 }}
                      />
                    ))}
                  </div>
                  <motion.button
                    className="text-primary hover:text-green-400 transition-colors duration-300"
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <ExternalLink size={16} />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <motion.button
            className="px-8 py-4 border-2 border-primary text-primary font-semibold rounded-lg hover:bg-primary hover:text-black transition-all duration-300 cursor-magnetic"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Ver Todos os Projetos
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
