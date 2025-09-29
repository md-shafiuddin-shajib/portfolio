import React from 'react';
import { Github, Linkedin, Mail, Phone, ArrowDown } from 'lucide-react';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-screen relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900"></div>
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>
      
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 pt-20 sm:pt-24 lg:pt-32 pb-16 sm:pb-20">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-16 min-h-[calc(100vh-8rem)]">
          <motion.div 
            className="flex-1 text-center lg:text-left max-w-2xl mx-auto lg:mx-0"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-4 sm:mb-6"
            >
              <span className="inline-block px-3 sm:px-4 py-2 bg-blue-500/20 text-blue-300 rounded-full text-xs sm:text-sm font-medium backdrop-blur-sm border border-blue-400/20">
                Available for Hire
              </span>
            </motion.div>
            
            <motion.h1 
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 sm:mb-6 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Hi, I'm{' '}
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Shafiuddin
              </span>
            </motion.h1>
            
            <motion.h2 
              className="text-base sm:text-lg md:text-xl lg:text-2xl text-slate-300 mb-6 sm:mb-8 font-light leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              Frontend React.js Developer | Crafting sleek, scalable web apps & WordPress/Elementor sites.
            </motion.h2>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start mb-8 sm:mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              <Link
                to="contact"
                smooth={true}
                className="group relative px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold cursor-pointer overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/25 hover:-translate-y-1 text-center"
              >
                <span className="relative z-10">Hire Me</span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Link>
              
              <Link
                to="projects"
                smooth={true}
                className="px-6 sm:px-8 py-3 sm:py-4 border-2 border-white/20 text-white rounded-lg font-semibold cursor-pointer backdrop-blur-sm hover:bg-white/10 hover:border-white/40 transition-all duration-300 hover:-translate-y-1 text-center"
              >
                View My Work
              </Link>
            </motion.div>
            
            <motion.div 
              className="flex justify-center lg:justify-start space-x-4 sm:space-x-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
            >
              <a
                href="https://github.com/md-shafiuddin-shajib"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 sm:p-3 bg-white/10 rounded-full hover:bg-white/20 transition-all text-white backdrop-blur-sm border border-white/10 hover:border-white/30 hover:-translate-y-1"
              >
                <Github className="h-5 w-5 sm:h-6 sm:w-6" />
              </a>
              <a
                href="https://linkedin.com/in/md-shafiuddin-shajib-57a272206"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 sm:p-3 bg-white/10 rounded-full hover:bg-white/20 transition-all text-white backdrop-blur-sm border border-white/10 hover:border-white/30 hover:-translate-y-1"
              >
                <Linkedin className="h-5 w-5 sm:h-6 sm:w-6" />
              </a>
              <a
                href="mailto:mdshafiuddinshajib@gmail.com"
                className="p-2 sm:p-3 bg-white/10 rounded-full hover:bg-white/20 transition-all text-white backdrop-blur-sm border border-white/10 hover:border-white/30 hover:-translate-y-1"
              >
                <Mail className="h-5 w-5 sm:h-6 sm:w-6" />
              </a>
              <a
                href="tel:+8801700651993"
                className="p-2 sm:p-3 bg-white/10 rounded-full hover:bg-white/20 transition-all text-white backdrop-blur-sm border border-white/10 hover:border-white/30 hover:-translate-y-1"
              >
                <Phone className="h-5 w-5 sm:h-6 sm:w-6" />
              </a>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="flex-1 flex justify-center lg:justify-end mt-8 lg:mt-0"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="relative">
              <div className="absolute -inset-4 sm:-inset-8 bg-gradient-to-r from-blue-500/30 to-purple-500/30 rounded-full blur-2xl animate-pulse"></div>
              <div className="absolute -inset-2 sm:-inset-4 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-xl"></div>
              <img
                src="https://media.licdn.com/dms/image/v2/D5603AQFzzwmsR47frg/profile-displayphoto-crop_800_800/B56ZlSb1U1G4AM-/0/1758024654550?e=1761782400&v=beta&t=Xv1oivQU5O25Mac_yPEJZbAOfiGUv9j2ygRTge2kM3I"
                alt="Md Shafiuddin Shajib"
                className="relative rounded-full w-48 h-48 sm:w-64 sm:h-64 lg:w-80 lg:h-80 object-cover border-4 border-white/20 shadow-2xl"
              />
            </div>
          </motion.div>
        </div>
        
        <motion.div 
          className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
        >
          <Link
            to="about"
            smooth={true}
            className="animate-bounce cursor-pointer text-white/60 hover:text-white transition-colors"
          >
            <ArrowDown className="h-6 w-6 sm:h-8 sm:w-8" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;