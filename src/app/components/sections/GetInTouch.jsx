'use client';

import Link from 'next/link';
import React from 'react';
import { motion, } from 'motion/react';

const MotionLink = motion(Link);

const GetInTouch = () => {
    return (
        <section className='px-6 sm:px-8 md:px-10 lg:px-16 xl:px-24 2xl:px-32 flex flex-col gap-12 sm:gap-24 py-16 sm:py-16 md:py-20 lg:py-24 items-center text-background bg-dark-accent'>
            <div className='space-y-8 md:space-y-12 w-full md:w-2/3 2xl:w-2/3'>
                <motion.h2
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                        duration: 0.5,
                        ease: [0.1, 0.2, 0.4, 1],
                    }}
                    className='text-3xl xl:text-4xl 2xl:text-5xl font-semibold text-center'>
                    Get started today.
                </motion.h2>
                <motion.p
                    initial={{ y: 5, opacity: 0 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                        duration: 0.5,
                        ease: [0.1, 0.2, 0.4, 1],
                    }} className="text-base sm:text-lg xl:text-xl font-medium text-center">
                    Ready to take the first step toward a calmer, more balanced life? <br />
                    Reach out to schedule your first session and begin your therapeutic journey in Santa Monica, CA.
                </motion.p>
            </div>
            <MotionLink
                initial={{ y: 5, opacity: 0 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                    duration: 0.4,
                    ease: [0.1, 0.2, 0.6, 1],
                }}
                href="/#contact" className='uppercase border border-background px-6 py-3 font-semibold flex items-center justify-center gap-2 hover:bg-background hover:text-dark-accent duration-700'>Get In Touch <span className='-translate-y-0.5'>&#8594;</span></MotionLink>
        </section>
    );
};

export default GetInTouch;