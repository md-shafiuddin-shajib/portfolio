import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { Code, Wrench, Brain } from 'lucide-react';
import { motion } from 'framer-motion';

const Skills: React.FC = () => {
  const skills = useSelector((state: RootState) => state.portfolio.skills);

  const getIcon = (category: string) => {
    switch (category) {
      case 'Programming and Development':
        return <Code className="h-8 w-8" />;
      case 'CMS & Tools':
        return <Wrench className="h-8 w-8" />;
      case 'Software Engineering':
        return <Brain className="h-8 w-8" />;
      default:
        return <Code className="h-8 w-8" />;
    }
  };

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">
            Skills & Technologies
          </h2>
          <p className="text-xl text-blue-200 max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skillGroup, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 hover:bg-white/15 transition-all duration-300 border border-white/10 hover:border-white/20 hover:-translate-y-2 hover:shadow-2xl"
            >
              <div className="flex items-center mb-6">
                <div className="bg-blue-500/20 p-3 rounded-full mr-4 text-blue-300">
                  {getIcon(skillGroup.category)}
                </div>
                <h3 className="text-xl font-semibold text-white">
                  {skillGroup.category}
                </h3>
              </div>
              <div className="flex flex-wrap gap-3">
                {skillGroup.items.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="bg-white/10 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-white/20 transition-colors border border-white/10 hover:border-white/30"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;