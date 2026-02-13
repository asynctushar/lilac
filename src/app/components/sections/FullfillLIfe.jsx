"use client";

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { motion, } from 'motion/react';

const MotionLink = motion(Link);

const FullfillLIfe = () => {
    return (
        <section className='lg:min-h-[80vh] md:min-h-[40vh]  flex flex-col-reverse md:flex-row overflow-hidden bg-primary'>
            {/* Content Section */}
            <div className='flex flex-col w-full md:w-1/2'>
                <motion.article
                    initial={{ y: 50, opacity: 0 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                        duration: 0.7,
                        ease: [0.1, 0.2, 0.4, 1],
                    }}
                    className='px-6 sm:px-8 md:px-10 lg:px-16 xl:px-24 py-8 sm:py-10 md:py-12 lg:py-16 flex flex-col justify-center gap-4 sm:gap-6 md:gap-6 lg:gap-8 flex-1'>
                    <h2 className='font-semibold text-2xl sm:text-3xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl leading-tight'>
                        Live a fulfilling life.
                    </h2>
                    <p className='text-base sm:text-lg md:text-base lg:text-xl xl:text-2xl leading-relaxed'>
                        Life can be challenging—especially when you're trying to balance your personal and professional life.
                        <br />
                        <br />
                        It's easy to feel like you're alone in facing these challenges, but I want you to know that I'm here to help.
                    </p>
                </motion.article>
                <MotionLink
                    initial={{ y: 10, opacity: 0 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                        duration: 0.7,
                        ease: [0.1, 0.2, 0.4, 1],
                    }}
                    href="/#cta"
                    className='uppercase border-t border-foreground px-6 py-4 md:py-3 lg:py-8 font-semibold text-sm sm:text-base flex items-center justify-center gap-2 hover:bg-foreground hover:text-background duration-700 transition-colors'
                >
                    Get In Touch <span className='-translate-y-0.5'>&#8594;</span>
                </MotionLink>
            </div>
            <motion.div
                initial={{ y: 100, opacity: 0 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                    duration: 1,
                    ease: [0.1, 0.2, 0.4, 1],
                }}
                className='w-full md:w-1/2 relative h-64 sm:h-80 md:h-auto'>
                <Image
                    src="/images/fullfill.webp"
                    alt="Fulfilling life"
                    fill
                    className='object-cover object-center md:object-[center_20%] lg:object-[center_30%]'
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority
                />
            </motion.div>
        </section>
    );
};

export default FullfillLIfe;