import Link from 'next/link';
import React from 'react';

const Address = () => {
    return (
        <section className='px-6 sm:px-8 md:px-10 lg:px-16 xl:px-24 2xl:px-32 flex flex-col gap-12 sm:gap-24 py-16 sm:py-16 md:py-20 lg:py-24 items-center md:flex-row md:items-start font-medium text-xl'>
            {/* Contact Information */}
            <div className='w-full md:w-1/2 flex flex-col gap-8 items-center text-center md:items-start md:text-left'>
                <h2 className='text-3xl xl:text-4xl 2xl:text-5xl font-semibold'>
                    Lilac Template
                </h2>
                <address className='not-italic flex flex-col gap-1'>
                    <span>123 Example Road</span>
                    <span>Minneapolis, MN</span>
                </address>
                <ul className='flex flex-col gap-2 list-none'>
                    <li>
                        <a
                            href="mailto:email@example.com"
                            className='border-b inline-block pb-0.5'
                        >
                            email@example.com
                        </a>
                    </li>
                    <li>

                        <a
                            href="tel:+15555555555"
                            className='border-b inline-block pb-0.5'
                        >
                            (555) 555-5555
                        </a>
                    </li>
                </ul>
            </div>

            {/* Hours and Navigation */}
            <div className='flex flex-col md:flex-row w-full md:w-1/2 gap-12 md:justify-between'>
                {/* Hours */}
                <div className='flex flex-col gap-8 text-center md:text-left'>
                    <h2 className='text-3xl xl:text-4xl 2xl:text-5xl font-medium'>
                        Hours
                    </h2>
                    <div className='flex flex-col gap-1'>
                        <p>Monday - Friday</p>
                        <p>10am - 6pm</p>
                    </div>
                </div>

                {/* Navigation */}
                <nav className='flex flex-col gap-8 text-center md:text-right' aria-label="Footer navigation">
                    <h2 className='text-3xl xl:text-4xl 2xl:text-5xl font-medium'>
                        Find
                    </h2>
                    <ul className='flex flex-col gap-2 list-none'>
                        <li>
                            <Link className='border-b  inline-block' href="/">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link className='border-b inline-block' href="/#contact">
                                Contact
                            </Link>
                        </li>
                        <li>
                            <Link className='border-b inline-block' href="/#blogs">
                                Blog
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </section >
    );
};

export default Address;