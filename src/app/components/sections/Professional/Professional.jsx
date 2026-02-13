import React from 'react';
import ProfessionalAccordion from './ProfessionalAccordion';

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
        <section className='px-6 sm:px-8 md:px-10 lg:px-16 xl:px-24 2xl:px-32 flex flex-col gap-8 sm:gap-12 py-12 sm:py-16 md:py-20 lg:py-24 items-center'>
            <h2 className='text-2xl xl:text-4xl 2xl:text-5xl font-semibold text-center'>
                My Professional Background
            </h2>
            <div className='w-full md:w-1/2 mx-auto'>
                <ProfessionalAccordion professions={professions} />
            </div>
        </section>
    );
};

export default Professional;