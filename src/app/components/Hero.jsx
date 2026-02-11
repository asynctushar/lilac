import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Hero = () => {
    return (
        <section className='px-8 sm:px-12 md:px-8 lg:px-24 xl:px-20 md:h-[calc(100vh-80px)] lg:h-auto flex flex-col md:flex-row gap-8 md:gap-4 lg:gap-0 items-center pt-8 lg:pt-12'>
            <div className='w-7/12 sm:w-5/12 md:w-1/2 overflow-hidden'>
                <Image src="/images/hero.webp" width={600} height={600} className='rounded-t-full md:w-10/12 xl:w-auto' />
            </div>
            <div className='w-full md:w-1/2 flex flex-col items-center justify-center gap-8 md:gap-6 lg:gap-8 xl:gap-12 xl:pb-24'>
                <h1 className='font-semibold text-5xl md:text-6xl xl:text-8xl'>Live your life <br />
                    in full bloom</h1>
                <h5 className='text-xl xl:text-2xl'>Therapy for Adults in Minneapolis, MN.</h5>
                <Link href="/#cta" className='uppercase border border-foreground px-6 py-2 font-semibold flex items-center justify-center gap-2 hover:bg-foreground hover:text-background duration-700'>Connect With Me <span className='-translate-y-0.5'>&#8594;</span></Link>
            </div>
        </section>
    );
};

export default Hero;