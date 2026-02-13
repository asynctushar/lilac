import Link from 'next/link';
import React from 'react';

const Footer = () => {
    return (
        <footer className='bg-primary text-center py-8 px-4'>
            <div className='space-y-6 py-12'>
                <div className='flex flex-wrap gap-4 justify-center'>
                    <Link href="/#policy" className='border-b leading-tight'>Privacy & Cookies Policy </Link>
                    <Link href="/#estimate" className='border-b leading-tight'>Good Faith Estimate</Link>
                    <Link href="/#terms " className='border-b leading-tight'>Website Terms & Conditions</Link>
                    <Link href="/#disclaimer" className='border-b leading-tight'>Disclaimer</Link>

                </div>
                <p>
                    Website Template Credits: <Link href="/#bloom" className='border-b leading-tight' >Go Bloom Creative</Link>
                </p>
            </div>
            <p>All Rights Reserved © 2024 Your Business Name Here, LLC.</p>
        </footer>
    );
};

export default Footer;