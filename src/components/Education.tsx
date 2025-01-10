import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { GraduationCap } from 'lucide-react';

const Education: React.FC = () => {
  const education = useSelector((state: RootState) => state.portfolio.education);

  return (
    <section id="education" className="py-16 bg-gradient-to-br from-primary-50 to-white">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center mb-8">
          <div className="bg-primary-100 p-3 rounded-full">
            <GraduationCap className="h-6 w-6 text-primary-600" />
          </div>
        </div>
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
          Education
        </h2>
        <div className="max-w-3xl mx-auto space-y-6">
          {education.map((edu, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all transform hover:-translate-y-1"
            >
              <h3 className="text-xl font-semibold text-primary-600 mb-2">{edu.degree}</h3>
              <p className="text-gray-800 font-medium mb-1">{edu.institution}</p>
              <p className="text-gray-600 mb-2">{edu.period}</p>
              <p className="text-primary-500 font-medium">{edu.grade}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;