import { motion } from 'framer-motion';
import { useState } from 'react';
import { Skill } from '../types';
import { Code2, Server, Database, Brain, Cloud, Terminal, GitBranch, TestTube, Layout } from 'lucide-react';

const icons = {
  layout: Layout,
  server: Server,
  brain: Brain,
  cloud: Cloud,
  code: Code2,
  database: Database,
  git: GitBranch,
  terminal: Terminal,
  test: TestTube
};

interface SkillCardProps {
  skill: Skill;
  onHover: (projects: Skill['projects']) => void;
}

export const SkillCard = ({ skill, onHover }: SkillCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const Icon = icons[skill.icon as keyof typeof icons] || Code2;

  return (
    <motion.div
      className="relative bg-gradient-to-br from-purple-900/50 via-purple-800/30 to-purple-900/50 rounded-xl p-6 cursor-pointer backdrop-blur-sm border border-purple-500/20"
      whileHover={{ 
        scale: 1.05,
        backgroundColor: "rgba(88, 28, 135, 0.3)",
        transition: { duration: 0.2 }
      }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      onHoverStart={() => {
        setIsHovered(true);
        onHover(skill.projects);
      }}
      onHoverEnd={() => {
        setIsHovered(false);
        onHover([]);
      }}
    >
      <Icon className="w-8 h-8 mb-4 text-purple-400" />
      <h3 className="text-xl font-semibold text-white mb-2">{skill.name}</h3>
      <p className="text-sm text-purple-200 mb-4">{skill.category}</p>
      
      <div className="relative w-full bg-purple-900/50 rounded-full h-2 mb-2">
        <motion.div
          className="absolute top-0 left-0 h-full bg-purple-500 rounded-full"
          initial={{ width: 0 }}
          animate={{ width: `${skill.proficiency}%` }}
          transition={{ duration: 1, delay: 0.2 }}
        />
      </div>
      
      <p className="text-xs text-purple-300">Proficiency: {skill.proficiency}%</p>

      <motion.div
        className="absolute inset-0 bg-purple-600/10 rounded-xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.2 }}
      />
    </motion.div>
  );
};