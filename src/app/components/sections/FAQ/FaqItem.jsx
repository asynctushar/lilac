import React from 'react';

const FaqItem = ({ faq, isOpen, onToggle }) => {
    return (
        <div className='border-t border-foreground last:border-b'>
            <button
                className={`w-full flex items-center justify-between gap-4 sm:gap-6 md:gap-8 py-3 md:py-4 text-left group transition-opacity duration-200 cursor-pointer`}
                onClick={onToggle}
                aria-expanded={isOpen}
            >
                {/* Plus/Minus Icon */}
                <div className={`relative shrink-0 w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 mt-1`}>
                    <span
                        className={`absolute left-0 top-1/2 -translate-y-1/2 h-0.5 w-full bg-foreground/60 transition-all duration-200 ease-in-out`}
                    />
                    <span
                        className={`absolute left-1/2 top-0 -translate-x-1/2 w-0.5 h-full bg-foreground/60 transition-all duration-200 ease-in-out
                            ${isOpen ? "rotate-90" : "rotate-180"}`}
                    />
                </div>

                <p className={`text-xl sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-semibold leading-tight flex-1 pr-2`}>
                    {faq.question}
                </p>
            </button>

            <div
                className={`grid transition-all duration-300 ease-in-out ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                    }`}
            >
                <div className="overflow-hidden">
                    <div className={`pt-2 pb-4 sm:pb-5 md:pb-6 pl-0 gap-4 sm:gap-6 md:gap-8`}>
                        <p className={`text-sm sm:text-base md:text-lg leading-relaxed pr-2`}>
                            {faq.answer}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FaqItem;