import { useState } from 'react';
import { motion } from 'framer-motion';
import { SkillCard } from '../components/SkillCard';
import { ProjectPreview } from '../components/ProjectPreview';
import { skills } from '../data';
import { Project } from '../types';

export const Skills = () => {
  const [selectedProjects, setSelectedProjects] = useState<Project[]>([]);

  return (
    <div className="min-h-screen pt-16">
      <div className="max-w-7xl mx-auto px-4 py-20">
        <motion.h2
          className="text-4xl font-bold text-white mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Skills & Expertise
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {skills.map((skill, index) => (
              <SkillCard
                key={skill.name}
                skill={skill}
                onHover={(projects) => setSelectedProjects(projects)}
              />
            ))}
          </div>

          <div className="sticky top-20">
            <ProjectPreview projects={selectedProjects} />
          </div>
        </div>
      </div>
    </div>
  );
};