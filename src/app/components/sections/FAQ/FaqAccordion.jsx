"use client";

import React, { useState } from 'react';
import FaqItem from './FaqItem';

const FaqAccordion = ({ faqs }) => {
    const [openId, setOpenId] = useState(null);

    const handleToggle = (id) => {
        setOpenId(openId === id ? null : id);
    };

    return (
        <div className='flex flex-col w-full'>
            {faqs.map((faq) => (
                <FaqItem 
                    key={faq.id} 
                    faq={faq} 
                    isOpen={openId === faq.id}
                    onToggle={() => handleToggle(faq.id)}
                />
            ))}
        </div>
    );
};

export default FaqAccordion;