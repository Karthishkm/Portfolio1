import { motion, AnimatePresence } from 'framer-motion';
import { Project } from '../types';
import { ExternalLink, Github } from 'lucide-react';

interface ProjectPreviewProps {
  projects: Project[];
}

export const ProjectPreview = ({ projects }: ProjectPreviewProps) => {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={projects[0]?.title}
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -20 }}
        className="space-y-6"
      >
        {projects.map((project) => (
          <motion.div
            key={project.title}
            className="bg-white/5 backdrop-blur-lg rounded-lg overflow-hidden"
            whileHover={{ scale: 1.02 }}
          >
            {project.image && (
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
            )}
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-bold text-white">{project.title}</h3>
                <div className="flex gap-2">
                  {project.githubLink && (
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      <Github size={20} />
                    </a>
                  )}
                  {project.demoLink && (
                    <a
                      href={project.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      <ExternalLink size={20} />
                    </a>
                  )}
                </div>
              </div>
              <p className="text-gray-300 mb-4">{project.description}</p>
              <div className="space-y-2">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-blue-500/20 rounded-full text-blue-300 text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                {project.features && (
                  <ul className="space-y-1">
                    {project.features.map((feature) => (
                      <li
                        key={feature}
                        className="text-sm text-gray-400 flex items-center gap-2"
                      >
                        <span className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </AnimatePresence>
  );
};