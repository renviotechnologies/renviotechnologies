'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

export default function WhatsAppMascot() {
    const [isVisible, setIsVisible] = useState(false);
    const [isDismissed, setIsDismissed] = useState(false);

    useEffect(() => {
        // Show mascot after 3 seconds
        const timer = setTimeout(() => {
            if (!isDismissed) {
                setIsVisible(true);
            }
        }, 3000);

        return () => clearTimeout(timer);
    }, [isDismissed]);

    const handleDismiss = () => {
        setIsVisible(false);
        setIsDismissed(true);
    };

    const handleClick = () => {
        window.open('https://wa.me/918527664228?text=Hi! I need help with my marketing needs.', '_blank');
    };

    return (
        <AnimatePresence>
            {isVisible && !isDismissed && (
                <motion.div
                    initial={{ opacity: 0, scale: 0, x: 100 }}
                    animate={{ opacity: 1, scale: 1, x: 0 }}
                    exit={{ opacity: 0, scale: 0, x: 100 }}
                    transition={{ type: 'spring', stiffness: 260, damping: 20 }}
                    className="fixed bottom-32 right-6 z-40 cursor-pointer"
                    onClick={handleClick}
                >
                    {/* Speech Bubble */}
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="absolute bottom-full right-0 mb-4 bg-white rounded-lg shadow-xl p-4 max-w-[200px] group-hover:shadow-2xl transition-shadow"
                    >
                        <button
                            onClick={(e) => {
                                e.stopPropagation();
                                handleDismiss();
                            }}
                            className="absolute -top-2 -right-2 bg-gray-200 hover:bg-gray-300 rounded-full p-1 transition-colors"
                        >
                            <X className="w-3 h-3 text-gray-600" />
                        </button>
                        <p className="text-sm font-medium text-kestone-black">
                            👋 Need help? Click here to chat with us!
                        </p>
                        {/* Speech bubble arrow */}
                        <div className="absolute -bottom-2 right-8 w-4 h-4 bg-white transform rotate-45" />
                    </motion.div>

                    {/* Mascot Character */}
                    <motion.div
                        animate={{
                            y: [0, -10, 0],
                        }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: 'easeInOut'
                        }}
                        className="relative"
                    >
                        <motion.img
                            src="/mascot.png"
                            alt="Help Mascot"
                            className="w-32 h-32 object-contain drop-shadow-2xl"
                            animate={{
                                rotate: [-5, 5, -5],
                            }}
                            transition={{
                                duration: 3,
                                repeat: Infinity,
                                ease: 'easeInOut'
                            }}
                        />

                        {/* Glow effect */}
                        <motion.div
                            className="absolute inset-0 bg-blue-400 rounded-full blur-xl opacity-30"
                            animate={{
                                scale: [1, 1.2, 1],
                                opacity: [0.3, 0.5, 0.3],
                            }}
                            transition={{
                                duration: 2,
                                repeat: Infinity,
                                ease: 'easeInOut'
                            }}
                        />
                    </motion.div>

                    {/* Sparkle effects */}
                    <motion.div
                        className="absolute top-0 right-0 text-2xl"
                        animate={{
                            scale: [0, 1, 0],
                            rotate: [0, 180, 360],
                        }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: 'easeInOut',
                            delay: 0.5
                        }}
                    >
                        ✨
                    </motion.div>
                    <motion.div
                        className="absolute bottom-0 left-0 text-xl"
                        animate={{
                            scale: [0, 1, 0],
                            rotate: [0, -180, -360],
                        }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: 'easeInOut',
                            delay: 1
                        }}
                    >
                        ⭐
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
