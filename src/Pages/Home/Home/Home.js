import React from 'react';
import Services from '../Services/Services';
import Experts from '../Experts/Experts';
import Banners from '../Banners/Banners';

const Home = () => {
    return (
        <>
            <Banners></Banners>
            <Services></Services>
            <Experts></Experts>
        </>
    );
};

export default Home;