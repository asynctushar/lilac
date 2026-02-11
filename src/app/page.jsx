import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './components/Hero';
import FullfillLIfe from './components/FullfillLIfe';

const Home = () => {
    return (
        <>
            <Header />
            <main>
                <Hero />
                <FullfillLIfe />
            </main>
            <Footer />
        </>
    );
};

export default Home;