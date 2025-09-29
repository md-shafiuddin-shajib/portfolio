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
        return <Code className="h-6 w-6 sm:h-8 sm:w-8" />;
      case 'CMS & Tools':
        return <Wrench className="h-6 w-6 sm:h-8 sm:w-8" />;
      case 'Software Engineering':
        return <Brain className="h-6 w-6 sm:h-8 sm:w-8" />;
      default:
        return <Code className="h-6 w-6 sm:h-8 sm:w-8" />;
    }
  };

  return (
    <section id="skills" className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Skills & Technologies
          </h2>
          <p className="text-lg sm:text-xl text-blue-200 max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </motion.div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {skills.map((skillGroup, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-lg rounded-xl sm:rounded-2xl p-6 sm:p-8 hover:bg-white/15 transition-all duration-300 border border-white/10 hover:border-white/20 hover:-translate-y-2 hover:shadow-2xl"
            >
              <div className="flex items-center mb-4 sm:mb-6">
                <div className="bg-blue-500/20 p-2 sm:p-3 rounded-full mr-3 sm:mr-4 text-blue-300">
                  {getIcon(skillGroup.category)}
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-white">
                  {skillGroup.category}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2 sm:gap-3">
                {skillGroup.items.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="bg-white/10 text-white px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-medium hover:bg-white/20 transition-colors border border-white/10 hover:border-white/30"
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