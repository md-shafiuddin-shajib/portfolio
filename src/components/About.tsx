import React from 'react';
import { User, Target, Heart } from 'lucide-react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center mb-6">
            <div className="bg-blue-100 p-4 rounded-full">
              <User className="h-8 w-8 text-blue-600" />
            </div>
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            About Me
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Passionate developer with a drive for creating exceptional digital experiences
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-100">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
               Computer Science graduate with a strong foundation in software engineering,
                skilled in React.js and WordPress/Elementor Pro. Passionate about building 
                user-friendly web applications that solve real-world problems.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                I am also passionate about research-based and analytical work, where I can explore 
                innovative solutions to complex problems. I am eager to apply my skills and continue 
                learning through entry-level opportunities in the tech industry.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100 hover:shadow-2xl transition-all duration-300">
              <div className="flex items-center mb-4">
                <div className="bg-blue-100 p-3 rounded-full mr-4">
                  <Target className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">My Mission</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                To create innovative web solutions that bridge the gap between complex technology 
                and user-friendly experiences, helping businesses achieve their digital goals.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100 hover:shadow-2xl transition-all duration-300">
              <div className="flex items-center mb-4">
                <div className="bg-purple-100 p-3 rounded-full mr-4">
                  <Heart className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">What I Love</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Building scalable applications, solving complex problems, collaborating with 
                international teams, and continuously learning new technologies to stay ahead 
                in the ever-evolving tech landscape.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
