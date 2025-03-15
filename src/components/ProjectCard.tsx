import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Project } from '../types';
import { ExternalLink, Github, ChevronRight, Info } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard = ({ project }: ProjectCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      layout
      className="relative overflow-hidden rounded-xl bg-gradient-to-br from-purple-900/50 via-purple-800/30 to-purple-900/50 border border-purple-500/20 backdrop-blur-sm"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -5 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      transition={{ duration: 0.3 }}
    >
      {project.image && (
        <div className="relative h-48 overflow-hidden">
          <motion.img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
            animate={{
              scale: isHovered ? 1.1 : 1
            }}
            transition={{ duration: 0.4 }}
            onError={(e) => {
              e.currentTarget.src = "https://images.unsplash.com/photo-1605000797499-95a51c5269ae?w=800";
            }}
          />
          <motion.div 
            className="absolute inset-0 bg-gradient-to-t from-purple-900 to-transparent"
            animate={{
              opacity: isHovered ? 0.9 : 0.6
            }}
          />
          
          <AnimatePresence>
            {isHovered && (
              <motion.div
                className="absolute inset-0 flex items-center justify-center p-6 bg-purple-900/80"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >
                <motion.div
                  className="text-white space-y-4"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.1 }}
                >
                  <h4 className="text-xl font-bold mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {project.features?.map((feature, index) => (
                      <motion.li
                        key={feature}
                        initial={{ x: -20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-center gap-2 text-purple-200"
                      >
                        <span className="w-2 h-2 bg-purple-400 rounded-full" />
                        {feature}
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      )}

      <motion.div 
        className="p-6"
        animate={{
          backgroundColor: isHovered ? "rgba(88, 28, 135, 0.1)" : "transparent"
        }}
        transition={{ duration: 0.3 }}
      >
        <div className="flex justify-between items-start mb-4">
          <motion.h3 
            className="text-xl font-bold text-white"
            animate={{
              color: isHovered ? "#f3e8ff" : "#ffffff"
            }}
          >
            {project.title}
          </motion.h3>
          <div className="flex gap-2">
            {project.githubLink && (
              <motion.a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-400 hover:text-purple-300 transition-colors"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
              >
                <Github size={20} />
              </motion.a>
            )}
            {project.demoLink && (
              <motion.a
                href={project.demoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-400 hover:text-purple-300 transition-colors"
                whileHover={{ scale: 1.1, rotate: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <ExternalLink size={20} />
              </motion.a>
            )}
          </div>
        </div>

        <motion.p 
          className="text-gray-300 mb-4 line-clamp-2"
          animate={{
            opacity: isHovered ? 1 : 0.8
          }}
        >
          {project.description}
        </motion.p>

        <div className="flex flex-wrap gap-2">
          {project.techStack.map((tech, index) => (
            <motion.span
              key={tech}
              className="px-3 py-1 bg-purple-500/20 rounded-full text-purple-300 text-sm"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, x: -10 }}
              animate={{ 
                opacity: 1, 
                x: 0,
                backgroundColor: isHovered ? "rgba(168, 85, 247, 0.3)" : "rgba(168, 85, 247, 0.2)"
              }}
              transition={{ delay: index * 0.05 }}
            >
              {tech}
            </motion.span>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};