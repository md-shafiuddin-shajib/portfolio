import React from 'react';
import { Mail, Phone, Github, Linkedin, Send } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 gradient-bg">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-white mb-16">
          Get In Touch
        </h2>
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <a
              href="mailto:mdshafiuddinshajib@gmail.com"
              className="flex items-center p-6 glass-effect rounded-xl hover-scale"
            >
              <Mail className="h-8 w-8 text-primary-200 mr-4" />
              <div>
                <h3 className="text-xl font-semibold text-white">Email</h3>
                <p className="text-primary-200">mdshafiuddinshajib@gmail.com</p>
              </div>
            </a>
            <a
              href="tel:+8801700651993"
              className="flex items-center p-6 glass-effect rounded-xl hover-scale"
            >
              <Phone className="h-8 w-8 text-primary-200 mr-4" />
              <div>
                <h3 className="text-xl font-semibold text-white">Phone</h3>
                <p className="text-primary-200">+8801700651993</p>
              </div>
            </a>
            <a
              href="https://linkedin.com/in/md-shafiuddin-shajib-57a272206"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center p-6 glass-effect rounded-xl hover-scale"
            >
              <Linkedin className="h-8 w-8 text-primary-200 mr-4" />
              <div>
                <h3 className="text-xl font-semibold text-white">LinkedIn</h3>
                <p className="text-primary-200">Connect with me</p>
              </div>
            </a>
            <a
              href="https://github.com/md-shafiuddin-shajib"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center p-6 glass-effect rounded-xl hover-scale"
            >
              <Github className="h-8 w-8 text-primary-200 mr-4" />
              <div>
                <h3 className="text-xl font-semibold text-white">GitHub</h3>
                <p className="text-primary-200">View my projects</p>
              </div>
            </a>
          </div>
          <form className="space-y-6">
            <div>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-4 bg-white/10 rounded-lg text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-primary-400"
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-4 bg-white/10 rounded-lg text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-primary-400"
              />
            </div>
            <div>
              <textarea
                placeholder="Your Message"
                rows={4}
                className="w-full p-4 bg-white/10 rounded-lg text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-primary-400"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full py-4 bg-primary-500 text-white rounded-lg flex items-center justify-center space-x-2 hover:bg-primary-600 transition-colors"
            >
              <span>Send Message</span>
              <Send className="h-5 w-5" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;