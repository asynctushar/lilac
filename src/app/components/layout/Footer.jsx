'use client';

import Link from 'next/link';
import React from 'react';
import { motion, } from 'motion/react';

const Footer = () => {
    return (
        <footer className='bg-primary text-center py-8 px-4'>
            <motion.div
                initial={{ y: 10, opacity: 0 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                    duration: 0.5,
                    ease: [0.1, 0.2, 0.4, 1],
                }}
                className='space-y-6 py-12'>
                <div className='flex flex-wrap gap-4 justify-center'>
                    <Link href="/#policy" className='border-b leading-tight'>Privacy & Cookies Policy</Link>
                    <Link href="/#estimate" className='border-b leading-tight'>Good Faith Estimate</Link>
                    <Link href="/#terms" className='border-b leading-tight'>Website Terms & Conditions</Link>
                    <Link href="/#disclaimer" className='border-b leading-tight'>Disclaimer</Link>
                </div>
                <p>
                    Website Template Credits: <Link href="/#bloom" className='border-b leading-tight'>Go Bloom Creative</Link>
                </p>
            </motion.div>
            <motion.p
                initial={{ y: 10, opacity: 0 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                    duration: 0.5,
                    ease: [0.1, 0.2, 0.4, 1],
                }}
            > All Rights Reserved © 2026 Dr. Maya Reynolds, PsyD.
            </motion.p>
        </footer>
    );
};

export default Footer;