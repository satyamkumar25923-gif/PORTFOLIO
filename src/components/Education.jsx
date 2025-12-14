import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, Calendar } from 'lucide-react';

const Education = () => {
    const education = [
        {
            degree: 'Bachelor of Technology',
            field: 'Computer Science Engineering',
            institution: 'Your College Name',
            period: '2024 - 2028',
            cgpa: '8.5 CGPA',
            highlights: [
                'First Year Student',
                'Active member of coding club',
                'Participated in multiple hackathons',
            ]
        },
        {
            degree: 'Higher Secondary',
            field: 'Science (PCM)',
            institution: 'Your School Name',
            period: '2022 - 2024',
            cgpa: '90%',
            highlights: [
                'Scored 90% in board exams',
                'School topper in Computer Science',
                'Won inter-school coding competition',
            ]
        }
    ];

    return (
        <section id="education" className="section-padding">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
            >
                <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
                    My <span className="text-gradient">Education</span>
                </h2>
                <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
                    Academic journey and achievements
                </p>

                <div className="max-w-4xl mx-auto space-y-8">
                    {education.map((edu, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            viewport={{ once: true }}
                            className="glass-card"
                        >
                            <div className="flex flex-col md:flex-row gap-6">
                                <div className="flex-shrink-0">
                                    <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-indigo-600 rounded-xl flex items-center justify-center">
                                        <GraduationCap className="w-8 h-8" />
                                    </div>
                                </div>

                                <div className="flex-grow">
                                    <h3 className="text-2xl font-bold mb-2">{edu.degree}</h3>
                                    <p className="text-xl text-purple-400 mb-3">{edu.field}</p>

                                    <div className="flex flex-wrap gap-4 mb-4 text-gray-400">
                                        <div className="flex items-center gap-2">
                                            <GraduationCap className="w-4 h-4" />
                                            <span>{edu.institution}</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <Calendar className="w-4 h-4" />
                                            <span>{edu.period}</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <Award className="w-4 h-4" />
                                            <span>{edu.cgpa}</span>
                                        </div>
                                    </div>

                                    <ul className="space-y-2">
                                        {edu.highlights.map((highlight, idx) => (
                                            <li key={idx} className="flex items-start gap-2 text-gray-300">
                                                <span className="text-purple-400 mt-1">•</span>
                                                <span>{highlight}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
};

export default Education;
