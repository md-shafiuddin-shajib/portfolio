import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { Github, ExternalLink, Code } from 'lucide-react';
import { motion } from 'framer-motion';

const Projects: React.FC = () => {
  const projects = useSelector((state: RootState) => state.portfolio.projects);

  return (
    <section id="projects" className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-slate-900 to-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <div className="flex items-center justify-center mb-6">
            <div className="bg-blue-500/20 p-3 sm:p-4 rounded-full">
              <Code className="h-6 w-6 sm:h-8 sm:w-8 text-blue-400" />
            </div>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Featured Projects
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto">
            A showcase of my recent work and technical capabilities
          </p>
        </motion.div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group bg-white/5 backdrop-blur-lg rounded-xl sm:rounded-2xl overflow-hidden hover:bg-white/10 transition-all duration-300 border border-white/10 hover:border-white/20 hover:-translate-y-2 hover:shadow-2xl"
            >
              <div className="p-6 sm:p-8">
                <div className="flex items-center justify-between mb-4 sm:mb-6">
                  <div className="bg-blue-500/20 p-2 sm:p-3 rounded-full">
                    <Code className="h-5 w-5 sm:h-6 sm:w-6 text-blue-400" />
                  </div>
                  <div className="flex space-x-2 sm:space-x-3">
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors text-gray-300 hover:text-white"
                    >
                      <Github className="h-4 w-4 sm:h-5 sm:w-5" />
                    </a>
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors text-gray-300 hover:text-white"
                    >
                      <ExternalLink className="h-4 w-4 sm:h-5 sm:w-5" />
                    </a>
                  </div>
                </div>
                
                <h3 className="text-xl sm:text-2xl font-semibold text-white mb-3 sm:mb-4 group-hover:text-blue-300 transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-sm sm:text-base text-gray-300 mb-4 sm:mb-6 leading-relaxed min-h-[80px] sm:min-h-[120px]">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4 sm:mb-6">
                  {project.title.includes('Tour') && (
                    <>
                      <span className="px-2 sm:px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-xs font-medium">React.js</span>
                      <span className="px-2 sm:px-3 py-1 bg-green-500/20 text-green-300 rounded-full text-xs font-medium">Node.js</span>
                      <span className="px-2 sm:px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-xs font-medium">MongoDB</span>
                    </>
                  )}
                  {project.title.includes('Food') && (
                    <>
                      <span className="px-2 sm:px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-xs font-medium">React.js</span>
                      <span className="px-2 sm:px-3 py-1 bg-red-500/20 text-red-300 rounded-full text-xs font-medium">Redux</span>
                      <span className="px-2 sm:px-3 py-1 bg-cyan-500/20 text-cyan-300 rounded-full text-xs font-medium">Tailwind</span>
                    </>
                  )}
                  {project.title.includes('E-Commerce') && (
                    <>
                      <span className="px-2 sm:px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-xs font-medium">React.js</span>
                      <span className="px-2 sm:px-3 py-1 bg-red-500/20 text-red-300 rounded-full text-xs font-medium">Redux</span>
                      <span className="px-2 sm:px-3 py-1 bg-cyan-500/20 text-cyan-300 rounded-full text-xs font-medium">Tailwind</span>
                    </>
                  )}
                </div>
                
                <div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-4">
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-blue-300 hover:text-blue-200 transition-colors font-medium text-sm"
                  >
                    <Github className="h-4 w-4 mr-2" />
                    View Code
                  </a>
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-purple-300 hover:text-purple-200 transition-colors font-medium text-sm"
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;