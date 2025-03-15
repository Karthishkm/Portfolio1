import { motion } from 'framer-motion';
import { useState } from 'react';
import { Send } from 'lucide-react';
import { socialLinks } from '../data';

export const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.location.href = `mailto:${socialLinks.email}?subject=Contact from ${formData.name}&body=${formData.message}`;
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      className="max-w-lg mx-auto"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <div className="mb-6">
        <label htmlFor="name" className="block text-purple-300 mb-2">
          Name
        </label>
        <input
          type="text"
          id="name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="w-full px-4 py-2 rounded-lg bg-purple-900/20 border border-purple-900/50 text-white focus:outline-none focus:border-purple-500"
          required
        />
      </div>

      <div className="mb-6">
        <label htmlFor="email" className="block text-purple-300 mb-2">
          Email
        </label>
        <input
          type="email"
          id="email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className="w-full px-4 py-2 rounded-lg bg-purple-900/20 border border-purple-900/50 text-white focus:outline-none focus:border-purple-500"
          required
        />
      </div>

      <div className="mb-6">
        <label htmlFor="message" className="block text-purple-300 mb-2">
          Message
        </label>
        <textarea
          id="message"
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          className="w-full px-4 py-2 rounded-lg bg-purple-900/20 border border-purple-900/50 text-white focus:outline-none focus:border-purple-500 h-32"
          required
        />
      </div>

      <motion.button
        type="submit"
        className="w-full bg-purple-600 text-white py-3 rounded-lg font-semibold flex items-center justify-center gap-2 hover:bg-purple-700 transition-colors"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        <Send size={20} />
        Send Message
      </motion.button>
    </motion.form>
  );
};