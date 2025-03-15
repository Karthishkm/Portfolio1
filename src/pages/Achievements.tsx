import { motion } from 'framer-motion';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { achievements } from '../data';
import { Award, Trophy, Scroll, Cloud } from 'lucide-react';

const icons = {
  trophy: Trophy,
  award: Award,
  scroll: Scroll,
  cloud: Cloud
};

export const Achievements = () => {
  return (
    <div className="min-h-screen pt-24 pb-12">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl font-bold text-center mb-16 gradient-text"
      >
        Achievements & Experience
      </motion.h2>

      <VerticalTimeline lineColor="rgba(139, 92, 246, 0.2)">
        {achievements.map((achievement, index) => {
          const Icon = icons[achievement.icon as keyof typeof icons] || Award;
          
          return (
            <VerticalTimelineElement
              key={index}
              className="vertical-timeline-element--work"
              contentStyle={{
                background: 'rgba(139, 92, 246, 0.1)',
                backdropFilter: 'blur(10px)',
                boxShadow: 'none',
                border: '1px solid rgba(139, 92, 246, 0.2)',
                borderRadius: '1rem',
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}
              contentArrowStyle={{ borderRight: '7px solid rgba(139, 92, 246, 0.2)' }}
              date={achievement.date}
              iconStyle={{
                background: 'rgb(139, 92, 246)',
                color: '#fff',
              }}
              icon={<Icon />}
            >
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <h3 className="vertical-timeline-element-title text-xl font-bold text-white mb-2">
                  {achievement.title}
                </h3>
                <h4 className="vertical-timeline-element-subtitle text-purple-400 mb-4">
                  {achievement.organization}
                </h4>
                <motion.p 
                  className="text-gray-300"
                  initial={{ opacity: 0.6 }}
                  whileHover={{ opacity: 1 }}
                >
                  {achievement.description}
                </motion.p>
              </motion.div>
            </VerticalTimelineElement>
          );
        })}
      </VerticalTimeline>
    </div>
  );
}