import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, MapPin, Mail, Phone, GraduationCap, Award } from 'lucide-react';
import { education } from '../data';
import { useState } from 'react';

export const About = () => {
  const [showBio, setShowBio] = useState(false);

  return (
    <div className="min-h-screen pt-24 pb-12 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-center mb-16 gradient-text"
        >
          About Me
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Left side - Image with hover trigger */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
            onHoverStart={() => setShowBio(true)}
            onHoverEnd={() => setShowBio(false)}
          >
            <motion.div
              className="sticky top-24 bg-purple-900/20 p-8 rounded-xl backdrop-blur-sm border border-purple-500/20"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="relative aspect-square rounded-xl overflow-hidden mb-6">
                <motion.img
                  src="https://github.com/Karthishkm/Portfolio/blob/main/img/Karthish1.jpg?raw=true"
                  alt="Profile"
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                />
                <motion.div
                  className="absolute inset-0 bg-purple-500/10"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                />
              </div>

              <div className="space-y-3">
                <motion.div className="flex items-center gap-3 text-gray-300">
                  <Calendar className="w-5 h-5 text-purple-400" />
                  <span>Final Year Student</span>
                </motion.div>
                <motion.div className="flex items-center gap-3 text-gray-300">
                  <MapPin className="w-5 h-5 text-purple-400" />
                  <span>Bangalore, India</span>
                </motion.div>
                <motion.div className="flex items-center gap-3 text-gray-300">
                  <Mail className="w-5 h-5 text-purple-400" />
                  <span>karthishkm@gmail.com</span>
                </motion.div>
                <motion.div className="flex items-center gap-3 text-gray-300">
                  <Phone className="w-5 h-5 text-purple-400" />
                  <span>+91 8088252957</span>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right side - Bio data preview */}
          <motion.div className="sticky top-24">
            <AnimatePresence mode="wait">
              {showBio ? (
                <motion.div
                  key="bio"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-6"
                >
                  <motion.div
                    className="bg-purple-900/20 p-8 rounded-xl backdrop-blur-sm border border-purple-500/20"
                    whileHover={{ scale: 1.01 }}
                  >
                    <h3 className="text-2xl font-bold text-white mb-6">About Me</h3>
                    <motion.p className="text-gray-300 leading-relaxed mb-4">
                      I am a passionate final year Information Science student at AMC Engineering College, Bangalore. 
                      My journey in technology has been driven by a deep interest in full-stack development, 
                      artificial intelligence, and creating innovative solutions.
                    </motion.p>
                    <motion.p className="text-gray-300 leading-relaxed">
                      Throughout my academic journey, I've focused on building practical projects that solve 
                      real-world problems. I'm particularly interested in AI and machine learning applications 
                      in web development, and I'm always eager to learn and adapt to new technologies.
                    </motion.p>
                  </motion.div>

                  <motion.div
                    className="bg-purple-900/20 p-8 rounded-xl backdrop-blur-sm border border-purple-500/20"
                    whileHover={{ scale: 1.01 }}
                  >
                    <h3 className="text-2xl font-bold text-white mb-6">Education</h3>
                    {education.map((edu, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="mb-6 last:mb-0"
                      >
                        <div className="flex items-start gap-3">
                          <GraduationCap className="w-6 h-6 text-purple-400 mt-1" />
                          <div>
                            <h4 className="text-lg font-semibold text-white">{edu.degree}</h4>
                            <p className="text-purple-300">{edu.institution}</p>
                            <p className="text-gray-400">{edu.duration}</p>
                            <ul className="mt-3 space-y-2">
                              {edu.achievements.map((achievement, i) => (
                                <motion.li
                                  key={i}
                                  className="flex items-center gap-2 text-sm text-gray-400"
                                  initial={{ opacity: 0, x: -10 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ delay: i * 0.1 }}
                                >
                                  <Award className="w-4 h-4 text-purple-400" />
                                  <span>{achievement}</span>
                                </motion.li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </motion.div>
                </motion.div>
              ) : (
                <motion.div
                  key="placeholder"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="h-full flex items-center justify-center text-gray-400 text-lg"
                >
                  <p>Hover over my image to see more about me</p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </div>
  );
};