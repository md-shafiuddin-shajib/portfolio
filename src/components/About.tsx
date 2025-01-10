import React from 'react';
import { User } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center mb-8">
          <div className="bg-primary-100 p-3 rounded-full">
            <User className="h-6 w-6 text-primary-600" />
          </div>
        </div>
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
          About Me
        </h2>
        <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
          <p className="text-lg text-gray-700 leading-relaxed">
            I am a soon-to-be graduate with a Bachelor's degree in Computer Science and Engineering, 
            equipped with a solid foundation in software engineering principles. I have hands-on 
            experience with JavaScript and React, and I enjoy building user-friendly web applications. 
            I am also passionate about research-based and analytical work, where I can explore 
            innovative solutions to complex problems. I am eager to apply my skills and continue 
            learning through internship or entry-level opportunities in the tech industry.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;