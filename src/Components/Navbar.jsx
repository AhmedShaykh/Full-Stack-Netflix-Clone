import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="flex items-center justify-between py-1 px-4 z-[100] w-full absolute">
            <Link to='/'>
                <img className="w-35 h-24 cursor-pointer"
                    src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
                    alt="Netflix Logo" />
            </Link>

            <div>
                <Link to='/login'>
                    <button className="px-6 py-2 rounded cursor-pointer font-bold text-white">Login</button>
                </Link>
                <Link to='/signup'>
                    <button className="bg-red-600 px-6 py-2 rounded font-bold cursor-pointer text-white">Sign Up</button>
                </Link>
            </div>
        </div>
    )
};

export default Navbar;