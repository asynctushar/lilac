import Image from 'next/image';
import Link from 'next/link';
import React from 'react';


const WorkWithMe = () => {
    return (
        <section className='lg:h-[80vh] md:h-[40vh] flex flex-col md:flex-row overflow-hidden bg-accent'>

            <div className='w-full md:w-1/2 relative h-64 sm:h-80 md:h-auto'>
                <Image
                    src="/images/work-with-me.webp"
                    alt="work with me"
                    fill
                    className='object-cover object-center md:object-[center_20%] lg:object-[center_30%]'
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority
                />
            </div>
            {/* Content Section */}
            <div className='flex flex-col w-full md:w-1/2'>
                <article className='px-6 sm:px-8 md:px-10 lg:px-16 xl:px-24 py-8 sm:py-10 md:py-12 lg:py-16 flex flex-col justify-center gap-4 sm:gap-6 md:gap-6 lg:gap-8 flex-1'>
                    <h2 className='font-semibold text-2xl sm:text-3xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl leading-tight'>
                        You don't have to do this all alone.
                    </h2>
                    <p className='text-base sm:text-lg md:text-base lg:text-xl xl:text-2xl leading-relaxed'>
                        If you are facing any of these, there's hope:
                        <br />
                        <br />
                        <ul className='list-disc ps-12'>
                            <li>
                                Persistent feelings of sadness or hopelessness
                            </li>
                            <li>
                                Trouble focusing or making decisions
                            </li>
                            <li>
                                Difficulty maintaining relationships
                            </li>
                            <li>
                                Feeling constantly exhausted or unmotivated
                            </li>
                            <li>
                                A pervasive sense of being overwhelmed
                            </li>
                        </ul>
                        <br />
                        With empathy and guidance, we'll work together to navigate the challenges life throws your way.

                    </p>
                </article>
                <Link
                    href="/#cta"
                    className='uppercase border-t border-foreground px-6 py-4 md:py-3 lg:py-8 font-semibold text-sm sm:text-base flex items-center justify-center gap-2 hover:bg-foreground hover:text-background duration-700 transition-colors'
                >
                    Work With Me <span className='-translate-y-0.5'>&#8594;</span>
                </Link>
            </div>
        </section>
    );
};

export default WorkWithMe;