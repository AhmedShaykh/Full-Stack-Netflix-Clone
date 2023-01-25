import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserAuth } from '../Context/AuthContext';

const Navbar = () => {

    const { user, logOut } = UserAuth();

    const navigate = useNavigate();

    const handleLogout = async () => {
        try {
            await logOut();
            navigate('/login');
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="flex items-center justify-between py-1 lg:px-4 md:px-3 sm:px-2 z-[100] w-full absolute">
            <Link to='/'>
                <img className="w-[95%] h-20 cursor-pointer"
                    src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
                    alt="Netflix Logo" />
            </Link>

            {user?.email ? (
                <div>
                    <Link to='/account'>
                        <button className='text-white font-bold pr-4'>Account</button>
                    </Link>
                    <button
                        onClick={handleLogout}
                        className='bg-red-600 px-4 py-2 font-bold rounded cursor-pointer text-white'
                    >
                        Logout
                    </button>
                </div>
            ) : (
                <div>
                    <Link to='/login'>
                        <button className="px-4 py-2 rounded cursor-pointer font-bold text-white">Login</button>
                    </Link>
                    <Link to='/signup'>
                        <button className="bg-red-600 px-4 py-2 rounded font-bold cursor-pointer text-white">Sign Up</button>
                    </Link>
                </div>
            )}
        </div>
    )
};

export default Navbar;