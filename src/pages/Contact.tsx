import { motion } from 'framer-motion';
import { ContactForm } from '../components/ContactForm';
import { Mail, Phone, MapPin } from 'lucide-react';

export const Contact = () => {
  return (
    <div className="min-h-screen pt-24 pb-12 px-4">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl font-bold text-center mb-16 gradient-text"
      >
        Get in Touch
      </motion.h2>

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
        <div>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="mb-12"
          >
            <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-4 text-purple-300">
                <Mail size={24} />
                <span>karthishkm@gmail.com</span>
              </div>
              <div className="flex items-center gap-4 text-purple-300">
                <Phone size={24} />
                <span>+91 8088252957</span>
              </div>
              <div className="flex items-center gap-4 text-purple-300">
                <MapPin size={24} />
                <span>Bangalore, India</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold text-white mb-6">Let's Connect</h3>
            <p className="text-gray-400 mb-6">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
            </p>
          </motion.div>
        </div>

        <ContactForm />
      </div>
    </div>
  );
};