import React, { useState } from 'react';
import { motion, } from 'motion/react';
import FaqItem from './FaqItem';

const FaqAccordion = ({ faqs }) => {
    const [openId, setOpenId] = useState(null);

    const handleToggle = (id) => {
        setOpenId(openId === id ? null : id);
    };

    return (
        <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
                duration: .7,
                ease: [0.1, 0.2, 0.4, 1],
            }}
            className='flex flex-col w-full' >
            {
                faqs.map((faq) => (
                    <FaqItem
                        key={faq.id}
                        faq={faq}
                        isOpen={openId === faq.id}
                        onToggle={() => handleToggle(faq.id)}
                    />
                ))
            }
        </motion.div >
    );
};

export default FaqAccordion;