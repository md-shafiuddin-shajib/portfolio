import React from 'react';
import { Briefcase, Calendar, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

const Experience: React.FC = () => {
  const experience = {
    company: 'Sardar IT',
    position: 'Web Developer & Business Analyst',
    type: 'Intern',
    period: 'March 2025 – May 2025',
    location: 'Dhaka',
    responsibilities: [
      'Built responsive business websites using Elementor Pro, HTML, CSS, and JavaScript.',
      'Worked directly with international clients to gather project requirements and provide technical solutions.',
      'Translated client needs into development tasks and collaborated with the team for on-time delivery.',
      'Communicated effectively to align business goals with design and development outcomes.'
    ]
  };

  return (
    <section id="experience" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center mb-6">
            <div className="bg-blue-100 p-4 rounded-full">
              <Briefcase className="h-8 w-8 text-blue-600" />
            </div>
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Experience
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Professional journey and key accomplishments
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-500 hidden sm:block"></div>
            
            {/* Experience card */}
            <div className="relative flex flex-col sm:flex-row sm:items-start space-y-4 sm:space-y-0 sm:space-x-8">
              {/* Timeline dot */}
              <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center shadow-lg self-start">
                <Briefcase className="h-8 w-8 text-white" />
              </div>
              
              {/* Content */}
              <div className="flex-1 bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {experience.position}
                      <span className="ml-3 px-3 py-1 bg-blue-100 text-blue-700 text-sm font-medium rounded-full">
                        {experience.type}
                      </span>
                    </h3>
                    <p className="text-xl text-blue-600 font-semibold mb-3">
                      {experience.company}
                    </p>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-6 text-gray-600">
                  <div className="flex items-center">
                    <Calendar className="h-5 w-5 mr-2 text-gray-400" />
                    <span className="text-base font-medium">{experience.period}</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="h-5 w-5 mr-2 text-gray-400" />
                    <span className="text-base font-medium">{experience.location}</span>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">
                    Key Responsibilities & Achievements:
                  </h4>
                  <ul className="space-y-3">
                    {experience.responsibilities.map((responsibility, index) => (
                      <li key={index} className="flex items-start">
                        <div className="flex-shrink-0 w-2 h-2 bg-blue-500 rounded-full mt-2 mr-4"></div>
                        <span className="text-base text-gray-700 leading-relaxed">{responsibility}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;