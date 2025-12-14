import React from 'react';
import { motion } from 'framer-motion';
import { User, BookOpen, Code, Target } from 'lucide-react';

const About = () => {
    const stats = [
        { icon: <BookOpen className="w-6 h-6" />, label: 'Year', value: 'First Year' },
        { icon: <Code className="w-6 h-6" />, label: 'Projects', value: '5+' },
        { icon: <Target className="w-6 h-6" />, label: 'CGPA', value: '8.5' },
    ];

    return (
        <section id="about" className="section-padding">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
            >
                <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
                    About <span className="text-gradient">Me</span>
                </h2>
                <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
                    Get to know more about who I am and what I do
                </p>

                <div className="grid md:grid-cols-2 gap-8 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="glass-card"
                    >
                        <div className="flex items-center gap-3 mb-4">
                            <User className="w-8 h-8 text-purple-400" />
                            <h3 className="text-2xl font-bold">Who I Am</h3>
                        </div>
                        <p className="text-gray-300 leading-relaxed mb-4">
                            I'm a passionate first-year college student pursuing Computer Science.
                            I love building things with code and exploring new technologies.
                        </p>
                        <p className="text-gray-300 leading-relaxed">
                            My journey in programming started in high school, and I've been constantly
                            learning and improving my skills ever since. I'm particularly interested in
                            web development, AI/ML, and mobile app development.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        viewport={{ once: true }}
                        className="grid grid-cols-1 gap-4"
                    >
                        {stats.map((stat, index) => (
                            <motion.div
                                key={index}
                                whileHover={{ scale: 1.05 }}
                                className="glass-card flex items-center gap-4"
                            >
                                <div className="p-3 bg-gradient-to-br from-purple-600 to-indigo-600 rounded-lg">
                                    {stat.icon}
                                </div>
                                <div>
                                    <p className="text-gray-400 text-sm">{stat.label}</p>
                                    <p className="text-2xl font-bold">{stat.value}</p>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </motion.div>
        </section>
    );
};

export default About;
