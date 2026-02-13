import Link from 'next/link';
import React from 'react';

const GetInTouch = () => {
    return (
        <section className='px-6 sm:px-8 md:px-10 lg:px-16 xl:px-24 2xl:px-32 flex flex-col gap-12 sm:gap-24 py-16 sm:py-16 md:py-20 lg:py-24 items-center text-background bg-dark-accent'>
            <div className='space-y-8 md:space-y-12 w-full md:w-2/3 2xl:w-1/3'>
                <h2 className='text-3xl xl:text-4xl 2xl:text-5xl font-semibold text-center'>
                    Get started today.
                </h2>
                <p className="text-xl  font-medium text-center ">
                    Ready to take the first step towards a happier, healthier you?<br />
                    Contact me to book your first session. I look forward to starting this therapeutic journey with you.
                </p>
            </div>
            <Link href="/#contact" className='uppercase border border-background px-6 py-3 font-semibold flex items-center justify-center gap-2 hover:bg-background hover:text-dark-accent duration-700'>Get In Touch <span className='-translate-y-0.5'>&#8594;</span></Link>
        </section>
    );
};

export default GetInTouch;