'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion, } from 'motion/react';
import React from 'react';

const MotionLink = motion(Link);

const Hero = () => {
    return (
        <section className='px-8 sm:px-12 md:px-8 lg:px-24 xl:px-20 md:min-h-[calc(100vh-80px)] lg:h-auto flex flex-col md:flex-row gap-8 md:gap-4 lg:gap-0 items-center pt-8 lg:pt-12 pb-24 md:pb-0'>
            <motion.div
                initial={{ y: 100, opacity: 0 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                    duration: 1,
                    ease: [0.1, 0.2, 0.4, 1],
                }}
                className='w-7/12 sm:w-5/12 md:w-1/2 overflow-hidden'>
                <Image loading='lazy' src="/images/hero.webp" width={600} height={600} className='rounded-t-full md:w-10/12 xl:w-auto' />
            </motion.div>
            <div className='w-full md:w-1/2 flex flex-col items-center justify-center gap-8 md:gap-6 lg:gap-8 xl:gap-12 xl:pb-24'>
                <motion.h1
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                        duration: 0.5,
                        ease: [0.4, 0, 0.2, 1],
                    }}
                    className='font-semibold text-5xl md:text-6xl xl:text-8xl'>Live your life <br />
                    in full bloom</motion.h1>
                <motion.h5
                    initial={{ y: 5, opacity: 0 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                        duration: 0.5,
                        ease: [0.4, 0, 0.2, 1],
                    }}
                    className='text-xl xl:text-2xl'>Therapy for Adults in Minneapolis, MN.</motion.h5>
                <MotionLink
                    href="/#cta"
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
                    className='uppercase border border-foreground px-6 py-2 font-semibold flex items-center justify-center gap-2 hover:bg-foreground hover:text-background duration-700'
                >
                    Connect With Me
                    <span className="-translate-y-0.5">→</span>
                </MotionLink>

            </div>
        </section>
    );
};

export default Hero;