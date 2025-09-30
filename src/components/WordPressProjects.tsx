import React from 'react';
import { ExternalLink, WholeWord as Wordpress, Palette, Code2, Globe } from 'lucide-react';
import { motion } from 'framer-motion';

const WordPressProjects: React.FC = () => {
  const clientProjects = [
    {
      title: 'Starshine Cleaner',
      url: 'https://starshinecleaner.co.uk/',
      description: 'Professional cleaning services website with modern design, service booking system, and responsive layout optimized for local SEO.',
      image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      category: 'Service Business',
      features: ['Responsive Design', 'Service Booking', 'Local SEO', 'Contact Forms']
    },
    {
      title: 'Love Luxurry',
      url: 'https://loveluxurry.co.uk/',
      description: 'Elegant luxury brand website featuring premium product showcases, sophisticated animations, and seamless user experience.',
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      category: 'Luxury Brand',
      features: ['Premium Design', 'Product Showcase', 'Animations', 'Brand Identity']
    },
    {
      title: 'Ecom Skyline',
      url: 'https://ecomskyline.com/',
      description: 'E-commerce consulting platform with comprehensive service pages, client testimonials, and conversion-optimized design.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      category: 'Business Consulting',
      features: ['Consulting Services', 'Client Testimonials', 'CRO Optimized', 'Lead Generation']
    }
  ];

  return (
    <section id="wordpress-projects" className="py-20 bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      <div className="container mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center mb-6">
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-4 rounded-full">
              <Wordpress className="h-8 w-8 text-white" />
            </div>
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Client Projects
          </h2>
          <p className="text-lg text-gray-600 mb-2">
            WordPress + Elementor Pro
          </p>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Professional websites crafted for international clients using WordPress and Elementor Pro, 
            delivering exceptional user experiences and business results
          </p>
        </motion.div>

        {/* Client Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-16">
          {clientProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden hover:-translate-y-2 border border-gray-100"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-4 right-4">
                  <span className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-gray-700">
                    {project.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.features.map((feature, featureIndex) => (
                    <span
                      key={featureIndex}
                      className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-xs font-medium"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
                
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-full py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 group-hover:shadow-lg"
                >
                  <Globe className="h-4 w-4 mr-2" />
                  View Live Site
                  <ExternalLink className="h-4 w-4 ml-2" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Custom Code Portfolio Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 rounded-3xl p-12 md:p-16 relative overflow-hidden border border-white/10 shadow-2xl">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0" style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              }}></div>
            </div>
            
            {/* Floating elements for visual appeal */}
            <div className="absolute top-8 right-8 w-20 h-20 bg-blue-500/10 rounded-full blur-xl"></div>
            <div className="absolute bottom-8 left-8 w-16 h-16 bg-purple-500/10 rounded-full blur-lg"></div>
            
            <div className="relative z-10 text-center">
              <div className="flex items-center justify-center mb-8">
                <div className="bg-white/10 p-6 rounded-2xl backdrop-blur-sm border border-white/20 shadow-lg">
                  <Code2 className="h-8 w-8 text-white" />
                </div>
              </div>
              
              <h3 className="text-4xl font-bold text-white mb-6 leading-tight">
                Full-Stack Development
                <span className="block text-2xl font-normal text-blue-200 mt-2">Custom Code Portfolio</span>
              </h3>
              
              <p className="text-lg text-blue-100 mb-10 max-w-3xl mx-auto leading-relaxed">
                Dive into my comprehensive collection of custom-built applications showcasing advanced 
                React.js development, full-stack architecture, and cutting-edge web technologies. 
                Each project demonstrates scalable solutions and modern development practices.
              </p>
              
              {/* Technology Stack Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10 max-w-2xl mx-auto">
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10 hover:bg-white/10 transition-all duration-300">
                  <div className="text-blue-300 font-semibold text-sm">Frontend</div>
                  <div className="text-white text-xs mt-1">React.js • Redux</div>
                </div>
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10 hover:bg-white/10 transition-all duration-300">
                  <div className="text-green-300 font-semibold text-sm">Backend</div>
                  <div className="text-white text-xs mt-1">Node.js • Express</div>
                </div>
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10 hover:bg-white/10 transition-all duration-300">
                  <div className="text-purple-300 font-semibold text-sm">Database</div>
                  <div className="text-white text-xs mt-1">MongoDB • MySQL</div>
                </div>
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10 hover:bg-white/10 transition-all duration-300">
                  <div className="text-orange-300 font-semibold text-sm">Styling</div>
                  <div className="text-white text-xs mt-1">Tailwind • CSS3</div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a
                  href="https://mdshafiuddinshajib.netlify.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center px-8 py-4 bg-white text-gray-900 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 border-2 border-transparent hover:border-white/20"
                >
                  <Code2 className="h-5 w-5 mr-3 group-hover:rotate-12 transition-transform duration-300" />
                  Explore Full Portfolio
                  <ExternalLink className="h-4 w-4 ml-3 group-hover:translate-x-1 transition-transform duration-300" />
                </a>
                
                <div className="flex items-center space-x-4 text-blue-200">
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
                    <span className="text-sm font-medium">Live Projects</span>
                  </div>
                  <div className="w-px h-4 bg-white/20"></div>
                  <div className="flex items-center">
                    <Globe className="h-4 w-4 mr-2" />
                    <span className="text-sm font-medium">Production Ready</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Professional Development Stack */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-3xl p-12 border border-gray-200">
            <div className="text-center mb-12">
              <h4 className="text-3xl font-bold text-gray-900 mb-4">
                Professional Development Stack
              </h4>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Cutting-edge technologies and industry-standard tools powering exceptional client solutions
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {/* Core Technologies */}
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100">
                <div className="flex items-center mb-4">
                  <div className="bg-blue-100 p-3 rounded-xl mr-3">
                    <Wordpress className="h-6 w-6 text-blue-600" />
                  </div>
                  <h5 className="font-bold text-gray-900">Core Platform</h5>
                </div>
                <div className="space-y-2">
                  <span className="inline-block px-3 py-1 bg-blue-50 text-blue-700 rounded-lg text-sm font-medium">WordPress</span>
                  <span className="inline-block px-3 py-1 bg-purple-50 text-purple-700 rounded-lg text-sm font-medium ml-2">Elementor Pro</span>
                </div>
              </div>
              
              {/* Frontend Technologies */}
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100">
                <div className="flex items-center mb-4">
                  <div className="bg-green-100 p-3 rounded-xl mr-3">
                    <Code2 className="h-6 w-6 text-green-600" />
                  </div>
                  <h5 className="font-bold text-gray-900">Frontend</h5>
                </div>
                <div className="space-y-2">
                  <span className="inline-block px-3 py-1 bg-green-50 text-green-700 rounded-lg text-sm font-medium">Custom CSS</span>
                  <span className="inline-block px-3 py-1 bg-yellow-50 text-yellow-700 rounded-lg text-sm font-medium ml-2">JavaScript</span>
                </div>
              </div>
              
              {/* Design & UX */}
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100">
                <div className="flex items-center mb-4">
                  <div className="bg-pink-100 p-3 rounded-xl mr-3">
                    <Palette className="h-6 w-6 text-pink-600" />
                  </div>
                  <h5 className="font-bold text-gray-900">Design & UX</h5>
                </div>
                <div className="space-y-2">
                  <span className="inline-block px-3 py-1 bg-pink-50 text-pink-700 rounded-lg text-sm font-medium">Responsive Design</span>
                  <span className="inline-block px-3 py-1 bg-indigo-50 text-indigo-700 rounded-lg text-sm font-medium ml-2">UI/UX</span>
                </div>
              </div>
              
              {/* Optimization */}
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100">
                <div className="flex items-center mb-4">
                  <div className="bg-orange-100 p-3 rounded-xl mr-3">
                    <Globe className="h-6 w-6 text-orange-600" />
                  </div>
                  <h5 className="font-bold text-gray-900">Optimization</h5>
                </div>
                <div className="space-y-2">
                  <span className="inline-block px-3 py-1 bg-orange-50 text-orange-700 rounded-lg text-sm font-medium">SEO</span>
                  <span className="inline-block px-3 py-1 bg-red-50 text-red-700 rounded-lg text-sm font-medium ml-2">Performance</span>
                </div>
              </div>
            </div>
            
            {/* Professional Standards */}
            <div className="mt-12 text-center">
              <div className="inline-flex items-center space-x-8 bg-white rounded-2xl px-8 py-4 shadow-lg border border-gray-200">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                  <span className="text-sm font-semibold text-gray-700">Cross-browser Compatible</span>
                </div>
                <div className="w-px h-6 bg-gray-300"></div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-blue-500 rounded-full mr-2 animate-pulse"></div>
                  <span className="text-sm font-semibold text-gray-700">Mobile-First Approach</span>
                </div>
                <div className="w-px h-6 bg-gray-300"></div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-purple-500 rounded-full mr-2 animate-pulse"></div>
                  <span className="text-sm font-semibold text-gray-700">Performance Optimized</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WordPressProjects;