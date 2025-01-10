import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';

const Skills: React.FC = () => {
  const skills = useSelector((state: RootState) => state.portfolio.skills);

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-primary-900 to-primary-800">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-white mb-16">
          Skills
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skillGroup, index) => (
            <div
              key={index}
              className="glass-effect rounded-xl p-8 hover-scale"
            >
              <h3 className="text-2xl font-semibold text-primary-200 mb-6">
                {skillGroup.category}
              </h3>
              <div className="flex flex-wrap gap-3">
                {skillGroup.items.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="bg-white/10 text-white px-4 py-2 rounded-full text-sm hover:bg-white/20 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;