"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const Header = () => {
    const [open, setOpen] = useState(false);
    const headerRef = useRef(null);
    const [headerHeight, setHeaderHeight] = useState(0);

    useEffect(() => {
        document.body.style.overflow = open ? "hidden" : "";
    }, [open]);


    useEffect(() => {
        if (headerRef.current) {
            setHeaderHeight(headerRef.current.offsetHeight);
        }
    }, []);

    return (
        <>
            <header
                ref={headerRef}
                className="sticky top-0 z-50 bg-background"
            >
                <div className="px-8 sm:px-12 md:px-20 h-20 sm:h-28 md:h-20 flex items-center justify-between">
                    {/* Hamburger */}
                    <button
                        onClick={() => setOpen(!open)}
                        className="md:hidden relative w-8 h-8"
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
                        className="font-semibold text-lg md:text-3xl lg:text-4xl"
                    >
                        Lilic Template
                    </Link>

                    {/* Desktop nav */}
                    <nav className="hidden md:flex gap-14 text-2xl">
                        <Link href="/#blogs">Blog</Link>
                        <Link href="/#contact">Contact</Link>
                    </nav>
                </div>
            </header>

            {/* Mobile Menu Overlay */}
            <div
                style={{ top: headerHeight, height: `calc(100vh - ${headerHeight}px)` }}
                className={`fixed left-0 right-0 z-40 bg-background flex flex-col items-center justify-center gap-6 text-4xl font-medium
        transition-opacity duration-300 ease-out
        ${open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
            >
                <Link href="/blogs" onClick={() => setOpen(false)}>
                    Blog
                </Link>
                <Link href="/contact" onClick={() => setOpen(false)}>
                    Contact
                </Link>
            </div>
        </>
    );
};

export default Header;
