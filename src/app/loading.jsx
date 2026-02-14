'use client';

import React from 'react';
import { motion } from 'framer-motion';

const Loading = () => {
    return (
        <div className="min-h-[calc(100vh-80px)] max-h-[calc(100vh-80px)] flex items-center justify-center bg-background">
            <div className="relative">
                <motion.div
                    className="w-8 h-8 rounded-full border-3 border-primary border-t-dark-accent"
                    animate={{
                        rotate: 360
                    }}
                    transition={{
                        duration: .8,
                        ease: "linear",
                        repeat: Infinity
                    }}
                />
            </div>
        </div>
    );
};

export default Loading;