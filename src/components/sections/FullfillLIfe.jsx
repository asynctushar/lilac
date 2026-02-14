"use client";

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { motion, } from 'motion/react';

const MotionLink = motion.create(Link);

const FullfillLIfe = () => {
    return (
        <section className='lg:min-h-[80vh] md:min-h-[40vh]  flex flex-col-reverse md:flex-row overflow-hidden bg-secondary'>
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
                    <h2 className='font-semibold text-3xl md:text-3xl lg:text-4xl xl:text-5xl leading-tight text-primary'>
                        Live with
                        more ease
                    </h2>
                    <p className='text-base sm:text-lg xl:text-xl leading-relaxed'>
                        Anxiety, burnout, or past experiences can make daily life feel heavier than it needs to.
                        <br />
                        <br />
                        Even when you seem functional on the outside, you may be carrying constant tension or worry. Therapy helps you respond differently.
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
                    className='uppercase border-t border-primary px-6 py-4 md:py-3 lg:py-8 font-semibold text-sm sm:text-base flex items-center justify-center gap-2 hover:bg-primary hover:text-background duration-700 transition-colors'
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
                    src="/images/fullfill-life.jpg"
                    alt="Fulfilling life"
                    fill
                    className='object-cover object-center lg:object-bottom'
                    sizes="(max-width: 768px) 100vw, 50vw"
                    loading='lazy'
                />
            </motion.div>
        </section>
    );
};

export default FullfillLIfe;