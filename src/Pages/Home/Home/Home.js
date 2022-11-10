import React from 'react';
import AboutUs from '../AboutUs/AboutUs';
import Banner from '../Banner/Banner';
import ContactUs from '../ContactUs/ContactUs';
import ServicesHome from '../ServicesHome/ServicesHome';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <AboutUs></AboutUs>
            <ServicesHome></ServicesHome>
            <ContactUs></ContactUs>
        </div>
    );
};

export default Home;