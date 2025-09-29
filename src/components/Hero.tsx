import React from 'react';
import { Github, Linkedin, Mail, Phone, ArrowDown, Download } from 'lucide-react';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-screen relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900"></div>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.03"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
      
      <div className="relative container mx-auto px-6 pt-32 pb-20">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
          <motion.div 
            className="flex-1 text-center lg:text-left max-w-2xl"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-6"
            >
              <span className="inline-block px-4 py-2 bg-blue-500/20 text-blue-300 rounded-full text-sm font-medium mb-4 backdrop-blur-sm border border-blue-400/20">
                Available for Hire
              </span>
            </motion.div>
            
            <motion.h1 
              className="text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight"
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
              className="text-xl lg:text-2xl text-slate-300 mb-8 font-light leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              MERN Stack Developer crafting exceptional web experiences with modern technologies. 
              Passionate about building scalable applications and turning ideas into reality.
            </motion.h2>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              <Link
                to="contact"
                smooth={true}
                className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold cursor-pointer overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/25 hover:-translate-y-1"
              >
                <span className="relative z-10">Hire Me</span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Link>
              
              <Link
                to="projects"
                smooth={true}
                className="px-8 py-4 border-2 border-white/20 text-white rounded-lg font-semibold cursor-pointer backdrop-blur-sm hover:bg-white/10 hover:border-white/40 transition-all duration-300 hover:-translate-y-1"
              >
                View My Work
              </Link>
            </motion.div>
            
            <motion.div 
              className="flex justify-center lg:justify-start space-x-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
            >
              <a
                href="https://github.com/md-shafiuddin-shajib"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-all text-white backdrop-blur-sm border border-white/10 hover:border-white/30 hover:-translate-y-1"
              >
                <Github className="h-6 w-6" />
              </a>
              <a
                href="https://linkedin.com/in/md-shafiuddin-shajib-57a272206"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-all text-white backdrop-blur-sm border border-white/10 hover:border-white/30 hover:-translate-y-1"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a
                href="mailto:mdshafiuddinshajib@gmail.com"
                className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-all text-white backdrop-blur-sm border border-white/10 hover:border-white/30 hover:-translate-y-1"
              >
                <Mail className="h-6 w-6" />
              </a>
              <a
                href="tel:+8801700651993"
                className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-all text-white backdrop-blur-sm border border-white/10 hover:border-white/30 hover:-translate-y-1"
              >
                <Phone className="h-6 w-6" />
              </a>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="flex-1 flex justify-center lg:justify-end"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="relative">
              <div className="absolute -inset-8 bg-gradient-to-r from-blue-500/30 to-purple-500/30 rounded-full blur-2xl animate-pulse"></div>
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-xl"></div>
              <img
                src="https://media.licdn.com/dms/image/v2/D5603AQEyOnVO9ibmow/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1712431854365?e=1741824000&v=beta&t=kpDiWYAoh1RXUQvZG_MF6OaGwjz_YBnZcgGwflrBtQ4"
                alt="Md Shafiuddin Shajib"
                className="relative rounded-full w-80 h-80 object-cover border-4 border-white/20 shadow-2xl"
              />
            </div>
          </motion.div>
        </div>
        
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
        >
          <Link
            to="about"
            smooth={true}
            className="animate-bounce cursor-pointer text-white/60 hover:text-white transition-colors"
          >
            <ArrowDown className="h-8 w-8" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;