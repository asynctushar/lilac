"use client";

import React from 'react';
import ProfessionalAccordion from './ProfessionalAccordion';
import { motion, } from 'motion/react';


const professions = [
    {
        id: 1,
        title: "Education",
        description: "Euphorbia dianthus alchemilla muscari lavandula anthurium artemesia false artemesia moluccella gladiolus cirsium trollius anthurium prunus delphinium achillea."
    },
    {
        id: 2,
        title: "Licensure",
        description: "Euphorbia dianthus alchemilla muscari lavandula anthurium artemesia false artemesia moluccella gladiolus cirsium trollius anthurium prunus delphinium achillea."
    },
    {
        id: 3,
        title: "Certifications",
        description: "Euphorbia dianthus alchemilla muscari lavandula anthurium artemesia false artemesia moluccella gladiolus cirsium trollius anthurium prunus delphinium achillea."
    },
];

const Professional = () => {
    return (
        <section className='px-6 sm:px-8 md:px-10 lg:px-16 xl:px-24 2xl:px-32 flex flex-col gap-8 sm:gap-12 py-12 sm:py-16 md:py-20 lg:py-24 items-center bg-primary'>

            <motion.h2
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                    duration: 0.5,
                    ease: [0.1, 0.2, 0.4, 1],
                }}
                className='text-3xl xl:text-4xl 2xl:text-5xl font-semibold text-center'>
                My Professional Background
            </motion.h2>
            <motion.div
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                    duration: 0.5,
                    ease: [0.1, 0.2, 0.4, 1],
                }}
                className='w-full md:w-1/2 mx-auto'>
                <ProfessionalAccordion professions={professions} />
            </motion.div>
        </section>
    );
};

export default Professional;