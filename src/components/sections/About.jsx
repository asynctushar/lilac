'use client';

import { motion, } from 'motion/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const About = () => {
    return (
        <section className='px-8 sm:px-12 md:px-8 lg:px-24 xl:px-20 lg:h-screen h-auto flex flex-col-reverse md:flex-row gap-16 sm:gap-16 py-24 items-center bg-secondary'>

            <motion.div
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                    duration: 1,
                    ease: [0.1, 0.2, 0.4, 1],
                }}
                className='w-full md:w-1/2 flex flex-col items-start justify-center gap-8 md:gap-6 lg:gap-8 xl:gap-12 lg:px-12 xl:px-32'>
                <h2 className='font-semibold text-3xl md:text-3xl lg:text-4xl xl:text-5xl leading-tight'>
                    Hi, I'm Dr. Maya Reynolds.</h2>
                <p className='text-base sm:text-lg xl:text-xl leading-relaxed'>
                    I work with adults navigating anxiety, trauma, and burnout. My approach is warm, collaborative, and grounded in helping you feel safer and more steady in your daily life.
                </p>
                <Link href="/#contact" className='uppercase border border-primary px-6 py-2 font-semibold flex items-center justify-center gap-2 hover:bg-primary hover:text-background duration-700 self-center mt-4 md:mt-12'>Let's Talk <span className='-translate-y-0.5'>&#8594;</span></Link>
            </motion.div>

            <div className='w-full md:w-1/2 relative'>

                <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                        duration: 1,
                        ease: [0.1, 0.2, 0.4, 1],
                    }}
                    className='relative w-1/2 md:w-2/3 xl:w-1/2 mx-auto'>
                    <Image
                        src="/images/Dr-Maya-Reynolds.png"
                        alt="Lilac - Therapist"
                        width={600}
                        height={600}
                        className='rounded-t-full object-cover'
                    />
                    <div className='absolute -bottom-8 sm:-bottom-12 md:-bottom-10 lg:-bottom-12 xl:-bottom-16 -right-8 sm:-right-12 md:-right-10 lg:-right-12 xl:-right-16 w-24 sm:w-32 md:w-28 lg:w-36 xl:w-48 2xl:w-64 aspect-square z-10'>
                        <Image
                            src="/images/office2.jpeg"
                            alt="Lilac"
                            fill
                            className='rounded-full object-cover'
                        />
                    </div>
                </motion.div>
            </div>
        </section >
    );
};

export default About;