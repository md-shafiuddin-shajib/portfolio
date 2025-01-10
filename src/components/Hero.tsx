import React from 'react';
import { Github, Linkedin, Mail, Phone, ArrowDown } from 'lucide-react';
import { Link } from 'react-scroll';

const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-screen relative overflow-hidden">
      <div className="absolute inset-0 gradient-bg"></div>
      <div className="relative container mx-auto px-6 pt-32 pb-20">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 animate-fade-in">
              Md Shafiuddin Shajib
            </h1>
            <h2 className="text-xl md:text-2xl text-primary-200 mb-8">
              Software Engineer | React Developer | JavaScript | Web Developer
            </h2>
            <div className="flex justify-center md:justify-start space-x-6 mb-12">
              <a
                href="https://github.com/md-shafiuddin-shajib"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-all text-white"
              >
                <Github className="h-6 w-6" />
              </a>
              <a
                href="https://linkedin.com/in/md-shafiuddin-shajib-57a272206"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-all text-white"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a
                href="mailto:mdshafiuddinshajib@gmail.com"
                className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-all text-white"
              >
                <Mail className="h-6 w-6" />
              </a>
              <a
                href="tel:+8801700651993"
                className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-all text-white"
              >
                <Phone className="h-6 w-6" />
              </a>
            </div>
          </div>
          <div className="flex-1 flex justify-center">
            <div className="relative">
              <div className="absolute -inset-4 bg-primary-500/20 rounded-full blur-xl"></div>
              <img
                src="https://media.licdn.com/dms/image/v2/D5603AQEyOnVO9ibmow/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1712431854365?e=1741824000&v=beta&t=kpDiWYAoh1RXUQvZG_MF6OaGwjz_YBnZcgGwflrBtQ4"
                alt="Md Shafiuddin Shajib"
                className="relative rounded-full w-64 h-64 object-cover border-4 border-white/20"
              />
            </div>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <Link
            to="about"
            smooth={true}
            className="animate-bounce cursor-pointer text-white/80 hover:text-white"
          >
            <ArrowDown className="h-8 w-8" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;