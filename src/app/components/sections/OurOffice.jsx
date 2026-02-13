'use client';

import React, { useState } from 'react';
import { MapPin, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const OurOffice = () => {
    const [selectedImage, setSelectedImage] = useState(null);

    const officeImages = [
        {
            id: 1,
            url: '/images/office1.jpeg',
            alt: 'Calm therapy office with natural light'
        },
        {
            id: 2,
            url: '/images/office2.jpeg',
            alt: 'Comfortable seating area in therapy office'
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: [0.22, 1, 0.36, 1]
            }
        }
    };

    const imageVariants = {
        hidden: { opacity: 0, x: 30 },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.7,
                ease: [0.22, 1, 0.36, 1]
            }
        }
    };

    return (
        <section className="min-h-screen flex items-center px-6 py-16 bg-linear-to-br from-primary/30 via-background to-primary/20">
            <div className="px-8 sm:px-12 md:px-8 lg:px-24 xl:px-20">
                <div className="grid lg:grid-cols-2 gap-12 items-center">

                    {/* Left: Content */}
                    <motion.div
                        className="space-y-6"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                    >
                        <motion.h2
                            className="text-4xl lg:text-5xl font-semibold  text-foreground"
                            variants={itemVariants}
                        >
                            A Calm Space for Healing
                        </motion.h2>

                        <motion.p
                            className="text-base md:text-lg leading-relaxed"
                            variants={itemVariants}
                        >
                            My Santa Monica office is designed to be a quiet, grounding sanctuary.
                            Every detail—from the natural light to the comfortable environment—is
                            thoughtfully chosen to help you feel safe and at ease.
                        </motion.p>

                        <motion.div
                            className="flex items-start gap-4 pt-4"
                            variants={itemVariants}
                        >
                            <div className="w-12 h-12 rounded-full bg-linear-to-br from-accent to-dark-accent flex items-center justify-center shrink-0">
                                <MapPin className="w-6 h-6 text-background" />
                            </div>
                            <div>
                                <p className="text-foreground font-medium mb-1">123th Street 45 W</p>
                                <p className="text-foreground/90">Santa Monica, CA 90401</p>
                                <p className="text-sm text-foreground/80 mt-2">
                                    In-person & telehealth sessions available
                                </p>
                            </div>
                        </motion.div>

                        <motion.div
                            className="border-l-4 border-accent bg-background/80 backdrop-blur rounded-r-xl p-6 mt-8 shadow-sm"
                            variants={itemVariants}
                        >
                            <p className="text-foreground/90 text-base md:text-lg leading-relaxed italic">
                                "Clients often share that the space itself helps them feel more at ease.
                                It's designed to be a place where you can slow down and feel truly present."
                            </p>
                            <p className="text-sm text-foreground/80 mt-3">— Dr. Maya Reynolds</p>
                        </motion.div>
                    </motion.div>

                    {/* Right: Image Gallery */}
                    <motion.div
                        className="grid grid-cols-2 gap-4"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={containerVariants}
                    >
                        {officeImages.map((image, index) => (
                            <motion.div
                                key={image.id}
                                className="group relative overflow-hidden rounded-2xl shadow-lg cursor-pointer"
                                variants={imageVariants}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.98 }}
                                transition={{
                                    duration: 0.5,
                                    ease: [0.22, 1, 0.36, 1]
                                }}
                                onClick={() => setSelectedImage(image)}
                            >
                                <div className="aspect-3/4 bg-foreground/20 relative">
                                    <motion.img
                                        src={image.url}
                                        alt={image.alt}
                                        className="w-full h-full object-cover"
                                        whileHover={{ scale: 1.1 }}
                                        transition={{ duration: 0.7 }}
                                    />

                                    {/* Hover Overlay */}
                                    <motion.div
                                        className="absolute inset-0 bg-linear-to-t from-foreground/30 via-transparent to-transparent flex items-end justify-center pb-6"
                                        initial={{ opacity: 0 }}
                                        whileHover={{ opacity: 1 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <motion.span
                                            className="text-background text-sm font-light"
                                            initial={{ y: 16 }}
                                            whileHover={{ y: 0 }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            Click to enlarge
                                        </motion.span>
                                    </motion.div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>

                </div>
            </div>

            {/* Lightbox Modal */}
            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        onClick={() => setSelectedImage(null)}
                    >
                        <motion.button
                            className="absolute top-6 right-6 w-12 h-12 rounded-full bg-foreground/10 hover:bg-foreground/20 flex items-center justify-center transition-colors duration-300 cursor-pointer"
                            onClick={() => setSelectedImage(null)}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            <X className="w-6 h-6 text-background" />
                        </motion.button>

                        <motion.div
                            className="max-w-4xl w-full"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            transition={{
                                duration: 0.4,
                                ease: [0.22, 1, 0.36, 1]
                            }}
                        >
                            <img
                                src={selectedImage.url}
                                alt={selectedImage.alt}
                                className="w-full h-auto rounded-2xl shadow-2xl"
                                onClick={(e) => e.stopPropagation()}
                            />
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default OurOffice;