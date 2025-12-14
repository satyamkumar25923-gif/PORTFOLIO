import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer = () => {
    const socialLinks = [
        { icon: <Github className="w-5 h-5" />, href: '#', label: 'GitHub' },
        { icon: <Linkedin className="w-5 h-5" />, href: '#', label: 'LinkedIn' },
        { icon: <Mail className="w-5 h-5" />, href: 'mailto:contact@example.com', label: 'Email' },
    ];

    return (
        <footer className="bg-black/40 border-t border-white/10 py-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col items-center space-y-6">
                    <div className="flex gap-6">
                        {socialLinks.map((link, index) => (
                            <motion.a
                                key={index}
                                href={link.href}
                                whileHover={{ scale: 1.2, rotate: 5 }}
                                whileTap={{ scale: 0.9 }}
                                className="p-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full transition-all"
                                aria-label={link.label}
                            >
                                {link.icon}
                            </motion.a>
                        ))}
                    </div>

                    <div className="text-center">
                        <p className="text-gray-400 flex items-center gap-2 justify-center">
                            Made with <Heart className="w-4 h-4 text-red-500 fill-red-500" /> by Satyam
                        </p>
                        <p className="text-gray-500 text-sm mt-2">
                            © {new Date().getFullYear()} All rights reserved.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
