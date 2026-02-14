'use client';

import Image from 'next/image';
import React from 'react';
import { motion, } from 'motion/react';

const specialities = [
    {
        id: 1,
        title: "Anxiety & Panic",
        description: "Constant worry, racing thoughts, or feeling on edge can take a toll. Therapy helps you calm your nervous system and regain control.",
        picture: "/images/anxiety.jpg"
    },
    {
        id: 2,
        title: "Trauma & Past Experiences",
        description: "Earlier life experiences can quietly shape your relationships, confidence, and sense of safety. We’ll gently explore and process them.",
        picture: "/images/trauma.jpg"
    },
    {
        id: 3,
        title: "Burnout & High-Functioning Stress",
        description: "You may appear capable on the outside while feeling exhausted inside. Therapy helps you slow down and respond with more clarity.",
        picture: "/images/burnout.jpg"
    }
];


const Specialities = () => {
    return (
        <section className='px-6 sm:px-8 md:px-10 lg:px-16 xl:px-24 py-12 sm:py-14 md:py-16 lg:py-20 xl:py-24 bg-background'>
            <motion.div
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                    duration: 0.5,
                    ease: [0.1, 0.2, 0.4, 1],
                }}
                className='font-semibold text-center text-3xl md:text-3xl lg:text-4xl xl:text-5xl leading-tight pb-8 sm:pb-10 md:pb-12 lg:pb-16'>
                Areas of Focus
            </motion.div>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
                {specialities.map((item) => (
                    <div
                        key={item.id}
                        className='border border-foreground bg-secondary p-6 sm:p-7 md:p-6 lg:p-8 flex flex-col gap-6 sm:gap-8 md:gap-6 lg:gap-8 xl:gap-10'
                    >
                        <motion.h4
                            initial={{ y: 5, opacity: 0 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{
                                duration: 0.5,
                                ease: [0.1, 0.2, 0.4, 1],
                            }}
                            className='font-medium text-xl sm:text-2xl md:text-xl lg:text-2xl xl:text-3xl'>
                            {item.title}
                        </motion.h4>

                        <motion.p
                            initial={{ y: 5, opacity: 0 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{
                                duration: 0.5,
                                ease: [0.1, 0.2, 0.4, 1],
                            }} className='text-base sm:text-lg leading-relaxed flex-1'>
                            {item.description}
                        </motion.p>
                        <div className='overflow-hidden mt-auto w-3/4 sm:w-2/3 md:w-3/4 lg:w-2/3 xl:w-3/4 mx-auto'>

                            <motion.div
                                initial={{ y: 30, opacity: 0 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{
                                    duration: 0.7,
                                    ease: [0.1, 0.2, 0.4, 1],
                                }} className='relative w-full aspect-square rounded-full overflow-hidden'>
                                <Image
                                    src={item.picture}
                                    alt={item.title}
                                    fill
                                    className='object-cover'
                                    sizes="(max-width: 768px) 75vw, (max-width: 1024px) 33vw, 25vw"
                                />
                            </motion.div>
                        </div>
                    </div>
                ))}
            </div>
        </section >
    );
};

export default Specialities;