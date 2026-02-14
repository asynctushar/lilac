"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { motion, } from 'motion/react';


const Header = () => {
    const [open, setOpen] = useState(false);
    const headerRef = useRef(null);
    const [headerHeight, setHeaderHeight] = useState(0);
    const [hidden, setHidden] = useState(false);
    const lastScrollY = useRef(0);

    useEffect(() => {
        document.body.style.overflow = open ? "hidden" : "";
    }, [open]);


    useEffect(() => {
        if (headerRef.current) {
            setHeaderHeight(headerRef.current.offsetHeight);
        }
    }, []);



    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            // Ignore very small scrolls
            if (Math.abs(currentScrollY - lastScrollY.current) < 5) return;

            if (currentScrollY > lastScrollY.current && currentScrollY > 80) {
                // scrolling down
                setHidden(true);
            } else {
                // scrolling up
                setHidden(false);
            }

            lastScrollY.current = currentScrollY;
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);


    return (
        <>
            <motion.header
                ref={headerRef}
                initial={{ y: 5, opacity: 0 }}
                animate={{
                    y: hidden ? "-100%" : 0,
                    opacity: 1,
                }}
                transition={{
                    duration: 0.4,
                    ease: [0.4, 0, 0.2, 1],
                }}
                className="fixed top-0 left-0 right-0 z-50 bg-background"
            >
                <div className="px-8 sm:px-12 md:px-8 lg:px-24 h-20 sm:h-28 md:h-20 flex items-center justify-between">
                    {/* Hamburger */}
                    <button
                        onClick={() => setOpen(!open)}
                        className="md:hidden relative w-8 h-8 cursor-pointer"
                        aria-label="Toggle menu"
                    >
                        {/* Top line */}
                        <span
                            className={`absolute left-0 top-1/2 h-0.5 w-full bg-foreground/60 transition-transform duration-300 ease-out
    ${open ? "-rotate-135" : "-translate-y-1.5"}`}
                        />

                        {/* Bottom line */}
                        <span
                            className={`absolute left-0 top-1/2 h-0.5 w-full bg-foreground/60 transition-transform duration-300 ease-out
    ${open ? "rotate-135" : "translate-y-1.5"}`}
                        />
                    </button>


                    {/* Logo */}
                    <Link
                        href="/"
                        className="font-semibold text-lg md:text-2xl lg:text-3xl"
                    >
                        Dr. Maya Reynolds
                    </Link>

                    {/* Desktop nav */}
                    <nav className="hidden md:flex gap-14 text-xl">
                        <Link href="/#blogs">Blog</Link>
                        <Link href="/#contact">Contact</Link>
                    </nav>
                </div>
            </motion.header>

            {/* Mobile Menu Overlay */}
            <motion.div
                initial={false}
                animate={{
                    opacity: open ? 1 : 0,
                    y: open ? 0 : 20,
                }}
                transition={{
                    duration: 0.4,
                    ease: [0.4, 0, 0.2, 1],
                }}
                style={{
                    top: headerHeight,
                    height: `calc(100vh - ${headerHeight}px)`,
                    pointerEvents: open ? "auto" : "none",
                }}
                className="fixed left-0 right-0 z-40 bg-background flex flex-col items-center justify-center gap-6 text-4xl font-medium"
            >


                <Link href="/blogs" onClick={() => setOpen(false)}>
                    Blog
                </Link>
                <Link href="/contact" onClick={() => setOpen(false)}>
                    Contact
                </Link>
            </motion.div>
        </>
    );
};

export default Header;
