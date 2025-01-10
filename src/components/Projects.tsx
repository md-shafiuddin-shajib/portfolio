import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { Github, ExternalLink } from 'lucide-react';

const Projects: React.FC = () => {
  const projects = useSelector((state: RootState) => state.portfolio.projects);

  return (
    <section id="projects" className="py-20 bg-secondary-900">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-white mb-16">
          Projects
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="glass-effect rounded-xl overflow-hidden hover-scale"
            >
              <div className="p-8">
                <h3 className="text-2xl font-semibold text-white mb-4">
                  {project.title}
                </h3>
                <p className="text-secondary-300 mb-6 min-h-[100px]">
                  {project.description}
                </p>
                <div className="flex items-center space-x-4">
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-primary-300 hover:text-primary-200 transition-colors"
                  >
                    <Github className="h-5 w-5 mr-2" />
                    View Code
                  </a>
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-primary-300 hover:text-primary-200 transition-colors"
                  >
                    <ExternalLink className="h-5 w-5 mr-2" />
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;