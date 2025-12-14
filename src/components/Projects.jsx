import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
    const projects = [
        {
            title: 'K Forum',
            description: 'A dynamic social platform focused on student interaction, featuring anonymous confessions, real-time community discussions, and seamless peer-to-peer engagement.',
            tech: ['React', 'Node.js', 'MongoDB', 'Stripe'],
            github: '#',
            live: '#',
            gradient: 'from-purple-600 to-pink-600'
        },
        {
            title: 'Weather App',
            description: 'Real-time weather application that displays current weather conditions and 7-day forecast using OpenWeather API.',
            tech: ['React', 'API Integration', 'CSS'],
            github: '#',
            live: '#',
            gradient: 'from-blue-600 to-cyan-600'
        },
        {
            title: 'Task Manager',
            description: 'A productivity app to manage daily tasks with features like categories, priorities, and deadline reminders.',
            tech: ['JavaScript', 'LocalStorage', 'HTML/CSS'],
            github: '#',
            live: '#',
            gradient: 'from-green-600 to-emerald-600'
        },
        {
            title: 'Portfolio Website',
            description: 'Personal portfolio website showcasing projects, skills, and achievements with modern design and animations.',
            tech: ['React', 'Framer Motion', 'CSS'],
            github: '#',
            live: '#',
            gradient: 'from-orange-600 to-red-600'
        }
    ];

    return (
        <section id="projects" className="section-padding bg-black/20">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
            >
                <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
                    My <span className="text-gradient">Projects</span>
                </h2>
                <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
                    Some of the projects I've worked on
                </p>

                <div className="grid md:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="glass-card group"
                        >
                            <div className={`h-2 w-full bg-gradient-to-r ${project.gradient} rounded-t-2xl -mt-8 mb-6`}></div>

                            <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                            <p className="text-gray-300 mb-4 leading-relaxed">
                                {project.description}
                            </p>

                            <div className="flex flex-wrap gap-2 mb-6">
                                {project.tech.map((tech, idx) => (
                                    <span
                                        key={idx}
                                        className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-sm text-purple-300"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            <div className="flex gap-4">
                                <motion.a
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    href={project.github}
                                    className="flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg transition-all"
                                >
                                    <Github className="w-4 h-4" />
                                    <span>Code</span>
                                </motion.a>
                                <motion.a
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    href={project.live}
                                    className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 rounded-lg transition-all"
                                >
                                    <ExternalLink className="w-4 h-4" />
                                    <span>Live Demo</span>
                                </motion.a>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
};

export default Projects;
