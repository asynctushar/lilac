"use client";

import React, { useState } from 'react';
import ProfessionalItem from './ProfessionalItem';

const ProfessionalAccordion = ({ professions }) => {
    const [openId, setOpenId] = useState(null);

    const handleToggle = (id) => {
        setOpenId(openId === id ? null : id);
    };

    return (
        <>
            {professions.map(profession => (
                <ProfessionalItem
                    key={profession.id}
                    profession={profession}
                    isOpen={openId === profession.id}
                    onToggle={() => handleToggle(profession.id)}
                />
            ))}
        </>
    );
};

export default ProfessionalAccordion;