import React from 'react';
import { ExternalLink, Wordpress, Palette, Code2, Globe } from 'lucide-react';
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
          <div className="bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 rounded-3xl p-8 md:p-12 text-center relative overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0" style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              }}></div>
            </div>
            
            <div className="relative z-10">
              <div className="flex items-center justify-center mb-6">
                <div className="bg-white/10 p-4 rounded-full backdrop-blur-sm">
                  <Code2 className="h-8 w-8 text-white" />
                </div>
              </div>
              
              <h3 className="text-3xl font-bold text-white mb-4">
                Custom Code Portfolio
              </h3>
              
              <p className="text-xl text-blue-200 mb-8 max-w-2xl mx-auto">
                Explore my comprehensive collection of custom-coded projects, featuring React.js applications, 
                full-stack solutions, and innovative web technologies
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <div className="flex items-center text-blue-200 mb-4 sm:mb-0">
                  <Palette className="h-5 w-5 mr-2" />
                  <span className="text-sm font-medium">React.js • Node.js • MongoDB • Full Stack</span>
                </div>
              </div>
              
              <a
                href="https://mdshafiuddinshajib.netlify.app"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-4 bg-white text-gray-900 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              >
                <Code2 className="h-5 w-5 mr-2" />
                View Custom Code Portfolio
                <ExternalLink className="h-4 w-4 ml-2" />
              </a>
            </div>
          </div>
        </motion.div>

        {/* Technologies Used */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <h4 className="text-lg font-semibold text-gray-900 mb-6">
            Technologies & Tools Used
          </h4>
          <div className="flex flex-wrap justify-center gap-4 max-w-3xl mx-auto">
            {['WordPress', 'Elementor Pro', 'Custom CSS', 'JavaScript', 'Responsive Design', 'SEO Optimization', 'Performance Optimization', 'Cross-browser Compatibility'].map((tech, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-white border border-gray-200 rounded-full text-sm font-medium text-gray-700 hover:border-blue-300 hover:text-blue-600 transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WordPressProjects;