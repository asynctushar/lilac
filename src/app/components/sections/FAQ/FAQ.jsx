import Image from 'next/image';
import React from 'react';
import FaqAccordion from './FaqAccordion';

const faqs = [
    {
        id: 1,
        question: "Do you take insurance?",
        answer: "Answer goes here."
    },
    {
        id: 2,
        question: "What are your rates?",
        answer: "Answer goes here."
    },
    {
        id: 3,
        question: "Do you have any openings?",
        answer: "Answer goes here."
    },
];

const FAQ = () => {
    return (
        <section className='px-6 sm:px-8 md:px-10 lg:px-16 xl:px-24 2xl:px-32 lg:min-h-screen min-h-auto flex flex-col md:flex-row gap-12 sm:gap-16 py-12 sm:py-16 md:py-20 lg:py-24 items-center md:items-start'>
            <div className='w-full md:w-1/2'>
                <div className='w-1/2 md:w-10/12 xl:w-8/12 2xl:w-7/12 mx-auto'>
                    <Image
                        src="/images/faq.webp"
                        alt="Lilac - Therapist"
                        width={600}
                        height={600}
                        className='rounded-t-full object-cover'
                    />
                </div>
            </div>

            {/* FAQ Section */}
            <div className='w-full md:w-1/2 flex flex-col self-start md:mt-12 lg:mt-24 xl:mt-12 2xl:mt-24 gap-8 sm:gap-10 md:gap-12'>
                <h2 className='font-semibold text-3xl sm:text-3xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl leading-tight'>
                    FAQs
                </h2>
                <FaqAccordion faqs={faqs} />
            </div>
        </section>
    );
};

export default FAQ;