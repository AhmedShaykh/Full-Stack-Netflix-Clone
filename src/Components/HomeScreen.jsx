import React from 'react';
import Banner from './Banner/Banner';
import Navbar from './Navbar/Navbar';

const HomeScreen = () => {
    return (
        <div className='home-screen'>
            <Navbar />
            <Banner />

            {/* {Rows} */}
        </div>
    )
};

export default HomeScreen;