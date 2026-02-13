import Image from 'next/image';
import React from 'react';

const specialities = [
    {
        id: 1,
        title: "Self-Esteem",
        description: "Building a strong sense of self-worth is key to living a fulfilled life. Let's work together to bolster your self-esteem.",
        picture: "/images/self-esteem.webp"
    },
    {
        id: 2,
        title: "Relationships",
        description: "Navigating relationships can be complex. I'm here to guide you through these complexities to help you form healthier connections.",
        picture: "/images/relationships.webp"
    },
    {
        id: 3,
        title: "Burnout",
        description: "Feeling overwhelmed by your career is more common than you think. Together, we'll identify strategies to manage and prevent burnout.",
        picture: "/images/burnout.webp"
    }
];

const Specialities = () => {
    return (
        <section className='px-6 sm:px-8 md:px-10 lg:px-16 xl:px-24 py-12 sm:py-14 md:py-16 lg:py-20 xl:py-24'>
            <h2 className='font-semibold text-center text-2xl sm:text-3xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl leading-tight pb-8 sm:pb-10 md:pb-12 lg:pb-16'>
                My Specialties
            </h2>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
                {specialities.map((item) => (
                    <div
                        key={item.id}
                        className='border border-foreground bg-primary p-6 sm:p-7 md:p-6 lg:p-8 flex flex-col gap-6 sm:gap-8 md:gap-6 lg:gap-8 xl:gap-10'
                    >
                        <h4 className='font-medium text-xl sm:text-2xl md:text-xl lg:text-2xl xl:text-3xl'>
                            {item.title}
                        </h4>
                        <p className='text-sm sm:text-base md:text-sm lg:text-base xl:text-lg leading-relaxed flex-1'>
                            {item.description}
                        </p>
                        <div className='overflow-hidden mt-auto w-3/4 sm:w-2/3 md:w-3/4 lg:w-2/3 xl:w-3/4 mx-auto'>
                            <div className='relative w-full aspect-square rounded-full overflow-hidden'>
                                <Image
                                    src={item.picture}
                                    alt={item.title}
                                    fill
                                    className='object-bottom'
                                    sizes="(max-width: 768px) 75vw, (max-width: 1024px) 33vw, 25vw"
                                />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Specialities;