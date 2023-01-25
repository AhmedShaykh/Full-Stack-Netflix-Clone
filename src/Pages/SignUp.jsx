import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const SignUp = () => {
    return (
        <>
            <div className='w-full h-screen'>
                <img
                    className='hidden sm:block absolute w-full h-full object-cover'
                    src='https://assets.nflxext.com/ffe/siteui/vlv3/e451379a-dd0a-4657-b530-4ca4c0cb2aee/47b1c652-9560-45aa-b819-408166c84e18/PK-en-20230123-popsignuptwoweeks-perspective_alpha_website_medium.jpg'
                    alt='/'
                />
                <div className='bg-black/60 fixed top-0 left-0 w-full h-screen'></div>
                <div className='fixed w-full px-4 py-20 z-50'>
                    <div className='max-w-[450px] h-[500px] mx-auto bg-black/75 text-white'>
                        <div className='max-w-[320px] mx-auto py-16'>
                            <h1 className='text-3xl font-bold'>Sign Up</h1>
                            <form
                                // onSubmit={handleSubmit}
                                className='w-full flex flex-col py-4'
                            >
                                <input
                                    // onChange={(e) => setEmail(e.target.value)}
                                    className='p-3 my-2 bg-gray-700 rouded'
                                    type='email'
                                    placeholder='Email'
                                    autoComplete='email'
                                />
                                <input
                                    // onChange={(e) => setPassword(e.target.value)}
                                    className='p-3 my-2 bg-gray-700 rouded'
                                    type='password'
                                    placeholder='Password'
                                    autoComplete='current-password'
                                />
                                <button className='bg-red-600 py-3 my-6 rounded font-bold'>
                                    Sign Up
                                </button>
                                <div className='flex justify-between items-center text-sm text-gray-600'>
                                    <p>
                                        <input className='mr-2' type='checkbox' />
                                        Remember me
                                    </p>
                                    <p>Need Help?</p>
                                </div>
                                <p className='py-8'>
                                    <span className='text-gray-600'>
                                        Already subscribed to Netflix?
                                    </span>{' '}
                                    <Link to='/login'>Sign In</Link>
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};

export default SignUp;