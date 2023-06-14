import React from 'react';

const Input = () => {
    return (
        <div className="relative">
            <label className="px-1 text-lg text-white">
                Email
            </label>

            <input
                type="email"
                className="block rounded-md px-3 py-3 my-3 w-full text-md text-white 
                bg-neutral-900 appearance-none focus:outline-none focus:ring-0 peer"
                placeholder=""
            />
        </div>
    )
};

export default Input;