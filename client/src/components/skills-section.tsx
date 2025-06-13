import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { AnimatedCounter } from '@/components/ui/scroll-trigger-animations';

export function SkillsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const skillCategories = [
    {
      title: "Frontend",
      icon: "💻",
      skills: [
        { name: "JavaScript", level: 95 },
        { name: "React", level: 90 },
        { name: "Vue.js", level: 85 }
      ]
    },
    {
      title: "Backend",
      icon: "🛠️",
      skills: [
        { name: "Node.js", level: 92 },
        { name: "Python", level: 88 },
        { name: "MongoDB", level: 85 }
      ]
    },
    {
      title: "Mobile",
      icon: "📱",
      skills: [
        { name: "React Native", level: 87 },
        { name: "Flutter", level: 80 },
        { name: "PWA", level: 85 }
      ]
    },
    {
      title: "DevOps",
      icon: "☁️",
      skills: [
        { name: "AWS", level: 83 },
        { name: "Docker", level: 80 },
        { name: "CI/CD", level: 78 }
      ]
    }
  ];

  const techStack = [
    { name: "React", icon: "⚛️" },
    { name: "Vue.js", icon: "🟢" },
    { name: "Node.js", icon: "🟩" },
    { name: "Python", icon: "🐍" },
    { name: "AWS", icon: "☁️" },
    { name: "Docker", icon: "🐳" },
    { name: "Git", icon: "📝" },
    { name: "Figma", icon: "🎨" }
  ];

  return (
    <section id="skills" className="py-32 bg-gradient-to-b from-gray-800 to-black relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6 neon-text">SKILLS</h2>
          <div className="w-32 h-1 bg-gradient-to-r from-primary to-green-400 mx-auto mb-8" />
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Tecnologias e ferramentas que domino para criar soluções digitais de alta qualidade
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16" ref={ref}>
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-2xl border border-primary/20 hover:border-primary/60 transition-all duration-500 group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
            >
              <div className="text-center mb-6">
                <motion.div
                  className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors duration-300 text-2xl"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  {category.icon}
                </motion.div>
                <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors duration-300">
                  {category.title}
                </h3>
              </div>
              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-gray-400 text-sm">{skill.name}</span>
                      <AnimatedCounter 
                        from={0} 
                        to={skill.level} 
                        className="text-primary font-mono text-sm"
                      />
                      <span className="text-primary font-mono text-sm ml-1">%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <motion.div
                        className="bg-gradient-to-r from-primary to-green-400 h-2 rounded-full"
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                        transition={{ duration: 1.5, delay: (categoryIndex * 0.2) + (skillIndex * 0.1) }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Tech Stack Icons */}
        <div className="grid grid-cols-4 md:grid-cols-8 gap-8 items-center justify-center">
          {techStack.map((tech, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center group cursor-pointer"
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.1, y: -5 }}
            >
              <motion.div
                className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-2 group-hover:bg-primary/20 transition-colors duration-300 text-2xl"
                whileHover={{ rotate: 10 }}
              >
                {tech.icon}
              </motion.div>
              <span className="text-gray-400 text-sm group-hover:text-primary transition-colors duration-300">
                {tech.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
