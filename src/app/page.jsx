import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './components/Hero';
import FullfillLIfe from './components/FullfillLIfe';
import Specialities from './components/Specialities';

const Home = () => {
    return (
        <>
            <Header />
            <main className="pt-20 sm:pt-28 md:pt-20">
                <Hero />
                <FullfillLIfe />
                <Specialities />
            </main>
            <Footer />
        </>
    );
};

export default Home;;