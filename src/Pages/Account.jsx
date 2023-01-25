import React from 'react';
import SavedShows from '../Components/SavedShows';
import { Helmet } from 'react-helmet';

const Account = () => {
    return (
        <>
            <div>
                <Helmet>
                    <title>
                        My Account
                    </title>
                </Helmet>

                <div className='w-full text-white'>
                    <img
                        className='w-full h-[400px] object-cover'
                        src='https://assets.nflxext.com/ffe/siteui/vlv3/e451379a-dd0a-4657-b530-4ca4c0cb2aee/47b1c652-9560-45aa-b819-408166c84e18/PK-en-20230123-popsignuptwoweeks-perspective_alpha_website_medium.jpg'
                        alt='/'
                    />
                    <div className='bg-black/60 fixed top-0 left-0 w-full h-[550px]'></div>
                    <div className='absolute top-[20%] p-4 md:p-8'>
                        <h1 className='text-3xl md:text-5xl font-bold'>My Shows</h1>
                    </div>
                </div>
            </div>
            <SavedShows />
        </>
    );
};

export default Account;