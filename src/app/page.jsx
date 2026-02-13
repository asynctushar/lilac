import React from 'react';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import FullfillLIfe from './components/sections/FullfillLIfe';
import Specialities from './components/sections/Specialities';
import WorkWithMe from './components/sections/WorkWithMe';
import About from './components/sections/About';
import FAQ from './components/sections/FAQ/FAQ';
import Professional from './components/sections/Professional/Professional';
import GetInTouch from './components/sections/GetInTouch';
import Address from './components/sections/Address';

const Home = () => {
    return (
        <>
            <Header />
            <main className="pt-20 sm:pt-28 md:pt-20">
                <Hero />
                <FullfillLIfe />
                <Specialities />
                <WorkWithMe />
                <About />
                <FAQ />
                <Professional />
                <GetInTouch />
                <Address />
            </main>
            <Footer />
        </>
    );
};

export default Home;;