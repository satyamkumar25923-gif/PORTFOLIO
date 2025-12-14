import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ChevronDown } from 'lucide-react';
const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center relative px-4 pt-20">

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center max-w-3xl mx-auto relative"
        style={{ zIndex: 10 }}
      >
        <h2 className="text-xl md:text-2xl text-purple-400 font-medium mb-4">Hello, I'm</h2>
        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-gradient">
          Satyam
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
          First Year College Student & Aspiring Developer
        </p>

        <div className="flex gap-6 justify-center mb-12">
          <motion.a
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            href="https://github.com/satyamkumar25923-gif"
            className="p-3 glass-card hover:bg-white/10 rounded-full"
          >
            <Github className="w-6 h-6" />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            href="https://www.linkedin.com/in/satyam-kumar-0a17312b3?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
            className="p-3 glass-card hover:bg-white/10 rounded-full"
          >
            <Linkedin className="w-6 h-6" />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            href="mailto:satyamkumar25923@gmail.com"
            className="p-3 glass-card hover:bg-white/10 rounded-full"
          >
            <Mail className="w-6 h-6" />
          </motion.a>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 animate-bounce"
      >
        <ChevronDown className="w-8 h-8 text-gray-400" />
      </motion.div>
    </section>
  );
};

export default Hero;
