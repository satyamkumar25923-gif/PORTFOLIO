import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
    const skillCategories = [
        {
            title: 'Languages',
            skills: [
                { name: 'Python', level: 40 },
                { name: 'JavaScript', level: 70 },
                { name: 'Java', level: 0 },
                { name: 'C++', level: 0 },
            ]
        },
        {
            title: 'Web Development',
            skills: [
                { name: 'React', level: 30 },
                { name: 'HTML/CSS', level: 90 },
                { name: 'Node.js', level: 0 },
                { name: 'MongoDB', level: 0 },
            ]
        },
        {
            title: 'Tools & Others',
            skills: [
                { name: 'Git/GitHub', level: 50 },
                { name: 'VS Code', level: 70 },
                { name: 'Figma', level: 40 },
                { name: 'Linux', level: 0 },
            ]
        }
    ];

    return (
        <section id="skills" className="section-padding bg-black/20">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
            >
                <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
                    My <span className="text-gradient">Skills</span>
                </h2>
                <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
                    Technologies and tools I've been working with
                </p>

                <div className="grid md:grid-cols-3 gap-8">
                    {skillCategories.map((category, categoryIndex) => (
                        <motion.div
                            key={categoryIndex}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: categoryIndex * 0.2 }}
                            viewport={{ once: true }}
                            className="glass-card"
                        >
                            <h3 className="text-2xl font-bold mb-6 text-purple-400">
                                {category.title}
                            </h3>
                            <div className="space-y-4">
                                {category.skills.map((skill, skillIndex) => (
                                    <div key={skillIndex}>
                                        <div className="flex justify-between mb-2">
                                            <span className="text-gray-300">{skill.name}</span>
                                            <span className="text-gray-400">{skill.level}%</span>
                                        </div>
                                        <div className="w-full bg-gray-700/50 rounded-full h-2 overflow-hidden">
                                            <motion.div
                                                initial={{ width: 0 }}
                                                whileInView={{ width: `${skill.level}%` }}
                                                transition={{ duration: 1, delay: categoryIndex * 0.2 + skillIndex * 0.1 }}
                                                viewport={{ once: true }}
                                                className="h-full bg-gradient-to-r from-purple-600 to-indigo-600 rounded-full"
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
};

export default Skills;
