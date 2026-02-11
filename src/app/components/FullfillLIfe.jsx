import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const FullfillLIfe = () => {
    return (
        <section className='lg:h-[80vh] md:h-[40vh]  flex flex-col-reverse md:flex-row overflow-hidden bg-primary'>
            {/* Content Section */}
            <div className='flex flex-col w-full md:w-1/2'>
                <article className='px-6 sm:px-8 md:px-10 lg:px-16 xl:px-24 py-8 sm:py-10 md:py-12 lg:py-16 flex flex-col justify-center gap-4 sm:gap-6 md:gap-6 lg:gap-8 flex-1'>
                    <h2 className='font-semibold text-2xl sm:text-3xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl leading-tight'>
                        Live a fulfilling life.
                    </h2>
                    <p className='text-base sm:text-lg md:text-base lg:text-xl xl:text-2xl leading-relaxed'>
                        Life can be challenging—especially when you're trying to balance your personal and professional life.
                        <br className='hidden lg:block' />
                        <br className='hidden lg:block' />
                        It's easy to feel like you're alone in facing these challenges, but I want you to know that I'm here to help.
                    </p>
                </article>
                <Link
                    href="/#cta"
                    className='uppercase border-t border-foreground px-6 py-4 md:py-3 lg:py-8 font-semibold text-sm sm:text-base flex items-center justify-center gap-2 hover:bg-foreground hover:text-background duration-700 transition-colors'
                >
                    Get In Touch <span className='-translate-y-0.5'>&#8594;</span>
                </Link>
            </div>
            <div className='w-full md:w-1/2 relative h-64 sm:h-80 md:h-auto'>
                <Image
                    src="/images/fullfill.webp"
                    alt="Fulfilling life"
                    fill
                    className='object-cover object-center md:object-[center_20%] lg:object-[center_30%]'
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority
                />
            </div>
        </section>
    );
};

export default FullfillLIfe;