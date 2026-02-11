import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './components/Hero';
import FullfillLIfe from './components/FullfillLIfe';
import Specialities from './components/Specialities';
import WorkWithMe from './components/WorkWithMe';

const Home = () => {
    return (
        <>
            <Header />
            <main className="pt-20 sm:pt-28 md:pt-20">
                <Hero />
                <FullfillLIfe />
                <Specialities />
                <WorkWithMe />
            </main>
            <Footer />
        </>
    );
};

export default Home;;