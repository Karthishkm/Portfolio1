import { motion, useAnimation } from 'framer-motion';
import { Github, Linkedin, Mail, Download, ChevronDown, Globe, Code2, Brain, Server } from 'lucide-react';
import { stats, socialLinks } from '../data';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

export const Home = () => {
  const handleContactClick = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleResumeDownload = () => {
    window.open('https://drive.google.com/file/d/1-XUQ7pqxdbmbjLhuJahiHpnhDU5vz9V1/view?usp=drive_link', '_blank');
  };

  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.5,
    triggerOnce: false
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  const nameAnimation = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const letterAnimation = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 200
      }
    }
  };

  const name = "Karthish B M".split("");

  const services = [
    {
      icon: <Code2 className="w-8 h-8 text-purple-400" />,
      title: "Web Development",
      description: "Building responsive and dynamic web applications using modern frameworks and technologies."
    },
    {
      icon: <Brain className="w-8 h-8 text-purple-400" />,
      title: "AI & Machine Learning",
      description: "Developing intelligent solutions using cutting-edge AI and ML technologies."
    },
    {
      icon: <Server className="w-8 h-8 text-purple-400" />,
      title: "Backend Development",
      description: "Creating robust and scalable server-side applications and APIs."
    },
    {
      icon: <Globe className="w-8 h-8 text-purple-400" />,
      title: "Full Stack Solutions",
      description: "End-to-end development of web applications from concept to deployment."
    }
  ];

  return (
    <>
      <div className="min-h-screen pt-16 flex items-center relative">
        <div className="max-w-7xl mx-auto px-4 py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <motion.h1
              ref={ref}
              className="text-7xl font-bold mb-6 flex justify-center gap-[0.5rem] flex-wrap"
              variants={nameAnimation}
              initial="hidden"
              animate={controls}
            >
              {name.map((letter, index) => (
                <motion.span
                  key={index}
                  variants={letterAnimation}
                  className={letter === " " ? "w-8" : "gradient-text"}
                >
                  {letter}
                </motion.span>
              ))}
            </motion.h1>
            <motion.p
              className="text-2xl text-purple-300 mb-8 font-light"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              Full Stack Developer & AI Enthusiast
            </motion.p>
            <motion.p
              className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto font-light"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              Passionate about creating innovative solutions using cutting-edge technologies.
              Specializing in web development, machine learning, and artificial intelligence.
            </motion.p>
            
            <div className="flex justify-center gap-8 mb-12">
              <motion.a
                href={socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                className="text-purple-400 hover:text-purple-300 transition-all"
              >
                <Github size={28} />
              </motion.a>
              <motion.a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                className="text-purple-400 hover:text-purple-300 transition-all"
              >
                <Linkedin size={28} />
              </motion.a>
              <motion.button
                onClick={handleContactClick}
                whileHover={{ scale: 1.1, y: -2 }}
                className="text-purple-400 hover:text-purple-300 transition-all"
              >
                <Mail size={28} />
              </motion.button>
            </div>

            <div className="flex gap-4 justify-center">
              <motion.button
                onClick={handleResumeDownload}
                className="bg-purple-600 text-white px-8 py-3 rounded-full font-semibold flex items-center gap-2 hover:bg-purple-700 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Download size={20} />
                Download Resume
              </motion.button>
              <motion.button
                onClick={handleContactClick}
                className="bg-purple-900/50 text-purple-300 px-8 py-3 rounded-full font-semibold hover:bg-purple-900/70 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Contact Me
              </motion.button>
            </div>
          </motion.div>
        </div>

        <motion.button
          onClick={scrollToContent}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-purple-400 hover:text-purple-300 transition-colors"
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <ChevronDown size={32} />
        </motion.button>
      </div>

      <div className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-6 card-gradient rounded-xl"
              >
                <h3 className="text-3xl font-bold text-purple-400 mb-2">{stat.value}</h3>
                <p className="text-gray-400">{stat.label}</p>
              </motion.div>
            ))}
          </div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold text-center mb-16 gradient-text"
          >
            What I Do
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="p-6 card-gradient rounded-xl hover-gradient"
              >
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-gray-400">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};